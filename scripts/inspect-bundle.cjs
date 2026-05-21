// Inspect the rollup-plugin-visualizer report to find biggest items in main chunk.
const fs = require('fs');
const html = fs.readFileSync('dist/bundle-report.html', 'utf8');
const idx = html.indexOf('data = {"version"');
if (idx < 0) { console.log('no data found'); process.exit(1); }
// Walk the JSON to find its end
let depth = 0;
let start = html.indexOf('{', idx);
let end = start;
let inString = false;
let escape = false;
for (let i = start; i < html.length; i++) {
  const ch = html[i];
  if (escape) { escape = false; continue; }
  if (ch === '\\') { escape = true; continue; }
  if (ch === '"') inString = !inString;
  if (inString) continue;
  if (ch === '{') depth++;
  else if (ch === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
}
const data = JSON.parse(html.slice(start, end));

function sizeOf(node) {
  if (node.uid && data.nodeMetas[node.uid]) {
    return data.nodeMetas[node.uid].renderedLength || 0;
  }
  if (node.children) {
    return node.children.reduce((a, c) => a + sizeOf(c), 0);
  }
  return 0;
}

function printContents(node, depth, maxDepth) {
  if (depth > maxDepth) return;
  const size = sizeOf(node);
  if (size < 3000 && depth > 1) return;
  console.log(' '.repeat(depth * 2), node.name, '[' + (size / 1024).toFixed(1) + 'kb]');
  if (node.children) {
    const sorted = [...node.children].sort((a, b) => sizeOf(b) - sizeOf(a));
    for (const c of sorted.slice(0, 20)) printContents(c, depth + 1, maxDepth);
  }
}

function findChunk(tree, prefix) {
  if (!tree.children) return null;
  for (const c of tree.children) {
    if (c.name && c.name.startsWith(prefix) && !c.name.includes('legacy')) return c;
  }
  return null;
}

const tree = data.tree;
console.log('=== Top-level chunks ===');
const chunks = (tree.children || []).map(c => ({ name: c.name, size: sizeOf(c) }))
  .sort((a, b) => b.size - a.size);
for (const c of chunks.slice(0, 15)) {
  console.log('  ', c.name, '[' + (c.size / 1024).toFixed(1) + 'kb]');
}

const main = chunks.find(c => c.name.startsWith('index-') && !c.name.includes('legacy'));
if (main) {
  console.log('\n=== Main chunk contents:', main.name, '===');
  const node = tree.children.find(c => c.name === main.name);
  printContents(node, 0, 5);
}
