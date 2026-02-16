import React, { useEffect } from 'react';

const Seo = ({
  title,
  description,
  url,
  image,
  images = null,
  type = 'website',
  authorName = 'Zack MacTavish',
  authorAlternateNames = ['Zachary MacTavish'],
  sameAs = [],
  keywords = [],
  jsonLd = null,
  favicons = null,
  siteDefaults = null,
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

    if (description) {
      setMeta("[name='description']", 'content', description);
      setMeta("[property='og:description']", 'content', description);
      setMeta("[name='twitter:description']", 'content', description);
    }

    if (keywords && keywords.length) {
      setMeta("[name='keywords']", 'content', Array.isArray(keywords) ? keywords.join(', ') : keywords);
    }

    if (title) {
      setMeta("[property='og:title']", 'content', title);
      setMeta("[name='twitter:title']", 'content', title);
    }
    setMeta("[property='og:type']", 'content', type);
    if (url) setMeta("[property='og:url']", 'content', url);

    const siteImages = (siteDefaults && siteDefaults.ogImages) || [];
    const imagesArray = images || (image ? [image] : null) || siteImages;

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
      setMeta("[property='og:image']", 'content', image);
      firstImageUrl = image;
    }

    if (firstImageUrl) {
      setMeta("[name='twitter:image']", 'content', firstImageUrl);
      setMeta("[name='twitter:card']", 'content', 'summary_large_image');
    } else {
      setMeta("[name='twitter:card']", 'content', 'summary');
    }

    if (url) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    }

    const scriptId = 'seo-json-ld';
    let script = document.getElementById(scriptId);

    const defaultPersonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: authorName,
      url: url || window.location.href,
    };

    if (authorAlternateNames && authorAlternateNames.length) {
      defaultPersonLd.alternateName =
        authorAlternateNames.length === 1 ? authorAlternateNames[0] : authorAlternateNames;
    }
    if (sameAs && sameAs.length) defaultPersonLd.sameAs = sameAs;

    let ld = jsonLd || defaultPersonLd;
    if (!jsonLd) ld = defaultPersonLd;
    else {
      try {
        const parsed = jsonLd;
        if ((parsed['@type'] === 'CreativeWork' || parsed['@type'] === 'Article') && !parsed.author) {
          parsed.author = { '@type': 'Person', name: authorName, url: url || window.location.href };
          if (authorAlternateNames && authorAlternateNames.length)
            parsed.author.alternateName = authorAlternateNames.length === 1 ? authorAlternateNames[0] : authorAlternateNames;
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

    if (authorName || (authorAlternateNames && authorAlternateNames.length)) {
      const authorContent = [authorName].concat(authorAlternateNames || []).filter(Boolean).join(', ');
      setMeta("[name='author']", 'content', authorContent);
    }

    if (sameAs && sameAs.length) {
      setMeta("[name='sameAs']", 'content', sameAs.join(', '));
    }

    const fav = favicons || (siteDefaults && siteDefaults.favicons) || null;
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
  }, [title, description, url, image, type, authorName, authorAlternateNames, sameAs, keywords, jsonLd, favicons, siteDefaults]);

  return null;
};

export default Seo;
