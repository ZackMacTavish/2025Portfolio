#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import toIco from 'to-ico';

async function run() {
  try {
    const cwd = process.cwd();
    const outDir = path.join(cwd, 'public', 'assets', 'og');
    // Prefer a 512px square source if available (tighter margins). Fall back to 1200px square.
    const candidates = [
      'website-logoresolutions-512px.png',
      'website-logoresolutions-square-logo-1200px.png',
      'website-logoresolutions-high-res.png',
    ];
    let src = null;
    for (const name of candidates) {
      const p = path.join(outDir, name);
      try {
        await fs.access(p);
        src = p;
        break;
      } catch (e) {
        // not found, continue
      }
    }
    if (!src) {
      throw new Error(`no source square logo found; checked: ${candidates.join(', ')}`);
    }
    // Sizes to generate (start from 16 up to 512)
    const sizes = [16, 32, 48, 64, 128, 256, 512];
    const pngPaths = [];

    // ensure source exists
    await fs.access(src);

    for (const s of sizes) {
      const out = path.join(outDir, `favicon-${s}.png`);
      // resize, flatten onto white background (remove alpha), and output PNG
      // flatten helps avoid strange overlay/halftone artifacts in ICO composition
      await sharp(src)
        .resize(s, s, { fit: 'cover' })
        .flatten({ background: '#ffffff' })
        .toColourspace('srgb')
        .png()
        .toFile(out);
      pngPaths.push(out);
      console.log(`wrote ${out}`);
    }

    // Create a tightened, cleaned 256px PNG by center-cropping the source slightly
    // This reduces extra margins you mentioned and yields a cleaner small icon.
    const cropPercent = 0.82; // keep central 82% of the image
    const cropSize = Math.round(512 * cropPercent); // start from 512 reference
    const cleaned256 = path.join(outDir, 'favicon-clean-256.png');
    await sharp(src)
      .resize(512, 512, { fit: 'cover', position: 'centre' })
      .resize(cropSize, cropSize, { fit: 'cover', position: 'centre' })
      .resize(256, 256)
      .flatten({ background: '#ffffff' })
      .toColourspace('srgb')
      .png()
      .toFile(cleaned256);
    console.log(`wrote cleaned source ${cleaned256}`);

  // Alternative ICO composition: use only 32px and 64px PNGs to avoid palette/halftone artifacts
  const icoPng32 = path.join(outDir, 'favicon-32.png');
  const icoPng64 = path.join(outDir, 'favicon-64.png');
  const buffers = [];
  try {
    buffers.push(await fs.readFile(icoPng32));
  } catch (e) {
    // ignore if missing
  }
  try {
    buffers.push(await fs.readFile(icoPng64));
  } catch (e) {
    // ignore if missing
  }
  if (buffers.length === 0) {
    // fallback to cleaned 256
    buffers.push(await fs.readFile(path.join(outDir, 'favicon-clean-256.png')));
  }
  const buf = await toIco(buffers);
  const icoPath = path.join(cwd, 'public', 'favicon.ico');

  // Respect manual favicon: do not overwrite `public/favicon.ico` unless explicitly forced.
  // Use env var FORCE_FAVICON=1 or pass --force to the script to overwrite.
  const force = process.env.FORCE_FAVICON === '1' || process.argv.includes('--force');
  try {
    await fs.access(icoPath);
    if (!force) {
      console.log(`Detected existing ${icoPath}; skipping overwrite. Use FORCE_FAVICON=1 or --force to overwrite.`);
    } else {
      await fs.writeFile(icoPath, buf);
      console.log(`wrote ${icoPath} (from ${buffers.length} PNG frames: 32/64 preferred) [overwritten with --force]`);
    }
  } catch (e) {
    // file doesn't exist -> safe to write
    await fs.writeFile(icoPath, buf);
    console.log(`wrote ${icoPath} (from ${buffers.length} PNG frames: 32/64 preferred)`);
  }

    // optional: keep the generated pngs for reference
  } catch (err) {
    console.error('make-favicon failed:', err);
    process.exitCode = 1;
  }
}

run();
