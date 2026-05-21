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

const THRESHOLD_BYTES = 1_500_000; // only process > 1.5 MB
const MAX_EDGE = 2400;             // cap longest edge
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
  if (stat.size < THRESHOLD_BYTES) return null;

  const ext = path.extname(file).toLowerCase();
  const dir = path.dirname(file);
  const base = path.basename(file, ext);
  const avifPath = path.join(dir, base + '.avif');
  const webpPath = path.join(dir, base + '.webp');

  const image = sharp(file, { failOn: 'none' });
  const meta = await image.metadata();
  const longest = Math.max(meta.width || 0, meta.height || 0);
  const needsResize = longest > MAX_EDGE;
  const hasAlpha = meta.hasAlpha;

  let pipeline = sharp(file, { failOn: 'none' }).rotate();
  if (needsResize) {
    pipeline = pipeline.resize({
      width: meta.width >= meta.height ? MAX_EDGE : null,
      height: meta.height > meta.width ? MAX_EDGE : null,
      withoutEnlargement: true,
      fit: 'inside',
    });
  }

  // Materialize resized buffer once, reuse for all 3 output formats.
  const resized = await pipeline.toBuffer();

  // Raster fallback (preserve extension to avoid breaking imports)
  let fallbackBuffer;
  if (ext === '.png') {
    fallbackBuffer = await sharp(resized)
      .png({ compressionLevel: 9, palette: hasAlpha ? false : true, quality: 80 })
      .toBuffer();
  } else {
    fallbackBuffer = await sharp(resized)
      .jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true })
      .toBuffer();
  }
  fs.writeFileSync(file, fallbackBuffer);

  // AVIF & WebP siblings (always refresh from the resized buffer)
  const avifBuffer = await sharp(resized).avif({ quality: AVIF_QUALITY, effort: 4 }).toBuffer();
  fs.writeFileSync(avifPath, avifBuffer);
  const webpBuffer = await sharp(resized).webp({ quality: WEBP_QUALITY, effort: 4 }).toBuffer();
  fs.writeFileSync(webpPath, webpBuffer);

  return {
    file,
    before: stat.size,
    after: fs.statSync(file).size,
    avif: fs.statSync(avifPath).size,
    webp: fs.statSync(webpPath).size,
    resized: needsResize,
    dim: `${meta.width}x${meta.height}`,
  };
}

(async () => {
  const all = ROOTS.flatMap(walk);
  const candidates = all.filter((f) => fs.statSync(f).size >= THRESHOLD_BYTES);
  candidates.sort((a, b) => fs.statSync(b).size - fs.statSync(a).size);
  console.log(`Found ${candidates.length} raster files > ${fmt(THRESHOLD_BYTES)}.`);

  let totalBefore = 0;
  let totalAfter = 0;
  let totalSiblings = 0;
  const failures = [];

  for (const file of candidates) {
    try {
      const r = await processOne(file);
      if (!r) continue;
      totalBefore += r.before;
      totalAfter += r.after;
      totalSiblings += r.avif + r.webp;
      const rel = path.relative(path.join(__dirname, '..'), r.file);
      console.log(
        `  ${rel} [${r.dim}${r.resized ? ' → resized' : ''}]\n` +
        `    raster: ${fmt(r.before)} → ${fmt(r.after)}  |  avif: ${fmt(r.avif)}  |  webp: ${fmt(r.webp)}`
      );
    } catch (err) {
      failures.push({ file, err: err.message });
      console.error(`  ! ${file}: ${err.message}`);
    }
  }

  console.log('');
  console.log(`Raster total: ${fmt(totalBefore)} → ${fmt(totalAfter)}  (saved ${fmt(totalBefore - totalAfter)})`);
  console.log(`AVIF + WebP siblings written: ${fmt(totalSiblings)} on disk.`);
  if (failures.length) {
    console.log(`\n${failures.length} failures:`);
    for (const f of failures) console.log(`  ${f.file}: ${f.err}`);
  }
})();
