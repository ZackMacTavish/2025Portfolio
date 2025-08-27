import React, { useEffect } from 'react';
import styled from 'styled-components';
import { 
  Cellphones, GigaGridtext, 
  ProjectDetails, 
  ProjectHeader, ProjectSubtitle, RisoItemtwo, StyledDiv, 
  TextLineone, TextLinetwo, TextSection, ProjectGrid,ProjectContent, ProjectTitle, ProjectLink, ProjectImage, ProjectDetailsContainer, ProjectBlock
} from '../Giga/Giga';
import { FullBg } from '../COMPOSITION/Composition';
import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';
import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';

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
    <ProjectGrid>
  <ProjectContent>
    <ProjectTitle>Access Direct</ProjectTitle>
    <ProjectLink href="https://access-direct.net" target="_blank" rel="noreferrer noopener">
      access-direct.net
    </ProjectLink>
  </ProjectContent>
  <ProjectImage src={imac} Width="55vw" />
</ProjectGrid>

      {/* Project Details */}
    <ProjectDetailsContainer>
  <ProjectDetails>
    <ProjectBlock>
      <ProjectHeader>Project Type</ProjectHeader>
      <ProjectSubtitle>
        UX/UI, Branding, Strategy, Front-end Development
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Product</ProjectHeader>
      <ProjectSubtitle>
        Print materials, and a website built with React.js
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>My Role</ProjectHeader>
      <ProjectSubtitle>
        Responsible for tidying up the brand logo, colors, creating print materials for tradeshows, social media, digital brochures and flyers, and designing/building the company website.
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Timeframe</ProjectHeader>
      <ProjectSubtitle>4 years (Part-time).</ProjectSubtitle>
    </ProjectBlock>
  </ProjectDetails>
</ProjectDetailsContainer>

      {/* Sections */}
      <FullBg src={iphones} style={{ backgroundColor: 'white' }} />

      <FullHeightTextSection style={{ backgroundColor: 'white' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d' }}>
      Access Direct is a company focused on security solutions. I serve as the UI Designer and Webmaster, 
      responsible for redesigning their website and building it using React.js.
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

      <RisoFlex>
        <RisoItem src={about} Width='65vw' style={{ boxShadow: '5px 10px 24px rgba(0, 0, 0, 0.3)' }} />
      </RisoFlex>

      <div style={{ display:'grid', height: '25vh', gridTemplateRows:'5vh 5vh 5vh 5vh 5vh', gridTemplateColumns:'4vw 60vw 32vw 4vw' }}>
        <TextLineone RowsSet="3" />
      </div>

      {/* Photo sections */}
      <FullBg src={photosthree} style={{ backgroundColor: 'white' }} />
      <FullBg src={photostwo} style={{ backgroundColor: 'white' }} />
      <FullBg src={photos} style={{ backgroundColor: 'white' }} />
      <FullBg src={guides} style={{ backgroundColor: 'white' }} />

      {/* Footer */}
      <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
        <TextLineone RowsSet="1" />
        <TextSection Fontsize='3.5rem' style={{ textAlign:'center' }}>
          Founder — David Smith <br />
          Lead Designer — Zachary MacTavish <br />
          Website Development — Zachary MacTavish <br />
          Content Direction — Wendy Majewski, Alek Vasic
        </TextSection>
        <TextLinetwo />
      </GigaGridtext>
    </StyledDiv>
  );
}