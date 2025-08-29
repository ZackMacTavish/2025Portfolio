import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';

// Composition components
import { FullBg, ParagraphFour } from '../COMPOSITION/Composition';
import { RisoFlex, RisoItem } from '../3d/MergedGraffiti';
import { RisoItemtwo, StyledDiv } from '../Giga/Giga';
import { NewSection } from '../About/About';
import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';
import { ProjectGrid,ProjectContent, ProjectTitle, ProjectLink, ProjectImage } from '../Giga/Giga';

// Assets
import gigarocket from '../../assets/4.png';
import golden from '../../assets/Cover.png';
import mocks from '../../assets/1.png';
import messages from '../../assets/OneSock-01.png';
import messagestwo from '../../assets/BHCwelcomemat2-01.png';
import messagesthree from '../../assets/BringHomeChristmas2 (2).png';
import messagesfour from '../../assets/BHCstacked3-01.png';
import threestack from '../../assets/3Stack.png';
import gobackbig from '../../assets/GobackBig.jpg';
import btc from '../../assets/BTC-2.jpg';
import bbfone from '../../assets/BrooklynBookFestMockup.jpg';
import bbftwo from '../../assets/BKBFToteBag.jpg';
import bbfthree from '../../assets/BKBFBookmark.jpg';
import bbffour from '../../assets/BBFPosterframed.jpg';
import bbffive from '../../assets/BBFAd.jpg';
import ironlakadvert from '../../assets/IronlakAdvert2.jpg';
import ironlakadone from '../../assets/Group 55614@2x.png';
import ironlakadtwo from '../../assets/Group 55615@2x.png';
import ironlaksweaters from '../../assets/Group 55616@2x.png';
import backcover from '../../assets/Back + Cover.png';
import backcovertwo from '../../assets/3.png';
import backcoverthree from '../../assets/2.png';
import graphicposters from '../../assets/GP1.jpg';
import oliviafloral from '../../assets/OliviaFloralMockup.jpg';
import goodbyehello from '../../assets/GP2.jpg';
import artbook from '../../assets/ThisIsIt.jpg';

export const Pineapple = styled.img`
width: 40vw;
height: auto;
grid-row-start: ${(props) => props.RowStart};
grid-row-end: 8;
align-self: center;
justify-self: center;
grid-column-start: ${(props) => props.ColumnStart};
grid-column-end: ${(props) => props.ColumnEnd};
@media (max-width: 850px) {
    grid-row-start: 2;
    padding-top: 4vh;
    grid-row-end: 3;
      grid-column-start: 1;
      width: 95vw;

  }
`
export const ThisisIt = styled.img`
width: 30vw;
padding-left: 15vw;

@media (max-width: 1000px) { 
  padding: 0;
    width: 96vw;
  }
`

export default function GraphicDesign() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <StyledDiv>
       <ProjectGrid style={{ paddingTop: '15vh' }}>
  <ProjectContent>
    <ProjectTitle>Graphic Design</ProjectTitle>
  </ProjectContent>
  <ProjectImage src={gigarocket} Width="35vw" />
</ProjectGrid>


           <FullHeightTextSection style={{ backgroundColor: '#191919' }}>
  <TextContainer>
    <TextContent style={{ color: '#FFF' }}>
      Stay Golden was a passion project created with my friend Alek Vasic, representing a series of songs. 
      It received silver and bronze awards for digital art and packaging design from the Indigo Design Awards.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>


           <FullBg
  src={golden}
  style={{
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    display: 'block',
    margin: 0,
    padding: 0,
  }}
/>
            { /* <FullBg src={mocks} />
            <FullBg src={backcover} />
            <FullBg src={backcovertwo} /> 
            <FullBg src={backcoverthree} />*/}

                <FullHeightTextSection style={{ backgroundColor: '#191919' }}>
  <TextContainer>
    <TextContent style={{ color: '#FFF' }}>
      Graphic Posters meet at the intersection of my art and design practice. 
      This includes passion projects, and a poster for the 2017 VCD Design show in Chicago, IL.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

          
            <FullBg src={graphicposters} />
            <FullBg src={oliviafloral} />
            <FullBg src={goodbyehello} />

            {/*Art Book + Text */}
          <NewSection Backgroundheight="95vh" style={{ paddingBottom: '5vh' }}>
  <ThisisIt src={artbook} />
  <ParagraphFour style={{ color: '#5d5d5d' }}>
    'This is it' was a poster design I made for the 2017 SAIC VCD Design show. The piece explores a quote from the movie 'Style Wars'.
  </ParagraphFour>
</NewSection>

<FullHeightTextSection style={{ backgroundColor: '#F5F5F5' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d' }}>
      Working alongside the Walmart team at Publicis, we created a variety of designs to present to Marketing. The lines I worked on were the Christmas, Halloween, and Back To School campaigns.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

            <RisoFlex style={{ justifyContent: 'center' }}>
  <RisoItemtwo
    style={{ boxShadow: 'none', width: '45vw', paddingRight: '6vw' }}
    src={messages}
  />
</RisoFlex>

            <RisoFlex>
                <RisoItemtwo style={{boxShadow:'none'}} src={messagestwo} Width='75vw' />
            </RisoFlex>

            <RisoFlex>
                <RisoItemtwo style={{boxShadow:'none'}} src={messagesthree} Width='60vw' />
            </RisoFlex>

            <FullBg style={{paddingTop: '10vh'}} src={messagesfour} />

            <RisoFlex >
                <RisoItem  src={threestack} Width='65vw' />
            </RisoFlex>

           <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
  <FullBg
    src={gobackbig}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      display: 'block',
      margin: 0,
      padding: 0,
    }}
  />
</div>

       <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
  <FullBg
    src={btc}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center', // centers crop vertically and horizontally
      display: 'block',
      margin: 0,
      padding: 0,
    }}
  />
</div>

      <FullHeightTextSection style={{ backgroundColor: '#191919' }}>
  <TextContainer>
    <TextContent style={{ color: 'white' }}>
      By working on my own version of an Ironlak marketing campaign, it led to me interning for Ironlak shortly after my graduation. I worked on a variety of advertisements.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={ironlakadvert} Width='65vw' />
            </RisoFlex>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={ironlakadone} Width='65vw' />
            </RisoFlex>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={ironlakadtwo} Width='65vw' />
            </RisoFlex>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={ironlaksweaters} Width='65vw' />
            </RisoFlex>



           <FullHeightTextSection style={{ backgroundColor: '#f5f5f5' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d'}}>
      Brooklyn Book Festival is a rebranding of a popular festival that occurs in Brooklyn, NY. 
      I designed totes, bookmarks, brochures, and posters for the event.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

            <RisoFlex>
                <RisoItem  src={bbfone} Width='65vw' />
            </RisoFlex>

          

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={bbftwo} Width='65vw' />
            </RisoFlex>


            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={bbfthree} Width='65vw' />
            </RisoFlex>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh'}} src={bbffour} Width='65vw' />
            </RisoFlex>

            <RisoFlex style={{height:'auto'}}>
                <RisoItem  style={{paddingTop:'5vh', paddingBottom: '5vh'}} src={bbffive} Width='65vw' />
            </RisoFlex>

     


        </StyledDiv>



    )
}
