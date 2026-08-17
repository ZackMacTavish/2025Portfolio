import React from 'react';
import styled from 'styled-components';
import { ProjectGrid, ProjectContent, ProjectTitle, ProjectImage } from './GigaPrimitives';
import { ButtonsGrid } from './ButtonsGrid';
import { CaseStudyIntroCTA } from './CaseStudyIntroCTA';
import { FiArrowUpRight } from 'react-icons/fi';
import { findMobileVariant } from './mobileVariants';

function normalizeAssetUrl(url) {
  if (!url) return url;

  try {
    return encodeURI(decodeURI(url));
  } catch {
    return encodeURI(url);
  }
}

const TopSectionBackdrop = styled.section`
  position: relative;
  overflow: visible;
  background-color: ${(p) => p.theme.sectionPrimaryMuted};

  @media (max-width: 850px) {
    padding-bottom: 2.75rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0 0 -24vh;
    background:
      linear-gradient(180deg, ${(p) => p.theme.projectHeroWash} 0%, transparent 25%),
      linear-gradient(120deg, ${(p) => p.theme.projectHeroWash} 0%, ${(p) => p.theme.projectHeroWash} 20%, transparent 70%);
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 48%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 48%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const TopSectionSpacer = styled.div`
  width: 100%;
  height: 6rem;
  pointer-events: none;

  @media (max-width: 900px) {
    height: 7rem;
  }
`;

// 60vw-wide, left-aligned, responsive top section for project pages
const TopSectionContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 64rem;
  min-width: 320px;
  display: grid;
  grid-template-columns: ${(props) => props.$logoTile ? `${props.$tileWidth} auto` : '1fr 2fr'};
  align-items: center;
  justify-content: flex-start;
  gap: ${(props) => props.$logoTile ? '2rem' : 'clamp(2.5rem, 5vw, 5rem)'};
  margin: 0 auto;
  min-height: 20rem;
  padding: 0 1.5rem;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    max-width: 100vw;
    gap: 1.25rem;
    margin: 0 auto;
    min-height: 0;
    padding: 0 1.25rem;
  }
`;

const MetadataContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
`;

const MetadataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MetadataLabel = styled.p`
  margin: 0 0 0.5rem;
  color: ${(props) => props.theme.mutedText};
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const MetadataValue = styled.p`
  margin: 0;
  color: ${(props) => props.theme.fontColor};
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.5;
`;

const TopSectionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;

  @media (max-width: 850px) {
    width: 100%;
    align-items: center;
    text-align: center;
    gap: 0.625rem;
  }

  background: transparent;
  padding: 0;
`;

const TopSectionImage = styled.div`
  display: flex;
  justify-content: ${(props) => props.$logoTile ? 'flex-start' : 'center'};
  align-items: center;
  width: 100%;
  max-width: none;
  /* Prevent the flex container from collapsing to zero width on the first
     paint tick (which would make the image's aspect-ratio produce 0 height
     and cause a jump when flex allocates proper space). */
  min-width: ${(props) => props.$logoTile ? '0' : 'min(38vw, 100%)'};
  min-height: 0;
  background: transparent;
  padding: 0;
  @media (max-width: 1000px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 0.5rem;
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

const TopSectionPicture = styled.picture`
  display: block;
  width: 100%;
`;

const LogoTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: ${(props) => props.$enabled ? props.$imageWidth : 'none'};
  aspect-ratio: ${(props) => props.$enabled ? '1 / 1' : 'auto'};
  margin: ${(props) => props.$enabled ? '0' : '0 auto'};
  overflow: ${(props) => props.$enabled ? 'hidden' : 'visible'};
  border: ${(props) => props.$enabled ? `1px solid ${props.theme.border}` : '0'};
  border-radius: ${(props) => props.$enabled ? '18px' : '0'};
  background: ${(props) => props.$enabled ? props.theme.sectionBase : 'transparent'};
  transition: background-color 180ms ease, border-color 180ms ease;

  > picture {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 850px) {
    max-width: ${(props) => props.$enabled ? '176px' : 'none'};
    margin: 0 auto;
  }
`;

// Styled image for the top section
const TopSectionImageStyled = styled.img`
  width: ${(p) => p.$fillTile && p.$logoContentWidth ? p.$logoContentWidth : '100%'};
  max-width: ${(p) => p.$fillTile && p.$logoContentWidth ? p.$logoContentWidth : p.$imageWidth || '700px'};
  min-width: 0;
  height: auto;
  border-radius: 18px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  ${(props) => props.$fillTile ? `
    height: auto;
    border-radius: 0;
  ` : ''}
  /* Explicit aspect-ratio prevents layout shift when flex-basis starts at 0.
     The HTML width/height attributes alone aren't enough when the containing
     flex item starts at zero width, so we set it explicitly in CSS too. */
  ${(p) => (p.$naturalWidth && p.$naturalHeight
    ? `aspect-ratio: ${p.$naturalWidth} / ${p.$naturalHeight};`
    : '')}
  /* Opt-in: flip a monochrome black logo to white so it pops on the dark
     surface instead of disappearing into it. */
  ${(p) => (p.$invertOnDark && p.theme.name === 'dark' ? 'filter: invert(1);' : '')}
  @media (max-width: 1000px) {
    width: ${(p) => p.$fillTile && p.$logoContentWidth ? p.$logoContentWidth : '100%'};
    max-width: ${(p) => p.$fillTile && p.$logoContentWidth ? p.$logoContentWidth : '340px'};
    min-width: 0;
    margin: 0 auto;
  }
  @media (max-width: 850px) {
    width: ${(p) => p.$fillTile && p.$logoContentWidth ? p.$logoContentWidth : '100%'};
    max-width: ${(p) => p.$fillTile && p.$logoContentWidth ? p.$logoContentWidth : '176px'};
    min-width: 0;
    height: auto;
    margin-bottom: 0;
    object-fit: contain;
    border-radius: ${(p) => (p.$fillTile ? '0' : '18px')};
  }
`;

const TopSectionTitle = styled.h1`
  font-family: var(--font-display);
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
  background: ${(p) => p.theme.border};
  width: 48px;
  margin: 0.1em 0 0.3em 0;

  @media (max-width: 850px) {
    margin: 0 auto 0.2rem;
  }
`;

const TopSectionButton = styled(CaseStudyIntroCTA).attrs({ as: 'a' })`
  padding-inline: 1.5rem;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
`;

const TopSectionActions = styled(ButtonsGrid)`
  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0.125rem 0 0;

    ${TopSectionButton} {
      min-height: 44px;
      margin: 0;
    }
  }
`;

// ...existing code...

export default function ProjectTopSection({
  imageBaseName = null,
  imageSrc = '',
  imageAvif = null,
  imageWebp = null,
  imageAlt = '',
  imageWidth = '38vw',
  logoTile = false,
  logoContentWidth = null,
  buttons = [],
  metadata = [],
  divider = true,
  imageExt = 'jpg',
  title = '',
  // Intrinsic dimensions of the logo (in pixels). Passed through as `width`
  // and `height` HTML attributes so the browser can reserve the correct
  // aspect-ratio box before the image loads — preventing the top section
  // from collapsing to zero height and the next section from briefly
  // appearing above the fold.
  imageNaturalWidth = null,
  imageNaturalHeight = null,
  // Flip a monochrome (black) logo to white in dark mode so it stays legible
  // against dark surfaces.
  invertOnDark = false,
}) {
  const imageBasePath = imageBaseName
    ? `${imageBaseName.startsWith('assets/') ? '/' : '/src/'}${imageBaseName}`
    : null;
  const normalizedImageAvif = imageBasePath ? normalizeAssetUrl(`${imageBasePath}.avif`) : null;
  const normalizedImageWebp = imageBasePath ? normalizeAssetUrl(`${imageBasePath}.webp`) : null;
  const normalizedImageSrc = imageBasePath ? normalizeAssetUrl(`${imageBasePath}.${imageExt || 'jpg'}`) : null;
  const normalizedDirectAvif = normalizeAssetUrl(imageAvif);
  const normalizedDirectWebp = normalizeAssetUrl(imageWebp);
  const normalizedDirectSrc = normalizeAssetUrl(imageSrc);
  // The build only generates `-mobile-900` variants for images whose longest
  // edge exceeds 900px. Requesting a mobile source for a smaller image (e.g. the
  // 785px logo) points a matched <source> at a file that doesn't exist; a
  // <picture> does NOT fall through on a 404, so the image breaks on ≤900px.
  // Only look up mobile variants when we know one would have been generated.
  const hasMobileVariant =
    Math.max(imageNaturalWidth || 0, imageNaturalHeight || 0) > 900;
  const mobileAvif = hasMobileVariant ? findMobileVariant(normalizedImageAvif) : null;
  const mobileWebp = hasMobileVariant ? findMobileVariant(normalizedImageWebp) : null;
  const mobileSrc = hasMobileVariant ? findMobileVariant(normalizedImageSrc) : null;

  return (
    <TopSectionBackdrop>
      <TopSectionSpacer aria-hidden="true" />
      {metadata.length > 0 && (
        <MetadataContainer aria-label="Project details">
          <MetadataGrid>
            {metadata.map(({ label, value }) => (
              <div key={label}>
                <MetadataLabel>{label}</MetadataLabel>
                <MetadataValue>{value}</MetadataValue>
              </div>
            ))}
          </MetadataGrid>
        </MetadataContainer>
      )}
      <TopSectionContainer className="first" $logoTile={logoTile} $tileWidth={imageWidth}>
      <TopSectionImage $logoTile={logoTile}>
        <LogoTile $enabled={logoTile} $imageWidth={imageWidth}>
        {imageBaseName ? (
          <TopSectionPicture>
            {mobileAvif && <source srcSet={mobileAvif} type="image/avif" media="(max-width: 900px)" />}
            <source srcSet={normalizedImageAvif} type="image/avif" />
            {mobileWebp && <source srcSet={mobileWebp} type="image/webp" media="(max-width: 900px)" />}
            <source srcSet={normalizedImageWebp} type="image/webp" />
            {mobileSrc && <source srcSet={mobileSrc} media="(max-width: 900px)" />}
              <TopSectionImageStyled
                src={normalizedImageSrc}
                alt={imageAlt}
                $imageWidth={imageWidth}
                $fillTile={logoTile}
                $logoContentWidth={logoContentWidth}
                $invertOnDark={invertOnDark}
                $naturalWidth={imageNaturalWidth || undefined}
                $naturalHeight={imageNaturalHeight || undefined}
                width={imageNaturalWidth || undefined}
                height={imageNaturalHeight || undefined}
                fetchPriority="high"
                loading="eager"
                decoding="sync"
              />
          </TopSectionPicture>
        ) : (
          <TopSectionPicture>
            {normalizedDirectAvif && <source srcSet={normalizedDirectAvif} type="image/avif" />}
            {normalizedDirectWebp && <source srcSet={normalizedDirectWebp} type="image/webp" />}
            <TopSectionImageStyled
              src={normalizedDirectSrc}
              alt={imageAlt}
              $imageWidth={imageWidth}
              $fillTile={logoTile}
              $logoContentWidth={logoContentWidth}
              $invertOnDark={invertOnDark}
              width={imageNaturalWidth || undefined}
              height={imageNaturalHeight || undefined}
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </TopSectionPicture>
        )}
        </LogoTile>
      </TopSectionImage>
      <TopSectionText>
        <TopSectionTitle>{title}</TopSectionTitle>
        {divider && (
          <Divider />
        )}
        <TopSectionActions>
          {buttons.map(({ href, label }, i) => (
            <TopSectionButton key={i} href={href} target="_blank" rel="noopener noreferrer">
              {label} <FiArrowUpRight style={{ marginLeft: 6, fontSize: '1.2em' }} />
            </TopSectionButton>
          ))}
        </TopSectionActions>





      </TopSectionText>
    </TopSectionContainer>
    </TopSectionBackdrop>
  );
}



