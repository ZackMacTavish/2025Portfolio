import React, { useLayoutEffect, useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import { Suspense, lazy } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
const Scene = lazy(() => import('../../components/Three/three'));
import me from '../../assets/Me.jpeg';
import meAvif from '../../assets/Me.avif';
import meWebp from '../../assets/Me.webp';
import meMobile600 from '../../assets/Me-mobile-600.jpg';
import meMobile900 from '../../assets/Me-mobile-900.jpg';
import meMobile600Avif from '../../assets/Me-mobile-600.avif';
import meMobile900Avif from '../../assets/Me-mobile-900.avif';
import meMobile600Webp from '../../assets/Me-mobile-600.webp';
import meMobile900Webp from '../../assets/Me-mobile-900.webp';

import quilthanging from '../../assets/hangingquilts.jpg';
import quilthangingAvif from '../../assets/hangingquilts.avif';
import quilthangingWebp from '../../assets/hangingquilts.webp';
import quilthangingMobile600 from '../../assets/hangingquilts-mobile-600.jpg';
import quilthangingMobile600Avif from '../../assets/hangingquilts-mobile-600.avif';
import quilthangingMobile600Webp from '../../assets/hangingquilts-mobile-600.webp';
import ResponsivePicture from '../../components/ResponsivePicture';
import { SingleImage } from '../../components/CaseStudyPrimitives';
import { ImageTextSplit } from '@zackmactavish/foundation';
// Project tile images (served via bundler from src/assets)
import leysiTile from '../../assets/LeysiApp—Screens copy.jpg';
import leysiTileAvif from '../../assets/LeysiApp—Screens copy.avif';
import leysiTileWebp from '../../assets/LeysiApp—Screens copy.webp';
import leysiTileMobile600 from '../../assets/LeysiApp—Screens copy-mobile-600.jpg';
import leysiTileMobile900 from '../../assets/LeysiApp—Screens copy-mobile-900.jpg';
import leysiTileMobile600Avif from '../../assets/LeysiApp—Screens copy-mobile-600.avif';
import leysiTileMobile900Avif from '../../assets/LeysiApp—Screens copy-mobile-900.avif';
import leysiTileMobile600Webp from '../../assets/LeysiApp—Screens copy-mobile-600.webp';
import leysiTileMobile900Webp from '../../assets/LeysiApp—Screens copy-mobile-900.webp';
import threePillarsTile from '../../assets/ThreePillars—pages.jpg';
import threePillarsTileAvif from '../../assets/ThreePillars—pages.avif';
import threePillarsTileWebp from '../../assets/ThreePillars—pages.webp';
import threePillarsTileMobile600 from '../../assets/ThreePillars—pages-mobile-600.jpg';
import threePillarsTileMobile900 from '../../assets/ThreePillars—pages-mobile-900.jpg';
import threePillarsTileMobile600Avif from '../../assets/ThreePillars—pages-mobile-600.avif';
import threePillarsTileMobile900Avif from '../../assets/ThreePillars—pages-mobile-900.avif';
import threePillarsTileMobile600Webp from '../../assets/ThreePillars—pages-mobile-600.webp';
import threePillarsTileMobile900Webp from '../../assets/ThreePillars—pages-mobile-900.webp';
import outsourceTile from '../../assets/BrandGuidelines—Mockup.jpg';
import outsourceTileAvif from '../../assets/BrandGuidelines—Mockup.avif';
import outsourceTileWebp from '../../assets/BrandGuidelines—Mockup.webp';
import outsourceTileMobile600 from '../../assets/BrandGuidelines—Mockup-mobile-600.jpg';
import outsourceTileMobile900 from '../../assets/BrandGuidelines—Mockup-mobile-900.jpg';
import outsourceTileMobile600Avif from '../../assets/BrandGuidelines—Mockup-mobile-600.avif';
import outsourceTileMobile900Avif from '../../assets/BrandGuidelines—Mockup-mobile-900.avif';
import outsourceTileMobile600Webp from '../../assets/BrandGuidelines—Mockup-mobile-600.webp';
import outsourceTileMobile900Webp from '../../assets/BrandGuidelines—Mockup-mobile-900.webp';
import gigaTile from '../../assets/iphones—Mockup copy.png';
import gigaTileAvif from '../../assets/iphones—Mockup copy.avif';
import gigaTileWebp from '../../assets/iphones—Mockup copy.webp';
import gigaTileMobile600 from '../../assets/iphones—Mockup copy-mobile-600.jpg';
import gigaTileMobile900 from '../../assets/iphones—Mockup copy-mobile-900.jpg';
import gigaTileMobile600Avif from '../../assets/iphones—Mockup copy-mobile-600.avif';
import gigaTileMobile900Avif from '../../assets/iphones—Mockup copy-mobile-900.avif';
import gigaTileMobile600Webp from '../../assets/iphones—Mockup copy-mobile-600.webp';
import gigaTileMobile900Webp from '../../assets/iphones—Mockup copy-mobile-900.webp';
// Responsive <picture> for project tiles
const ResponsiveProjectImage = ({ desktop, desktopAvif, desktopWebp, mobile600, mobile900, mobile600Avif, mobile900Avif, mobile600Webp, mobile900Webp, alt }) => (
  <picture>
    <source srcSet={mobile600Avif} type="image/avif" media="(max-width: 650px)" />
    <source srcSet={mobile900Avif} type="image/avif" media="(max-width: 900px)" />
    <source srcSet={desktopAvif} type="image/avif" />
    <source srcSet={mobile600Webp} type="image/webp" media="(max-width: 650px)" />
    <source srcSet={mobile900Webp} type="image/webp" media="(max-width: 900px)" />
    <source srcSet={desktopWebp} type="image/webp" />
    <source srcSet={mobile600} type="image/jpeg" media="(max-width: 650px)" />
    <source srcSet={mobile900} type="image/jpeg" media="(max-width: 900px)" />
    <img src={desktop} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
  </picture>
);
import card1 from '../../assets/Card1.webp';
import card1Avif from '../../assets/Card1.avif';
import card1Webp from '../../assets/Card1.webp';
import card1Mobile600Avif from '../../assets/Card1-mobile-600.avif';
import card1Mobile900Avif from '../../assets/Card1-mobile-900.avif';
import card1Mobile600Webp from '../../assets/Card1-mobile-600.webp';
import card1Mobile900Webp from '../../assets/Card1-mobile-900.webp';
import card2 from '../../assets/Card2.webp';
import card2Avif from '../../assets/Card2.avif';
import card2Webp from '../../assets/Card2.webp';
import card2Mobile600Avif from '../../assets/Card2-mobile-600.avif';
import card2Mobile900Avif from '../../assets/Card2-mobile-900.avif';
import card2Mobile600Webp from '../../assets/Card2-mobile-600.webp';
import card2Mobile900Webp from '../../assets/Card2-mobile-900.webp';
import card3 from '../../assets/Card3.webp';
import card3Avif from '../../assets/Card3.avif';
import card3Webp from '../../assets/Card3.webp';
import card3Mobile600Avif from '../../assets/Card3-mobile-600.avif';
import card3Mobile900Avif from '../../assets/Card3-mobile-900.avif';
import card3Mobile600Webp from '../../assets/Card3-mobile-600.webp';
import card3Mobile900Webp from '../../assets/Card3-mobile-900.webp';
import card4 from '../../assets/Card4.webp';
import card4Avif from '../../assets/Card4.avif';
import card4Webp from '../../assets/Card4.webp';
import card4Mobile600Avif from '../../assets/Card4-mobile-600.avif';
import card4Mobile900Avif from '../../assets/Card4-mobile-900.avif';
import card4Mobile600Webp from '../../assets/Card4-mobile-600.webp';
import card4Mobile900Webp from '../../assets/Card4-mobile-900.webp';
import card5 from '../../assets/Card5.webp';
import card5Webp from '../../assets/Card5.webp';
import card5Avif from '../../assets/Card5.avif';
import card6 from '../../assets/Card6.png';
import card6Avif from '../../assets/Card6.avif';
import card6Webp from '../../assets/Card6.webp';
// Static fallback for the Three.js wave on mobile / reduced-motion users
import waveStillJpg from '../../assets/BlackTurtleneck-popart-01.jpg';
import waveStillAvif from '../../assets/BlackTurtleneck-popart-01.avif';
import waveStillWebp from '../../assets/BlackTurtleneck-popart-01.webp';
import waveStillJpgMobile from '../../assets/BlackTurtleneck-popart-01-mobile-900.jpg';
import waveStillAvifMobile from '../../assets/BlackTurtleneck-popart-01-mobile-900.avif';
import waveStillWebpMobile from '../../assets/BlackTurtleneck-popart-01-mobile-900.webp';
import Socials from '../../components/Social Bar/Socials';
import PortfolioCardsSection from '../../components/PortfolioCardsSection';
import { FullHeightTextSection, TextContainer, TextContent } from '../../components/CaseStudyPrimitives';
import { Link } from 'react-router-dom';
import { FiLock } from 'react-icons/fi';
import ProcessExperience from './ProcessExperience';

const AgencyTextSection = styled(FullHeightTextSection)`
  @media (max-width: 850px) {
    padding-inline: 1rem;
  }
`;

const AgencyTextContainer = styled(TextContainer)`
  @media (max-width: 850px) {
    width: 100%;
    max-width: none;
  }
`;

const AgencyTextContent = styled(TextContent)`
  font-family: var(--font-display);
  font-size: var(--type-standalone-size);
  line-height: var(--type-standalone-leading);
  width: 100%;
  max-width: none;

  @media (max-width: 850px) {
    width: 100%;
    max-width: none;
  }
`;

const AgencyLink = styled.a`
  color: var(--text-muted, #5d5d5d);
  text-decoration: underline;
  text-decoration-thickness: 0.75px;
  text-underline-offset: 0.2em;
`;

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
  height: 100dvh; /* avoid Safari URL bar jumping the hero height */
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

  /* Mobile: blur(200px) + large keyframe animations destroy GPU on phones.
     Drop blur radius dramatically and stop the animation. */
  @media (max-width: 1000px) {
    &::before, &::after {
      filter: blur(80px);
      animation: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::before, &::after {
      animation: none;
    }
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


// AboutPicture as ResponsivePicture — sizing handled via CSS class so it stays
// responsive on resize/rotation and works during prerender.
const AboutPicture = (props) => (
  <ResponsivePicture
    desktop={me}
    desktopAvif={meAvif}
    desktopWebp={meWebp}
    mobile600={meMobile600}
    mobile900={meMobile900}
    mobile600Avif={meMobile600Avif}
    mobile900Avif={meMobile900Avif}
    mobile600Webp={meMobile600Webp}
    mobile900Webp={meMobile900Webp}
    alt="Zack MacTavish portrait"
    loading="eager"
    decoding="async"
    fetchPriority="high"
    className="about-picture-img"
    style={props.style}
  />
);

const PortraitContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 1;

  .about-picture-img {
    width: 21vw;
    height: 21vw;
    object-fit: cover;
    border-radius: 50%;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    display: block;
  }

  @media (max-width: 1000px) {
    width: 100%;
    display: grid;           /* grid centers perfectly even with subpixel widths */
    place-items: center;     /* center both horizontally and vertically */
  }
  @media (max-width: 700px) {
    margin-bottom: 3.5vh;

    .about-picture-img {
      width: 44vw;
      height: 44vw;
    }
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
  font-family: var(--font-display);
  font-weight: 500;
  font-size: var(--type-standalone-size);
  line-height: var(--type-standalone-leading);
  width: 32vw;
  max-width: 34rem;
  color: white;
  z-index: 1;

  @media (max-width: 1000px) {  
    width: 100%;
    max-width: 36rem;
    margin-top: 1vh;
    padding-bottom: 3vh;
    text-align: center;
  }

  @media (max-width: 850px) {
    padding-top: 2vh;
  }
`;

const HeroIntroduction = styled.span`
  font-weight: 400;
`;

const EditorialName = styled.span`
  font-weight: 600;
`;

const EditorialLink = styled.a`
  color: inherit;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 0.75px;
  text-underline-offset: 0.2em;
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
  position: relative;
  z-index: 2;
  width: 100%;
  background: ${(p) => p.theme.surface};
  /* Vertical rhythm only; horizontal alignment is owned by ProjectsInner so the
     cards track the same 64rem grid as the rest of the site. */
  padding: 14vh 0;
  box-sizing: border-box;

  @media (max-width: 850px) {
    padding: 7vh 0; /* tighter vertical breathing room on mobile */
  }

  @media (max-width: 600px) {
    padding: 5vh 0;
  }
`;

/* 64rem grid contract (matches the case study SectionContent + Giga cards) so
   this section lines up with every other content section instead of the legacy
   60vw/1100px Grid60 (which rendered ~786px wide and offset to the right). */
const ProjectsInner = styled.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 0 1.25rem;
  }
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
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1.15rem;
  color: ${(p) => p.theme.strongText};
  transition: color 160ms ease;
`;

const TileSubtitle = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: ${(p) => p.theme.mutedText};
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
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 3vw, 2rem);
  color: ${(p) => p.theme.strongText};
`;

const SectionSubtitle = styled.p`
  margin: 0;
  font-family: var(--font-body);
  font-size: 1rem;
  color: ${(p) => p.theme.mutedText};
  text-align: right;
  a {
    color: ${(p) => p.theme.mutedText};
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

  /* Keep stacked text readable without becoming visually oversized on smaller screens */
  @media (max-width: 1000px) {
    font-size: clamp(1rem, 2.7vw, 1.2rem);
    line-height: 1.65;
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

  /* Mobile: backdrop-filter over a WebGL canvas is very expensive on iOS.
     Use a solid translucent background instead. */
  @media (max-width: 1000px) {
    padding: 1.2rem 1.5rem;
    backdrop-filter: none;
    background: rgba(0, 0, 0, 0.55);
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
  font-family: var(--font-body);
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
  font-family: var(--font-body);
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
  font-family: var(--font-body);
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
  // Only run the WebGL wave on devices that can comfortably handle it:
  // a fine pointer (desktop/trackpad), at least 1001px wide, and the user
  // hasn't asked for reduced motion. Defaults to false so prerender / mobile
  // get the lightweight still image instead of a 1MB three.js chunk.
  const [canRunWave, setCanRunWave] = useState(false);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia(
      '(min-width: 1001px) and (pointer: fine) and (not (prefers-reduced-motion: reduce))'
    );
    const update = () => setCanRunWave(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hiddenForever && window.scrollY > 50) {
        setShowArrow(false);
        setHiddenForever(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      <Seo {...projects.landing} sameAs={site.sameAs} keywords={projects.landing.keywords || site.keywords} siteDefaults={site} />
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
            <HeroIntroduction>Hi, I'm <EditorialName>Zack MacTavish</EditorialName>,</HeroIntroduction>{' '}
            a product designer based in Philadelphia, PA. I'm currently shaping shopping experiences at Microsoft.
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

      <PortfolioCardsSection />

      {/* Module 2: Second Paragraph */}
      <AgencyTextSection style={{ backgroundColor: 'var(--surface-subtle, #f7f7f7)' }}>
        <AgencyTextContainer>
          <AgencyTextContent style={{ color: 'var(--text-muted, #5d5d5d)' }}>
            I’ve partnered with agencies including{' '}
            <AgencyLink
              href="https://www.publicisgroupe.com/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Publicis Groupe
            </AgencyLink>
            ,{' '}
            <AgencyLink
              href="https://prairieandforge.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prairie & Forge
            </AgencyLink>
            , and{' '}
            <AgencyLink
              href="https://varfaj.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Varfaj Partners
            </AgencyLink>
            {' '}on work spanning UX, product, and brand design. My background includes agency experience in New York City and formal design training in Chicago. Client collaborations have included Microsoft, Walmart, Seagate Technology, and Chip Ganassi Racing.
          </AgencyTextContent>
        </AgencyTextContainer>
      </AgencyTextSection>

      <ProcessExperience />

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
                ? 'My journey as a Product designer at Microsoft'
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
                ? "Shaping the shopping experience at Microsoft"
                : isThird
                ? 'A practical UX checklist for e‑commerce mobile apps'
                : isFourth
                ? 'Consistent spacing for scalable UI components'
                : isFifth
                ? 'A beginner\'s guide to CSS for designers'
                : 'A beginner\'s guide to HTML for designers';
              // For main project tiles, use ResponsiveProjectImage for the largest images
              let tileImage = null;
              if (isFirst) {
                tileImage = <ResponsiveProjectImage desktop={card1} desktopAvif={card1Avif} desktopWebp={card1Webp} mobile600={card1Mobile600Webp} mobile900={card1Mobile900Webp} mobile600Avif={card1Mobile600Avif} mobile900Avif={card1Mobile900Avif} mobile600Webp={card1Mobile600Webp} mobile900Webp={card1Mobile900Webp} alt="76 features in Figma to know — article cover" />;
              } else if (isSecond) {
                tileImage = <ResponsiveProjectImage desktop={card2} desktopAvif={card2Avif} desktopWebp={card2Webp} mobile600={card2Mobile600Webp} mobile900={card2Mobile900Webp} mobile600Avif={card2Mobile600Avif} mobile900Avif={card2Mobile900Avif} mobile600Webp={card2Mobile600Webp} mobile900Webp={card2Mobile900Webp} alt="My journey as a Product designer at Microsoft — article cover" />;
              } else if (isThird) {
                tileImage = <ResponsiveProjectImage desktop={card3} desktopAvif={card3Avif} desktopWebp={card3Webp} mobile600={card3Mobile600Webp} mobile900={card3Mobile900Webp} mobile600Avif={card3Mobile600Avif} mobile900Avif={card3Mobile900Avif} mobile600Webp={card3Mobile600Webp} mobile900Webp={card3Mobile900Webp} alt="12 features to consider when designing an e-commerce mobile app — article cover" />;
              } else if (isFourth) {
                tileImage = <ResponsiveProjectImage desktop={card4} desktopAvif={card4Avif} desktopWebp={card4Webp} mobile600={card4Mobile600Webp} mobile900={card4Mobile900Webp} mobile600Avif={card4Mobile600Avif} mobile900Avif={card4Mobile900Avif} mobile600Webp={card4Mobile600Webp} mobile900Webp={card4Mobile900Webp} alt="Designing in the 8pt grid system — article cover" />;
              } else if (isFifth) {
                tileImage = <ResponsiveProjectImage desktop={card6} desktopAvif={card6Avif} desktopWebp={card6Webp} mobile600={card6} mobile900={card6} mobile600Avif={card6Avif} mobile900Avif={card6Avif} mobile600Webp={card6Webp} mobile900Webp={card6Webp} alt="Card 6" />;
              } else if (isSixth) {
                tileImage = <ResponsiveProjectImage desktop={card5} desktopAvif={card5Avif} desktopWebp={card5Webp} mobile600={card5} mobile900={card5} mobile600Avif={card5Avif} mobile900Avif={card5Avif} mobile600Webp={card5Webp} mobile900Webp={card5Webp} alt="Card 5" />;
              }
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
                    <TileBg as="div" style={{ background: 'none', padding: 0 }}>
                      {tileImage}
                    </TileBg>
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
        mobileSrc={quilthangingMobile600}
        mobileAvif={quilthangingMobile600Avif}
        mobileWebp={quilthangingMobile600Webp}
        style={{ color: '#fff' }}
        textSize="var(--type-standalone-size)"
        textColor="#fff"
      >
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--type-standalone-size)', lineHeight: 'var(--type-standalone-leading)' }}>
          Outside of work, I live with my partner <EditorialLink href="https://oliviazitasmith.com" target="_blank" rel="noopener noreferrer">Olivia Smith</EditorialLink>, who is also an artist. In my own creative time, I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling.
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
            <ErrorBoundary fallback={null}>
              {canRunWave ? (
                <Suspense fallback={<div style={{ height: '50vh' }} />}> 
                  <Scene />
                </Suspense>
              ) : (
                <picture>
                  <source srcSet={waveStillAvifMobile} type="image/avif" media="(max-width: 900px)" />
                  <source srcSet={waveStillAvif} type="image/avif" />
                  <source srcSet={waveStillWebpMobile} type="image/webp" media="(max-width: 900px)" />
                  <source srcSet={waveStillWebp} type="image/webp" />
                  <source srcSet={waveStillJpgMobile} media="(max-width: 900px)" />
                  <img
                    src={waveStillJpg}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100vw', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </picture>
              )}
            </ErrorBoundary>
          </GridImage>
        </GridThemes>
      </ArtDiv>
    </div>
  );
};

export default LandingPage;