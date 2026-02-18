// Generate AVIFs for Card1-5 from WebP if AVIF does not exist
const sharp = require('sharp');
const fs = require('fs');
const src = 'src/assets/';
['Card1','Card2','Card3','Card4','Card5'].forEach(n => {
  const webp = src + n + '.webp';
  const avif = src + n + '.avif';
  if (fs.existsSync(webp) && !fs.existsSync(avif)) {
    sharp(webp).toFile(avif, () => { console.log('Created', avif); });
  }
});
