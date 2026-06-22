import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';

// Composition components
import { FullBg, ParagraphFour, RisoFlex, SingleImage } from '../../components/CaseStudyPrimitives';
import { StyledDiv } from '../../components/GigaPrimitives';
// import { NewSection } from '../About/About';
import { FullHeightTextSection, TextContainer, TextContent } from '../../components/CaseStudyPrimitives';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';
import { ProjectTitle } from '../../components/GigaPrimitives';
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
import { IronlakInternshipModule } from '../../components/IronlakInternshipIntro';
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
  width: 100%; /* fill the grid column */
  max-width: 420px; /* keep the poster from getting oversized when stacked */
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: ${(p) => p.theme.radii.card};
`

const ThisIsItContainer = styled(Grid60TwoCol)`
  /* Align to the page's 64rem grid (the old 62vw made this section render far
     narrower than its neighbours, shrinking the poster to ~146px and leaving
     dead space that pushed the copy left). */
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 4vh 1.5rem;
  /* minmax(0, …) lets both columns distribute the full width evenly so the
     copy fills its column instead of stranding empty space on the right. */
  grid-template-columns: minmax(0, 0.52fr) minmax(0, 0.48fr);
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: center;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
    text-align: center;
    padding: 4vh 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 3vh 1.25rem;
  }
`;

const ThisIsItText = styled(ParagraphFour)`
  color: ${(p) => p.theme.fontColor};
  margin: 0;
  width: auto;            /* override base 40vw */
  max-width: 740px;       /* slightly wider to improve line breaks */
  padding-right: 0;       /* remove base desktop padding */
`;

const PosterCardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4vh;
  padding: 6vh 0;
  width: 100%;
`;

const PosterCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 3vw 4vw;
  width: 60vw;
  max-width: 1000px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    width: 92vw;
    padding: 4vw 5vw;
    border-radius: 16px;
  }
`;

export default function GraphicDesign() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (
        <StyledDiv>
       <Seo {...projects['graphic-design']} sameAs={site.sameAs} keywords={projects['graphic-design'].keywords} siteDefaults={site} />

      <GDTopSection>
        <GDTopSectionText>
          <ProjectTitle style={{ fontSize: '2.8rem', marginBottom: '0.1em' }}>Graphic Design</ProjectTitle>
          <div style={{ height: '1px', background: '#e0e0e0', width: '48px', margin: '0.1em 0 0.3em 0' }} />
        </GDTopSectionText>
        <Pineapple src={pineapple} alt="Graphic Design Cover" />
      </GDTopSection>

      <IronlakInternshipModule />

  {/* Hero Cover image, now in FullBg for modern format and full width */}



           <FullHeightTextSection style={{ backgroundColor: 'var(--surface-muted)' }}>
  <TextContainer>
    <TextContent style={{ color: 'var(--text-strong)' }}>
      Stay Golden was a passion project created with my friend Alek Vasic, representing a series of songs. 
      It received silver and bronze awards for digital art and packaging design from the Indigo Design Awards.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

  <PosterCardSection>
    <PosterCard style={{ padding: 0, overflow: 'hidden' }}>
      <FullBg
        src={goldenAvif}
        webp={goldenWebp}
        fallback={goldenPng}
        style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', margin: 0, padding: 0, borderRadius: 0, backgroundColor: 'transparent' }}
      />
    </PosterCard>
  </PosterCardSection>




                <FullHeightTextSection style={{ backgroundColor: 'var(--surface-muted)' }}>
  <TextContainer>
    <TextContent style={{ color: 'var(--text-strong)' }}>
      Graphic Posters meet at the intersection of my art and design practice. 
      This includes passion projects, and a poster for the 2017 VCD Design show in Chicago, IL.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

          
          <PosterCardSection>
            <PosterCard>
              <FullBg
                src={graphicpostersAvif}
                webp={graphicpostersWebp}
                style={{ width: '100%', margin: 0, borderRadius: 0, backgroundColor: 'transparent' }}
                alt="Graphic Posters 1"
              />
            </PosterCard>
            <PosterCard style={{ padding: 0, overflow: 'hidden' }}>
              <FullBg
                src={oliviafloralAvif}
                webp={oliviafloralWebp}
                style={{ width: '100%', margin: 0, borderRadius: 0, backgroundColor: 'transparent', display: 'block' }}
                alt="Olivia Floral Mockup"
              />
            </PosterCard>
            <PosterCard>
              <FullBg
                src={goodbyehelloAvif}
                webp={goodbyehelloWebp}
                style={{ width: '100%', margin: 0, borderRadius: 0, backgroundColor: 'transparent' }}
                alt="Graphic Posters 2"
              />
            </PosterCard>
          </PosterCardSection>

            {/* "This is it" poster section standardized to 60vw */}
            <ThisIsItContainer>
              <ThisisIt src={artbook} alt="This is it poster" />
              <ThisIsItText>
                'This is it' was a poster design I made for the 2017 SAIC VCD Design show. The piece explores a quote from the movie 'Style Wars'.
              </ThisIsItText>
            </ThisIsItContainer>

<FullHeightTextSection style={{ backgroundColor: 'var(--surface-muted)', marginTop: '6vh' }}>
  <TextContainer>
    <TextContent style={{ color: 'var(--text-strong)' }}>
      Working alongside the Walmart team at Publicis, we created a variety of designs to present to Marketing. The lines I worked on were the Christmas, Halloween, and Back To School campaigns.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

            <RisoFlex style={{ justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
          <SingleImage src={messages} responsive={false} style={{ boxShadow: 'none', width: '100%', maxWidth: '32rem', borderRadius: '24px' }}
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

            <PosterCardSection style={{ paddingTop: '10vh' }}>
              <PosterCard style={{ padding: 0, overflow: 'hidden' }}>
                <FullBg
                  src={messagesfour}
                  style={{ width: '100%', margin: 0, borderRadius: 0, backgroundColor: 'transparent', display: 'block' }}
                />
              </PosterCard>
            </PosterCardSection>

      <RisoFlex>
  <SingleImage src={threestack} width="45vw" style={{ boxShadow: 'none', paddingTop: '5vh', paddingBottom: '5vh' }}
    responsiveWidth="95vw"
  />
      </RisoFlex>

           <div style={{ width: '100%', maxWidth: '64rem', margin: '0 auto', padding: '0 1.5rem', boxSizing: 'border-box' }}>
  <FullBg
    src={gobackbig}
    style={{
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      objectPosition: 'center',
      display: 'block',
      margin: 0,
      padding: 0,
      borderRadius: '24px'
    }}
  />
</div>

       <div style={{ width: '100%', maxWidth: '64rem', margin: '4vh auto 0 auto', padding: '0 1.5rem', boxSizing: 'border-box' }}>
  <FullBg
    src={btc}
    style={{
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      objectPosition: 'center', // centers crop vertically and horizontally
      display: 'block',
      margin: 0,
      padding: 0,
      borderRadius: '24px'
    }}
  />
</div>

           <FullHeightTextSection style={{ backgroundColor: 'var(--surface-muted)', marginTop: '6vh' }}>
  <TextContainer>
    <TextContent style={{ color: 'var(--text-strong)' }}>
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
