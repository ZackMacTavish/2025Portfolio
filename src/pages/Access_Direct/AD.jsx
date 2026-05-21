import React, { useEffect } from 'react';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import {
  FullBg,
  TextContent,
  TextContainer,
  FullHeightTextSection,
  SingleImage,
  RisoFlex,
  DoubleImage,
} from '../../components/CaseStudyPrimitives';
import {
  Cellphones,
  ProjectDetails, ProjectHeader, ProjectSubtitle, StyledDiv,
  ProjectImage, ProjectDetailsContainer, ProjectBlock,
} from '../../components/GigaPrimitives';
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
import lightWebp from '../../assets/ADLightPhone2.webp';
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
        { href: "https://access-direct.net", label: "Visit Access Direct" }
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
        avifLeft={darkAvif} 
        webpLeft={darkWebp} 
        srcRight={lightJpg} 
        avifRight={lightAvif} 
        webpRight={lightWebp} 
        altLeft="AD iPhone 2 Dark" 
        altRight="AD Light Phone 2" 
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
