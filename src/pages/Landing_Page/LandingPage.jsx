import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import { Suspense, lazy } from 'react';
const Scene = lazy(() => import('../../components/Three/three'));
import Grid60 from '../../components/Layout/Grid60';
import me from '../../assets/Me.jpeg';
import meAvif from '../../assets/Me.avif';
import meWebp from '../../assets/Me.webp';

import quilthanging from '../../assets/hangingquilts.jpg';
import quilthangingAvif from '../../assets/hangingquilts.avif';
import quilthangingWebp from '../../assets/hangingquilts.webp';
import { SingleImage } from '../Access_Direct/AD';
import { ImageTextSplit } from '@zackmactavish/foundation';
// Project tile images (served via bundler from src/assets)
import leysiTile from '../../assets/LeysiApp—Screens copy.jpg';
import leysiTileAvif from '../../assets/LeysiApp—Screens copy.avif';
import leysiTileWebp from '../../assets/LeysiApp—Screens copy.webp';
import threePillarsTile from '../../assets/ThreePillars—pages.jpg';
import threePillarsTileAvif from '../../assets/ThreePillars—pages.avif';
import threePillarsTileWebp from '../../assets/ThreePillars—pages.webp';
import pitonTile from '../../assets/Group 55618@2x.png';
import pitonTileAvif from '../../assets/Group 55618@2x.avif';
import pitonTileWebp from '../../assets/Group 55618@2x.webp';
import outsourceTile from '../../assets/BrandGuidelines—Mockup.jpg';
import outsourceTileAvif from '../../assets/BrandGuidelines—Mockup.avif';
import outsourceTileWebp from '../../assets/BrandGuidelines—Mockup.webp';
import gigaTile from '../../assets/iphones—Mockup copy.png';
import gigaTileAvif from '../../assets/iphones—Mockup copy.avif';
import gigaTileWebp from '../../assets/iphones—Mockup copy.webp';
import mediumLogo from '../../assets/medium.svg';
import card1 from '../../assets/Card1.webp';
import card1Avif from '../../assets/Card1.avif';
import card2 from '../../assets/Card2.webp';
import card2Avif from '../../assets/Card2.avif';
import card3 from '../../assets/Card3.webp';
import card3Avif from '../../assets/Card3.avif';
import card4 from '../../assets/Card4.webp';
import card4Avif from '../../assets/Card4.avif';
import card5 from '../../assets/Card5.webp';
import card5Avif from '../../assets/Card5.avif';
import card6 from '../../assets/Card6.png';
import card6Avif from '../../assets/Card6.avif';
import card6Webp from '../../assets/Card6.webp';
import Socials from '../../components/Social Bar/Socials';
import { FullHeightTextSection, TextContainer, TextContent } from '../Access_Direct/AD';
import { Link } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';

// Spotlight background animations
const spotlightLeftMove = keyframes`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`;

const spotlightRightMove = keyframes`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

// Landing section with spotlights
const LandingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  position: relative;
  overflow: hidden;
  padding: 0 5vw;
  box-sizing: border-box;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    filter: blur(200px);
    background: rgba(255, 255, 255, 0.3);
    z-index: 0;
  }

  &::before {
    top: 20%;
    left: 10%;
    animation: ${spotlightLeftMove} 35s ease-in-out infinite;
  }

  &::after {
    top: 40%;
    left: 65%;
    animation: ${spotlightRightMove} 40s ease-in-out infinite;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    min-height: 100dvh;
    padding: 12vh 5vw 6vh;
    gap: 2vh;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: visible;
  }

  @media (max-width: 768px) {
    padding: 10vh 5vw 5vh;
    gap: 1.5vh;
  }
`;




// AboutPicture as <picture>
const AboutPicture = (props) => (
  <picture>
    <source srcSet={meAvif} type="image/avif" />
    <source srcSet={meWebp} type="image/webp" />
    <img
      src={me}
      alt="Zack MacTavish portrait"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      className="about-picture-img"
      style={{
  width: '21vw',
  height: '21vw',
        objectFit: 'cover',
        borderRadius: '50%',
        flexShrink: 0,
        position: 'relative',
        zIndex: 1,
        display: 'block',
        ...props.style
      }}
    />
    <style>{`
      @media (max-width: 1000px) {
        .about-picture-img {
          width: 38vw !important;
          height: 38vw !important;
          min-width: 160px !important;
          min-height: 160px !important;
        }
      }
      @media (max-width: 700px) {
        .about-picture-img {
          width: 44vw !important;
          height: 44vw !important;
          min-width: 120px !important;
          min-height: 120px !important;
        }
      }
    `}</style>
  </picture>
);

const PortraitContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  @media (max-width: 1000px) {
    width: 100%;
    display: grid;           /* grid centers perfectly even with subpixel widths */
    place-items: center;     /* center both horizontally and vertically */
  }
  @media (max-width: 700px) {
    margin-bottom: 3.5vh;
  }
`;

const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 90vw;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
`;

const ParagraphTwo = styled.div`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 1.7rem;
  width: 32vw;
  color: white;
  z-index: 1;

  @media (max-width: 1400px) {  
    font-size: 1.3rem;
  }

  @media (max-width: 1000px) {  
    width: 100%;
    margin-top: 1vh;
    padding-bottom: 3vh;
    text-align: center;
  }

  @media (max-width: 850px) {
    font-size: 1.4rem;
    padding-top: 2vh;
  }

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

const SocialsWrapper = styled.div`
  position: relative;
  z-index: 10;
  margin-bottom: 2vh;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media (max-width: 700px) {
    margin-bottom: 0.7vh;
  }
`;

const ArrowWrapper = styled.div`
  position: fixed; /* desktop: center relative to the viewport */
  bottom: 6vh;     /* consistent viewport spacing from bottom */
  left: 0;
  right: 0;
  transform: none;
  display: grid;
  place-items: center; /* robust horizontal centering without relying on transforms */
  opacity: ${({ $visible }) => ($visible ? 0.8 : 0)};
  transition: opacity 0.6s ease;
  pointer-events: none;
  z-index: 2;      /* keep under intro overlay (which is z-index: 10) and above base content */

  /* mobile: keep the chevron inside the first section */
  @media (max-width: 1000px) {
    position: absolute; /* anchor to LandingDiv instead of viewport */
    bottom: 4vh;        /* inside the section's bottom */
    left: 0;
    right: 0;
    transform: none;
    display: grid;
    place-items: center;
  }
`;

const ArrowInner = styled.div`
  animation: ${bounce} 1.5s infinite ease-in-out; /* animate only Y so X-centering stays intact */
  will-change: transform;
`;

const Arrow = styled.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.35)); /* maintain visibility even near light backgrounds */
`;

// --- Projects Section Styles ---
const ProjectsSection = styled.section`
  width: 100vw;
  background: white;
  padding: 14vh 5vw; /* slightly increased spacing above/below */
  box-sizing: border-box;
`;

// Use shared Grid60 container to standardize the 60vw grid across sections
const ProjectsInner = styled(Grid60)`
  /* additional local overrides if needed */
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 3rem; /* extra space between rows */

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

/* ProjectCard moved below tile/title definitions to enable parent-hover targeting */

const Tile = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 16/10;
  border-radius: ${(p) => p.theme.radii.card};
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  background-color: #f5f5f5;
  text-decoration: none;
  transition: transform 180ms ease, box-shadow 180ms ease;
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.45);
  }
`;

const TileBg = styled.div`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(0.9);
  transition: filter 180ms ease;
`;

const TileOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.45), rgba(0,0,0,0.15));
  transition: background 180ms ease;
`;

const TileCaption = styled.div.attrs({ 'data-cursor': 'link', role: 'link' })`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 0.75rem; /* slightly below the image */
`;

const TileTitle = styled.h3`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  color: #111;
  transition: color 160ms ease;
`;

const TileSubtitle = styled.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  color: #5d5d5d;
`;

// Optional section header styles for re-use
const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: #111;
`;

const SectionSubtitle = styled.p`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  color: #5d5d5d;
  text-align: right;
  a {
    color: #5d5d5d;
    text-decoration: none;
    transition: color 160ms ease;
  }
  a:hover {
    color: ${(props) => props.theme.backgroundColor};
    text-decoration: none;
  }
`;

const LockCenter = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  pointer-events: none;
  color: #111;
`;

// Parent card wrapper to unify hover across image and caption
const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;

  &:hover ${Tile} {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(0,0,0,0.12);
  }

  &:hover ${TileBg} {
    filter: saturate(1.08) brightness(1.05);
  }

  &:hover ${TileOverlay} {
    background: linear-gradient(to top, rgba(0,0,0,0.25), rgba(0,0,0,0.08));
  }

  &:hover ${TileTitle} {
    color: ${(props) => props.theme.backgroundColor};
  }
`;

export const QuiltContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* center inner wrapper */
  width: 100%;
  padding: 8vh 0; /* add more vertical space */
  background-color: transparent;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 4vh 0;
    align-items: center;
  }
`;

// Inner wrapper to constrain width similar to cards (60vw, capped at 1100px)
export const QuiltInner = styled.div`
  width: 62vw; /* +2vw for a bit more room */
  max-width: 1100px; /* aligns with other sections' inner width */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.48fr 0.52fr; /* give ~2vw more space to text */
  align-items: center; /* vertically center text relative to image */
  justify-content: center;
  gap: calc(2rem + 16px); /* add ~16px more gap between image and text */

  @media (max-width: 1000px) {
    width: 90vw;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: center;
  }
`;

export const QuiltImage = styled.img.attrs({ loading: 'lazy', decoding: 'async' })`
  width: 100%;
  height: auto;
  display: block; /* avoid inline image spacing quirks */
  object-fit: contain;
  border-radius: ${(p) => p.theme.radii.card}; /* standardized card radius */
`;

export const QuiltText = styled(ParagraphTwo)`
  width: 100%;
  min-width: 0; /* allow wrapping within grid cell */
  padding-right: 0;
  font-size: clamp(1.05rem, 1.6vw, 1.5rem); /* slightly smaller for better line length */
  line-height: 1.6; /* improve readability */
  color: white;

  /* On responsive (image stacks above text), increase text size for readability */
  @media (max-width: 1000px) {
    font-size: 1.6rem;
    line-height: 1.75;
  }
`;

const ArtDiv = styled.div`
  overflow-y: hidden;
  width: 100vw;
`;

const GridThemes = styled.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100dvh; /* ensure full viewport height on mobile browsers */
  width: 100vw;
  position: relative; /* allow absolute overlay of header on mobile */

  @media (max-width: 800px) {
    grid-template-columns: 1fr; /* single column on mobile for full-width content */
    grid-template-rows: 90dvh; /* slightly less tall on mobile; header overlays */
    grid-template-areas: 'image';
    height: 90dvh; /* match container height to image */
    overflow: visible; /* prevent absolute header from being clipped */
  }
`;

const GridHeaderContainer = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 4;
  align-self: center;
  justify-self: start;
  z-index: 200;
  gap: 0.3rem;
  width: fit-content;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(4px);

  @media (max-width: 1000px) {
    padding: 1.2rem 1.5rem;
  }
  @media (max-width: 800px) {
    grid-column: 1;
    grid-row: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    margin-left: 0;
    padding: 1.5rem;
    text-align: center;
    justify-self: center;
    align-self: center;
    box-sizing: border-box;
  }
`;

const GridHeader = styled.h1`
  font-size: clamp(16px, 5.5vw, 3.8rem);
  line-height: 1.2;
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  text-shadow: 2px 2px 50px rgba(0, 0, 0, 1);
  margin: 0;

  @media (max-width: 1400px) {
    font-size: clamp(14px, 4.2vw, 3.2rem);
  }
  @media (max-width: 1200px) {
    font-size: clamp(14px, 5vw, 3rem);
  }
  @media (max-width: 1000px) {
    font-size: clamp(14px, 4.5vw, 2.8rem);
  }
  @media (max-width: 800px) {
    font-size: clamp(12px, 3.5vw, 2rem);
  }
`;

const GridSubtext = styled.p`
  font-size: clamp(14px, 2.5vw, 1.4rem);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Space Grotesk', sans-serif;
  text-shadow: 1px 1px 30px rgba(0, 0, 0, 0.8);
  margin: 0;
  font-weight: 400;

  @media (max-width: 1000px) {
    font-size: clamp(12px, 2.2vw, 1.2rem);
  }
  @media (max-width: 800px) {
    font-size: clamp(14px, 3.5vw, 1.1rem);
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.95), 1px 1px 8px rgba(0, 0, 0, 0.9);
  }
`;

const GridCTA = styled.a`
  display: inline-block;
  width: fit-content;
  padding: 0.85rem 2rem;
  background-color: white;
  color: #1a1a1a;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(13px, 1.8vw, 1.1rem);
  font-weight: 600;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 0.5rem;
  text-shadow: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1000px) {
    padding: 0.75rem 1.8rem;
    font-size: clamp(12px, 1.5vw, 1rem);
  }
  @media (max-width: 800px) {
    padding: 0.7rem 1.6rem;
    font-size: clamp(11px, 1.3vw, 0.9rem);
    margin-left: auto;
    margin-right: auto;
  }
`;

const GridImage = styled.div`
  display: grid; 
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 2;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  
  canvas {
    width: 100vw !important;
    height: 100% !important;
    margin-left: calc(-50vw + 50%) !important;
  }

  @media (max-width: 800px) {
    grid-area: image;
    width: 100vw;
    margin-left: 0;

    canvas {
      width: 100vw !important;
      margin-left: 0 !important;
    }
  }
`;

const LandingPage = ({ introDone = true }) => {
  const [showArrow, setShowArrow] = useState(false); // start hidden; reveal after intro animation
  const [hiddenForever, setHiddenForever] = useState(false);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hiddenForever && window.scrollY > 50) {
        setShowArrow(false);
        setHiddenForever(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hiddenForever]);

  // Reveal the chevron as soon as the intro overlay has completed
  useEffect(() => {
    if (!introDone) return;
    if (!hiddenForever) {
      setShowArrow(true);
    }
  }, [introDone, hiddenForever]);

  return (
    <div>
      <Seo {...projects.landing} sameAs={site.sameAs} keywords={projects.landing.keywords || site.keywords} />
      {/* Landing Section with About Picture + First Paragraph */}
      <LandingDiv>
        <PortraitContainer>
          <AboutPicture src={me} />
        </PortraitContainer>
        <ParagraphWrapper>
          <SocialsWrapper>
            <Socials />
          </SocialsWrapper>
          <ParagraphTwo $widthsize='47vw'>
          Hi, I'm Zack MacTavish, a product designer based in Philadelphia, PA. I'm currently shaping shopping experiences at Microsoft.
          </ParagraphTwo>
        </ParagraphWrapper>

        {/* Scroll arrow */}
        {!hiddenForever && introDone && (
          <ArrowWrapper $visible={showArrow}>
            <ArrowInner>
              <Arrow />
            </ArrowInner>
          </ArrowWrapper>
        )}
      </LandingDiv>

      {/* Projects Section (routing tiles) */}
      <ProjectsSection>
        <ProjectsInner>
          <ProjectsGrid>
            {/* Microsoft (locked) */}
            <ProjectCard>
              <Tile to="/Microsoft" aria-label="Microsoft project">
                {/* Slightly blurred background behind the lock */}
                <TileBg style={{ backgroundImage: "url('/assets/HP.png')", filter: 'saturate(0.9) blur(2px)', transform: 'scale(1.03)' }} />
                {/* white haze for locked tile */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.7)' }} />
                <LockCenter>
                  <FiLock size={48} />
                </LockCenter>
              </Tile>
              <TileCaption>
                <TileTitle>Microsoft</TileTitle>
                <TileSubtitle>Shopping ecosystem across Bing, Copilot, Windows, Outlook</TileSubtitle>
              </TileCaption>
            </ProjectCard>

            {/* Leysi */}
            <ProjectCard>
              <Tile to="/Ux" aria-label="Leysi project">
                <SingleImage src={leysiTile} avif={leysiTileAvif} webp={leysiTileWebp} alt="Leysi project tile" width="100%" responsive={false} style={{position:'absolute',inset:0,height:'100%',objectFit:'cover',zIndex:0,borderRadius:0,boxShadow:'none'}} />
                <TileOverlay />
              </Tile>
              <TileCaption>
                <TileTitle>Leysi</TileTitle>
                <TileSubtitle>Brand identity and iOS app for campus deals</TileSubtitle>
              </TileCaption>
            </ProjectCard>

            {/* ThreePillars */}
            <ProjectCard>
              <Tile to="/ThreePillars" aria-label="Three Pillars project">
                <SingleImage src={threePillarsTile} avif={threePillarsTileAvif} webp={threePillarsTileWebp} alt="Three Pillars project tile" width="100%" responsive={false} style={{position:'absolute',inset:0,height:'100%',objectFit:'cover',zIndex:0,borderRadius:0,boxShadow:'none'}} />
                <TileOverlay />
              </Tile>
              <TileCaption>
                <TileTitle>ThreePillars</TileTitle>
                <TileSubtitle>Recruiting site redesign and brand refresh</TileSubtitle>
              </TileCaption>
            </ProjectCard>

            {/* Piton */}
            <ProjectCard>
              <Tile to="/Piton" aria-label="Piton project">
                <SingleImage src={pitonTile} avif={pitonTileAvif} webp={pitonTileWebp} alt="Piton project tile" width="100%" responsive={false} style={{position:'absolute',inset:0,height:'100%',objectFit:'cover',zIndex:0,borderRadius:0,boxShadow:'none'}} />
                <TileOverlay />
              </Tile>
              <TileCaption>
                <TileTitle>Piton</TileTitle>
                <TileSubtitle>Product design and mobile interface work</TileSubtitle>
              </TileCaption>
            </ProjectCard>

            {/* Outsource */}
            <ProjectCard>
              <Tile to="/Outsource" aria-label="Outsource project">
                <SingleImage src={outsourceTile} avif={outsourceTileAvif} webp={outsourceTileWebp} alt="Outsource project tile" width="100%" responsive={false} style={{position:'absolute',inset:0,height:'100%',objectFit:'cover',zIndex:0,borderRadius:0,boxShadow:'none'}} />
                <TileOverlay />
              </Tile>
              <TileCaption>
                <TileTitle>Outsource</TileTitle>
                <TileSubtitle>Commerce and editorial design across surfaces</TileSubtitle>
              </TileCaption>
            </ProjectCard>

            {/* Giga */}
            <ProjectCard>
              <Tile to="/Giga" aria-label="Giga project">
                <SingleImage src={gigaTile} avif={gigaTileAvif} webp={gigaTileWebp} alt="Giga project tile" width="100%" responsive={false} style={{position:'absolute',inset:0,height:'100%',objectFit:'cover',zIndex:0,borderRadius:0,boxShadow:'none'}} />
                <TileOverlay />
              </Tile>
              <TileCaption>
                <TileTitle>Giga</TileTitle>
                <TileSubtitle>Cross-platform product design and experiments</TileSubtitle>
              </TileCaption>
            </ProjectCard>
          </ProjectsGrid>
        </ProjectsInner>
      </ProjectsSection>

      {/* Module 2: Second Paragraph */}
      <FullHeightTextSection style={{ backgroundColor: '#f7f7f7', padding: '10vh 5vw', minHeight: '70vh' }}>
        <TextContainer>
          <TextContent style={{ color: '#5d5d5d' }}>
            I’ve partnered with agencies including{' '}
            <a
              href="https://www.publicisgroupe.com/en"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#5d5d5d', textDecoration: 'underline' }}
            >
              Publicis Groupe
            </a>
            ,{' '}
            <a
              href="https://prairieandforge.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#5d5d5d', textDecoration: 'underline' }}
            >
              Prairie & Forge
            </a>
            , and{' '}
            <a
              href="https://varfaj.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#5d5d5d', textDecoration: 'underline' }}
            >
              Varfaj Partners
            </a>
            {' '}on work spanning UX, product, and brand design. My background includes agency experience in New York City and formal design training in Chicago. Client collaborations have included Microsoft, Walmart, Seagate Technology, and Chip Ganassi Racing.
          </TextContent>
        </TextContainer>
      </FullHeightTextSection>

      {/* Writing Section: Medium cards */}
      <ProjectsSection>
        <ProjectsInner>
          <SectionHeader>
            <SectionTitle>My writing</SectionTitle>
            <SectionSubtitle>
              <a href="https://medium.com/@zmactavish" target="_blank" rel="noopener noreferrer">
                See my Medium Portfolio
              </a>
            </SectionSubtitle>
          </SectionHeader>
          <ProjectsGrid>
            {[...Array(6)].map((_, i) => {
              const isFirst = i === 0;
              const isSecond = i === 1;
              const isThird = i === 2;
              const isFourth = i === 3;
              const isSixth = i === 5;
              const isFifth = i === 4;
              const linkUrl = isFirst
                ? 'https://medium.com/design-bootcamp/76-features-in-figma-to-know-7dbb35cdb5a7'
                : isSecond
                ? 'https://medium.com/design-bootcamp/my-journey-as-a-product-designer-at-microsoft-a5325be417b5'
                : isThird
                ? 'https://medium.com/design-bootcamp/12-features-to-consider-when-designing-an-e-commerce-mobile-app-740efbeee7c8'
                : isFourth
                ? 'https://medium.com/design-bootcamp/designing-in-the-8pt-grid-system-f3c1183ea6e8'
                : isFifth
                ? 'https://medium.com/@zmactavish/0643beac797a'
                : isSixth
                ? 'https://medium.com/@zmactavish/30-html-tags-to-know-b0a85b122ded'
                : 'https://medium.com/@zmactavish';
              const title = isFirst
                ? '76 features in Figma to know'
                : isSecond
                ? 'My journey as a Product designer at Microsoft.'
                : isThird
                ? '12 features to consider when building an E-commerce app'
                : isFourth
                ? 'Designing in the 8pt grid system'
                : isFifth
                ? '30 CSS styles to know'
                : isSixth
                ? '30 HTML tags to know'
                : 'Medium';
              const subtitle = isFirst
                ? 'A guide to all things Figma'
                : isSecond
                ? "What I've learned at Microsoft as a Product designer"
                : isThird
                ? 'A practical UX checklist for e‑commerce mobile apps'
                : isFourth
                ? 'Consistent spacing for scalable UI components'
                : isFifth
                ? 'A beginner\'s guide to CSS for designers'
                : 'A beginner\'s guide to HTML for designers';
              const bgStyle = isFirst
                ? {
                    backgroundImage: `url(${card1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }
                : isSecond
                ? {
                    backgroundImage: `url(${card2})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }
                : isThird
                ? {
                    backgroundImage: `url(${card3})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }
                : isFourth
                ? {
                    backgroundImage: `url(${card4})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }
                : isFifth
                ? {
                    backgroundImage: `url(${card6})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }
                : isSixth
                ? {
                    backgroundImage: `url(${card5})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }
                : {
                    backgroundImage: `url(${mediumLogo})`,
                    backgroundColor: '#fafafa',
                    backgroundSize: '40%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    filter: 'none',
                  };
              return (
                <ProjectCard key={`medium-card-${i}`}>
                  <Tile
                    to={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={
                      isFirst
                        ? 'Medium article: 76 features in Figma to know'
                        : isSecond
                        ? 'Medium article: My journey as a Product designer at Microsoft.'
                        : isThird
                        ? 'Medium article: 12 features to consider when building an E-commerce app'
                        : isFourth
                        ? 'Medium article: Designing in the 8pt grid system'
                        : isFifth
                        ? 'Medium article: 30 CSS styles to know'
                        : isSixth
                        ? 'Medium article: 30 HTML tags to know'
                        : `Medium writing card ${i + 1}`
                    }
                  >
                    <TileBg style={bgStyle} />
                    <TileOverlay />
                  </Tile>
                  <TileCaption>
                    <TileTitle>{title}</TileTitle>
                    <TileSubtitle>{subtitle}</TileSubtitle>
                  </TileCaption>
                </ProjectCard>
              );
            })}
          </ProjectsGrid>
        </ProjectsInner>
      </ProjectsSection>

      {/* Module 3: Quilt + Third Paragraph */}
      <ImageTextSplit
        imageSrc={quilthanging}
        imageAvif={quilthangingAvif}
        imageWebp={quilthangingWebp}
        imageAlt="Quilt hanging"
        textSize="1.4rem"
        textColor="#fff"
        style={{ color: '#fff' }}
      >
        <div style={{ lineHeight: '1.6' }}>
          Outside of work, I live with my partner <a href="https://oliviazitasmith.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Olivia Smith</a>, who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling.
        </div>
      </ImageTextSplit>

      {/* Module 4: Three.js Scene */}
      <ArtDiv>
        <GridThemes>
          <GridHeaderContainer>
            <GridHeader>Thanks for stopping by</GridHeader>
            <GridSubtext>I'm also an artist. Check out my art portfolio.</GridSubtext>
            <GridCTA href="https://zackmactavish.com" target="_blank" rel="noopener noreferrer">View Portfolio</GridCTA>
          </GridHeaderContainer>
          <GridImage>
            <Suspense fallback={<div style={{ height: '50vh' }} />}> 
              <Scene />
            </Suspense>
          </GridImage>
        </GridThemes>
      </ArtDiv>
    </div>
  );
};

export default LandingPage;