import React, { useEffect } from 'react';
import Seo from '../../components/SEO/Seo';
import { site, projects } from '../../data/metadata';
import styled from 'styled-components';
import { 
  Cellphones, 
  ProjectDetails, 
  ProjectHeader, ProjectSubtitle, RisoItemtwo, StyledDiv, 
  ProjectImage, ProjectDetailsContainer, ProjectBlock
} from '../Giga/Giga';
import ProjectTopSection from '../../components/ProjectTopSection';

// Assets
import highpower from '../../assets/Highpower.jpg';
import iphones from '../../assets/AD—iphones.jpg';
import mocks from '../../assets/AD—pages.jpg';
import admac from '../../assets/AD—Macs.jpg';
import imac from '../../assets/AD—Macbook.png';
import ipadtwo from '../../assets/AD-ipad.jpg';
import dark from '../../assets/iPhone_2—Dark.jpg';
import light from '../../assets/LightPhone2.jpg';
import imactwo from '../../assets/ADiMac.jpg';
import about from '../../assets/Group 375.jpg';
import photos from '../../assets/ADphotos1.jpg';
import photostwo from '../../assets/ADphotos2.jpg';
import photosthree from '../../assets/ADphotos3.jpg';
import guides from '../../assets/Guides2.jpg';
import create from '../../assets/Group 274.jpg';

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

export const RisoItem = styled.img`
  width: ${(props) => props.Width};
  max-width: 1000px;
  height: auto;
  @media (max-width: 1000px) { width: 90vw; padding-top: 3vh; }
  @media (max-width: 450px) { padding-top: 5vh; padding-bottom: 5vh; }
`;

export const RisoFlex = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundTwo};
  align-items: center;
  height: auto;
  padding: 3vh 0;
  width: 100vw;
`;

export const FullBg = styled.img`
width: 100vw;
height: auto;
margin-top: -1vh;
background-size: contain;
background-color: ${props => props.theme.backgroundTwo};

@media(max-width: 830px) {
    padding-top: 3vh;
}
`

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
         imageSrc={imac}
         imageAlt="Access Direct Macbook Mockup"
         imageWidth="44vw"
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
      <FullBg src={iphones} style={{ backgroundColor: 'white' }} />

      <FullHeightTextSection style={{ backgroundColor: 'white' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d' }}>
      Access Direct is a company focused on security solutions. I collaborated closely on the project, working on their brand identity, logos, and website. I served as the UI Designer and Webmaster, redesigning the site and building it using React.js.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

      <FullBg src={mocks} style={{ backgroundColor: 'white' }} />

      <RisoFlex>
        <RisoItemtwo src={highpower} Width='60vw' />
      </RisoFlex>

      <RisoFlex>
        <RisoItemtwo src={create} Width='60vw' style={{ marginBottom: '3vh' }} />
      </RisoFlex>

      <FullBg src={admac} style={{ backgroundColor: 'white' }} />

      <RisoFlex>
        <RisoItem src={ipadtwo} Width='65vw' />
      </RisoFlex>

      <Cellphones>
        <RisoItem Width='50vw' src={dark} />
        <RisoItem Width='50vw' src={light} />
      </Cellphones>

      <RisoFlex>
        <RisoItem src={imactwo} Width='65vw' />
      </RisoFlex>
<RisoFlex style={{ marginBottom: '5vh' }}>
  <RisoItem 
    src={about} 
    Width='65vw' 
    style={{ boxShadow: '5px 10px 24px rgba(0, 0, 0, 0.1)' }} 
  />
</RisoFlex>

   
      {/* Photo sections */}
    <img src={photosthree} alt="" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: 'white' }} />
<img src={photostwo} alt="" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: 'white' }} />
<img src={photos} alt="" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: 'white' }} />
<img src={guides} alt="" style={{ width: '100%', height: 'auto', display: 'block', backgroundColor: 'white' }} />

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