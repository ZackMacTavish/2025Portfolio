// Shared case-study primitives extracted from src/pages/Access_Direct/AD.jsx
// so they can be statically imported by other pages without pulling AD's
// route-level module into every page chunk.

import React from 'react';
import styled from 'styled-components';
import { findMobileVariant } from './mobileVariants';

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
  font-size: var(--type-narrative-size);
  max-width: 60ch;
  line-height: var(--type-narrative-leading);
  margin: 0;
  text-align: left;

  @media (max-width: 850px) {
    max-width: 90vw;
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
  const mobileAvif = findMobileVariant(normalizedAvif);
  const mobileWebp = findMobileVariant(normalizedWebp);
  const mobileSrc = findMobileVariant(normalizedSrc);

  // Grid-aligned model: responsive images render at the shared case-study
  // width (max 64rem) with 1.5rem gutters so every page image lines up on the
  // same left/right edge as the case-study content. The legacy `width` prop is
  // only honored when responsive={false} (e.g. absolutely-positioned card
  // backgrounds in PortfolioCardsSection).
  const pictureStyle = responsive
    ? {
        display: 'block',
        width: '100%',
        maxWidth: '64rem',
        margin: '0 auto',
        padding: '0 1.5rem',
        boxSizing: 'border-box',
      }
    : undefined;

  const responsiveStyle = responsive
    ? {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: '24px',
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
        ...style,
      }
    : {
        width,
        maxWidth: '1000px',
        height: 'auto',
        display: 'block',
        borderRadius: '24px',
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
        ...style,
      };

  return (
    <picture style={pictureStyle}>
      {mobileAvif && <source srcSet={mobileAvif} type="image/avif" media="(max-width: 900px)" />}
      {normalizedAvif && <source srcSet={normalizedAvif} type="image/avif" />}
      {mobileWebp && <source srcSet={mobileWebp} type="image/webp" media="(max-width: 900px)" />}
      {normalizedWebp && <source srcSet={normalizedWebp} type="image/webp" />}
      {mobileSrc && <source srcSet={mobileSrc} media="(max-width: 900px)" />}
      <img
        src={normalizedSrc}
        alt={alt}
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
  width: 100%;
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
    width: '50%',
    height: 'auto',
    display: 'block',
    borderRadius: 0,
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    ...styleLeft,
  };
  const rightStyle = {
    width: '50%',
    height: 'auto',
    display: 'block',
    borderRadius: 0,
    boxShadow: 'none',
    margin: 0,
    padding: 0,
    ...styleRight,
  };
  const mobileAvifLeft = findMobileVariant(avifLeft);
  const mobileWebpLeft = findMobileVariant(webpLeft);
  const mobileSrcLeft = findMobileVariant(srcLeft);
  const mobileAvifRight = findMobileVariant(avifRight);
  const mobileWebpRight = findMobileVariant(webpRight);
  const mobileSrcRight = findMobileVariant(srcRight);
  return (
    <div style={{ display: 'flex', width: '100%', maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem', boxSizing: 'border-box', height: 'auto', flexWrap: 'wrap' }}>
      <picture>
        {mobileAvifLeft && <source srcSet={mobileAvifLeft} type="image/avif" media="(max-width: 900px)" />}
        {avifLeft && <source srcSet={avifLeft} type="image/avif" />}
        {mobileWebpLeft && <source srcSet={mobileWebpLeft} type="image/webp" media="(max-width: 900px)" />}
        {webpLeft && <source srcSet={webpLeft} type="image/webp" />}
        {mobileSrcLeft && <source srcSet={mobileSrcLeft} media="(max-width: 900px)" />}
        <img
          src={srcLeft}
          alt={altLeft}
          style={leftStyle}
          loading="lazy"
          decoding="async"
        />
      </picture>
      <picture>
        {mobileAvifRight && <source srcSet={mobileAvifRight} type="image/avif" media="(max-width: 900px)" />}
        {avifRight && <source srcSet={avifRight} type="image/avif" />}
        {mobileWebpRight && <source srcSet={mobileWebpRight} type="image/webp" media="(max-width: 900px)" />}
        {webpRight && <source srcSet={webpRight} type="image/webp" />}
        {mobileSrcRight && <source srcSet={mobileSrcRight} media="(max-width: 900px)" />}
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
