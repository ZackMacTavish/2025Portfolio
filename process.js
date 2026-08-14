const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const sharp = require('sharp');

const outputDir = path.join(__dirname, 'public/assets/vaynersports-case-study');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Images to process
const images = [
  { name: 'hero', src: '/Users/zmactavish/Desktop/VaynerSports/Web 1920 – 3.png' },
  { name: 'clients-grid', src: '/Users/zmactavish/Desktop/VaynerSports/Grid View.png' },
  { name: 'clients-list', src: '/Users/zmactavish/Desktop/VaynerSports/Our Clients.png' },
  { name: 'athlete-modal', src: '/Users/zmactavish/Desktop/VaynerSports/Kyle Allen Pop-up.png' },
  { name: 'project-nike', src: '/Users/zmactavish/Desktop/VaynerSports/Our Projects.png' },
  { name: 'project-johnnie-walker', src: '/Users/zmactavish/Desktop/VaynerSports/Our Projects – 1.png' },
  { name: 'contact', src: '/Users/zmactavish/Desktop/VaynerSports/Contact Us.png' },
  { name: 'menu', src: '/Users/zmactavish/Desktop/VaynerSports/Hamburger.png' }
];

// Videos to process
const videos = [
  { name: 'logo-reveal', src: '/Users/zmactavish/Desktop/VaynerSports/Vayner.mp4' },
  { name: 'homepage-motion', src: '/Users/zmactavish/Desktop/VaynerSports/MP4/VaynerSports — Homepage.mp4' },
  { name: 'athlete-motion', src: '/Users/zmactavish/Desktop/VaynerSports/MP4/VaynerSports — Progress.mp4' }
];

async function processImage(src, name) {
  const formats = [
    { ext: 'jpg', options: { quality: 88 } },
    { ext: 'webp', options: { quality: 88 } },
    { ext: 'avif', options: { quality: 65 } }
  ];

  for (const { ext, options } of formats) {
    // Desktop 1800x1013
    const destDesktop = path.join(outputDir, `${name}.${ext}`);
    let img = sharp(src).resize(1800, 1013, { fit: 'cover', position: 'attention' });
    if (ext === 'jpg') {
      img = img.jpeg(options);
    } else if (ext === 'webp') {
      img = img.webp(options);
    } else if (ext === 'avif') {
      img = img.avif(options);
    }
    await img.toFile(destDesktop);

    // Mobile 900x506
    const destMobile = path.join(outputDir, `${name}-mobile-900.${ext}`);
    let imgMobile = sharp(src).resize(900, 506, { fit: 'cover', position: 'attention' });
    if (ext === 'jpg') {
      imgMobile = imgMobile.jpeg(options);
    } else if (ext === 'webp') {
      imgMobile = imgMobile.webp(options);
    } else if (ext === 'avif') {
      imgMobile = imgMobile.avif(options);
    }
    await imgMobile.toFile(destMobile);
  }
}

async function processVideo(src, name) {
  // Use ffmpeg H.264 yuv420p CRF23 medium no audio +faststart
  const destVideo = path.join(outputDir, `${name}.mp4`);
  const ffmpegCmd = `ffmpeg -y -i "${src}" -an -vcodec libx264 -pix_fmt yuv420p -crf 23 -preset medium -movflags +faststart "${destVideo}"`;
  console.log(`Running video process: ${ffmpegCmd}`);
  execSync(ffmpegCmd);

  // Get duration
  const ffprobeCmd = `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${destVideo}"`;
  const duration = parseFloat(execSync(ffprobeCmd).toString().trim());
  const midpoint = duration / 2;
  console.log(`Video: ${name}, duration: ${duration}s, midpoint: ${midpoint}s`);

  // Extract midpoint frame as PNG
  const tempPng = path.join(outputDir, `${name}-temp.png`);
  const extractCmd = `ffmpeg -y -ss ${midpoint} -i "${destVideo}" -vframes 1 "${tempPng}"`;
  execSync(extractCmd);

  // Process poster frames
  const posterName = `${name}-poster`;
  await processImage(tempPng, posterName);

  // Clean up temp file
  if (fs.existsSync(tempPng)) {
    fs.unlinkSync(tempPng);
  }
}

async function run() {
  for (const img of images) {
    console.log(`Processing image: ${img.name}`);
    await processImage(img.src, img.name);
  }
  for (const vid of videos) {
    console.log(`Processing video: ${vid.name}`);
    await processVideo(vid.src, vid.name);
  }
  console.log('All media processing successfully completed!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
