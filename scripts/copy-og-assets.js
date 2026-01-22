#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

// Copy and sanitize files from src/assets/og -> public/assets/og
// Produces clean filenames (lowercase, hyphens, no spaces) and writes a manifest.

const SRC_DIR = path.join(process.cwd(), 'src', 'assets', 'og');
const DEST_DIR = path.join(process.cwd(), 'public', 'assets', 'og');

function sanitizeName(name) {
  // lower, replace spaces/underscores with hyphens, remove unsafe chars
  let s = name.toLowerCase();
  s = s.replace(/\s+/g, '-');
  s = s.replace(/_+/g, '-');
  // replace patterns like 1200px-x-630px -> 1200x630
  s = s.replace(/(\d+)px[-_x]+(\d+)px/, '$1x$2');
  // remove characters except alnum, -, x, and dot
  s = s.replace(/[^a-z0-9.\-x]/g, '');
  // collapse multiple hyphens
  s = s.replace(/-+/g, '-');
  return s;
}

async function run() {
  try {
    await fs.mkdir(DEST_DIR, { recursive: true });
    const files = await fs.readdir(SRC_DIR);
    const manifest = {};
    for (const file of files) {
      const srcPath = path.join(SRC_DIR, file);
      const stats = await fs.stat(srcPath);
      if (!stats.isFile()) continue;
      const clean = sanitizeName(file);
      const destPath = path.join(DEST_DIR, clean);
      await fs.copyFile(srcPath, destPath);
      manifest[file] = clean;
      console.log(`copied: ${file} -> ${clean}`);
    }
    const manifestPath = path.join(DEST_DIR, 'manifest.json');
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
    console.log(`wrote manifest to ${manifestPath}`);
  } catch (err) {
    console.error('error copying OG assets:', err);
    process.exitCode = 1;
  }
}

run();
