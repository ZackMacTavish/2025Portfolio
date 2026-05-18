const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'public/assets/journeys';
const files = fs.readdirSync(dir);

(async () => {
  let count = 0;
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const base = path.join(dir, path.parse(file).name);
      const avif = `${base}.avif`;
      const webp = `${base}.webp`;
      
      if (!fs.existsSync(avif)) {
        await sharp(path.join(dir, file)).avif().toFile(avif);
        count++;
      }
      if (!fs.existsSync(webp)) {
        await sharp(path.join(dir, file)).webp().toFile(webp);
        count++;
      }
    }
  }
  console.log(count);
})();
