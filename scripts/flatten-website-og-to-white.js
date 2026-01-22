#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

async function run() {
  try {
    const cwd = process.cwd();
    const dir = path.join(cwd, 'public', 'assets', 'og');
    const files = await fs.readdir(dir);
    const targets = files.filter(f => f.startsWith('website-logoresolutions-') && f.endsWith('.png'));
    if (targets.length === 0) {
      console.log('No website-logoresolutions PNGs found to flatten.');
      return;
    }
    for (const filename of targets) {
      const p = path.join(dir, filename);
      try {
        await sharp(p)
          .flatten({ background: '#ffffff' })
          .toColourspace('srgb')
          .png({ compressionLevel: 9 })
          .toFile(p + '.tmp');
        await fs.rename(p + '.tmp', p);
        console.log(`flattened ${filename}`);
      } catch (err) {
        console.error(`failed ${filename}:`, err.message || err);
      }
    }
    console.log(`Processed ${targets.length} website-logoresolutions PNGs.`);
  } catch (err) {
    console.error('flatten script failed:', err);
    process.exitCode = 1;
  }
}

run();
