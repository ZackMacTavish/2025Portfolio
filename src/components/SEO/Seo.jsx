import React, { useEffect } from 'react';
import { site as defaultSite } from '../../data/metadata';

// Minimal SEO component that updates document head without external deps.
// Now supports multiple images and favicon links.
const Seo = ({
  title,
  description,
  url,
  image,
  images = null, // array of { url, width, height } or strings
  type = 'website',
  authorName = 'Zack MacTavish',
  authorAlternateNames = ['Zachary MacTavish'],
  sameAs = [],
  keywords = [],
  jsonLd = null,
  favicons = null, // object or array describing favicon files
}) => {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const parts = selector.match(/\[(name|property)=['"]([^'"]+)['"]\]/);
        if (parts) el.setAttribute(parts[1], parts[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Description
    if (description) {
      setMeta("[name='description']", 'content', description);
      setMeta("[property='og:description']", 'content', description);
      setMeta("[name='twitter:description']", 'content', description);
    }

    // Keywords
    if (keywords && keywords.length) {
      setMeta("[name='keywords']", 'content', Array.isArray(keywords) ? keywords.join(', ') : keywords);
    }

    // Open Graph / Twitter
    if (title) {
      setMeta("[property='og:title']", 'content', title);
      setMeta("[name='twitter:title']", 'content', title);
    }
    setMeta("[property='og:type']", 'content', type);
    if (url) setMeta("[property='og:url']", 'content', url);

    // Handle multiple images (preferred) or single image fallback
    // images prop can be an array of strings or objects { url, width, height }
    const siteImages = (defaultSite && defaultSite.ogImages) || [];
    const imagesArray = images || (image ? [image] : null) || siteImages;

    // Remove existing og:image and related tags to avoid duplicates
    const removeMeta = (selector) => {
      document.querySelectorAll(selector).forEach((n) => n.remove());
    };
    removeMeta("meta[property='og:image']");
    removeMeta("meta[property='og:image:width']");
    removeMeta("meta[property='og:image:height']");

    let firstImageUrl = null;
    if (imagesArray && imagesArray.length) {
      imagesArray.forEach((imgItem) => {
        let item = imgItem;
        if (typeof imgItem === 'string') item = { url: imgItem };
        if (!item || !item.url) return;
        const metaImg = document.createElement('meta');
        metaImg.setAttribute('property', 'og:image');
        metaImg.setAttribute('content', item.url);
        document.head.appendChild(metaImg);

        if (item.width) {
          const mw = document.createElement('meta');
          mw.setAttribute('property', 'og:image:width');
          mw.setAttribute('content', String(item.width));
          document.head.appendChild(mw);
        }
        if (item.height) {
          const mh = document.createElement('meta');
          mh.setAttribute('property', 'og:image:height');
          mh.setAttribute('content', String(item.height));
          document.head.appendChild(mh);
        }
        if (!firstImageUrl) firstImageUrl = item.url;
      });
    } else if (image) {
      // single image fallback
      setMeta("[property='og:image']", 'content', image);
      firstImageUrl = image;
    }

    if (firstImageUrl) {
      setMeta("[name='twitter:image']", 'content', firstImageUrl);
      setMeta("[name='twitter:card']", 'content', 'summary_large_image');
    } else {
      setMeta("[name='twitter:card']", 'content', 'summary');
    }

    // canonical
    if (url) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }

    // JSON-LD: if provided use it; otherwise add a simple Person object for site owner
    const scriptId = 'seo-json-ld';
    let script = document.getElementById(scriptId);

    // Build default Person JSON-LD and include alternateName(s) so crawlers see both common and formal names
    const defaultPersonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: authorName,
      url: url || window.location.href,
    };

    if (authorAlternateNames && authorAlternateNames.length) {
      // If only one alternate name, schema.org accepts a single string; otherwise provide an array
      defaultPersonLd.alternateName =
        authorAlternateNames.length === 1 ? authorAlternateNames[0] : authorAlternateNames;
    }

    if (sameAs && sameAs.length) {
      defaultPersonLd.sameAs = sameAs;
    }

    // If the caller provided a jsonLd object, merge site/person-level sameAs/author info where appropriate
    let ld = jsonLd || defaultPersonLd;
    // If jsonLd is a CreativeWork without author, attach a simple author object
    if (!jsonLd) {
      ld = defaultPersonLd;
    } else {
      // If provided jsonLd is a CreativeWork, ensure author and sameAs may be included
      try {
        const parsed = jsonLd;
        if ((parsed['@type'] === 'CreativeWork' || parsed['@type'] === 'Article') && !parsed.author) {
          parsed.author = { '@type': 'Person', name: authorName, url: url || window.location.href };
          if (authorAlternateNames && authorAlternateNames.length) parsed.author.alternateName = authorAlternateNames.length === 1 ? authorAlternateNames[0] : authorAlternateNames;
          if (sameAs && sameAs.length) parsed.author.sameAs = sameAs;
        }
        ld = parsed;
      } catch (e) {
        ld = jsonLd;
      }
    }

    if (script) {
      script.text = JSON.stringify(ld);
    } else {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(ld);
      document.head.appendChild(script);
    }

    // Add a meta author tag including both preferred and alternate names to help other crawlers
    if (authorName || (authorAlternateNames && authorAlternateNames.length)) {
      const authorContent = [authorName]
        .concat(authorAlternateNames || [])
        .filter(Boolean)
        .join(', ');
      setMeta("[name='author']", 'content', authorContent);
    }

    // Add social profile links as meta tags (optional) and ensure OG/Twitter have sameAs where applicable
    if (sameAs && sameAs.length) {
      // set a simple meta for sameAs (not standard but some crawlers might index it)
      setMeta("[name='sameAs']", 'content', sameAs.join(', '));
    }

    // Favicons & icons: add link tags for provided favicons or defaults from site
    const fav = favicons || (defaultSite && defaultSite.favicons) || null;
    // remove existing icons we may add
    const removeLink = (rel) => {
      document.querySelectorAll(`link[rel='${rel}']`).forEach((n) => n.remove());
    };
    removeLink('icon');
    removeLink('shortcut icon');
    removeLink('apple-touch-icon');
    removeLink('manifest');

    if (fav) {
      if (Array.isArray(fav)) {
        fav.forEach((f) => {
          const link = document.createElement('link');
          if (f.rel) link.setAttribute('rel', f.rel);
          else link.setAttribute('rel', f.sizes === '180x180' ? 'apple-touch-icon' : 'icon');
          if (f.sizes) link.setAttribute('sizes', f.sizes);
          link.setAttribute('href', f.href);
          document.head.appendChild(link);
        });
      } else {
        Object.entries(fav).forEach(([sizes, href]) => {
          const link = document.createElement('link');
          if (sizes === '180x180') link.setAttribute('rel', 'apple-touch-icon');
          else link.setAttribute('rel', 'icon');
          link.setAttribute('sizes', sizes);
          link.setAttribute('href', href);
          document.head.appendChild(link);
        });
      }
    }

    // nothing to cleanup — these tags are intended to persist while app runs
  }, [title, description, url, image, type, authorName, authorAlternateNames, sameAs, keywords, jsonLd]);

  return null;
};

export default Seo;
