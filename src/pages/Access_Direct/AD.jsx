import lightWebp from '../../assets/ADLightPhone2.webp';
// Functional FullBg component for AVIF/WebP/PNG support (import-based)
export const FullBg = ({ src, avif, webp, alt = '', style = {} }) => {
  // src: imported fallback (png/jpg), avif/webp: imported modern formats
  // If avif/webp not provided, try to auto-derive from src
  let srcBase = '';
  if (typeof src === 'string') {
    srcBase = src.split('/').pop().replace(/\.[^.]+$/, '');
  }
  // If avif/webp not provided, try to require them based on srcBase
  // (User should import all formats for best reliability)
  return (
    <picture>
      {avif && <source srcSet={avif} type="image/avif" />}
      {webp && <source srcSet={webp} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        style={{
          width: '100vw',
          height: 'auto',
          margin: '3vh auto',
          display: 'block',
          backgroundColor: 'white',
          ...style
        }}
        loading="lazy"
        decoding="async"
      />
    </picture>
  );
};
import React, { useEffect } from 'react';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import styled from 'styled-components';
import { 
  Cellphones, 
  ProjectDetails, ProjectHeader, ProjectSubtitle, StyledDiv, 
  ProjectImage, ProjectDetailsContainer, ProjectBlock
} from '../Giga/Giga';
import ProjectTopSection from '../../components/ProjectTopSection';

// Assets (import all formats for each image)
import highpowerJpg from '../../assets/Highpower.jpg';
import highpowerAvif from '../../assets/Highpower.avif';
import highpowerWebp from '../../assets/Highpower.webp';
import iphonesJpg from '../../assets/AD—iphones.jpg';
import iphonesAvif from '../../assets/AD—iphones.avif';
import iphonesWebp from '../../assets/AD—iphones.webp';
import mocksJpg from '../../assets/AD—pages.jpg';
import mocksAvif from '../../assets/AD—pages.avif';
import mocksWebp from '../../assets/AD—pages.webp';
import admacJpg from '../../assets/AD—Macs.jpg';
import admacAvif from '../../assets/AD—Macs.avif';
import admacWebp from '../../assets/AD—Macs.webp';
import ipadtwoJpg from '../../assets/AD-ipad.jpg';
import ipadtwoAvif from '../../assets/AD-ipad.avif';
import ipadtwoWebp from '../../assets/AD-ipad.webp';
import darkJpg from '../../assets/ADiPhone_2—Dark.jpg';
import darkAvif from '../../assets/ADiPhone_2—Dark.avif';
import darkWebp from '../../assets/ADiPhone_2—Dark.webp';
import lightJpg from '../../assets/ADLightPhone2.jpg';
import lightAvif from '../../assets/ADLightPhone2.avif';
import imactwoPng from '../../assets/ADiMac.png';
import imactwoAvif from '../../assets/ADiMac.avif';
import imactwoWebp from '../../assets/ADiMac.webp';
import aboutPng from '../../assets/Group 375.png';
import aboutAvif from '../../assets/Group 375.avif';
import aboutWebp from '../../assets/Group 375.webp';
import guides2Png from '../../assets/Guides2.png';
import guides2Avif from '../../assets/Guides2.avif';
import guides2Webp from '../../assets/Guides2.webp';
import createPng from '../../assets/Group 274.png';
import createAvif from '../../assets/Group 274.avif';
import createWebp from '../../assets/Group 274.webp';

// --- Styled Components ---

export const ParagraphFour = styled.div`
  position: relative;
  padding-right: 6vw;       /* desktop padding */
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  width: 40vw;
  color: #a0a0a0;

  @media (max-width: 1770px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {
    width: 90vw;               /* block takes most of the width */
    max-width: 700px;          /* prevents it from being too wide */
    font-size: 1.6rem;
    margin: 4vh auto 0 auto;   /* centers the block horizontally */
    padding-right: 0;          /* remove desktop padding on mobile */
    text-align: left;          /* text stays left-aligned inside the block */
  }
`;

export const TextContent = styled.p`
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  font-size: clamp(1.2rem, 2.2vw, 1.8rem); /* slightly smaller, scales with viewport */
  max-width: 60ch; /* comfortable measure inside 60vw container */
  line-height: 1.55;
  margin: 0;
  text-align: left; /* always left-aligned */

  @media (max-width: 850px) {
    font-size: 1.6rem; /* slightly bigger on responsive */
    max-width: 90vw;
    line-height: 1.75;
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
  justify-content: center !important; /* vertical centering */
  align-items: center !important;     /* horizontal centering */
  width: 60vw; /* constrain to site grid */
  max-width: 1000px; /* slightly smaller cap for consistency across pages */
  margin: 0 auto; /* center within section */
  box-sizing: border-box;
  padding: 0; /* no extra horizontal padding so width is true 60vw */

  @media (max-width: 850px) {
    width: 90vw;
    max-width: 650px; /* slightly smaller mobile cap to match perceived size */
    padding: 0;
    justify-content: center !important;
  }
`;

export const FullHeightTextSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #191919;
  width: 100vw; /* full width */
  min-height: 70vh; /* align section height with landing page text section */
  padding: 10vh 5vw; /* match landing page spacing */
  box-sizing: border-box;
  text-align: left;

  /* Prevent section from feeling too tall on short screens */
  @media (max-height: 700px) {
    min-height: 60vh;
    padding: 8vh 5vw; /* keep comfortable spacing on shorter viewports */
  }

  @media (max-height: 500px) {
    min-height: 50vh;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    min-height: 70vh; /* similar perceived size on mobile */
    padding: 8vh 4vw; /* maintain visual balance on small screens */
  }
`;


// Replace styled.img RisoItem with functional component
// Unified RisoImage component (was RisoItem/RisoItemtwo)
// Functional SingleImage component for AVIF/WebP/PNG support (import-based)
export const SingleImage = ({ src, avif, webp, alt = '', width = '60vw', style = {} }) => {
  // src: imported fallback (png/jpg), avif/webp: imported modern formats
  // If avif/webp not provided, try to auto-derive from src
  let srcBase = '';
  if (typeof src === 'string') {
    srcBase = src.split('/').pop().replace(/\.[^.]+$/, '');
  }
  // If avif/webp not provided, try to require them based on srcBase
  // (User should import all formats for best reliability)
  // Responsive style: 95vw at <=1000px, else use width prop
  const responsiveStyle = {
    width,
    maxWidth: '1000px',
    height: 'auto',
    display: 'block',
    borderRadius: '24px',
    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
    ...style
  };

  // Inline style for media query
  const mediaQuery = `@media (max-width: 1320px) { width: 90vw !important; max-width: 90vw !important; } @media (max-width: 850px) { width: 100vw !important; max-width: 100vw !important; border-radius: 0 !important; }`;

  return (
    <picture>
      {avif && <source srcSet={avif} type="image/avif" />}
      {webp && <source srcSet={webp} type="image/webp" />}
      <style>{`.single-image-responsive { ${mediaQuery} }`}</style>
      <img
        src={src}
        alt={alt}
        className="single-image-responsive"
        style={responsiveStyle}
        loading="lazy"
        decoding="async"
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
  background-color: ${props => props.theme.backgroundTwo};
  height: 100vh;
  width: 100vw;

  @media (max-width: 500px) {
      grid-template-columns: 100vw;
      height: auto;
      padding-top: 2vh;
      padding-bottom: 2vh;
      grid-template-rows: auto 1fr auto ;
  }
`;

export const DoubleImage = ({ srcLeft, srcRight, altLeft = '', altRight = '', styleLeft = {}, styleRight = {} }) => (
  <div style={{ display: 'flex', width: '100vw', height: 'auto', flexWrap: 'wrap', margin: 0, padding: 0 }}>
    <img
      src={srcLeft}
      alt={altLeft}
      style={{
        width: '50vw',
        height: 'auto',
        display: 'block',
        borderRadius: 0,
        boxShadow: 'none',
        margin: 0,
        padding: 0,
        ...styleLeft
      }}
      loading="lazy"
      decoding="async"
    />
    <img
      src={srcRight}
      alt={altRight}
      style={{
        width: '50vw',
        height: 'auto',
        display: 'block',
        borderRadius: 0,
        boxShadow: 'none',
        margin: 0,
        padding: 0,
        ...styleRight
      }}
      loading="lazy"
      decoding="async"
    />
  </div>
);

export default function AccessDirect() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyledDiv>
    <Seo {...projects['access-direct']} sameAs={site.sameAs} keywords={projects['access-direct'].keywords} jsonLd={{
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      headline: projects['access-direct'].title,
      description: projects['access-direct'].description,
      image: projects['access-direct'].image,
      author: { '@type': 'Person', name: site.name, url: `${site.url}/about` },
      url: projects['access-direct'].url,
      datePublished: projects['access-direct'].datePublished,
      keywords: projects['access-direct'].keywords,
    }} />
    <ProjectTopSection
         title="Access Direct"
         imageBaseName="assets/AD—Macbook"
         imageExt="png"
         imageAlt="Access Direct Macbook Mockup"
         imageWidth="38vw"
         buttons={[
        { href: "https://accessdirect.com", label: "Visit Access Direct" }
      ]}
    />

      {/* Project Details */}
    <ProjectDetailsContainer>
  <ProjectDetails>
    <ProjectBlock>
      <ProjectHeader>Project Type</ProjectHeader>
      <ProjectSubtitle>
        UX/UI, Branding, Strategy, Front-end development
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Product</ProjectHeader>
      <ProjectSubtitle>
        Brand identity, print materials, and a website built with React.js
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>My Role</ProjectHeader>
      <ProjectSubtitle>
        Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and building the company website
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Timeframe</ProjectHeader>
      <ProjectSubtitle>4 years (Part-time)</ProjectSubtitle>
    </ProjectBlock>
  </ProjectDetails>
</ProjectDetailsContainer>

      {/* Sections */}
  <FullBg src={iphonesJpg} avif={iphonesAvif} webp={iphonesWebp} style={{ backgroundColor: 'white', width: '100vw', maxWidth: '100vw', height: 'auto', objectFit: 'cover', display: 'block', margin: 0, padding: 0, borderRadius: 0 }} />

      <FullHeightTextSection style={{ backgroundColor: 'white' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d' }}>
      Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

  <FullBg src={mocksJpg} avif={mocksAvif} webp={mocksWebp} style={{ backgroundColor: 'white', width: '100vw', maxWidth: '100vw', borderRadius: 0, margin: '0 auto' }} />

      <RisoFlex>
        <SingleImage src={highpowerJpg} avif={highpowerAvif} webp={highpowerWebp} />
      </RisoFlex>

      <RisoFlex>
        <SingleImage src={createPng} avif={createAvif} webp={createWebp} />
      </RisoFlex>

  <FullBg src={admacJpg} avif={admacAvif} webp={admacWebp} style={{ backgroundColor: 'white', width: '100vw', maxWidth: '100vw', borderRadius: 0, margin: '0 auto' }} />

      <RisoFlex>
          <SingleImage src={ipadtwoJpg} avif={ipadtwoAvif} webp={ipadtwoWebp} />
      </RisoFlex>

      <DoubleImage 
        srcLeft={darkJpg} 
        srcRight={lightJpg} 
        altLeft="AD iPhone 2 Dark" 
        altRight="AD Light Phone 2" 
        styleLeft={{}} 
        styleRight={{}} 
      />

      <RisoFlex>
        <SingleImage src={imactwoPng} avif={imactwoAvif} webp={imactwoWebp} />
      </RisoFlex>

      <RisoFlex>
        <SingleImage src={aboutPng} avif={aboutAvif} webp={aboutWebp} />
      </RisoFlex>

  <RisoFlex>
    <SingleImage src={guides2Png} avif={guides2Avif} webp={guides2Webp} />
  </RisoFlex>

      {/* Footer */}
      <FullHeightTextSection style={{ backgroundColor: 'black' }}>
        <TextContainer>
          <TextContent style={{ color: 'white', textAlign: 'center' }}>
            Founder — David Smith<br />
            Lead Designer — Zachary MacTavish<br />
            Website Development — Zachary MacTavish<br />
            Content Direction — Wendy Majewski, Alek Vasic
          </TextContent>
        </TextContainer>
      </FullHeightTextSection>
    </StyledDiv>
  );
}
