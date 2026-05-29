import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';

const ThemedPanel = styled.div`
  width: 100vw;
  margin: 0 calc(50% - 50vw);
  padding: 0;
  background: ${(p) => (p.theme.name === 'dark' ? p.theme.surfaceMuted || p.theme.surface : '#f5f5f5')};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Assets
import pitonlogo from '../../assets/FullLogo-02.png';
import pitonlogoAvif from '../../assets/FullLogo-02.avif';
import pitonlogoWebp from '../../assets/FullLogo-02.webp';
import pitoniphones from '../../assets/Piton—iphones copy.jpg';
import pitoniphonesAvif from '../../assets/Piton—iphones copy.avif';
import pitoniphonesWebp from '../../assets/Piton—iphones copy.webp';
import pitonscreens from '../../assets/Group 55618@2x.png';
import pitonscreensAvif from '../../assets/Group 55618@2x.avif';
import pitonscreensWebp from '../../assets/Group 55618@2x.webp';
import pitonscreens2 from '../../assets/Group 55619@2x.png';
import pitonscreens2Avif from '../../assets/Group 55619@2x.avif';
import pitonscreens2Webp from '../../assets/Group 55619@2x.webp';
import allpiton from '../../assets/Piton—Screens.jpg';
import allpitonAvif from '../../assets/Piton—Screens.avif';
import allpitonWebp from '../../assets/Piton—Screens.webp';
import light from '../../assets/LightPhone2.png';
import lightAvif from '../../assets/LightPhone2.avif';
import lightWebp from '../../assets/LightPhone2.webp';
import dark from '../../assets/iPhone_2—Dark.png';
import darkAvif from '../../assets/iPhone_2—Dark.avif';
import darkWebp from '../../assets/iPhone_2—Dark.webp';
import pitonlogos from '../../assets/Group 55620@2x.png';
import pitonlogosAvif from '../../assets/Group 55620@2x.avif';
import pitonlogosWebp from '../../assets/Group 55620@2x.webp';
import { FullHeightTextSection, TextContent, TextContainer } from '../../components/CaseStudyPrimitives';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';

// Components
import {
  BackgroundColor, Cellphones, GigaRocket, StyledDiv,
  ProjectDetails, ProjectHeader,
  ProjectSubtitle, ProjectDetailsContainer, ProjectBlock,
} from '../../components/GigaPrimitives';

import { RisoFlex, SingleImage, DoubleImage, FullBg } from '../../components/CaseStudyPrimitives';
import { PitonScreens } from '../UX/UX';

export default function Piton() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledDiv>
      <RisoFlex style={{height: '100vh'}}>
        <div style={{ background: 'white', padding: '5vw 7vw', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60vw', maxWidth: 1000, boxSizing: 'border-box' }}>
          <SingleImage src={pitonlogo} avif={pitonlogoAvif} webp={pitonlogoWebp} style={{ boxShadow: 'none', background: 'transparent', width: '100%', height: 'auto' }} />
        </div>
      </RisoFlex>

       <ProjectDetailsContainer>
  <ProjectDetails>
    <ProjectBlock>
      <ProjectHeader>Project Type</ProjectHeader>
      <ProjectSubtitle>UX/UI, Branding, Strategy</ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Product</ProjectHeader>
      <ProjectSubtitle>Logo branding, An IOS mobile app, and streetwear line</ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>My Role</ProjectHeader>
      <ProjectSubtitle>
        Responsible for creating the brand logo, colors, and utilizing Apple's HIG for the V1 wireframes for Piton's App launch (TBD).
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Timeframe</ProjectHeader>
      <ProjectSubtitle>1 year.</ProjectSubtitle>
    </ProjectBlock>
  </ProjectDetails>
</ProjectDetailsContainer>

           

            <FullBg src={pitoniphones} avif={pitoniphonesAvif} webp={pitoniphonesWebp} style={{ width: '100vw', maxWidth: '100vw', height: 'auto', objectFit: 'cover', display: 'block', margin: 0, padding: 0, borderRadius: 0 }} />
             <FullHeightTextSection>
  <TextContainer>
    <TextContent>
      Piton is a startup focused on athleisure clothing with an accompanying workout app. The brand emphasizes social change and environmentalism. When exploring the initial designs, the idea was to use hands-free technology, something that wasn’t feasible at the time but is now possible with the integration of AI features. The app’s leading innovation is a voice-enabled feature that pairs with your headphones, allowing you to log workouts hands-free and receive real-time tips while exercising.
        <Seo {...projects.piton} sameAs={site.sameAs} keywords={projects.piton.keywords} siteDefaults={site} jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          headline: projects.piton.title,
          description: projects.piton.description,
          image: projects.piton.image,
          author: { '@type': 'Person', name: site.name, url: site.url },
          url: projects.piton.url,
          datePublished: projects.piton.datePublished,
          keywords: projects.piton.keywords,
        }} />
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

      <ThemedPanel>
        <div style={{ width: '60vw', margin: '0px auto', padding: '4vh 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SingleImage alt="Piton App Screen 1" src={pitonscreens} avif={pitonscreensAvif} webp={pitonscreensWebp} style={{ width: '60vw', maxWidth: 800, height: 'auto', display: 'block', borderRadius: 16, boxShadow: 'none', background: 'transparent' }} />
        </div>
        <div style={{ width: '60vw', margin: '0px auto', padding: '0 0 4vh 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SingleImage alt="Piton App Screen 2" src={pitonscreens2} avif={pitonscreens2Avif} webp={pitonscreens2Webp} style={{ width: '60vw', maxWidth: 800, height: 'auto', display: 'block', borderRadius: 16, boxShadow: 'none', background: 'transparent' }} />
        </div>
      </ThemedPanel>

           <FullBg
                src={allpiton}
                avif={allpitonAvif}
                webp={allpitonWebp}
                style={{
                  display: "block",
                  width: "100vw",
                  height: "auto",
                  maxHeight: "100%",
                  margin: 0,
                  padding: 0,
                  objectFit: "cover",
                  borderRadius: 0,
                }}
              />

            <Cellphones>
                <DoubleImage srcLeft={dark} avifLeft={darkAvif} webpLeft={darkWebp} srcRight={light} avifRight={lightAvif} webpRight={lightWebp} />
            </Cellphones>

          <FullBg 
          src={pitonlogos} 
          avif={pitonlogosAvif}
          webp={pitonlogosWebp}
          style={{ display: 'block', width: '100%', height: 'auto', margin: 0, padding: 0 }} 
        /> 

     <FullHeightTextSection style={{ backgroundColor: 'black' }}>
  <TextContainer>
    <TextContent style={{ color: 'white', textAlign: 'center', lineHeight: 1.5 }}>
      Founders — Jemir Martinez<br />
      Designers — Zachary MacTavish<br />
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

        </StyledDiv>
    );
}