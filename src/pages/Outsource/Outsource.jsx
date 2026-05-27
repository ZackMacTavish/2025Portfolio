import React, { useEffect } from 'react';
import {
  Cellphones, ProjectDetails, ProjectHeader, ProjectSubtitle,
  ProjectDetailsContainer, ProjectBlock, StyledDiv, ProjectImage,
} from '../../components/GigaPrimitives';
import {
  FullBg, RisoFlex, SingleImage, DoubleImage,
  FullHeightTextSection, TextContainer, TextContent,
} from '../../components/CaseStudyPrimitives';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import ProjectTopSection from '../../components/ProjectTopSection';
import { FiArrowUpRight } from 'react-icons/fi';

// Images

import highpower from '../../assets/Onthemenu.jpg';
import highpowerAvif from '../../assets/Onthemenu.avif';
import iphones from '../../assets/Outsource—iphones.jpg';
import mocks from '../../assets/Outsource—pages.jpg';
import admac from '../../assets/Outsource_Imac_2.jpg';
import ipadtwo from '../../assets/Outsource-ipad.jpg';
import ipadtwoAvif from '../../assets/Outsource-ipad.avif';
import ipadtwoWebp from '../../assets/Outsource-ipad.webp';
import dark from '../../assets/Outsource—iPhone_2—Darksq.jpg';
import darkAvif from '../../assets/Outsource—iPhone_2—Darksq.avif';
import darkWebp from '../../assets/Outsource—iPhone_2—Darksq.webp';
import light from '../../assets/OutsourceLightPhone2.jpg';
import lightAvif from '../../assets/OutsourceLightPhone2.avif';
import lightWebp from '../../assets/OutsourceLightPhone2.webp';
import imactwo from '../../assets/Outsource—iMac2.jpg';
import about from '../../assets/Leadership.jpg';
import aboutAvif from '../../assets/Leadership.avif';
import aboutWebp from '../../assets/Leadership.webp';
import guides from '../../assets/Group 55604@2x.jpg';
import guidesAvif from '../../assets/Group 55604@2x.avif';
import guidesWebp from '../../assets/Group 55604@2x.webp';
import create from '../../assets/nyu.jpg';
import createAvif from '../../assets/nyu.avif';
import createWebp from '../../assets/nyu.webp';
import ceumacbook from '../../assets/Outsource—CEUMacbook.png';
import ceumacbookAvif from '../../assets/Outsource—CEUMacbook.avif';
import ceumacbookWebp from '../../assets/Outsource—CEUMacbook.webp';
import ceuiphones from '../../assets/CEU—iphones.jpg';
import ceumocks from '../../assets/Outsource—CEUpages.jpg';
import aia from '../../assets/AIA.jpg';
import aiaAvif from '../../assets/AIA.avif';
import aiaWebp from '../../assets/AIA.webp';
import ceuimac from '../../assets/CEU_Imac_2.jpg';
import bointro from '../../assets/BookADemo-01.jpg';
import bozoom from '../../assets/BO_Zoomface-01.png';
import booklet from '../../assets/BO—Booklet.png';
import bookletAvif from '../../assets/BO—Booklet.avif';
import bookletWebp from '../../assets/BO—Booklet.webp';
import flowmap from '../../assets/BOFlowMap—Long-01-01.jpg';
import flowmapAvif from '../../assets/BOFlowMap—Long-01-01.avif';
import flowmapWebp from '../../assets/BOFlowMap—Long-01-01.webp';
import guidelines from '../../assets/BrandGuidelines—Mockup.jpg';
import guidelinesAvif from '../../assets/BrandGuidelines—Mockup.avif';
import guidelinesWebp from '../../assets/BrandGuidelines—Mockup.webp';
import twentyfive from '../../assets/Outsource25-07.png';
import twentyfiveAvif from '../../assets/Outsource25-07.avif';
import twentyfiveWebp from '../../assets/Outsource25-07.webp';
import branding from '../../assets/Branding_LogoPatterns-01.png';
import brandingAvif from '../../assets/Branding_LogoPatterns-01.avif';
import brandingWebp from '../../assets/Branding_LogoPatterns-01.webp';


export default function Outsource() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <StyledDiv>
      <Seo {...projects.outsource} sameAs={site.sameAs} keywords={projects.outsource.keywords} siteDefaults={site} jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        headline: projects.outsource.title,
        description: projects.outsource.description,
        image: projects.outsource.image,
        author: { '@type': 'Person', name: site.name, url: site.url },
        url: projects.outsource.url,
        datePublished: projects.outsource.datePublished,
        keywords: projects.outsource.keywords,
      }} />


      <ProjectTopSection
        title="Outsource"
        imageBaseName="assets/Outsource—Macbook"
        imageExt="png"
        imageNaturalWidth={1469}
        imageNaturalHeight={1010}
        buttons={[
          { href: "https://www.outsourceconsultants.com/home", label: "Visit Outsource" },
          { href: "https://www.decoderny.com/", label: "Visit DecoderNY" },
          { href: "https://www.buildingowl.com/", label: "Visit BuildingOwl" },
          { href: "https://www.osinyc.com/", label: "Visit OSINYC" },
        ]}
      />

     <ProjectDetailsContainer>
  <ProjectDetails>
    <ProjectBlock>
      <ProjectHeader>Project Type</ProjectHeader>
      <ProjectSubtitle>UX/UI, Branding, Strategy</ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Product</ProjectHeader>
      <ProjectSubtitle>
        I managed print materials, multiple websites and subsidiaries, as well as the UX of Outsource’s internal project tracking software
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>My Role</ProjectHeader>
      <ProjectSubtitle>
        Responsible for reimagining brand logos, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and designing for all of Outsource's websites, and internal software
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Timeframe</ProjectHeader>
      <ProjectSubtitle>1 1/2 years</ProjectSubtitle>
    </ProjectBlock>
  </ProjectDetails>
</ProjectDetailsContainer>

   

  <FullBg src={iphones} />

        <FullHeightTextSection style={{ backgroundColor: 'white' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d' }}>
    Outsource is a company focused on expediting. My responsibility included being the Multimedia Designer on a variety of projects. I worked in their Manhattan office as part of the marketing team, where I enjoyed redesigning their websites, internal tools, subsidiaries, and other print and digital materials.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

  <FullBg src={mocks} />

      <RisoFlex>
        <SingleImage src={highpower} avif={highpowerAvif} />
      </RisoFlex>

      <RisoFlex>
        <SingleImage src={create} avif={createAvif} webp={createWebp} />
      </RisoFlex>

      <FullBg src={admac} />

      <RisoFlex>
        <SingleImage src={ipadtwo} avif={ipadtwoAvif} webp={ipadtwoWebp} />
      </RisoFlex>

    <DoubleImage srcLeft={dark} avifLeft={darkAvif} webpLeft={darkWebp} srcRight={light} avifRight={lightAvif} webpRight={lightWebp} />

  <FullBg src={imactwo} style={{ marginTop: 0, paddingTop: 0 }} />

      <RisoFlex>
        <SingleImage src={about} avif={aboutAvif} webp={aboutWebp} />
      </RisoFlex>

      <RisoFlex style={{ backgroundColor:'#FEC748' }}>
        <SingleImage src={ceumacbook} avif={ceumacbookAvif} webp={ceumacbookWebp} style={{ boxShadow: 'none' }} />
      </RisoFlex>

   <FullHeightTextSection>
  <TextContainer>
  
    <TextContent>
    At Outsource CEU, a subsidiary dedicated to building code education, I led the creation of a brand identity from the ground up and designed intuitive, user-focused interfaces, translating complex information into a clear and engaging digital experience. I also developed brochures and social media posts to support the brand and communicate educational content effectively.”
    </TextContent>

  </TextContainer>
</FullHeightTextSection>

  <FullBg src={ceuiphones} style={{ marginBottom: 0, paddingBottom: 0 }} />
  <FullBg src={ceumocks} style={{ marginTop: 0, paddingTop: 0 }} />

      <RisoFlex>
        <SingleImage src={aia} avif={aiaAvif} webp={aiaWebp} />
      </RisoFlex>

  <FullBg src={ceuimac} style={{ marginBottom: 0, paddingBottom: 0 }} />
  <FullBg src={bointro} style={{ marginTop: 0, paddingTop: 0 }} />

<TextContainer style={{ backgroundColor: 'white' }}>
  <FullHeightTextSection style={{ backgroundColor: 'white' }}>
    <TextContent style={{ color: '#5d5d5d' }}>
      BuildingOwl is a technology that monitors and resolves critical building issues. I was responsible for expanding the existing brand identity, supporting marketing efforts, and improving the overall UX for a more intuitive user experience.
    </TextContent>
  </FullHeightTextSection>
</TextContainer>

  <FullBg src={bozoom} />

      <RisoFlex>
        <SingleImage src={booklet} avif={bookletAvif} webp={bookletWebp} />
      </RisoFlex>

  <SingleImage src={flowmap} avif={flowmapAvif} webp={flowmapWebp} style={{ margin: '3vh auto', boxShadow: 'none' }} />



      <RisoFlex>
        <SingleImage src={guidelines} avif={guidelinesAvif} webp={guidelinesWebp} />
      </RisoFlex>

      <RisoFlex>
        <SingleImage src={twentyfive} avif={twentyfiveAvif} webp={twentyfiveWebp} />
      </RisoFlex>

      <RisoFlex>
        <SingleImage src={branding} avif={brandingAvif} webp={brandingWebp} />
      </RisoFlex>

      <RisoFlex>
        <SingleImage src={guides} avif={guidesAvif} webp={guidesWebp} />
      </RisoFlex>

   <FullHeightTextSection style={{ backgroundColor: 'black' }}>
  <TextContainer>
    <TextContent style={{ color: 'white', textAlign: 'center', lineHeight: 1.5 }}>
      Founder — Diego Caballero<br />
      Designers — Zachary MacTavish & Elvis Cruz<br />
      Development — Vinny Nuthakki & Samuel Karkash<br />
      Marketing — Kaela Fanning & Zoe Hutzler
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

    </StyledDiv>
  );
}