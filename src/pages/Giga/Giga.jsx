import React, { useLayoutEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import ProjectTopSection from '../../components/ProjectTopSection';
import {
  FullBg, RisoFlex, SingleImage, DoubleImage, SingleGrid,
  FullHeightTextSection, TextContainer, TextContent,
} from '../../components/CaseStudyPrimitives';
import {
  ProjectButton, ProjectDetailsContainer, ProjectDetails, ProjectBlock,
  ProjectHeader, ProjectSubtitle, GigaRocket, TextSection, RisoItemtwo,
  BackgroundColor, StyledDiv, Cellphones, ProjectGrid, ProjectContent,
  ProjectImage, ProjectTitle, ProjectLink,
} from '../../components/GigaPrimitives';

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
            siteDefaults={site}
            jsonLd={{
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              headline: projects.giga.title,
              description: projects.giga.description,
              image: projects.giga.image,
              author: { '@type': 'Person', name: site.name, url: site.url },
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
