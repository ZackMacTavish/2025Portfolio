// Batch convert all images in src/assets to AVIF and WebP, and copy PNGs to public/assets
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/assets');
const destDir = path.join(__dirname, 'public/assets');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const exts = ['.jpg', '.jpeg', '.png'];
const files = fs.readdirSync(srcDir).filter(f => exts.includes(path.extname(f).toLowerCase()));

async function convertAll() {
  for (const file of files) {
    const base = path.parse(file).name;
    const srcPath = path.join(srcDir, file);
    const pngDest = path.join(destDir, `${base}.png`);
    const avifDest = path.join(destDir, `${base}.avif`);
    const webpDest = path.join(destDir, `${base}.webp`);

    // Convert to AVIF
    await sharp(srcPath).toFile(avifDest);
    // Convert to WebP
    await sharp(srcPath).toFile(webpDest);
    // Copy PNG
    await sharp(srcPath).png().toFile(pngDest);
    console.log(`Converted: ${file}`);
  }
}

convertAll().then(() => {
  console.log('All images converted!');
}).catch(err => {
  console.error('Error converting images:', err);
});
