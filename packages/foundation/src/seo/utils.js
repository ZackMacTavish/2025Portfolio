// Small SEO utilities for consumers to avoid guesswork.
// buildCanonical: combine homepage + path and normalize trailing slash.

export function buildCanonical(homepage, path, options = {}) {
  const { trailingSlash = true } = options;
  if (!homepage) return path || '';
  const base = homepage.replace(/\/+$/, '');
  const rawPath = (path || '').trim();
  const normalizedPath = trailingSlash
    ? (rawPath.endsWith('/') ? rawPath : `${rawPath}/`)
    : rawPath.replace(/\/+$/, '');
  try {
    return new URL(normalizedPath || '/', base).toString();
  } catch (e) {
    const sep = normalizedPath.startsWith('/') ? '' : '/';
    return `${base}${sep}${normalizedPath}` || `${base}/`;
  }
}
