import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { GigaGridtext, ProjectDetails, ProjectHeader, ProjectSubtitle, ProjectDetailsContainer, ProjectBlock, RisoItemtwo, StyledDiv, TextLineone, TextLinetwo, TextSection } from '../Giga/Giga';
import { FullBg } from '../COMPOSITION/Composition';
import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';

// Assets
import LeysiLogo from '../../assets/Leysi-White-01.jpg';
import LeysiBlue from '../../assets/Leysi-LG-02.jpg';
import LeysiBluetwo from '../../assets/Leysi-LG-01.jpg';
import leysimockup2 from '../../assets/mobile-phone-1c.png';
import leysiphones from '../../assets/Leysi—iphones.jpg';
import leysiscreens from '../../assets/LeysiApp—Screens copy.jpg';
import leysiphones2 from '../../assets/Untitled-1800-x-1024-px-1500-x-1024-px.png';
import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';

// White background wrapper for Leysi content
const LeysiContainer = styled.div`
  background-color: white;
`;

export const FlexLeysi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  @media(max-width: 450px) {
    height: 40vh;
  }
`;

export const PitonScreens = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.ColumnsSet};
  grid-template-rows: ${(props) => props.RowsSet};
  height: 60vh;
  width: 100vw;

  @media (max-width: 850px) {
    grid-template-columns: 100vw;
    grid-template-rows: 5vw auto 5vw;
    height: auto;
  }
`;

export default function Ux() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <StyledDiv>
      {/* Leysi white background wrapper */}
      <LeysiContainer>

        {/* Logo Section */}
        <FlexLeysi>
          <RisoItemtwo
  style={{
    borderRadius: '10px',
    boxShadow: 'none'   // removes the shadow
  }}
  src={LeysiLogo}
  Width='60vw'
/>
        </FlexLeysi>

        {/* Project Details */}
     <ProjectDetailsContainer>
  <ProjectDetails>
    <ProjectBlock>
      <ProjectHeader style={{ color: 'rgb(46, 84, 78)' }}>Project Type</ProjectHeader>
      <ProjectSubtitle style={{ color: 'rgb(60, 60, 60)' }}>
        UX/UI, Branding, Strategy
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader style={{ color: 'rgb(46, 84, 78)' }}>Digital Product</ProjectHeader>
      <ProjectSubtitle style={{ color: 'rgb(60, 60, 60)' }}>
        An IOS mobile app
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader style={{ color: 'rgb(46, 84, 78)' }}>My Role</ProjectHeader>
      <ProjectSubtitle style={{ color: 'rgb(60, 60, 60)' }}>
        Responsible for creating the brand logo, colors, and utilizing Apple's HIG for the V1 wireframes for Leysi's IOS app launch.
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader style={{ color: 'rgb(46, 84, 78)' }}>Timeframe</ProjectHeader>
      <ProjectSubtitle style={{ color: 'rgb(60, 60, 60)' }}>
        3 months.
      </ProjectSubtitle>
    </ProjectBlock>
  </ProjectDetails>
</ProjectDetailsContainer>

        {/* Full Background Image */}
    <div style={{ width: '100vw', overflow: 'hidden' }}>
  <FullBg
    src={leysiphones}
    style={{
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      margin: 0,
      padding: 0
    }}
  />
</div>

        {/* Description */}
       <FullHeightTextSection style={{ backgroundColor: 'white' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d' }}>
      Leysi is the ultimate food platform designed for young adults. 
      Manage your spending and engage with friends while discovering deals at local vendors in your campus community.
      My responsibility included creating the brand identity and the initial app designs.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

        {/* Blue Background Sections */}
        <RisoFlex style={{ height: '85vh', backgroundColor: '#0A84E3' }}>
          <RisoItem src={LeysiBlue} Width='50vw' />
        </RisoFlex>

        <RisoFlex style={{ height: '60vh', backgroundColor: '#0A84E3' }}>
          <RisoItem src={LeysiBluetwo} Width='50vw' />
        </RisoFlex>

        {/* Screenshots */}
       <div style={{ width: '100vw', overflow: 'hidden' }}>
  <FullBg
    src={leysiscreens}
    style={{
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      margin: 0,
      padding: 0
    }}
  />
</div>

        <RisoFlex>
          <RisoItem src={leysimockup2} Width='50vw' />
        </RisoFlex>

        {/* Leysi Phones Two with full-width white background */}
        <RisoFlex style={{ backgroundColor: '#FFFFFF', width: '100vw', padding: '4vw 0' }}>
          <RisoItem src={leysiphones2} Width='50vw' />
        </RisoFlex>

        {/* Footer / Team Credits */}
        <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
          <TextLineone RowsSet="1" />
          <TextSection Fontsize='3.5rem' style={{ textAlign: 'center' }}>
            Founders — Leysi Team<br />
            Designers — Zachary MacTavish & Varfaj Team<br />
            Development — Varfaj Team
          </TextSection>
          <TextLinetwo />
        </GigaGridtext>

      </LeysiContainer>
    </StyledDiv>
  );
}