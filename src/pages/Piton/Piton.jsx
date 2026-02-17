import React, { useLayoutEffect } from 'react';

// Assets
import pitonlogo from '../../assets/FullLogo-02.png';
import pitoniphones from '../../assets/Piton—iphones copy.jpg';
import pitonscreens from '../../assets/Group 55618@2x.png';
import pitonscreens2 from '../../assets/Group 55619@2x.png';
import allpiton from '../../assets/Piton—Screens.jpg';
import light from '../../assets/LightPhone2.png';
import dark from '../../assets/iPhone_2—Dark.png';
import pitonlogos from '../../assets/Group 55620@2x.png';
import { FullHeightTextSection, TextContent, TextContainer } from '../Access_Direct/AD';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';

// Components
import { 
  BackgroundColor, Cellphones, GigaRocket, StyledDiv, 
  ProjectDetails, ProjectHeader, 
  ProjectSubtitle, ProjectDetailsContainer, ProjectBlock
} from '../Giga/Giga';

import { RisoFlex, SingleImage, DoubleImage } from '../Access_Direct/AD';
import { FullBg } from '../Access_Direct/AD';
import { PitonScreens } from '../UX/UX';

export default function Piton() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledDiv>
            <RisoFlex style={{height: '100vh'}}>
                <SingleImage src={pitonlogo} style={{ boxShadow: 'none' }} />
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

           

            <FullBg src={pitoniphones} style={{ width: '100vw', maxWidth: '100vw', height: 'auto', objectFit: 'cover', display: 'block', margin: 0, padding: 0, borderRadius: 0 }} />
             <FullHeightTextSection style={{ backgroundColor: 'white' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d'}}>
      Piton is a startup focused on athleisure clothing with an accompanying workout app. The brand emphasizes social change and environmentalism. When exploring the initial designs, the idea was to use hands-free technology, something that wasn’t feasible at the time but is now possible with the integration of AI features. The app’s leading innovation is a voice-enabled feature that pairs with your headphones, allowing you to log workouts hands-free and receive real-time tips while exercising.
        <Seo {...projects.piton} sameAs={site.sameAs} keywords={projects.piton.keywords} jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          headline: projects.piton.title,
          description: projects.piton.description,
          image: projects.piton.image,
          author: { '@type': 'Person', name: site.name, url: `${site.url}/about` },
          url: projects.piton.url,
          datePublished: projects.piton.datePublished,
          keywords: projects.piton.keywords,
        }} />
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

      <div style={{ width: '100vw', margin: '0px calc(50% - 50vw)', padding: '0', background: '#f5f5f5', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '60vw', margin: '0px auto', padding: '4vh 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SingleImage alt="Piton App Screen 1" src={pitonscreens} style={{ width: '60vw', maxWidth: 800, height: 'auto', display: 'block', borderRadius: 16, boxShadow: 'none', background: '#f5f5f5' }} />
        </div>
        <div style={{ width: '60vw', margin: '0px auto', padding: '0 0 4vh 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SingleImage alt="Piton App Screen 2" src={pitonscreens2} style={{ width: '60vw', maxWidth: 800, height: 'auto', display: 'block', borderRadius: 16, boxShadow: 'none', background: '#f5f5f5' }} />
        </div>
      </div>

           <FullBg
                src={allpiton}
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
                <DoubleImage srcLeft={dark} srcRight={light} />
            </Cellphones>

          <FullBg 
  src={pitonlogos} 
  style={{ display: 'block', width: '100%', height: 'auto', margin: 0, padding: 0 }} 
/>

     <FullHeightTextSection style={{ backgroundColor: 'black' }}>
  <TextContainer>
    <TextContent style={{ color: 'white', textAlign: 'center', lineHeight: 1.5 }}>
      Founders — Jemir Martinez<br />
      Designers — Zachary MacTavish<br />
      Development — TBD
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

        </StyledDiv>
    );
}