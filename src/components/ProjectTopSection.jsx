import React from 'react';
import styled from 'styled-components';
import { ProjectGrid, ProjectContent, ProjectTitle, ProjectImage, ProjectButton } from './GigaPrimitives';
import { ButtonsGrid } from './ButtonsGrid';
import { FiArrowUpRight } from 'react-icons/fi';

function normalizeAssetUrl(url) {
  if (!url) return url;

  try {
    return encodeURI(decodeURI(url));
  } catch {
    return encodeURI(url);
  }
}

// 60vw-wide, left-aligned, responsive top section for project pages
const TopSectionContainer = styled.div`
  width: 60vw;
  max-width: 1000px;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1vw;
  margin: 0 auto 4vh auto;
  padding-top: 0;
  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }
    @media (max-width: 850px) {
      flex-direction: column-reverse;
      align-items: stretch;
      width: 100vw;
      max-width: 100vw;
      gap: 2vh;
      margin: 0 auto 4vh auto;
      padding-left: 2vw;
      padding-right: 2vw;
      padding-top: 0;
    }
`;

const TopSectionText = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;

  @media (max-width: 850px) {
    width: min(40rem, 100%);
    align-items: center;
    text-align: center;
    gap: 0.75rem;
    }
      background: white;
      padding: 0;
`;

const TopSectionImage = styled.div`
  flex: 2 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: none;
  min-width: 0;
  min-height: 0;
  background: white;
  padding: 0;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
  }
  @media (max-width: 850px) {
    margin-top: 0;
    flex-basis: auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
    padding: 0;
  }
`;

// Styled image for the top section
const TopSectionImageStyled = styled.img`
  width: 100%;
  max-width: 700px;
  min-width: 0;
  height: auto;
  border-radius: 18px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  @media (max-width: 1000px) {
    width: 98vw;
    max-width: 98vw;
    min-width: 0;
    margin: 0 auto;
  }
  @media (max-width: 850px) {
    width: 100%;
    max-width: 100vw;
    min-width: 0;
    height: auto;
    margin-bottom: 0;
    object-fit: contain;
    border-radius: 18px;
  }
`;

const TopSectionTitle = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: ${(props) => props.theme.fontColor};
  margin: 0;
  font-size: clamp(2.2rem, 4vw + 0.6rem, 4.25rem);
  line-height: 0.96;
  text-wrap: balance;

  @media (max-width: 850px) {
    font-size: clamp(1.9rem, 8vw, 2.7rem);
    line-height: 1.02;
  }
`;

const Divider = styled.div`
  height: 1px;
  background: #e0e0e0;
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`;

// ...existing code...

export default function ProjectTopSection({
  imageBaseName = null,
  imageSrc = '',
  imageAvif = null,
  imageWebp = null,
  imageAlt = '',
  $imageWidth = '38vw',
  buttons = [],
  divider = true,
  imageExt = 'jpg',
  title = '',
}) {
  const imageBasePath = imageBaseName
    ? `${imageBaseName.startsWith('assets/') ? '/' : '/src/'}${imageBaseName}`
    : null;
  const normalizedImageAvif = imageBasePath ? normalizeAssetUrl(`${imageBasePath}.avif`) : null;
  const normalizedImageWebp = imageBasePath ? normalizeAssetUrl(`${imageBasePath}.webp`) : null;
  const normalizedImageSrc = imageBasePath ? normalizeAssetUrl(`${imageBasePath}.${imageExt || 'jpg'}`) : null;

  return (
    <>
      {/* Mobile nav spacer to push content below header */}
      <div className="mobile-nav-spacer" style={{ display: 'block', width: '100%', height: '12vh', minHeight: 0, padding: 0, margin: 0, background: 'transparent', zIndex: 0, pointerEvents: 'none', position: 'relative' }} />
      <TopSectionContainer className="first">
      <TopSectionText>
        <TopSectionTitle>{title}</TopSectionTitle>
        {divider && (
          <Divider />
        )}
        <ButtonsGrid>
          {buttons.map(({ href, label }, i) => (
            <ProjectButton key={i} href={href} target="_blank" rel="noopener noreferrer">
              {label} <FiArrowUpRight style={{ marginLeft: 6, fontSize: '1.2em' }} />
            </ProjectButton>
          ))}
        </ButtonsGrid>





      </TopSectionText>
      <TopSectionImage>
        {imageBaseName ? (
          <picture>
            <source srcSet={normalizedImageAvif} type="image/avif" />
            <source srcSet={normalizedImageWebp} type="image/webp" />
              <TopSectionImageStyled
                src={normalizedImageSrc}
                alt={imageAlt}
                $imageWidth={$imageWidth}
                fetchpriority="high"
                loading="eager"
                decoding="async"
              />
          </picture>
        ) : (
            <TopSectionImageStyled
              src={normalizeAssetUrl(imageSrc)}
              alt={imageAlt}
              $imageWidth={$imageWidth}
              fetchpriority="high"
              loading="eager"
              decoding="async"
            />
        )}
      </TopSectionImage>
    </TopSectionContainer>
    </>
  );
}



