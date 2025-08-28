import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { FullBg } from '../COMPOSITION/Composition';
import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';
import { SingleGrid } from '../Access_Direct/AD';

// Assets
import gigarocket from '../../assets/Giga—Macbookv2.png';
import iphones from '../../assets/iphones—Mockup.png';
import mocks from '../../assets/Giga—mockup.jpg';
import messages from '../../assets/Messages—1920 x 1400.png';
import imac from '../../assets/iMac_2.jpg';
import ipadtwo from '../../assets/iPad2.jpg';
import dark from '../../assets/iPhone_2—Dark—Sq.jpg';
import light from '../../assets/LightPhone2—Sq.jpg';
import imactwo from '../../assets/iMac.jpg';
import about from '../../assets/About.png';
import photos from '../../assets/Photos1.jpg';
import photostwo from '../../assets/Photos2.jpg';
import photosthree from '../../assets/Photos3.jpg';
import photosfour from '../../assets/Photos4.jpg';
import guides from '../../assets/Guides.jpg';
import create from '../../assets/CreateNewPost.png';
import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';



export const ProjectDetailsContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto 6vh; /* add margin-bottom for extra space outside */
  padding: 4vh 4vw 6vh; /* reduced internal padding */
  background-color: #f5f5f5;
  border-radius: 60px;

  @media (max-width: 1320px) {
    max-width: 90%;
  }

  @media (max-width: 850px) {
    width: 100%;
    padding: 4vh 4vw 6vh; /* keep reduced padding on mobile */
    border-radius: 0;
  }
`;
export const ProjectDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  row-gap: 2rem;
  column-gap: 4rem;
  position: relative;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ProjectHeader = styled.h3`
  color: ${(props) => props.theme.fontColor};
  font-size: 2.5rem;
  margin: 0;

  @media (max-width: 1320px) {
    font-size: 2.3rem;
  }

  @media (max-width: 850px) {
    font-size: 2rem;
  }
`;

export const ProjectSubtitle = styled.h6`
  color: ${(props) => props.theme.fontColor};
  font-size: 1.8rem;
  margin-top: 0.8rem;
  line-height: 1.5;

  @media (max-width: 1320px) {
    font-size: 1.6rem;
  }

  @media (max-width: 850px) {
    font-size: 1.5rem;
  }
`;

 
// export const Divider = styled.div`
//   grid-column: 1 / span 2;  /* span across both columns */
//   height: 1px;
//   background-color: #d3d3d3;
//   margin: 2rem 0;

//   @media (max-width: 850px) {
//     display: none; /* remove line on vertical stack */
//   }
// `;

export const GigaRocket = styled.img`
width: 60vw;
height: auto;
grid-row-start: ${(props) => props.RowStart};
grid-row-end: 8;
align-self: center;
justify-self: center;
grid-column-start: ${(props) => props.ColumnStart};
grid-column-end: ${(props) => props.ColumnEnd};
@media (max-width: 850px) {
    grid-row-start: 2;
    grid-row-end: 3;
      grid-column-start: 1;
      width: 95vw;

  }
`

export const TextSection = styled.h3`
grid-column-start: 2;
grid-column-end: 4;
grid-row-start: 2;
grid-row-end: 7;
font-size: ${(props) => props.Fontsize};
width: 80vw;
font-family: 'Space Grotesk', sans-serif;
justify-self: center;
align-self: center;
color: ${(props) => props.theme.fontColor};

@media (max-width: 1400px) {  
font-size: 1.8rem;
;}

@media (max-width: 850px){
    grid-column-start: 1;
    grid-row-end: 3;
    font-size: 1.2rem;
    width: 94vw;
    padding-left: 4vw;
    padding-right: 4vw;
    height: auto;
}
`

export const RisoItemtwo = styled.img`
width: ${(props) => props.Width};
box-shadow: 5px 10px 24px rgba(0, 0, 0, 0.3);
margin-top: 3vh;
margin-bottom: 3vh;

@media(max-width: 1400px) {
    width: 96vw;
    height: auto;
}

@media(max-width: 850px) {
    width: 96vw;
    height: auto;
}
`

export const BackgroundColor = styled.div`
width: 100vw;
background-color: #2CA0FD;
grid-row-start: 4;
grid-row-end: 9;
z-index: -5;
`

export const StyledDiv = styled.div`
background-color: ${props => props.theme.backgroundTwo};
`

export const Cellphones = styled.div`
display: flex;
width: 100vw;
height: auto;

@media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: auto;
}
`
export const ProjectGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  padding: 8vh 4vw;

  @media (max-width: 1000px) {
    flex-direction: column;       /* stack vertically */
    justify-content: center;
    align-items: center;          /* centers the block */
    padding: 12vh 4vw 12vh 4vw;   /* extra top/bottom padding */
    gap: 3vh;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;    /* centers the block horizontally */
    text-align: left;       /* keeps text left-aligned inside */
    margin-bottom: 2vh;     /* spacing below the text before image */
  }
`;

export const ProjectImage = styled.img`
  width: ${(props) => props.Width};
  height: auto;

  @media (max-width: 1000px) {
    width: 80vw; /* image slightly bigger on vertical stack */
  }
`;

export const ProjectTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 4.5rem;
  color: ${(props) => props.theme.fontColor};
  margin: 0;

  &:after {
    content: "";
    display: block;
    width: clamp(20px, 17vw, 500px);
    height: 10px;
    margin-top: 10px;
    background: ${(props) => props.theme.fontColor};
  }

  @media (max-width: 850px) {
    font-size: 3rem;
  }
`;

export const ProjectLink = styled.a`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  color: ${(props) => props.theme.fontColor};
  text-decoration: none;
  margin-top: 1vh;

  &:hover {
    opacity: 0.75;
  }
`;

export default function Giga() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <StyledDiv>
<ProjectGrid className="flex flex-col-reverse md:flex-row items-center justify-center w-full">
  {/* Text Block */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end px-6 md:px-12 mb-12 md:mb-0">
    <ProjectContent className="max-w-[600px] text-left">
      <ProjectTitle>Giga</ProjectTitle>
      <ProjectLink
        href="https://gigaintelligence.com"
        target="_blank"
        rel="noreferrer noopener"
      >
        gigaintelligence.com
      </ProjectLink>
    </ProjectContent>
  </div>

  {/* Image */}
  <div className="flex justify-center md:justify-start w-full md:w-1/2">
    <ProjectImage src={gigarocket} Width="55vw" />
  </div>
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
        Digital strategy platform used for data management, and private channel creation.
      </ProjectSubtitle>
    </ProjectBlock>


    <ProjectBlock>
      <ProjectHeader>My Role</ProjectHeader>
      <ProjectSubtitle>
        Responsible for researching, ideating, and generating new ideas for a cohesive & imagined Giga experience. 
        Designed and prototyped the Giga system & Web App.
      </ProjectSubtitle>
    </ProjectBlock>

    <ProjectBlock>
      <ProjectHeader>Timeframe</ProjectHeader>
      <ProjectSubtitle>1 1/2 years.</ProjectSubtitle>
    </ProjectBlock>
  </ProjectDetails>
</ProjectDetailsContainer>


            <FullBg src={iphones} />

 <FullHeightTextSection style={{ backgroundColor: '#ffffff' }}>
  <TextContainer>
    <TextContent style={{ color: '#5D5D5D' }}>
      Giga is a startup focused on sharing experiences between its users. 
      Through a robust data management system, users can share information and learn about their favorite subjects.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

            <FullBg src={mocks} />

            <RisoFlex>
                <RisoItemtwo src={messages} Width='60vw' />
            </RisoFlex>

            <RisoFlex>
                <RisoItemtwo src={create} Width='60vw' />
            </RisoFlex>

            <FullBg src={imac} />

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
<RisoFlex style={{ paddingBottom: '7vh' }}>
  <RisoItem src={about} Width='65vw' />
</RisoFlex>


<img src={photos} alt="" style={{ width: "100%", height: "auto", display: "block" }} />
<img src={photostwo} alt="" style={{ width: "100%", height: "auto", display: "block" }} />
<img src={photosthree} alt="" style={{ width: "100%", height: "auto", display: "block" }} />
<img src={photosfour} alt="" style={{ width: "100%", height: "auto", display: "block" }} />
        <FullBg src={guides} />


            
      <FullHeightTextSection style={{ backgroundColor: 'black' }}>
  <TextContainer>
    <TextContent style={{ color: 'white', textAlign: 'center' }}>
      Founder — Rich Devlin<br />
      Lead Designer — Zachary MacTavish<br />
      Front-End Development — Xing Yi & Joel Fernando<br />
      Back-End Development — Rich Devlin
    </TextContent>
  </TextContainer>
</FullHeightTextSection>
        </StyledDiv>



    )
}
