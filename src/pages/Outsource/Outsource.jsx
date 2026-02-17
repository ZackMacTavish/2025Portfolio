import React, { useEffect } from 'react';
import styled from 'styled-components';
import { 
  Cellphones, ProjectDetails, ProjectHeader, ProjectSubtitle, ProjectDetailsContainer, ProjectBlock, StyledDiv,
} from '../Giga/Giga';
import { FullBg } from '../Access_Direct/AD';
import { RisoFlex, SingleImage, DoubleImage } from '../Access_Direct/AD';
import { FullHeightTextSection, TextContainer, TextContent } from '../Access_Direct/AD';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import { ProjectImage } from '../Giga/Giga';
import ProjectTopSection from '../../components/ProjectTopSection';
import { FiArrowUpRight } from 'react-icons/fi';

// Images
import highpower from '../../assets/Onthemenu.jpg';
const iphones = 'Outsource—iphones';
import mocks from '../../assets/Outsource—pages.jpg';
import admac from '../../assets/Outsource_Imac_2.jpg';
import imac from '../../assets/Outsource—Macbook.png';
import ipadtwo from '../../assets/Outsource-ipad.jpg';
import dark from '../../assets/Outsource—iPhone_2—Darksq.jpg';
import light from '../../assets/OutsourceLightPhone2.jpg';
import imactwo from '../../assets/Outsource—iMac2.jpg';
import about from '../../assets/Leadership.jpg';
import guides from '../../assets/Group 55604@2x.jpg';
import create from '../../assets/nyu.jpg';
import ceumacbook from '../../assets/Outsource—CEUMacbook.png';
import ceuiphones from '../../assets/CEU—iphones.jpg';
import ceumocks from '../../assets/Outsource—CEUpages.jpg';
import aia from '../../assets/AIA.jpg';
import ceuimac from '../../assets/CEU_Imac_2.jpg';
import bointro from '../../assets/BookADemo-01.jpg';
import bozoom from '../../assets/BO_Zoomface-01.png';
import booklet from '../../assets/BO—Booklet.png';
import flowmap from '../../assets/BOFlowMap—Long-01-01.jpg';
import guidelines from '../../assets/BrandGuidelines—Mockup.jpg';
import twentyfive from '../../assets/Outsource25-07.png';
import branding from '../../assets/Branding_LogoPatterns-01.png';


export default function Outsource() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

    <StyledDiv>
      <Seo {...projects.outsource} sameAs={site.sameAs} keywords={projects.outsource.keywords} jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        headline: projects.outsource.title,
        description: projects.outsource.description,
        image: projects.outsource.image,
        author: { '@type': 'Person', name: site.name, url: `${site.url}/about` },
        url: projects.outsource.url,
        datePublished: projects.outsource.datePublished,
        keywords: projects.outsource.keywords,
      }} />


      <ProjectTopSection
        title="Outsource"
        imageBaseName="assets/Outsource—Macbook"
        imageExt="png"
        imageAlt="Outsource Macbook Mockup"
    imageWidth="38vw"
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
  <SingleImage src={highpower} />
      </RisoFlex>

      <RisoFlex>
  <SingleImage src={create} />
      </RisoFlex>

      <FullBg src={admac} />

      <RisoFlex>
  <SingleImage src={ipadtwo} />
      </RisoFlex>

    <DoubleImage srcLeft={dark} srcRight={light} />

  <FullBg src={imactwo} style={{ marginTop: 0, paddingTop: 0 }} />

      <RisoFlex>
  <SingleImage src={about} />
      </RisoFlex>

      <RisoFlex style={{ backgroundColor:'#FEC748' }}>
        <SingleImage src={ceumacbook} style={{ boxShadow: 'none' }} />
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
  <SingleImage src={aia} />
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
  <SingleImage src={booklet} />
      </RisoFlex>

  <SingleImage src={flowmap} style={{ margin: '3vh auto', boxShadow: 'none' }} />



      <RisoFlex>
  <SingleImage src={guidelines} />
      </RisoFlex>

      <RisoFlex>
  <SingleImage src={twentyfive} />
      </RisoFlex>

      <RisoFlex>
        <SingleImage src={branding} />
      </RisoFlex>

      <RisoFlex>
        <SingleImage src={guides} />
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