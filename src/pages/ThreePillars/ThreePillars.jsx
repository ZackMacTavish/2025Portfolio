import React, { useLayoutEffect } from 'react';

// Components
import { FullBg } from '../COMPOSITION/Composition';
import { 
  TextSection, GigaGridtext, 
 ProjectDetails, ProjectHeader, 
  ProjectSubtitle, RisoItemtwo, StyledDiv, TextLineone, 
  TextLinetwo, ProjectGrid, ProjectContent, ProjectTitle, ProjectLink, ProjectDetailsContainer, ProjectBlock, ProjectImage
} from '../Giga/Giga';
import { RisoFlex } from '../3d/MergedGraffiti';

// Images (updated to assets folder)
import ThreePillarsMac from '../../assets/ThreePillars—Macbook.png';
import ThreePillarsIphone from '../../assets/ThreePillars—iphones.jpg';
import ThreePillarsPages from '../../assets/ThreePillars—pages.jpg';
import recruitingpage from '../../assets/Artboard – 11@2x.png';
import ThreePillarsImac from '../../assets/ThreePillars_Imac_.jpg';
import ThreePillarsMockup from '../../assets/Mockup.jpg';
import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';

export default function ThreePillars() {


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <StyledDiv>
          <ProjectGrid>
  <ProjectContent>
    <ProjectTitle>ThreePillars</ProjectTitle>
    <ProjectLink href="https://threepillars.com" target="_blank" rel="noreferrer noopener">
      threepillars.com
    </ProjectLink>
  </ProjectContent>
  <ProjectImage src={ThreePillarsMac} Width="55vw" />
</ProjectGrid>
            

<ProjectDetailsContainer>
  <ProjectDetails>
    <ProjectBlock>
      <ProjectHeader>Project Type</ProjectHeader>
      <ProjectSubtitle>UX/UI, Branding, Strategy</ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Digital Product</ProjectHeader>
      <ProjectSubtitle>
        Web app utilized for recruiting 2,100+ employees in 14 years of business.
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>My Role</ProjectHeader>
      <ProjectSubtitle>
        Responsible for reimagining a fresh brand strategy, and creating an easy to navigate website.
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Timeframe</ProjectHeader>
      <ProjectSubtitle>3 months.</ProjectSubtitle>
    </ProjectBlock>
  </ProjectDetails>
</ProjectDetailsContainer>

              <FullBg
  src={ThreePillarsPages}
  style={{
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    display: 'block',  // removes the inline spacing that causes the white strip
    margin: 0,
  }}
/>



        <FullHeightTextSection style={{ backgroundColor: '#2B3253' }}>
  <TextContainer>
    <TextContent style={{ color: 'white' }}>
      Three Pillars is a recruiting agency that was looking for a refresh on their brand identity and website. 
      My responsibility involved collaborating with the Varfaj Partners team to provide initial designs for their developer to implement.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

<FullBg
  src={ThreePillarsIphone}
  style={{
    width: '100vw',
    height: '104vh',
    objectFit: 'cover',  // fills container without stretching
    display: 'block',    // removes extra space below image
    margin: 0,           // ensure no default margins
  }}
/>
            
          

            <RisoFlex>
                <RisoItemtwo src={recruitingpage} Width='60vw' />
            </RisoFlex>

            <FullBg src={ThreePillarsImac} />
            <FullBg src={ThreePillarsMockup} />

            <GigaGridtext ColumnsSet='4vw 60vw 32vw 4vw' RowsSet='1fr 1fr 1fr 1fr 1fr 1fr 1fr'>
            <TextLineone RowsSet="1" />
            <TextSection Fontsize='3.5rem' style={{textAlign:'center'}}>Founders — Three Pillars Team<br />
            Designers — Zachary MacTavish & Varfaj Team<br />
            Development — Varfaj Team</TextSection>
            <TextLinetwo/>
            </GigaGridtext>

           

        </StyledDiv>
    )
}