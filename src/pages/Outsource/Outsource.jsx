import React, { useEffect } from 'react';
import styled from 'styled-components';
import { 
  Cellphones, ProjectDetails, ProjectHeader, ProjectSubtitle, ProjectDetailsContainer, ProjectBlock, RisoItemtwo, StyledDiv,
} from '../Giga/Giga';
import { FullBg } from '../COMPOSITION/Composition';
import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';
import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';
import { ProjectGrid,ProjectContent, ProjectTitle, ProjectLink, ProjectImage } from '../Giga/Giga';

// Images
import highpower from '../../assets/Onthemenu.jpg';
import iphones from '../../assets/Outsource—iphones.jpg';
import mocks from '../../assets/Outsource—pages.jpg';
import admac from '../../assets/Outsource_Imac_2.jpg';
import imac from '../../assets/Outsource—Macbook.png';
import ipadtwo from '../../assets/Outsource-ipad.jpg';
import dark from '../../assets/Outsource—iPhone_2—Darksq.jpg';
import light from '../../assets/OutsourceLightPhone2.jpg';
import imactwo from '../../assets/Outsource—iMac2.jpg';
import about from '../../assets/Leadership.jpg';
import photos from '../../assets/Group 55591@2x.jpg';
import photostwo from '../../assets/Group 55593@2x.jpg';
import photosthree from '../../assets/Group 55592@2x.jpg';
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

   <ProjectGrid>
  <ProjectContent>
    <ProjectTitle>Outsource</ProjectTitle>
    <ProjectLink href="https://www.outsourceconsultants.com/home" target="_blank" rel="noreferrer noopener">
      outsourceconsultants.com
    </ProjectLink>
    <ProjectLink href="https://www.decoderny.com/" target="_blank" rel="noreferrer noopener">
      decoderny.com
    </ProjectLink>
    <ProjectLink href="https://www.buildingowl.com/" target="_blank" rel="noreferrer noopener">
      buildingowl.com
    </ProjectLink>
    <ProjectLink href="https://www.osinyc.com/" target="_blank" rel="noreferrer noopener">
      osinyc.com
    </ProjectLink>
  </ProjectContent>
  <ProjectImage src={imac} Width="55vw" />
</ProjectGrid>

     <ProjectDetailsContainer>
  <ProjectDetails>
    <ProjectBlock>
      <ProjectHeader>Project Type</ProjectHeader>
      <ProjectSubtitle>UX/UI, Branding, Strategy</ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Product</ProjectHeader>
      <ProjectSubtitle>
        Print materials, websites, and Outsource's internal project tracking software.
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>My Role</ProjectHeader>
      <ProjectSubtitle>
        Responsible for reimagining brand logos, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and designing for all of Outsource's websites, and internal software.
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Timeframe</ProjectHeader>
      <ProjectSubtitle>1 1/2 years.</ProjectSubtitle>
    </ProjectBlock>
  </ProjectDetails>
</ProjectDetailsContainer>

   

      <FullBg src={iphones} />

        <FullHeightTextSection style={{ backgroundColor: 'white' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d' }}>
      Outsource is a company focused on expediting. My responsibility included being the Multimedia Designer on a variety of projects. I enjoyed redesigning their website, internal tools, and subsidiaries.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

      <FullBg src={mocks} />

      <RisoFlex>
        <RisoItemtwo src={highpower} Width="60vw" />
      </RisoFlex>

      <RisoFlex>
        <RisoItemtwo src={create} Width="60vw" />
      </RisoFlex>

      <FullBg src={admac} />

      <RisoFlex>
        <RisoItem src={ipadtwo} Width="65vw" />
      </RisoFlex>

      <Cellphones>
        <RisoItem src={dark} Width="50vw" />
        <RisoItem src={light} Width="50vw" />
      </Cellphones>

      <RisoFlex>
        <RisoItemtwo src={imactwo} Width="65vw" />
      </RisoFlex>

      <RisoFlex>
        <RisoItemtwo src={about} Width="65vw" style={{ boxShadow: '5px 10px 24px rgba(0,0,0,0.3)' }} />
      </RisoFlex>

      <RisoFlex style={{ backgroundColor:'#FEC748' }}>
        <RisoItem src={ceumacbook} Width="65vw" />
      </RisoFlex>

   <FullHeightTextSection>
  <TextContainer>
  
    <TextContent>
      At Outsource CEU, a subsidiary dedicated to building code education, I led the creation of a brand identity from the ground up and designed intuitive, user-focused interfaces for a potential web application, translating complex information into a clear and engaging digital experience.
    </TextContent>

  </TextContainer>
</FullHeightTextSection>

      <FullBg src={ceuiphones} />
      <FullBg src={ceumocks} />

      <RisoFlex>
        <RisoItemtwo src={aia} Width="60vw" />
      </RisoFlex>

      <FullBg src={ceuimac} />
      <FullBg src={bointro} />

<TextContainer style={{ backgroundColor: 'white', width: '100%' }}>
  <FullHeightTextSection style={{ backgroundColor: 'white' }}>
    <TextContent style={{ color: '#5d5d5d' }}>
      BuildingOwl is a technology that monitors and resolves critical building issues. I was responsible for expanding the existing brand identity, supporting marketing efforts, and improving the overall UX for a more intuitive user experience.
    </TextContent>
  </FullHeightTextSection>
</TextContainer>

      <FullBg src={bozoom} style={{ paddingTop:'2vh' }} />

      <RisoFlex>
        <RisoItem src={booklet} Width="65vw" />
      </RisoFlex>

      <FullBg src={flowmap} />

<img src={photos} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
<img src={photosthree} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />
<img src={photostwo} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />

      <RisoFlex>
        <RisoItem src={guidelines} Width="65vw" />
      </RisoFlex>

      <RisoFlex>
        <RisoItem src={twentyfive} Width="65vw" />
      </RisoFlex>

      <div
  style={{
    width: '100vw',
    height: '45vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '10vh',
    overflow: 'hidden',
  }}
>
  <FullBg src={branding} style={{ width: '100%', height: 'auto' }} />
</div>

      <FullBg src={guides} />

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