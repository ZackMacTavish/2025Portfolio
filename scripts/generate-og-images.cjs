#!/usr/bin/env node
/*
  Generate proper 1200x630 Open Graph images for each project.

  Strategy:
    - "contain" the source mockup onto a 1200x630 canvas (preserves the whole
      mockup so it doesn't get awkwardly cropped on FB/LinkedIn/Teams).
    - Default background: white. Override per-project below if needed.
    - Output: JPG q85 (best compatibility + smallest size for photos/mockups).
      Most social crawlers prefer JPG/PNG over AVIF/WebP — keep JPG only.

  Run manually when source mockups change:
    node scripts/generate-og-images.cjs
*/
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const ASSETS = path.join(PUBLIC_DIR, 'assets');
const OUT = path.join(ASSETS, 'og');

const TARGET_W = 1200;
const TARGET_H = 630;
const PADDING = 60; // px inside the 1200x630 canvas

// slug -> { source, background?, fit? }
const PROJECTS = {
  giga:            { source: 'Giga\u2014Macbookv2.png',     background: { r: 255, g: 255, b: 255 } },
  outsource:       { source: 'Outsource\u2014Macbook.png',  background: { r: 255, g: 255, b: 255 } },
  piton:           { source: 'Piton\u2014Screens.png',      background: { r: 245, g: 245, b: 245 } },
  ux:              { source: 'Giga\u2014mockup.png',        background: { r: 255, g: 255, b: 255 } },
  'access-direct': { source: 'AD\u2014Macs.png',            background: { r: 255, g: 255, b: 255 } },
  'graphic-design':{ source: 'Cover.png',                   background: { r: 255, g: 255, b: 255 } },
  threepillars:    { source: 'ThreePillars\u2014Macbook.png', background: { r: 255, g: 255, b: 255 } },
};

async function build(slug, { source, background }) {
  const inputPath = path.join(ASSETS, source);
  const outputPath = path.join(OUT, `${slug}-1200x630.jpg`);

  if (!fs.existsSync(inputPath)) {
    console.warn(`[skip] ${slug}: source not found at ${inputPath}`);
    return;
  }

  const innerW = TARGET_W - PADDING * 2;
  const innerH = TARGET_H - PADDING * 2;

  // Resize source to fit within inner box (preserve aspect ratio, no enlargement)
  const inner = await sharp(inputPath)
    .resize({
      width: innerW,
      height: innerH,
      fit: 'inside',
      withoutEnlargement: false,
    })
    .toBuffer();

  await sharp({
    create: {
      width: TARGET_W,
      height: TARGET_H,
      channels: 3,
      background,
    },
  })
    .composite([{ input: inner, gravity: 'center' }])
    .jpeg({ quality: 85, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(outputPath);

  const stat = fs.statSync(outputPath);
  console.log(`[ok]   ${slug}: ${(stat.size / 1024).toFixed(1)} KB -> ${path.relative(process.cwd(), outputPath)}`);
}

(async () => {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  for (const [slug, config] of Object.entries(PROJECTS)) {
    try {
      await build(slug, config);
    } catch (err) {
      console.error(`[fail] ${slug}:`, err.message);
    }
  }
})();
