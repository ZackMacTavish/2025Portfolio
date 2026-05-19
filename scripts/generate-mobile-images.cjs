// Usage: node scripts/generate-mobile-images.cjs
// Requires: sharp (npm install sharp)
// This script generates mobile-optimized AVIF, WebP, and JPG/PNG versions for large landing page images.

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// List of images to optimize (absolute or relative to project root)
const images = [
  'src/assets/BrandGuidelines—Mockup.jpg',
  'src/assets/LeysiApp—Screens copy.jpg',
  'src/assets/ThreePillars—pages.jpg',
  'src/assets/hangingquilts.jpg',
  'src/assets/iphones—Mockup copy.png',
  'src/assets/Group 55618@2x.png',
  'src/assets/Me.jpeg',
];

const outputSizes = [600, 900]; // px widths for mobile
const formats = [
  { ext: 'avif', options: { quality: 50 } },
  { ext: 'webp', options: { quality: 60 } },
  { ext: 'jpg', options: { quality: 70 } },
];

(async () => {
  for (const imgPath of images) {
    const base = imgPath.replace(/\.(jpg|jpeg|png)$/i, '');
    for (const size of outputSizes) {
      const input = imgPath;
      for (const { ext, options } of formats) {
        const out = `${base}-mobile-${size}.${ext}`;
        try {
          await sharp(input)
            .resize({ width: size })
            [ext === 'jpg' ? 'jpeg' : ext](options)
            .toFile(out);
          console.log(`Created: ${out}`);
        } catch (e) {
          console.error(`Failed: ${out}`, e.message);
        }
      }
    }
  }
})();
