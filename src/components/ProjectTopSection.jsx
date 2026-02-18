import React from 'react';
import styled from 'styled-components';
import { ProjectGrid, ProjectContent, ProjectTitle, ProjectImage, ProjectButton } from '../pages/Giga/Giga';
import { FiArrowUpRight } from 'react-icons/fi';

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
  flex: 1.6 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;
`;

const TopSectionImage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  max-width: none;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
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
  return (
    <TopSectionContainer>
      <TopSectionText>
        <ProjectTitle style={{ fontSize: '2.8rem', marginBottom: '0.1em' }}>{title}</ProjectTitle>
        {divider && (
          <div style={{ height: '1px', background: '#e0e0e0', width: '48px', margin: '0.1em 0 0.3em 0' }} />
        )}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.3em 0.7em',
            marginBottom: '0.5em',
            maxWidth: '520px',
            width: 'auto',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          {buttons.map(({ href, label }, i) => (
            <ProjectButton key={i} href={href} target="_blank" rel="noopener noreferrer">
              {label} <FiArrowUpRight style={{ marginLeft: 6, fontSize: '1.2em' }} />
            </ProjectButton>
          ))}
        </div>
      </TopSectionText>
      <TopSectionImage>
        {imageBaseName ? (
          <picture>
            <source srcSet={`${imageBaseName.startsWith('assets/') ? '/' : '/src/'}${imageBaseName}.avif`} type="image/avif" />
            <source srcSet={`${imageBaseName.startsWith('assets/') ? '/' : '/src/'}${imageBaseName}.webp`} type="image/webp" />
              <TopSectionImageStyled src={`${imageBaseName.startsWith('assets/') ? '/' : '/src/'}${imageBaseName}.${imageExt}`} alt={imageAlt} $imageWidth={$imageWidth} />
          </picture>
        ) : (
            <TopSectionImageStyled src={imageSrc} alt={imageAlt} $imageWidth={$imageWidth} />
        )}
      </TopSectionImage>
    </TopSectionContainer>
  );
}

const TopSectionImageStyled = styled.img`
  max-height: 600px;
  width: ${({ $imageWidth }) => $imageWidth || '68vw'};
  min-width: 0;
  max-width: 100vw;
  height: auto;
  display: block;
  object-fit: contain;
  /* Use a responsive radius so it stays visible on large desktop widths */
  border-radius: clamp(18px, 1.2vw, 28px) !important; /* applied to the image itself */
  overflow: hidden; /* ensure corners clip even with scaling */
  margin: 0;        /* no extra spacing that could mask rounding */
  padding: 0;

  /* Make the top project image larger on mobile */
  @media (max-width: 1000px) {
    width: 92vw;          /* override any passed width for mobile */
    max-height: 75vh;     /* allow taller image while preserving aspect */
  }
`;
