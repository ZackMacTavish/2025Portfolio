const sharp = require('sharp');

async function processOpening() {
  const src = 'tmp_post_extraction/opening-raw.png';
  const destDir = 'public/assets/loud-luxury-case-study';
  
  // opening-motion-poster at 1800x1013 cover focus center
  await sharp(src)
    .resize(1800, 1013, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 88 })
    .toFile(`${destDir}/opening-motion-poster.jpg`);
    
  await sharp(src)
    .resize(1800, 1013, { fit: 'cover', position: 'center' })
    .webp({ quality: 88 })
    .toFile(`${destDir}/opening-motion-poster.webp`);
    
  await sharp(src)
    .resize(1800, 1013, { fit: 'cover', position: 'center' })
    .avif({ quality: 65 })
    .toFile(`${destDir}/opening-motion-poster.avif`);

  // opening-motion-poster-mobile-900 at 900x506 cover focus center
  await sharp(src)
    .resize(900, 506, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 88 })
    .toFile(`${destDir}/opening-motion-poster-mobile-900.jpg`);

  await sharp(src)
    .resize(900, 506, { fit: 'cover', position: 'center' })
    .webp({ quality: 88 })
    .toFile(`${destDir}/opening-motion-poster-mobile-900.webp`);

  await sharp(src)
    .resize(900, 506, { fit: 'cover', position: 'center' })
    .avif({ quality: 65 })
    .toFile(`${destDir}/opening-motion-poster-mobile-900.avif`);

  console.log('Opening posters generated');
}

async function processMobile() {
  const src = 'tmp_post_extraction/mobile-raw.png';
  const destDir = 'public/assets/loud-luxury-case-study';

  // mobile-interaction-poster width 900 proportional, no crop
  await sharp(src)
    .resize(900, null)
    .jpeg({ quality: 88 })
    .toFile(`${destDir}/mobile-interaction-poster.jpg`);

  await sharp(src)
    .resize(900, null)
    .webp({ quality: 88 })
    .toFile(`${destDir}/mobile-interaction-poster.webp`);

  await sharp(src)
    .resize(900, null)
    .avif({ quality: 65 })
    .toFile(`${destDir}/mobile-interaction-poster.avif`);

  console.log('Mobile posters generated');
}

async function run() {
  try {
    await processOpening();
    await processMobile();
    console.log('All posters processed successfully');
  } catch (err) {
    console.error('Error processing posters:', err);
    process.exit(1);
  }
}

run();
