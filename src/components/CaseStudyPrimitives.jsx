// Shared case-study primitives extracted from src/pages/Access_Direct/AD.jsx
// so they can be statically imported by other pages without pulling AD's
// route-level module into every page chunk.

import React from 'react';
import styled from 'styled-components';

const normalizeAssetUrl = (url) => {
  if (!url) return url;
  try {
    return encodeURI(decodeURI(url));
  } catch {
    return encodeURI(url);
  }
};

// Functional FullBg component for AVIF/WebP/PNG support (import-based)
export const FullBg = ({ src, avif, webp, alt = '', style = {} }) => {
  const normalizedSrc = normalizeAssetUrl(src);
  const normalizedAvif = normalizeAssetUrl(avif);
  const normalizedWebp = normalizeAssetUrl(webp);
  return (
    <picture>
      {normalizedAvif && <source srcSet={normalizedAvif} type="image/avif" />}
      {normalizedWebp && <source srcSet={normalizedWebp} type="image/webp" />}
      <img
        src={normalizedSrc}
        alt={alt}
        style={{
          width: '100vw',
          height: 'auto',
          margin: '3vh auto',
          display: 'block',
          backgroundColor: 'white',
          ...style,
        }}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};

export const ParagraphFour = styled.div`
  position: relative;
  padding-right: 6vw;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  width: 40vw;
  color: #a0a0a0;

  @media (max-width: 1770px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {
    width: 90vw;
    max-width: 700px;
    font-size: 1.6rem;
    margin: 4vh auto 0 auto;
    padding-right: 0;
    text-align: left;
  }
`;

export const TextContent = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  font-size: clamp(1.05rem, 1.4vw + 0.75rem, 1.55rem);
  max-width: 60ch;
  line-height: 1.6;
  margin: 0;
  text-align: left;

  @media (max-width: 850px) {
    font-size: clamp(1rem, 3.8vw, 1.2rem);
    max-width: 90vw;
    line-height: 1.65;
  }

  a.inline-link {
    color: #ffffff;
    text-decoration: underline;
    display: inline-flex;
    align-items: center;
    gap: 0.3em;

    svg {
      width: 0.8em;
      height: 0.8em;
      vertical-align: middle;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
  width: 60vw;
  max-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;

  @media (max-width: 850px) {
    width: 90vw;
    max-width: 650px;
    padding: 0;
    justify-content: center !important;
  }
`;

export const FullHeightTextSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  width: 100vw;
  min-height: 70vh;
  padding: 10vh 5vw;
  box-sizing: border-box;
  text-align: left;

  @media (max-height: 700px) {
    min-height: 60vh;
    padding: 8vh 5vw;
  }

  @media (max-height: 500px) {
    min-height: 50vh;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    min-height: 0;
    padding: 6vh 5vw;
  }
`;

// Functional SingleImage component for AVIF/WebP/PNG support (import-based)
export const SingleImage = ({
  src,
  avif,
  webp,
  alt = '',
  width = '60vw',
  style = {},
  responsive = true,
  loading = 'lazy',
  decoding = 'async',
}) => {
  const normalizedSrc = normalizeAssetUrl(src);
  const normalizedAvif = normalizeAssetUrl(avif);
  const normalizedWebp = normalizeAssetUrl(webp);

  const responsiveStyle = {
    width,
    maxWidth: '1000px',
    height: 'auto',
    display: 'block',
    borderRadius: '24px',
    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
    ...style,
  };

  const mediaQuery = `@media (max-width: 1320px) { width: 90vw !important; max-width: 90vw !important; } @media (max-width: 850px) { width: 100vw !important; max-width: 100vw !important; border-radius: 0 !important; }`;

  return (
    <picture>
      {normalizedAvif && <source srcSet={normalizedAvif} type="image/avif" />}
      {normalizedWebp && <source srcSet={normalizedWebp} type="image/webp" />}
      {responsive && <style>{`.single-image-responsive { ${mediaQuery} }`}</style>}
      <img
        src={normalizedSrc}
        alt={alt}
        className={responsive ? 'single-image-responsive' : undefined}
        style={responsiveStyle}
        loading={loading}
        decoding={decoding}
      />
    </picture>
  );
};

export const RisoFlex = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`;

export const SingleGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.ColumnsSet};
  grid-template-rows: ${(props) => props.RowsSet};
  background-color: ${(props) => props.theme.backgroundTwo};
  height: 100vh;
  height: 100dvh;
  width: 100vw;

  @media (max-width: 500px) {
    grid-template-columns: 100vw;
    height: auto;
    padding-top: 2vh;
    padding-bottom: 2vh;
    grid-template-rows: auto 1fr auto;
  }
`;

export const DoubleImage = ({
  srcLeft,
  srcRight,
  avifLeft,
  webpLeft,
  avifRight,
  webpRight,
  altLeft = '',
  altRight = '',
  styleLeft = {},
  styleRight = {},
}) => {
  const leftStyle = {
    width: '50vw',
    height: 'auto',
    display: 'block',
    borderRadius: 0,
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    ...styleLeft,
  };
  const rightStyle = {
    width: '50vw',
    height: 'auto',
    display: 'block',
    borderRadius: 0,
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    ...styleRight,
  };
  return (
    <div style={{ display: 'flex', width: '100vw', height: 'auto', flexWrap: 'wrap', margin: 0, padding: 0 }}>
      <picture>
        {avifLeft && <source srcSet={avifLeft} type="image/avif" />}
        {webpLeft && <source srcSet={webpLeft} type="image/webp" />}
        <img
          src={srcLeft}
          alt={altLeft}
          style={leftStyle}
          loading="lazy"
          decoding="async"
        />
      </picture>
      <picture>
        {avifRight && <source srcSet={avifRight} type="image/avif" />}
        {webpRight && <source srcSet={webpRight} type="image/webp" />}
        <img
          src={srcRight}
          alt={altRight}
          style={rightStyle}
          loading="lazy"
          decoding="async"
        />
      </picture>
    </div>
  );
};
