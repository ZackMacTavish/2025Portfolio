import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';

// Composition components
import { FullBg, ParagraphFour, RisoFlex } from '../Access_Direct/AD';
import { StyledDiv } from '../Giga/Giga';
import { SingleImage } from '../Access_Direct/AD';
// import { NewSection } from '../About/About';
import { FullHeightTextSection, TextContainer, TextContent } from '../Access_Direct/AD';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import { ProjectTitle } from '../Giga/Giga';
// (Local top section used here to control image styling directly)

// Assets
import pineapple from '../../assets/4.png';
import goldenAvif from '../../assets/Cover.avif';
import goldenWebp from '../../assets/Cover.webp';
import goldenPng from '../../assets/Cover.png';
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
import graphicpostersAvif from '../../assets/GP1.avif';
import graphicpostersWebp from '../../assets/GP1.webp';
import oliviafloralAvif from '../../assets/OliviaFloralMockup.avif';
import oliviafloralWebp from '../../assets/OliviaFloralMockup.webp';
import goodbyehelloAvif from '../../assets/GP2.avif';
import goodbyehelloWebp from '../../assets/GP2.webp';
import artbook from '../../assets/ThisIsIt.jpg';
import Grid60, { Grid60TwoCol } from '../../components/Layout/Grid60';

export const Pineapple = styled.img`
width: 36vw; /* reduced further per request to make the image less wide */
height: auto;
grid-row-start: ${(props) => props.RowStart};
grid-row-end: 8;
align-self: center;
justify-self: center;
grid-column-start: ${(props) => props.ColumnStart};
grid-column-end: ${(props) => props.ColumnEnd};
border-radius: ${(p) => p.theme.radii.card};
overflow: hidden;
@media (max-width: 850px) {
    grid-row-start: 2;
    margin-top: 4vh; /* avoid padding inside rounded image to keep corners clean */
    grid-row-end: 3;
      grid-column-start: 1;
      width: 95vw;

  }
`
/* Local top section container to render title + 4.png with direct image radii */
const GDTopSection = styled.div`
  width: 60vw;
  max-width: 1100px;
  min-width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1vw;
  margin: 0 auto 4vh auto;
  padding-top: 6.5rem;
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    width: 96vw;
    gap: 2vh;
    padding: 5.5rem 2vw 0 2vw;
  }
`;

const GDTopSectionText = styled.div`
  flex: 1.6 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 0.5em;
  height: 100%;
`;
// Removed legacy RisoItem/RisoItemtwo styled components. Use SingleImage instead.
export const ThisisIt = styled.img`
  width: 86%; /* slightly narrower image within its column */
  height: auto;
  display: block;
  margin: 0;
  border-radius: ${(p) => p.theme.radii.card};
`

const ThisIsItContainer = styled(Grid60TwoCol)`
  /* Narrower text column + wider gap for clearer hierarchy */
  width: 62vw;
  max-width: 1100px;
  margin: 0 auto;
  grid-template-columns: 0.56fr minmax(280px, 0.44fr); /* image narrower, text wider */
  gap: ${(p) => p.theme.spacing['3xl']};
  align-items: center;
  padding: ${(p) => p.theme.spacing['3xl']} 0;

  @media (max-width: 1000px) {
    width: 90vw;
    grid-template-columns: 1fr;
    gap: ${(p) => p.theme.spacing.lg};
  }
`;

const ThisIsItText = styled(ParagraphFour)`
  color: ${(p) => p.theme.fontColor};
  margin: 0;
  width: auto;            /* override base 40vw */
  max-width: 740px;       /* slightly wider to improve line breaks */
  padding-right: 0;       /* remove base desktop padding */
`;

export default function GraphicDesign() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });


    return (
        <StyledDiv>
       <Seo {...projects['graphic-design']} sameAs={site.sameAs} keywords={projects['graphic-design'].keywords} />

      <GDTopSection>
        <GDTopSectionText>
          <ProjectTitle style={{ fontSize: '2.8rem', marginBottom: '0.1em' }}>Graphic Design</ProjectTitle>
          <div style={{ height: '1px', background: '#e0e0e0', width: '48px', margin: '0.1em 0 0.3em 0' }} />
        </GDTopSectionText>
        <Pineapple src={pineapple} alt="Graphic Design Cover" />
      </GDTopSection>

  {/* Hero Cover image, now in FullBg for modern format and full width */}



           <FullHeightTextSection style={{ backgroundColor: '#191919' }}>
  <TextContainer>
    <TextContent style={{ color: '#FFF' }}>
      Stay Golden was a passion project created with my friend Alek Vasic, representing a series of songs. 
      It received silver and bronze awards for digital art and packaging design from the Indigo Design Awards.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

  <FullBg src={goldenAvif} webp={goldenWebp} fallback={goldenPng} style={{ width: '100vw', height: 'auto', objectFit: 'cover', display: 'block', margin: 0, padding: 0, borderRadius: 0 }} />




                <FullHeightTextSection style={{ backgroundColor: '#191919' }}>
  <TextContainer>
    <TextContent style={{ color: '#FFF' }}>
      Graphic Posters meet at the intersection of my art and design practice. 
      This includes passion projects, and a poster for the 2017 VCD Design show in Chicago, IL.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

          
            <FullBg 
              src={graphicpostersAvif}
              webp={graphicpostersWebp}
              style={{ borderRadius: 0 }}
              alt="Graphic Posters 1"
            />
            <FullBg 
              src={oliviafloralAvif}
              webp={oliviafloralWebp}
              style={{ borderRadius: 0 }}
              alt="Olivia Floral Mockup"
            />
            <FullBg 
              src={goodbyehelloAvif}
              webp={goodbyehelloWebp}
              style={{ borderRadius: 0 }}
              alt="Graphic Posters 2"
            />

            {/* "This is it" poster section standardized to 60vw */}
            <ThisIsItContainer>
              <ThisisIt src={artbook} alt="This is it poster" />
              <ThisIsItText>
                'This is it' was a poster design I made for the 2017 SAIC VCD Design show. The piece explores a quote from the movie 'Style Wars'.
              </ThisIsItText>
            </ThisIsItContainer>

<FullHeightTextSection style={{ backgroundColor: '#F5F5F5' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d' }}>
      Working alongside the Walmart team at Publicis, we created a variety of designs to present to Marketing. The lines I worked on were the Christmas, Halloween, and Back To School campaigns.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

            <RisoFlex style={{ justifyContent: 'center' }}>
        <div style={{ width: '60vw', margin: '0 auto', display: 'flex', justifyContent: 'center', boxShadow: 'none' }}>
          <SingleImage src={messages} width="30vw" style={{ boxShadow: 'none' }}
            responsiveWidth="95vw"
          />
        </div>
</RisoFlex>

      <RisoFlex>
        <SingleImage src={messagestwo} width="45vw" style={{ boxShadow: 'none' }}
          responsiveWidth="95vw"
        />
      </RisoFlex>

      <RisoFlex>
        <SingleImage src={messagesthree} width="45vw" style={{ boxShadow: 'none' }}
          responsiveWidth="95vw"
        />
      </RisoFlex>

            <FullBg style={{paddingTop: '10vh', borderRadius: 0}} src={messagesfour} />

      <RisoFlex>
  <SingleImage src={threestack} width="45vw" style={{ boxShadow: 'none', paddingTop: '5vh', paddingBottom: '5vh' }}
    responsiveWidth="95vw"
  />
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
      borderRadius: 0
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
      borderRadius: 0
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
        <SingleImage src={ironlakadvert} width="45vw" style={{ boxShadow: 'none', marginTop: '5vh' }}
          responsiveWidth="95vw"
        />
      </RisoFlex>

      <RisoFlex style={{height:'auto'}}>
        <SingleImage src={ironlakadone} width="45vw" style={{ boxShadow: 'none', marginTop: '5vh' }}
          responsiveWidth="95vw"
        />
      </RisoFlex>

      <RisoFlex style={{height:'auto'}}>
        <SingleImage src={ironlakadtwo} width="45vw" style={{ boxShadow: 'none', marginTop: '5vh' }}
          responsiveWidth="95vw"
        />
      </RisoFlex>

      <RisoFlex style={{height:'auto'}}>
        <SingleImage src={ironlaksweaters} width="45vw" style={{ boxShadow: 'none', marginTop: '5vh' }}
          responsiveWidth="95vw"
        />
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
        <SingleImage src={bbfone} width="45vw" style={{ boxShadow: 'none' }}
          responsiveWidth="95vw"
        />
      </RisoFlex>

          

      <RisoFlex style={{height:'auto'}}>
        <SingleImage src={bbftwo} width="45vw" style={{ boxShadow: 'none', marginTop: '5vh' }}
          responsiveWidth="95vw"
        />
      </RisoFlex>


      <RisoFlex style={{height:'auto'}}>
        <SingleImage src={bbfthree} width="45vw" style={{ boxShadow: 'none', marginTop: '5vh' }}
          responsiveWidth="95vw"
        />
      </RisoFlex>

      <RisoFlex style={{height:'auto'}}>
        <SingleImage src={bbffour} width="45vw" style={{ boxShadow: 'none', marginTop: '5vh' }}
          responsiveWidth="95vw"
        />
      </RisoFlex>

      <RisoFlex style={{height:'auto'}}>
        <SingleImage src={bbffive} width="45vw" style={{ boxShadow: 'none', marginTop: '5vh', marginBottom: '5vh' }}
          responsiveWidth="95vw"
        />
      </RisoFlex>

     


        </StyledDiv>



    )
}
