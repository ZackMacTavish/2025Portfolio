import React, { useLayoutEffect } from 'react';

// Components
import { FullBg } from '../Access_Direct/AD';
import { ProjectDetails, ProjectHeader, ProjectSubtitle, RisoItemtwo, StyledDiv, ProjectDetailsContainer, ProjectBlock, ProjectImage } from '../Giga/Giga';
import ProjectTopSection from '../../components/ProjectTopSection';
import { FiArrowUpRight } from 'react-icons/fi';
import { RisoFlex } from '../Access_Direct/AD';

// Images (updated to assets folder)
import ThreePillarsMac from '../../assets/ThreePillars—Macbook.png';
import ThreePillarsIphone from '../../assets/ThreePillars—iphones.jpg';
import ThreePillarsPages from '../../assets/ThreePillars—pages.jpg';
import recruitingpage from '../../assets/Artboard – 11@2x.png';
import ThreePillarsImac from '../../assets/ThreePillars_Imac_.jpg';
import ThreePillarsMockup from '../../assets/Mockup.jpg';
import { FullHeightTextSection, TextContainer, TextContent } from '../Access_Direct/AD';
import Seo from '../../components/SEO/Seo';
import { site, projects } from '../../data/metadata';

export default function ThreePillars() {


    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <StyledDiv>
          <Seo {...projects.threepillars} sameAs={site.sameAs} keywords={projects.threepillars.keywords} />
          <ProjectTopSection
            title="ThreePillars"
            imageSrc={ThreePillarsMac}
            imageAlt="ThreePillars Macbook Mockup"
            imageWidth="55vw"
            buttons={[
              { href: "https://threepillars.com", label: "Visit ThreePillars" }
            ]}
          />
            

<ProjectDetailsContainer>
  <ProjectDetails>
    <ProjectBlock>
      <ProjectHeader>Project Type</ProjectHeader>
      <ProjectSubtitle>UX/UI, Branding, Strategy</ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Digital Product</ProjectHeader>
      <ProjectSubtitle>
       Web app utilized for recruiting 2,100 employees in 14 years of business
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>My Role</ProjectHeader>
      <ProjectSubtitle>
        Responsible for reimagining a fresh brand strategy, and creating an easy to navigate website
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Timeframe</ProjectHeader>
      <ProjectSubtitle>3 months</ProjectSubtitle>
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
     Three Pillars is a recruiting agency seeking a refresh of their brand identity and website. I closely worked with the Varfaj Partners team to create the initial designs, which were then implemented by their developer.
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
            
<FullBg 
  src={ThreePillarsImac} 
  style={{ display: 'block', width: '100%', margin: 0, padding: 0, lineHeight: 0 }} 
/>
<div style={{ width: '100%', margin: 0, padding: 0, lineHeight: 0 }}>
  <img 
    src={ThreePillarsMockup} 
    style={{ width: '100%', height: 'auto', display: 'block', margin: 0, padding: 0 }} 
  />
</div>


<ProjectTopSection
  title="Three Pillars"
  imageSrc={ThreePillarsMac}
  imageAlt="Three Pillars Macbook Mockup"
  imageWidth="44vw"
  buttons={[]}
  divider={true}
/>
           

        </StyledDiv>
    )
}