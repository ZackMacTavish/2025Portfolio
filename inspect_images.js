const sharp = require('sharp');
const fs = require('fs');

async function inspect(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`\n=== File not found: ${filePath} ===`);
    return;
  }
  const image = sharp(filePath);
  const metadata = await image.metadata();
  const { width, height, channels } = metadata;
  const hasAlpha = metadata.hasAlpha !== undefined ? metadata.hasAlpha : (channels === 2 || channels === 4);

  const raw = await image.raw().toBuffer({ resolveWithObject: true });
  const { data } = raw;

  function getPixel(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return null;
    const idx = (y * width + x) * channels;
    let r, g, b, a;
    if (channels === 1) {
      r = g = b = data[idx];
      a = 255;
    } else if (channels === 2) {
      r = g = b = data[idx];
      a = data[idx + 1];
    } else if (channels === 3) {
      r = data[idx];
      g = data[idx + 1];
      b = data[idx + 2];
      a = 255;
    } else {
      r = data[idx];
      g = data[idx + 1];
      b = data[idx + 2];
      a = data[idx + 3];
    }
    return `rgba(${r}, ${g}, ${b}, ${(a/255).toFixed(3)})`;
  }

  const corners = {
    topLeft: getPixel(0, 0),
    topRight: getPixel(width - 1, 0),
    bottomLeft: getPixel(0, height - 1),
    bottomRight: getPixel(width - 1, height - 1)
  };

  const centerX = Math.floor(width / 2);
  const centerY = Math.floor(height / 2);
  const center = getPixel(centerX, centerY);

  let minX = width, maxX = -1, minY = height, maxY = -1;
  let hasNonTransparent = false;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const alpha = (channels === 2) ? data[idx + 1] : (channels >= 4 ? data[idx + 3] : 255);
      if (alpha > 0) {
        hasNonTransparent = true;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const bbox = hasNonTransparent 
    ? { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1, right: maxX, bottom: maxY }
    : null;

  console.log(`\n=== INFO FOR ${filePath} ===`);
  console.log(`Dimensions: ${width}x${height}`);
  console.log(`Channels: ${channels} (Alpha present: ${hasAlpha})`);
  console.log(`Corners:`);
  console.log(`  Top-Left (0,0): ${corners.topLeft}`);
  console.log(`  Top-Right (${width-1},0): ${corners.topRight}`);
  console.log(`  Bottom-Left (0,${height-1}): ${corners.bottomLeft}`);
  console.log(`  Bottom-Right (${width-1},${height-1}): ${corners.bottomRight}`);
  console.log(`Center (${centerX},${centerY}): ${center}`);
  if (bbox) {
    console.log(`Nontransparent bounding box: left: ${bbox.left}, top: ${bbox.top}, width: ${bbox.width}, height: ${bbox.height}, right: ${bbox.right}, bottom: ${bbox.bottom}`);
  } else {
    console.log(`Nontransparent bounding box: None (fully transparent image or empty)`);
  }
}

async function main() {
  await inspect('public/assets/MSFTlogo.png');
  await inspect('public/assets/varfaj-hub/varfaj-mark.png');
}

main().catch(console.error);
