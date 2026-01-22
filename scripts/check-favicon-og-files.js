#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';

// List of all favicon and OG PNGs that should exist in public/assets/og
const required = [
  'favicon-16.png',
  'favicon-32.png',
  'favicon-48.png',
  'favicon-64.png',
  'favicon-128.png',
  'favicon-256.png',
  'favicon-512.png',
  'favicon-clean-256.png',
  'website-logoresolutions-1200x630.png',
  'website-logoresolutions-16px.png',
  'website-logoresolutions-180px.png',
  'website-logoresolutions-192px.png',
  'website-logoresolutions-32px.png',
  'website-logoresolutions-512px.png',
  'website-logoresolutions-600x315.png',
  'website-logoresolutions-high-res.png',
  'website-logoresolutions-square-logo-1200px.png',
];

async function main() {
  const dir = path.join(process.cwd(), 'public', 'assets', 'og');
  let missing = [];
  for (const file of required) {
    try {
      await fs.access(path.join(dir, file));
    } catch {
      missing.push(file);
    }
  }
  if (missing.length === 0) {
    console.log('All required favicon and OG PNGs are present.');
  } else {
    console.error('Missing files in public/assets/og:', missing);
    process.exit(1);
  }
}

main();
