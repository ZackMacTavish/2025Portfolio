const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const srcDir = '/Users/zmactavish/Desktop/Seagate';
const outDir = 'public/assets/seagate-case-study';

const tasks = [
  {
    name: 'gow-live-product',
    file: 'screencapture-seagate-products-gaming-drives-special-editions-god-of-war-ragnarok-2026-08-14-12_21_20.png',
    crop: { left: 0, top: 350, width: 3840, height: 2500 }
  },
  {
    name: 'gow-fimbulwinter',
    file: 'screencapture-amazon-Seagate-Ragnarok-Limited-Drive-External-dp-B0BKTNB5PD-ref-sr-1-4-2026-08-14-12_38_00.png',
    crop: { left: 0, top: 5900, width: 3840, height: 1200 }
  }
];

async function main() {
  for (const t of tasks) {
    const srcPath = path.join(srcDir, t.file);
    console.log(`\nProcessing ${t.name} from: ${srcPath}`);
    
    // Extract crop first, then resize
    const base = sharp(srcPath)
      .extract(t.crop)
      .resize({ width: 2400 });

    // Output optimized PNG fallback
    const pngPath = path.join(outDir, `${t.name}.png`);
    await base.clone()
      .png({ palette: true, compressionLevel: 9 })
      .toFile(pngPath);
    console.log(`Created ${pngPath}`);

    // Output WebP quality 88
    const webpPath = path.join(outDir, `${t.name}.webp`);
    await base.clone()
      .webp({ quality: 88 })
      .toFile(webpPath);
    console.log(`Created ${webpPath}`);

    // Output AVIF quality 65
    const avifPath = path.join(outDir, `${t.name}.avif`);
    await base.clone()
      .avif({ quality: 65 })
      .toFile(avifPath);
    console.log(`Created ${avifPath}`);
  }

  // Verification step
  console.log('\n--- VERIFICATION ---');
  const outFiles = [
    'gow-live-product.png',
    'gow-live-product.webp',
    'gow-live-product.avif',
    'gow-fimbulwinter.png',
    'gow-fimbulwinter.webp',
    'gow-fimbulwinter.avif',
  ];

  for (const file of outFiles) {
    const filePath = path.join(outDir, file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`File ${filePath} does not exist!`);
    }
    // Attempt decoding and reading metadata
    const meta = await sharp(filePath).metadata();
    console.log(`File: ${file}`);
    console.log(`  Decoded successfully!`);
    console.log(`  Format: ${meta.format}`);
    console.log(`  Dimensions: ${meta.width}x${meta.height}`);
    console.log(`  File size: ${fs.statSync(filePath).size} bytes`);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
