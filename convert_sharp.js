import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = 'src/assets/piton-logo-discovery';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

async function processFiles() {
  for (const f of files) {
    const filePath = path.join(dir, f);
    const baseName = path.basename(f, '.png');
    
    // WebP (quality ~86)
    const webpPath = path.join(dir, `${baseName}.webp`);
    await sharp(filePath)
      .webp({ quality: 86 })
      .toFile(webpPath);
      
    // AVIF (quality ~60)
    const avifPath = path.join(dir, `${baseName}.avif`);
    await sharp(filePath)
      .avif({ quality: 60 })
      .toFile(avifPath);
      
    console.log(`Processed: ${baseName}`);
  }
}

processFiles().then(() => {
  console.log("Sharp conversion complete!");
}).catch(err => {
  console.error(err);
  process.exit(1);
});
