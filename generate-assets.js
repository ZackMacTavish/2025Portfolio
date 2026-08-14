const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = '/Users/zmactavish/Desktop/VaynerSports/Our Clients – 1.png';
const outDir = 'public/assets/vaynersports-case-study';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function generate() {
  const configs = [
    { name: 'clients-compact', width: 1800, height: 1013 },
    { name: 'clients-compact-mobile-900', width: 900, height: 506 }
  ];

  for (const config of configs) {
    // JPG
    await sharp(src)
      .resize({ width: config.width, height: config.height, fit: 'cover', position: 'attention' })
      .jpeg({ quality: 88 })
      .toFile(path.join(outDir, `${config.name}.jpg`));

    // WebP
    await sharp(src)
      .resize({ width: config.width, height: config.height, fit: 'cover', position: 'attention' })
      .webp({ quality: 88 })
      .toFile(path.join(outDir, `${config.name}.webp`));

    // AVIF
    await sharp(src)
      .resize({ width: config.width, height: config.height, fit: 'cover', position: 'attention' })
      .avif({ quality: 65 })
      .toFile(path.join(outDir, `${config.name}.avif`));
  }

  // Validate
  const expected = [
    'clients-compact.jpg',
    'clients-compact.webp',
    'clients-compact.avif',
    'clients-compact-mobile-900.jpg',
    'clients-compact-mobile-900.webp',
    'clients-compact-mobile-900.avif'
  ];

  console.log("Validation:");
  for (const file of expected) {
    const fullPath = path.join(outDir, file);
    if (fs.existsSync(fullPath)) {
      const stats = fs.statSync(fullPath);
      console.log(`- ${file}: EXISTS (${stats.size} bytes)`);
    } else {
      console.error(`- ${file}: MISSING!`);
    }
  }
}

generate().catch(console.error);
