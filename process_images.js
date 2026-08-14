const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = "/Users/zmactavish/Desktop/VarfajPartners — snippet.png";
const destDir = "public/assets/varfaj-hub";

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function run() {
  const configs = [
    {
      name: 'varfaj-tile',
      width: 1600,
      height: 1000
    },
    {
      name: 'varfaj-tile-mobile-900',
      width: 900,
      height: 563
    }
  ];

  for (const config of configs) {
    const base = sharp(src).resize({
      width: config.width,
      height: config.height,
      fit: 'cover',
      position: 'attention'
    });

    const pngPath = path.join(destDir, `${config.name}.png`);
    await base.clone().png({ compressionLevel: 9 }).toFile(pngPath);
    const pngStats = fs.statSync(pngPath);
    console.log(`${config.name}.png: ${config.width}x${config.height}, Size: ${(pngStats.size / 1024).toFixed(2)} KB (${pngStats.size} bytes)`);

    const webpPath = path.join(destDir, `${config.name}.webp`);
    await base.clone().webp({ quality: 88 }).toFile(webpPath);
    const webpStats = fs.statSync(webpPath);
    console.log(`${config.name}.webp: ${config.width}x${config.height}, Size: ${(webpStats.size / 1024).toFixed(2)} KB (${webpStats.size} bytes)`);

    const avifPath = path.join(destDir, `${config.name}.avif`);
    await base.clone().avif({ quality: 65 }).toFile(avifPath);
    const avifStats = fs.statSync(avifPath);
    console.log(`${config.name}.avif: ${config.width}x${config.height}, Size: ${(avifStats.size / 1024).toFixed(2)} KB (${avifStats.size} bytes)`);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
