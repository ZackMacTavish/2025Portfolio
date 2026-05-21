/**
 * Cap oversized raster images (> THRESHOLD_BYTES) at MAX_EDGE pixels on the
 * longest edge and regenerate sibling AVIF/WebP files.
 *
 * - Walks src/assets and public/assets recursively.
 * - Only touches files larger than THRESHOLD_BYTES.
 * - Preserves the original extension (PNG stays PNG so transparency is kept).
 * - Always (re)writes matching .avif and .webp siblings using the resized buffer.
 * - Idempotent: re-running it on already-capped files is a no-op except for
 *   refreshing the sibling formats.
 *
 * Usage:  node scripts/cap-large-images.cjs
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const THRESHOLD_BYTES = 1_500_000; // only process > 1.5 MB for capping
const MAX_EDGE = 2400;             // cap longest edge (desktop)
const MOBILE_EDGE = 900;           // longest edge for mobile variant
const AVIF_QUALITY = 50;
const WEBP_QUALITY = 75;
const JPG_QUALITY = 80;

const ROOTS = [
  path.join(__dirname, '..', 'src/assets'),
  path.join(__dirname, '..', 'public/assets'),
];

const RASTER_EXTS = new Set(['.jpg', '.jpeg', '.png']);

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full));
    } else if (entry.isFile() && RASTER_EXTS.has(path.extname(entry.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

function fmt(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  if (bytes >= 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return bytes + ' B';
}

async function processOne(file) {
  const stat = fs.statSync(file);
  const ext = path.extname(file).toLowerCase();
  const dir = path.dirname(file);
  const base = path.basename(file, ext);

  // Skip files that are already mobile variants (avoid recursion).
  if (/-mobile-(600|900)$/i.test(base)) return null;

  const avifPath = path.join(dir, base + '.avif');
  const webpPath = path.join(dir, base + '.webp');

  const meta = await sharp(file, { failOn: 'none' }).metadata();
  const longest = Math.max(meta.width || 0, meta.height || 0);
  const needsDesktopWork = stat.size >= THRESHOLD_BYTES || longest > MAX_EDGE;
  const needsMobileVariant = longest > MOBILE_EDGE;

  if (!needsDesktopWork && !needsMobileVariant) return null;

  const hasAlpha = meta.hasAlpha;
  const ratio = (meta.width || 1) / (meta.height || 1);

  const result = {
    file,
    before: stat.size,
    after: stat.size,
    avif: fs.existsSync(avifPath) ? fs.statSync(avifPath).size : 0,
    webp: fs.existsSync(webpPath) ? fs.statSync(webpPath).size : 0,
    mobile: { raster: 0, avif: 0, webp: 0 },
    dim: `${meta.width}x${meta.height}`,
    didDesktop: needsDesktopWork,
    didMobile: needsMobileVariant,
  };

  // --- Desktop (cap + regenerate siblings) ---
  if (needsDesktopWork) {
    let pipeline = sharp(file, { failOn: 'none' }).rotate();
    if (longest > MAX_EDGE) {
      pipeline = pipeline.resize({
        width: ratio >= 1 ? MAX_EDGE : null,
        height: ratio < 1 ? MAX_EDGE : null,
        withoutEnlargement: true,
        fit: 'inside',
      });
    }
    const resized = await pipeline.toBuffer();

    let fallbackBuffer;
    if (ext === '.png') {
      fallbackBuffer = await sharp(resized)
        .png({ compressionLevel: 9, palette: !hasAlpha, quality: 80 })
        .toBuffer();
    } else {
      fallbackBuffer = await sharp(resized)
        .jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true })
        .toBuffer();
    }
    fs.writeFileSync(file, fallbackBuffer);
    fs.writeFileSync(avifPath, await sharp(resized).avif({ quality: AVIF_QUALITY, effort: 4 }).toBuffer());
    fs.writeFileSync(webpPath, await sharp(resized).webp({ quality: WEBP_QUALITY, effort: 4 }).toBuffer());

    result.after = fs.statSync(file).size;
    result.avif = fs.statSync(avifPath).size;
    result.webp = fs.statSync(webpPath).size;
  }

  // --- Mobile-900 variant (raster + AVIF + WebP) ---
  if (needsMobileVariant) {
    // Re-read the (possibly newly capped) source so we resize from the freshest pixels.
    const mobileBuffer = await sharp(file, { failOn: 'none' })
      .rotate()
      .resize({
        width: ratio >= 1 ? MOBILE_EDGE : null,
        height: ratio < 1 ? MOBILE_EDGE : null,
        withoutEnlargement: true,
        fit: 'inside',
      })
      .toBuffer();

    const mobileRasterPath = path.join(dir, `${base}-mobile-900${ext}`);
    const mobileAvifPath = path.join(dir, `${base}-mobile-900.avif`);
    const mobileWebpPath = path.join(dir, `${base}-mobile-900.webp`);

    let mobileFallback;
    if (ext === '.png') {
      mobileFallback = await sharp(mobileBuffer)
        .png({ compressionLevel: 9, palette: !hasAlpha, quality: 80 })
        .toBuffer();
    } else {
      mobileFallback = await sharp(mobileBuffer)
        .jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true })
        .toBuffer();
    }
    fs.writeFileSync(mobileRasterPath, mobileFallback);
    fs.writeFileSync(mobileAvifPath, await sharp(mobileBuffer).avif({ quality: AVIF_QUALITY, effort: 4 }).toBuffer());
    fs.writeFileSync(mobileWebpPath, await sharp(mobileBuffer).webp({ quality: WEBP_QUALITY, effort: 4 }).toBuffer());

    result.mobile.raster = fs.statSync(mobileRasterPath).size;
    result.mobile.avif = fs.statSync(mobileAvifPath).size;
    result.mobile.webp = fs.statSync(mobileWebpPath).size;
  }

  return result;
}

(async () => {
  const all = ROOTS.flatMap(walk);
  // Process every raster image; processOne decides whether to touch it.
  const candidates = all.filter((f) => {
    const base = path.basename(f, path.extname(f));
    return !/-mobile-(600|900)$/i.test(base);
  });
  candidates.sort((a, b) => fs.statSync(b).size - fs.statSync(a).size);
  console.log(`Scanning ${candidates.length} raster files (max desktop edge ${MAX_EDGE}px, mobile variant edge ${MOBILE_EDGE}px).`);

  let totalBefore = 0;
  let totalAfter = 0;
  let totalSiblings = 0;
  let totalMobile = 0;
  let touched = 0;
  const failures = [];

  for (const file of candidates) {
    try {
      const r = await processOne(file);
      if (!r) continue;
      touched++;
      totalBefore += r.before;
      totalAfter += r.after;
      totalSiblings += r.avif + r.webp;
      totalMobile += r.mobile.raster + r.mobile.avif + r.mobile.webp;
      const rel = path.relative(path.join(__dirname, '..'), r.file);
      const tags = [r.didDesktop && 'desktop', r.didMobile && 'mobile'].filter(Boolean).join('+');
      const desktopLine = r.didDesktop
        ? `    desktop: ${fmt(r.before)} → ${fmt(r.after)} | avif ${fmt(r.avif)} | webp ${fmt(r.webp)}`
        : null;
      const mobileLine = r.didMobile
        ? `    mobile:  raster ${fmt(r.mobile.raster)} | avif ${fmt(r.mobile.avif)} | webp ${fmt(r.mobile.webp)}`
        : null;
      console.log(`  ${rel} [${r.dim}, ${tags}]`);
      if (desktopLine) console.log(desktopLine);
      if (mobileLine) console.log(mobileLine);
    } catch (err) {
      failures.push({ file, err: err.message });
      console.error(`  ! ${file}: ${err.message}`);
    }
  }

  console.log('');
  console.log(`Touched ${touched} files of ${candidates.length} scanned.`);
  console.log(`Raster (desktop): ${fmt(totalBefore)} → ${fmt(totalAfter)} (saved ${fmt(totalBefore - totalAfter)}).`);
  console.log(`Desktop AVIF+WebP siblings on disk: ${fmt(totalSiblings)}.`);
  console.log(`Mobile-900 variants on disk: ${fmt(totalMobile)}.`);
  if (failures.length) {
    console.log(`\n${failures.length} failures:`);
    for (const f of failures) console.log(`  ${f.file}: ${f.err}`);
  }
})();
