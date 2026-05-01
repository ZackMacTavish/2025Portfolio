import React from 'react';
import styled from 'styled-components';
import { ProjectGrid, ProjectContent, ProjectTitle, ProjectImage, ProjectButton } from '../pages/Giga/Giga';
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
  padding-top: 6.5rem;
  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 850px) {
    flex-direction: column-reverse;
    width: 100vw;
    max-width: 100vw;
    gap: 2vh;
    padding: 5.5rem 2vw 0 2vw;
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
`;

const TopSectionImage = styled.div`
  flex: 2 1 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: none;
  min-width: 0;
  min-height: 0;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
  }
`;

// Styled image for the top section
const TopSectionImageStyled = styled.img`
  width: 100%;
  max-width: 700px;
  min-width: 220px;
  height: auto;
  border-radius: 18px;
  /* Removed box-shadow and background for a flat look */
  object-fit: cover;
  display: block;
  @media (max-width: 1000px) {
    width: 90vw;
    max-width: 98vw;
    min-width: 0;
    margin: 0 auto;
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

export default function ProjectTopSection({
  title,
  imageBaseName, // e.g. 'ThreePillars—Macbook' (new API)
  imageSrc, // existing API (string or imported module)
  imageExt = 'png',
  imageAlt = '',
    $imageWidth = '38vw',
  buttons = [],
  divider = true,
}) {
  const imageBasePath = imageBaseName
    ? `${imageBaseName.startsWith('assets/') ? '/' : '/src/'}${imageBaseName}`
    : null;
  const normalizedImageAvif = imageBasePath ? normalizeAssetUrl(`${imageBasePath}.avif`) : null;
  const normalizedImageWebp = imageBasePath ? normalizeAssetUrl(`${imageBasePath}.webp`) : null;
  const normalizedImageSrc = imageBasePath ? normalizeAssetUrl(`${imageBasePath}.${imageExt}`) : null;

  return (
    <TopSectionContainer>
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
              <TopSectionImageStyled src={normalizedImageSrc} alt={imageAlt} $imageWidth={$imageWidth} />
          </picture>
        ) : (
            <TopSectionImageStyled src={normalizeAssetUrl(imageSrc)} alt={imageAlt} $imageWidth={$imageWidth} />
        )}
      </TopSectionImage>
    </TopSectionContainer>
  );
}



