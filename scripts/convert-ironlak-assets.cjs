/* eslint-disable no-console */
/**
 * One-off conversion script for the Ironlak Internship case study.
 *
 * For every source file in src/assets/ironlak-internship/:
 *  - PDFs (non-text)  : rasterize with `qlmanage` (macOS) -> JPEG, then variants
 *  - TIFFs            : sharp -> JPEG (flatten on white), then variants
 *  - JPG / PNG        : leave original in place, then variants
 *  - Skipped          : reference letter PDF, files already in mobile-900 set,
 *                       and any existing .avif/.webp outputs
 *
 * For every produced JPEG/PNG, generates:
 *  - <name>.avif
 *  - <name>.webp
 *  - <name>-mobile-900.{avif,webp,jpg|png}  (max-width 900px)
 *
 * Idempotent: skips outputs that already exist.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const sharp = require('sharp');

const DIR = path.join(__dirname, '..', 'src', 'assets', 'ironlak-internship');
const TMP = '/tmp/ironlak-pdf-render';
const SKIP_PDF = new Set(['20171117_ZacharyMactavish_ReferenceLetter.pdf']);
const MAX_WIDTH = 2400; // cap full-size renders
const MOBILE_WIDTH = 900;

if (!fs.existsSync(TMP)) fs.mkdirSync(TMP, { recursive: true });

const allFiles = fs.readdirSync(DIR);

function isMobileVariant(name) {
  return /-mobile-900\.(avif|webp|jpg|png)$/i.test(name);
}

function variantsExist(base, ext) {
  return (
    fs.existsSync(path.join(DIR, `${base}.avif`)) &&
    fs.existsSync(path.join(DIR, `${base}.webp`)) &&
    fs.existsSync(path.join(DIR, `${base}-mobile-900.avif`)) &&
    fs.existsSync(path.join(DIR, `${base}-mobile-900.webp`)) &&
    fs.existsSync(path.join(DIR, `${base}-mobile-900.${ext}`))
  );
}

async function generateVariants(srcPath, base, ext) {
  // ext = 'jpg' | 'png'
  const isPng = ext === 'png';
  const img = sharp(srcPath, { failOn: 'none' });
  const meta = await img.metadata();
  const width = meta.width || 0;
  const resizeOpts = width > MAX_WIDTH ? { width: MAX_WIDTH } : null;

  const fullAvif = path.join(DIR, `${base}.avif`);
  const fullWebp = path.join(DIR, `${base}.webp`);
  const mobAvif = path.join(DIR, `${base}-mobile-900.avif`);
  const mobWebp = path.join(DIR, `${base}-mobile-900.webp`);
  const mobBase = path.join(DIR, `${base}-mobile-900.${ext}`);

  const pipelines = [];
  if (!fs.existsSync(fullAvif)) {
    let p = sharp(srcPath, { failOn: 'none' });
    if (resizeOpts) p = p.resize(resizeOpts);
    pipelines.push(p.avif({ quality: 55, effort: 4 }).toFile(fullAvif));
  }
  if (!fs.existsSync(fullWebp)) {
    let p = sharp(srcPath, { failOn: 'none' });
    if (resizeOpts) p = p.resize(resizeOpts);
    pipelines.push(p.webp({ quality: 80 }).toFile(fullWebp));
  }
  if (!fs.existsSync(mobAvif)) {
    pipelines.push(
      sharp(srcPath, { failOn: 'none' })
        .resize({ width: MOBILE_WIDTH })
        .avif({ quality: 55, effort: 4 })
        .toFile(mobAvif),
    );
  }
  if (!fs.existsSync(mobWebp)) {
    pipelines.push(
      sharp(srcPath, { failOn: 'none' })
        .resize({ width: MOBILE_WIDTH })
        .webp({ quality: 80 })
        .toFile(mobWebp),
    );
  }
  if (!fs.existsSync(mobBase)) {
    let p = sharp(srcPath, { failOn: 'none' }).resize({ width: MOBILE_WIDTH });
    p = isPng ? p.png({ compressionLevel: 9 }) : p.jpeg({ quality: 82 });
    pipelines.push(p.toFile(mobBase));
  }
  await Promise.all(pipelines);
}

async function processPdf(file) {
  const base = path.parse(file).name;
  const outJpg = path.join(DIR, `${base}.jpg`);
  if (fs.existsSync(outJpg) && variantsExist(base, 'jpg')) {
    console.log(`[skip] ${file} (already converted)`);
    return;
  }

  const pdfPath = path.join(DIR, file);
  // qlmanage renders to <name>.pdf.png in the output dir
  if (!fs.existsSync(outJpg)) {
    console.log(`[pdf ] ${file}`);
    execFileSync('qlmanage', ['-t', '-s', '2400', '-o', TMP, pdfPath], {
      stdio: 'ignore',
    });
    const renderedPng = path.join(TMP, `${file}.png`);
    if (!fs.existsSync(renderedPng)) {
      console.warn(`  !! no render produced for ${file}`);
      return;
    }
    // Flatten any alpha onto white, convert to JPEG capped at MAX_WIDTH
    await sharp(renderedPng)
      .flatten({ background: '#ffffff' })
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 88 })
      .toFile(outJpg);
    fs.unlinkSync(renderedPng);
  }
  await generateVariants(outJpg, base, 'jpg');
}

async function processTif(file) {
  const base = path.parse(file).name.replace(/\s+/g, '_'); // normalize spaces
  const outJpg = path.join(DIR, `${base}.jpg`);
  if (fs.existsSync(outJpg) && variantsExist(base, 'jpg')) {
    console.log(`[skip] ${file} (already converted)`);
    return;
  }
  const srcPath = path.join(DIR, file);
  if (!fs.existsSync(outJpg)) {
    console.log(`[tif ] ${file}`);
    await sharp(srcPath, { failOn: 'none' })
      .flatten({ background: '#ffffff' })
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 88 })
      .toFile(outJpg);
  }
  await generateVariants(outJpg, base, 'jpg');
}

async function processRaster(file) {
  const ext = path.extname(file).slice(1).toLowerCase();
  const base = path.parse(file).name;
  if (variantsExist(base, ext === 'jpeg' ? 'jpg' : ext)) {
    console.log(`[skip] ${file} (variants present)`);
    return;
  }
  console.log(`[img ] ${file}`);
  const srcPath = path.join(DIR, file);
  await generateVariants(srcPath, base, ext === 'jpeg' ? 'jpg' : ext);
}

(async () => {
  for (const file of allFiles) {
    if (file.startsWith('.')) continue;
    if (isMobileVariant(file)) continue;
    const ext = path.extname(file).toLowerCase();
    try {
      if (ext === '.pdf') {
        if (SKIP_PDF.has(file)) {
          console.log(`[skip] ${file} (reference letter)`);
          continue;
        }
        await processPdf(file);
      } else if (ext === '.tif' || ext === '.tiff') {
        await processTif(file);
      } else if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        // existing variants already named with original base — skip those that already have full set
        await processRaster(file);
      }
    } catch (err) {
      console.error(`!! failed on ${file}:`, err.message);
    }
  }
  console.log('Done.');
})();
