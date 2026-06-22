// Centralized lookup of -mobile-900 variants.
//
// Two resolution strategies, chosen by URL shape:
//
// 1. **Hashed Vite asset URLs** (anything matching `/assets/<name>-<HASH>.<ext>`,
//    i.e. imports from `src/assets/`): we cannot derive the mobile sibling URL
//    from the desktop URL because the hashes differ. A build-time `import.meta.glob`
//    eagerly resolves every `*-mobile-900.{avif,webp,jpg,jpeg,png}` under
//    `/src/assets/` into a `{ basename.ext → hashed URL }` map.
//
// 2. **Literal public asset URLs** (`/assets/foo.png` with no hash): the mobile
//    sibling is `/assets/foo-mobile-900.png`. We derive it by string replacement,
//    no glob entry needed. The browser silently falls through to the next
//    `<source>` if the variant doesn't exist.
//
// Strategy 2 keeps the URL map small (only `/src/assets/` entries, not the
// duplicates in `/public/assets/`).

const _srcGlob = import.meta.glob(
  '/src/assets/**/*-mobile-900.{avif,webp,jpg,jpeg,png}',
  { eager: true, query: '?url', import: 'default' }
);

const _mobileByKey = Object.create(null);
for (const [absPath, url] of Object.entries(_srcGlob)) {
  const last = absPath.split('/').pop();
  const m = last && last.match(/^(.+)-mobile-900\.([a-z]+)$/i);
  if (!m) continue;
  _mobileByKey[`${m[1]}.${m[2].toLowerCase()}`] = url;
}

/**
 * Split a URL into `{ basename, ext }`, stripping a trailing Vite content hash
 * (`name-HASH.ext`, HASH = 8 chars from base64url alphabet) when present.
 */
function _basenameOf(url) {
  if (!url || typeof url !== 'string') return null;
  const cleaned = url.split('?')[0].split('#')[0];
  const last = cleaned.split('/').pop();
  if (!last) return null;
  const dotIdx = last.lastIndexOf('.');
  if (dotIdx <= 0) return null;
  let name = last.slice(0, dotIdx);
  const ext = last.slice(dotIdx + 1).toLowerCase();
  const hashMatch = name.match(/^(.+)-([A-Za-z0-9_-]{8})$/);
  return { name, ext, hashed: Boolean(hashMatch), original: hashMatch ? hashMatch[1] : name };
}

/**
 * Given a desktop asset URL, return the matching `-mobile-900` sibling URL,
 * or `null` if the input is empty / unrecognised.
 *
 * For hashed Vite assets, performs a map lookup. For literal `/assets/...` URLs
 * (public/), returns `<dir>/<basename>-mobile-900.<ext>` without verifying that
 * the file exists on disk. Callers MUST only request variants for images large
 * enough to have one generated (longest edge > 900px); the generator skips
 * smaller images, and a `<picture>` does NOT fall through to the next source if
 * a matched mobile source 404s — it shows a broken image.
 */
export function findMobileVariant(desktopUrl) {
  const parsed = _basenameOf(desktopUrl);
  if (!parsed) return null;

  if (parsed.hashed) {
    return _mobileByKey[`${parsed.original}.${parsed.ext}`] || null;
  }

  // Literal /assets/foo.ext → /assets/foo-mobile-900.ext
  const cleaned = desktopUrl.split('?')[0].split('#')[0];
  const dotIdx = cleaned.lastIndexOf('.');
  if (dotIdx <= 0) return null;
  return `${cleaned.slice(0, dotIdx)}-mobile-900${cleaned.slice(dotIdx)}`;
}

