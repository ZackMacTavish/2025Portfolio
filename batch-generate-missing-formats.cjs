// batch-generate-missing-formats.cjs
// Usage: node batch-generate-missing-formats.cjs
// Scans src/assets and public/assets for .png/.jpg images and creates missing .webp and .avif formats using sharp

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const assetDirs = [
  path.join(__dirname, 'src/assets'),
  path.join(__dirname, 'public/assets'),
];

const exts = ['.png', '.jpg', '.jpeg'];
const targets = ['.webp', '.avif'];

function getAllImageFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImageFiles(filePath));
    } else if (exts.includes(path.extname(file).toLowerCase())) {
      results.push(filePath);
    }
  }
  return results;
}

async function generateMissingFormats(imgPath) {
  const dir = path.dirname(imgPath);
  const base = path.basename(imgPath, path.extname(imgPath));
  for (const ext of targets) {
    const outPath = path.join(dir, base + ext);
    if (!fs.existsSync(outPath)) {
      try {
        await sharp(imgPath).toFile(outPath);
        console.log(`Created ${outPath}`);
      } catch (e) {
        console.error(`Failed to create ${outPath}:`, e.message);
      }
    }
  }
}

(async () => {
  for (const dir of assetDirs) {
    if (!fs.existsSync(dir)) continue;
    const images = getAllImageFiles(dir);
    for (const img of images) {
      await generateMissingFormats(img);
    }
  }
  console.log('Done.');
})();
