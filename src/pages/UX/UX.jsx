import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import {  ProjectDetails, ProjectHeader, ProjectSubtitle, ProjectDetailsContainer, ProjectBlock, RisoItemtwo, StyledDiv } from '../../components/GigaPrimitives';
import { FullBg, RisoFlex, SingleImage, DoubleImage } from '../../components/CaseStudyPrimitives';

// Assets
import LeysiLogo from '../../assets/Leysi-White-01.jpg';
import LeysiBlue from '../../assets/Leysi-LG-02.jpg';
import LeysiBlueAvif from '../../assets/Leysi-LG-02.avif';
import LeysiBlueWebp from '../../assets/Leysi-LG-02.webp';
import LeysiBluetwo from '../../assets/Leysi-LG-01.jpg';
import LeysiBluetwoAvif from '../../assets/Leysi-LG-01.avif';
import LeysiBluetwoWebp from '../../assets/Leysi-LG-01.webp';
import leysimockup2 from '../../assets/mobile-phone-1c.png';
import leysimockup2Avif from '../../assets/mobile-phone-1c.avif';
import leysimockup2Webp from '../../assets/mobile-phone-1c.webp';
import leysiphonesAvif from '../../assets/Leysi—iphones.avif';
import leysiphonesWebp from '../../assets/Leysi—iphones.webp';
import leysiphonesJpg from '../../assets/Leysi—iphones.jpg';
import leysiscreens from '../../assets/LeysiApp—Screens copy.jpg';
import leysiphones2 from '../../assets/Untitled-1800-x-1024-px-1500-x-1024-px.png';
import leysiphones2Avif from '../../assets/Untitled-1800-x-1024-px-1500-x-1024-px.avif';
import leysiphones2Webp from '../../assets/Untitled-1800-x-1024-px-1500-x-1024-px.webp';
import { FullHeightTextSection, TextContainer, TextContent } from '../../components/CaseStudyPrimitives';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';

// White background wrapper for Leysi content
const LeysiContainer = styled.div`
  background-color: white;
`;

export const FlexLeysi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  height: 100dvh;
  width: 100vw;

  @media(max-width: 450px) {
    height: 40vh;
  }
`;

export const PitonScreens = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.ColumnsSet};
  grid-template-rows: ${(props) => props.RowsSet || '1vh 15vh 1vh'};
  height: 38vh;
  width: 100vw;

  @media (max-width: 850px) {
    grid-template-columns: 100vw;
    grid-template-rows: 2vw auto 2vw;
    height: auto;
  }
`;

export default function Ux() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <StyledDiv>
      <Seo {...projects.ux} sameAs={site.sameAs} keywords={projects.ux.keywords} siteDefaults={site} jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        headline: projects.ux.title,
        description: projects.ux.description,
        image: projects.ux.image,
        author: { '@type': 'Person', name: site.name, url: `${site.url}/MacTavish` },
        url: projects.ux.url,
        keywords: projects.ux.keywords,
      }} />
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
        Brand logo, and identity, and an IOS mobile app
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader style={{ color: 'rgb(46, 84, 78)' }}>My Role</ProjectHeader>
      <ProjectSubtitle style={{ color: 'rgb(60, 60, 60)' }}>
        Responsible for creating the brand logo, colors, and utilizing Apple's HIG for the V1 wireframes for Leysi's IOS app launch
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader style={{ color: 'rgb(46, 84, 78)' }}>Timeframe</ProjectHeader>
      <ProjectSubtitle style={{ color: 'rgb(60, 60, 60)' }}>
        3 months
      </ProjectSubtitle>
    </ProjectBlock>
  </ProjectDetails>
</ProjectDetailsContainer>

        {/* Full Background Image */}
    <div style={{ width: '100vw', overflow: 'hidden' }}>
  <FullBg
  src={leysiphonesAvif}
  webp={leysiphonesWebp}
  fallback={leysiphonesJpg}
    style={{
      display: 'block',
      width: '100vw',
      maxWidth: '100vw',
      height: 'auto',
      objectFit: 'cover',
      margin: 0,
      padding: 0,
      borderRadius: 0
    }}
  />
</div>

        {/* Description */}
       <FullHeightTextSection style={{ backgroundColor: 'white' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d' }}>
     Leysi is the ultimate food platform designed for young adults. It helps users manage spending, engage with friends, and discover deals at local vendors within their campus community. I collaborated with Varfaj Partners to design the app for NYU students, taking responsibility for creating the brand identity and the initial app designs.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

        {/* Blue Background Sections */}
        <RisoFlex style={{ backgroundColor: '#0A84E3', padding: '6vh 0' }}>
          <SingleImage src={LeysiBlue} avif={LeysiBlueAvif} webp={LeysiBlueWebp} />
        </RisoFlex>

        <RisoFlex style={{ backgroundColor: '#0A84E3', padding: '4vh 0' }}>
          <SingleImage src={LeysiBluetwo} avif={LeysiBluetwoAvif} webp={LeysiBluetwoWebp} />
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
          <SingleImage src={leysimockup2} avif={leysimockup2Avif} webp={leysimockup2Webp} style={{ boxShadow: 'none' }} />
        </RisoFlex>

        {/* Leysi Phones Two with full-width white background */}
        <RisoFlex style={{ backgroundColor: '#FFFFFF', width: '100vw', padding: '4vw 0' }}>
          <SingleImage src={leysiphones2} avif={leysiphones2Avif} webp={leysiphones2Webp} style={{ boxShadow: 'none' }} />
        </RisoFlex>

        {/* Footer / Team Credits */}
        <FullHeightTextSection style={{ backgroundColor: 'black' }}>
  <TextContainer>
      <TextContent style={{ color: 'white', textAlign: 'center', lineHeight: 1.5 }}>
    Founders — Leysi Team<br />
    Designers — Zachary MacTavish & Varfaj Team<br />
    Development — Varfaj Team
      </TextContent>
  </TextContainer>
</FullHeightTextSection>
      </LeysiContainer>
    </StyledDiv>
  );
}