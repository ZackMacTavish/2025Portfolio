const sharp = require('./node_modules/sharp');

async function locateV() {
  const flyerPath = "/Users/zmactavish/Desktop/Varfaj Partners/VarfajPartners — Flyer3.png";
  const image = sharp(flyerPath);
  
  // Resize to a reasonable analytical size (e.g., 1000 width)
  const { data, info } = await image.resize({ width: 1000 }).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  
  // Let's find regions of high contrast or high color density (like the signature red `rgb(230,40,60)` or similar high-contrast elements)
  // Let's scan for red-ish elements (Varfaj's logo/accent is typically red/white/black)
  let minX_red = width, maxX_red = 0, minY_red = height, maxY_red = 0;
  let hasRed = false;

  // Let's also look for very high contrast local edges or specific shapes if we can
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx+1];
      const b = data[idx+2];
      
      // Look for reddish pixels (R/G ratio > 2.5 and R/B ratio > 2.5, R > 150)
      if (r > 150 && g < 100 && b < 100 && r / (g + 1) > 2 && r / (b + 1) > 2) {
        if (x < minX_red) minX_red = x;
        if (x > maxX_red) maxX_red = x;
        if (y < minY_red) minY_red = y;
        if (y > maxY_red) maxY_red = y;
        hasRed = true;
      }
    }
  }

  if (hasRed) {
    // Map back to original dimensions
    const scale = 2739 / 1000;
    const origMinX = Math.round(minX_red * scale);
    const origMaxX = Math.round(maxX_red * scale);
    const origMinY = Math.round(minY_red * scale);
    const origMaxY = Math.round(maxY_red * scale);
    console.log(`Red Element Estimate (original scale): minX=${origMinX}, minY=${origMinY}, maxX=${origMaxX}, maxY=${origMaxY}, width=${origMaxX - origMinX + 1}, height=${origMaxY - origMinY + 1}`);
  } else {
    console.log('No prominent red elements detected.');
  }
}

locateV().catch(console.error);
