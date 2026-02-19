import { FiArrowUpRight } from 'react-icons/fi';
import ProjectTopSection from '../../components/ProjectTopSection';

export const ProjectButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.32em;
  background: #111;
  color: #fff;
  font-weight: 600;
  font-size: 0.84rem;
  border: none;
  border-radius: 999px;
  padding: 0.36em 1.18em 0.36em 1.18em;
  margin-top: 0.7em;
  margin-bottom: 0.7em;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.2s;
  width: fit-content;
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  white-space: nowrap;
  &:hover {
    background: #333;
  }
`;
import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import { FullBg } from '../Access_Direct/AD';
import { RisoFlex, SingleImage, DoubleImage } from '../Access_Direct/AD';
import { SingleGrid } from '../Access_Direct/AD';

// Assets
import gigarocket from '../../assets/Giga—Macbookv2.png';
import gigarocketAvif from '../../assets/Giga—Macbookv2.avif';
import gigarocketWebp from '../../assets/Giga—Macbookv2.webp';
import iphonesAvif from '../../assets/iphones—Mockup.avif';
import iphonesWebp from '../../assets/iphones—Mockup.webp';
import iphonesPng from '../../assets/iphones—Mockup.png';
import mocks from '../../assets/Giga—mockup.jpg';
import mocksAvif from '../../assets/Giga—mockup.avif';
import mocksWebp from '../../assets/Giga—mockup.webp';
import messages from '../../assets/Messages—1920 x 1400.png';
import messagesAvif from '../../assets/Messages—1920 x 1400.avif';
import messagesWebp from '../../assets/Messages—1920 x 1400.webp';
import imac from '../../assets/iMac_2.jpg';
import imacAvif from '../../assets/iMac_2.avif';
import imacWebp from '../../assets/iMac_2.webp';
import ipadtwo from '../../assets/iPad2.jpg';
import ipadtwoAvif from '../../assets/iPad2.avif';
import ipadtwoWebp from '../../assets/iPad2.webp';
import dark from '../../assets/iPhone_2—Dark—Sq.jpg';
import darkAvif from '../../assets/iPhone_2—Dark—Sq.avif';
import darkWebp from '../../assets/iPhone_2—Dark—Sq.webp';
import light from '../../assets/LightPhone2—Sq.jpg';
import lightAvif from '../../assets/LightPhone2—Sq.avif';
import lightWebp from '../../assets/LightPhone2—Sq.webp';
import imactwo from '../../assets/iMac.jpg';
import imactwoAvif from '../../assets/iMac.avif';
import imactwoWebp from '../../assets/iMac.webp';
import about from '../../assets/About.png';
import aboutAvif from '../../assets/About.avif';
import aboutWebp from '../../assets/About.webp';
import guides from '../../assets/Guides.jpg';
import guidesAvif from '../../assets/Guides.avif';
import guidesWebp from '../../assets/Guides.webp';
import create from '../../assets/CreateNewPost.png';
import createAvif from '../../assets/CreateNewPost.avif';
import createWebp from '../../assets/CreateNewPost.webp';
import { FullHeightTextSection, TextContainer, TextContent } from '../Access_Direct/AD';



export const ProjectDetailsContainer = styled.div`
  width: 60vw;
  max-width: 1000px;
  margin: 0 auto 6vh;
  padding: 4vh 4vw 6vh;
  background-color: #f5f5f5;
  border-radius: 24px;

  @media (max-width: 1320px) {
    width: 90vw;
    max-width: 90vw;
  }

  @media (max-width: 850px) {
    width: 100vw;
    max-width: 100vw;
    padding: 4vh 4vw 6vh;
    border-radius: 0;
  }
`;
export const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  row-gap: 2rem;
  column-gap: 4rem;
  position: relative;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const ProjectHeader = styled.h3`
  color: ${(props) => props.theme.fontColor};
  font-size: 2.25rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.1rem;
  }

  @media (max-width: 850px) {
    font-size: 1.8rem;
  }
`;

export const ProjectSubtitle = styled.h6`
  color: ${(props) => props.theme.fontColor};
  font-size: 1.125rem;
  margin-top: 0.4rem;
  
  @media (max-width: 1320px) {
    font-size: 1rem;
  }
  @media (max-width: 850px) {
    font-size: 0.95rem;
  }
  line-height: 1.45;
  font-weight: 400;
  font-family: 'Space Grotesk', sans-serif;

  @media (max-width: 1320px) {
    font-size: 1.15rem;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
  }
`;

 
// export const Divider = styled.div`
//   grid-column: 1 / span 2;  /* span across both columns */
//   height: 1px;
//   background-color: #d3d3d3;
//   margin: 2rem 0;

//   @media (max-width: 850px) {
//     display: none; /* remove line on vertical stack */
//   }
// `;

export const GigaRocket = styled.img`
width: 60vw;
height: auto;
grid-row-start: ${(props) => props.RowStart};
grid-row-end: 8;
align-self: center;
justify-self: center;
grid-column-start: ${(props) => props.ColumnStart};
grid-column-end: ${(props) => props.ColumnEnd};
@media (max-width: 850px) {
    grid-row-start: 2;
    grid-row-end: 3;
      grid-column-start: 1;
      width: 95vw;

  }
`

export const TextSection = styled.h3`
grid-column-start: 2;
grid-column-end: 4;
grid-row-start: 2;
grid-row-end: 7;
font-size: ${(props) => props.Fontsize};
width: 80vw;
font-family: 'Space Grotesk', sans-serif;
justify-self: center;
align-self: center;
color: ${(props) => props.theme.fontColor};

@media (max-width: 1400px) {  
font-size: 1.8rem;
;}

@media (max-width: 850px){
    grid-column-start: 1;
    grid-row-end: 3;
    font-size: 1.2rem;
    width: 94vw;
    padding-left: 4vw;
    padding-right: 4vw;
    height: auto;
}
`

export const RisoItemtwo = styled.img.attrs({ loading: 'lazy', decoding: 'async' })`
width: 60vw;
box-shadow: 5px 10px 24px rgba(0, 0, 0, 0.3);
margin-top: 3vh;
margin-bottom: 3vh;
border-radius: 24px;

@media(max-width: 1400px) {
  width: 96vw;
  height: auto;
}

@media(max-width: 850px) {
  width: 96vw;
  height: auto;
}
`

export const BackgroundColor = styled.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`

export const StyledDiv = styled.div`
background-color: ${props => props.theme.backgroundTwo};
`

export const Cellphones = styled.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`
export const ProjectGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  padding: 8vh 4vw;

  @media (max-width: 1000px) {
    flex-direction: column;       /* stack vertically */
    justify-content: center;
    align-items: center;          /* centers the block */
    padding: 12vh 4vw 12vh 4vw;   /* extra top/bottom padding */
    gap: 3vh;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`;

export const ProjectImage = styled.img`
  width: ${(props) => props.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`;

export const ProjectTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${(props) => props.theme.fontColor};
  margin: 0;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`;

export const ProjectLink = styled.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;

export default function Giga() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <StyledDiv>
          <Seo
            {...projects.giga}
            sameAs={site.sameAs}
            keywords={projects.giga.keywords}
            jsonLd={{
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              headline: projects.giga.title,
              description: projects.giga.description,
              image: projects.giga.image,
              author: { '@type': 'Person', name: site.name, url: `${site.url}/about` },
              url: projects.giga.url,
              datePublished: projects.giga.datePublished,
              keywords: projects.giga.keywords,
            }}
          />

<ProjectTopSection
           title="Giga"
           imageBaseName="assets/Giga—Macbookv2"
           imageExt="png"
           imageAlt="Giga Macbook Mockup"
           imageWidth="38vw"
           buttons={[{ href: "https://gigaintelligence.com", label: "Visit Giga" }]}
/> 

<ProjectDetailsContainer>
  <ProjectDetails>
    <ProjectBlock>
      <ProjectHeader>Project Type</ProjectHeader>
      <ProjectSubtitle>UX/UI, Branding, Strategy</ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Digital Product</ProjectHeader>
      <ProjectSubtitle>
        Digital strategy platform used for data management, and private channel creation
      </ProjectSubtitle>
    </ProjectBlock>


    <ProjectBlock>
      <ProjectHeader>My Role</ProjectHeader>
      <ProjectSubtitle>
       Responsible for researching, ideating, and generating ideas for a cohesive Giga experience. Designed and prototyped the Giga system & Web App
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Timeframe</ProjectHeader>
      <ProjectSubtitle>1 1/2 years</ProjectSubtitle>
    </ProjectBlock>
  </ProjectDetails>
</ProjectDetailsContainer>


            <FullBg src={iphonesAvif} webp={iphonesWebp} fallback={iphonesPng} style={{ width: '100vw', maxWidth: '100vw', height: 'auto', objectFit: 'cover', display: 'block', margin: 0, padding: 0, borderRadius: 0 }} />

 <FullHeightTextSection style={{ backgroundColor: '#ffffff' }}>
  <TextContainer>
    <TextContent style={{ color: '#5D5D5D' }}>
      Giga is a startup focused on sharing experiences between its users. 
      Through a robust data management system, users can share information and learn about their favorite subjects
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

            <FullBg src={mocks} />

            <RisoFlex>
                <SingleImage src={messages} avif={messagesAvif} webp={messagesWebp} />
            </RisoFlex>

            <RisoFlex>
                <SingleImage src={create} avif={createAvif} webp={createWebp} />
            </RisoFlex>

            <FullBg src={imac} />

            <RisoFlex>
                <SingleImage src={ipadtwo} avif={ipadtwoAvif} webp={ipadtwoWebp} />
            </RisoFlex>

  <DoubleImage srcLeft={dark} avifLeft={darkAvif} webpLeft={darkWebp} srcRight={light} avifRight={lightAvif} webpRight={lightWebp} />

            <RisoFlex>
                <SingleImage src={imactwo} avif={imactwoAvif} webp={imactwoWebp} />
            </RisoFlex>
<RisoFlex style={{ paddingBottom: '7vh' }}>
  <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
    <SingleImage
      src={about}
      avif={aboutAvif}
      webp={aboutWebp}
      style={{
        width: '60vw',
        maxWidth: '420px',
        minHeight: 'auto',
        height: 'auto',
        borderRadius: 24,
        boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
      }}
    />
    <style>{`
      @media (max-width: 850px) {
        .about-me-img {
          width: 96vw !important;
          max-width: 96vw !important;
          min-height: 60vw !important;
          border-radius: 0 !important;
        }
      }
    `}</style>
  </div>
</RisoFlex>


<RisoFlex style={{ justifyContent: 'center' }}>
  <SingleImage src={guides} avif={guidesAvif} webp={guidesWebp} />
</RisoFlex>


            
      <FullHeightTextSection style={{ backgroundColor: 'black' }}>
  <TextContainer>
    <TextContent style={{ color: 'white', textAlign: 'center' }}>
      Founder — Rich Devlin<br />
      Lead Designer — Zachary MacTavish<br />
      Front-End Development — Xing Yi & Joel Fernando<br />
      Back-End Development — Rich Devlin
    </TextContent>
  </TextContainer>
</FullHeightTextSection>
        </StyledDiv>



    )
}
