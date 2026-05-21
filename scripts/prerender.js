import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cwd = process.cwd();

const DIST_DIR = path.join(cwd, 'dist');
const PORT = process.env.PRERENDER_PORT ? Number(process.env.PRERENDER_PORT) : 8787;

async function loadMetadata() {
  const metadataPath = path.join(cwd, 'src', 'data', 'metadata.js');
  const fileUrl = `file://${metadataPath}`;
  const mod = await import(fileUrl);
  const site = mod.site || (mod.default && mod.default.site);
  const projects = mod.projects || (mod.default && mod.default.projects);
  return { site, projects };
}

function buildRoutes(site, projects) {
  const routes = new Set();
  if (site && site.url) routes.add(new URL(site.url).pathname || '/');
  if (projects) {
    Object.values(projects).forEach((p) => {
      try {
        const u = new URL(p.url);
        routes.add(u.pathname || '/');
      } catch (e) {
        // ignore
      }
    });
  }
  // (no /about route in this app — prerender only routes declared in metadata)
  // normalize: ensure leading slash and no query
  return Array.from(routes).map((r) => (r.endsWith('/') ? r : r + '/'));
}

function startStaticServer(root, port) {
  const server = http.createServer((req, res) => {
    try {
      const urlPath = decodeURI(new URL(req.url, `http://${req.headers.host}`).pathname);
      let fsPath = path.join(root, urlPath);
      if (fsPath.endsWith('/')) fsPath = path.join(fsPath, 'index.html');

      if (fs.existsSync(fsPath) && fs.statSync(fsPath).isFile()) {
        const stream = fs.createReadStream(fsPath);
        res.writeHead(200, { 'Content-Type': getContentType(fsPath) });
        stream.pipe(res);
      } else {
        // fallback to root index.html (SPA mode)
        const indexPath = path.join(root, 'index.html');
        if (fs.existsSync(indexPath)) {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          fs.createReadStream(indexPath).pipe(res);
        } else {
          res.writeHead(404);
          res.end('Not found');
        }
      }
    } catch (err) {
      console.error('Server error:', err);
      res.writeHead(500);
      res.end('Server error');
    }
  });

  return new Promise((resolve, reject) => {
    server.listen(port, (err) => {
      if (err) return reject(err);
      console.log(`Static server running at http://localhost:${port}`);
      resolve(server);
    });
  });
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.html':
      return 'text/html';
    case '.js':
      return 'application/javascript';
    case '.css':
      return 'text/css';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.svg':
      return 'image/svg+xml';
    default:
      return 'application/octet-stream';
  }
}

async function prerender() {

  const { site, projects } = await loadMetadata();
  if (!site || !site.url) {
    console.error('site.url missing in metadata.js');
    process.exit(1);
  }

  const routes = buildRoutes(site, projects);
  console.log('Routes to prerender:', routes);

  // Start static server
  const server = await startStaticServer(DIST_DIR, PORT);

  let browser;
  try {
  browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });

    for (const route of routes) {
      const url = `http://localhost:${PORT}${route}`;
      try {
        console.log('Rendering', url);
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
  // Wait for the OG image meta tag to appear (max 5s)
  await page.waitForSelector("meta[property='og:image']", { timeout: 5000 });
  // Wait a bit more for any late DOM changes
  await new Promise(res => setTimeout(res, 300));
        const html = await page.content();

        // Determine output path
        const outDir = path.join(DIST_DIR, route.replace(/^\//, ''));
        const outPath = route === '/' || route === '/index/' ? path.join(DIST_DIR, 'index.html') : path.join(outDir, 'index.html');

        // Ensure directory exists
        const dirToEnsure = path.dirname(outPath);
        fs.mkdirSync(dirToEnsure, { recursive: true });
        fs.writeFileSync(outPath, html, 'utf8');
        console.log('Wrote', outPath);
      } catch (err) {
        console.error('Failed to prerender', url, err);
      }
    }
  } catch (err) {
    console.error('Puppeteer error:', err);
  } finally {
    if (browser) await browser.close();
    server.close();
    console.log('Prerender complete');
  }
}

prerender().catch((e) => {
  console.error(e);
  process.exit(1);
});
