const sharp = require('./node_modules/sharp');

async function analyzeLogo() {
  const logoPath = "/Users/zmactavish/Desktop/Varfaj Partners/logo.png";
  const image = sharp(logoPath);
  const metadata = await image.metadata();
  console.log('=== Logo Metadata Summary ===');
  console.log('Format:', metadata.format);
  console.log('Dimensions:', metadata.width, 'x', metadata.height);
  console.log('Channels/HasAlpha:', metadata.channels, metadata.hasAlpha);

  // Get raw pixel buffer
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Corner pixels values:
  const getPixel = (x, y) => {
    const idx = (y * width + x) * channels;
    return Array.from(data.slice(idx, idx + channels));
  };

  const corners = {
    topLeft: getPixel(0, 0),
    topRight: getPixel(width - 1, 0),
    bottomLeft: getPixel(0, height - 1),
    bottomRight: getPixel(width - 1, height - 1)
  };
  console.log('Corners:', corners);

  const bg = corners.topLeft;

  let minX_nt = width - 1, maxX_nt = 0, minY_nt = height - 1, maxY_nt = 0;
  let has_nt = false;

  let minX_diff = width - 1, maxX_diff = 0, minY_diff = height - 1, maxY_diff = 0;
  let has_diff = false;

  const colorCounts = {};

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = channels === 4 ? data[idx + 3] : 255;

      const colorKey = channels === 4 ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;
      colorCounts[colorKey] = (colorCounts[colorKey] || 0) + 1;

      // Check non-transparent
      if (channels === 4 && a > 0) {
        if (x < minX_nt) minX_nt = x;
        if (x > maxX_nt) maxX_nt = x;
        if (y < minY_nt) minY_nt = y;
        if (y > maxY_nt) maxY_nt = y;
        has_nt = true;
      }

      // Check difference from bg
      const bgR = bg[0];
      const bgG = bg[1];
      const bgB = bg[2];
      const bgA = channels === 4 ? bg[3] : 255;

      const diffR = Math.abs(r - bgR);
      const diffG = Math.abs(g - bgG);
      const diffB = Math.abs(b - bgB);
      const diffA = Math.abs(a - bgA);

      const threshold = 15;
      if (diffR > threshold || diffG > threshold || diffB > threshold || diffA > threshold) {
        if (x < minX_diff) minX_diff = x;
        if (x > maxX_diff) maxX_diff = x;
        if (y < minY_diff) minY_diff = y;
        if (y > maxY_diff) maxY_diff = y;
        has_diff = true;
      }
    }
  }

  // Dominant colors (sorted)
  const sortedColors = Object.entries(colorCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  console.log('Dominant Colors:');
  sortedColors.forEach(([color, count]) => {
    console.log(`  ${color}: ${count} (${((count / (width * height)) * 100).toFixed(2)}%)`);
  });

  if (has_nt) {
    console.log(`Non-transparent Bounding Box: minX=${minX_nt}, minY=${minY_nt}, maxX=${maxX_nt}, maxY=${maxY_nt}, [width=${maxX_nt - minX_nt + 1}, height=${maxY_nt - minY_nt + 1}]`);
  } else {
    console.log('No non-transparent pixels found');
  }

  if (has_diff) {
    console.log(`Differ-from-background Bounding Box: minX=${minX_diff}, minY=${minY_diff}, maxX=${maxX_diff}, maxY=${maxY_diff}, [width=${maxX_diff - minX_diff + 1}, height=${maxY_diff - minY_diff + 1}]`);
  } else {
    console.log('No pixels differ meaningfully from background');
  }
}

async function analyzeFlyer3() {
  const flyerPath = "/Users/zmactavish/Desktop/Varfaj Partners/VarfajPartners — Flyer3.png";
  const image = sharp(flyerPath);
  const metadata = await image.metadata();
  console.log('\n=== Flyer3 Metadata Summary ===');
  console.log('Format:', metadata.format);
  console.log('Dimensions:', metadata.width, 'x', metadata.height);
  console.log('Channels/HasAlpha:', metadata.channels, metadata.hasAlpha);

  // We want to estimate bounding box of any high-contrast Varfaj V mark if feasible
  // Let's get pixel values and run a detection. Since a flyer is complex, let's analyze the colors.
  // We'll resize the flyer first to keep computation light or we can run on full/reduced buffer.
  const { data, info } = await image.resize({ width: 500 }).raw().toBuffer({ resolveWithObject: true });
  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Let's analyze color distributions in the resized flyer-3
  const colors = {};
  for (let idx = 0; idx < data.length; idx += channels) {
    const r = data[idx];
    const g = data[idx+1];
    const b = data[idx+2];
    const key = `rgb(${Math.round(r/10)*10},${Math.round(g/10)*10},${Math.round(b/10)*10})`;
    colors[key] = (colors[key] || 0) + 1;
  }
  const topColors = Object.entries(colors).sort((a,b)=>b[1]-a[1]).slice(0, 10);
  console.log('Flyer3 Top approximate colors:', topColors);
  
  // Let's find bounding box of high-contrast non-background elements in Flyer3
  // e.g. if background is mostly dark (black) or light (white)
  // Let's look at corner colors of Flyer3 to estimate background
  const getPixel = (x, y) => {
    const idx = (y * width + x) * channels;
    return [data[idx], data[idx+1], data[idx+2]];
  };
  const corners = [getPixel(0,0), getPixel(width-1,0), getPixel(0,height-1), getPixel(width-1,height-1)];
  console.log('Flyer3 corners (resized 500w):', corners);
}

async function run() {
  await analyzeLogo();
  await analyzeFlyer3();
}

run().catch(console.error);
