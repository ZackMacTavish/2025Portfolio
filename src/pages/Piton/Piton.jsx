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
import { FullHeightTextSection, TextContent, TextContainer } from '../Printmaking/Artworks';

// Components
import { 
  BackgroundColor, Cellphones, GigaRocket, StyledDiv, 
  ProjectDetails, ProjectHeader, 
  ProjectSubtitle, ProjectDetailsContainer, ProjectBlock
} from '../Giga/Giga';

import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';
import { FullBg } from '../COMPOSITION/Composition';
import { PitonScreens } from '../UX/UX';

export default function Piton() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <StyledDiv>
            <RisoFlex style={{height: '100vh'}}>
                <RisoItem src={pitonlogo} Width='50vw'  />
            </RisoFlex>

       <ProjectDetailsContainer>
  <ProjectDetails>
    <ProjectBlock>
      <ProjectHeader>Project Type</ProjectHeader>
      <ProjectSubtitle>UX/UI, Branding, Strategy</ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Digital Product</ProjectHeader>
      <ProjectSubtitle>An IOS mobile app, and streetwear line</ProjectSubtitle>
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

           

            <FullBg src={pitoniphones} />
             <FullHeightTextSection style={{ backgroundColor: 'white' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d'}}>
      Piton is a startup focused on athleisure clothing with an accompanying workout app. 
      The brand emphasizes social change and environmentalism. 
      Its leading innovation is a cutting-edge, voice-enabled AI feature in the app.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

   <div style={{ backgroundColor: '#f5f5f5', paddingTop: '5vh', paddingBottom: '10vh', width: '100%' }}>
  <PitonScreens ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='2vh 15vh 2vh'>
    <GigaRocket RowStart='2' ColumnStart="2" ColumnEnd="4" src={pitonscreens} />
    <BackgroundColor style={{ backgroundColor:'#1794BA' }} />
  </PitonScreens>

  <PitonScreens ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='2vh 15vh 2vh' style={{ marginTop: '5vh' }}>
    <GigaRocket RowStart='2' ColumnStart="2" ColumnEnd="4" src={pitonscreens2} />
    <BackgroundColor style={{ backgroundColor:'#1794BA' }} />
  </PitonScreens>
</div>
           <FullBg
  src={allpiton}
  style={{
    display: "block",        // removes inline-block gaps
    width: "100vw",
    height: "auto",
    maxHeight: "100%",       // keeps image from adding extra space
    margin: 0,               // remove default margin
    padding: 0,              // remove default padding
    objectFit: "cover",
  }}
/>

            <Cellphones>
                <RisoItem Width='50vw' src={dark} />
                <RisoItem Width='50vw' src={light} />
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