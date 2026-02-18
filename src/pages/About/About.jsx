import React, { useLayoutEffect, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Scene from '../../components/Three/three';
import me from '../../assets/Me.jpeg';
import meAvif from '../../assets/Me.avif';
import meWebp from '../../assets/Me.webp';
import imagereplace from '../../assets/BlackTurtleneck-popart-01.jpg';
import imagereplaceAvif from '../../assets/BlackTurtleneck-popart-01.avif';
import imagereplaceWebp from '../../assets/BlackTurtleneck-popart-01.webp';
import quilthanging from '../../assets/hangingquilts.jpg';
import quilthangingAvif from '../../assets/hangingquilts.avif';
import quilthangingWebp from '../../assets/hangingquilts.webp';
import { FullHeightTextSection, TextContainer, TextContent } from '../Access_Direct/AD';
import { ImageTextSplit } from '@zackmactavish/foundation';
import { Seo } from '@zackmactavish/foundation';
import { site, projects } from '../../data/metadata';


/* Writing the first main section in flex, but switching over to grids, with Theme Provider built in for dark-light modes*/
const NewSectionTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4vw;
  height: ${(props) => props.Backgroundheight};
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 0 5vw;

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    padding-bottom: 10vh;
    gap: 2vh;
  }
`;

/* Parent container */
export const NewSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.Backgroundheight};
  width: 100vw;
  background-color: ${(props) => props.Backgroundcolor};

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 5vh 0 10vh 0;
    text-align: center;
  }
`;

const ParagraphTwo = styled.div`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  width: ${(props) => props.Widthsize};
  color: white;

  @media (max-width: 1400px) {  
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {  
    width: 90%;
    margin-top: 1vh;
    padding-bottom: 3vh;
    text-align: left;
  }

  @media (max-width: 850px) {
    font-size: 1.4rem;
    padding-top: 2vh;
  }

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`;

/* ---------- Animations ---------- */
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 1.5s infinite ease-in-out;
  opacity: ${(props) => (props.visible ? 0.8 : 0)};
  transition: opacity 0.6s ease;
  pointer-events: none;
`;

const Arrow = styled.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
`;

/* ---------- About picture ---------- */
const AboutPicture = (props) => (
  <picture>
    <source srcSet={meAvif} type="image/avif" />
    <source srcSet={meWebp} type="image/webp" />
    <img
      src={me}
      alt="Zack MacTavish portrait"
      loading="eager"
      decoding="async"
      fetchPriority="high"
      style={{
        width: '22vw',
        height: '22vw',
        objectFit: 'cover',
        borderRadius: '50%',
        flexShrink: 0,
        ...props.style
      }}
    />
  </picture>
);

export const QuiltContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* center inner wrapper */
  width: 100%;
  padding: 8vh 0; /* add more vertical space */
  background-color: transparent;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 4vh 0;
    align-items: center;
  }
`;

export const QuiltInner = styled.div`
  width: 62vw; /* +2vw for consistency with Landing page */
  max-width: 1100px; /* aligns with other sections' inner width */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.48fr 0.52fr; /* give text a bit more room */
  align-items: center; /* vertically center text relative to image */
  justify-content: center;
  gap: calc(2rem + 16px); /* add extra gap (~16px) */

  @media (max-width: 1000px) {
    width: 90vw;
    grid-template-columns: 1fr;
    gap: 1rem;
    align-items: center;
  }
`;


// QuiltImage as a functional component using <picture>
export const QuiltImage = (props) => (
  <picture>
    <source srcSet={quilthangingAvif} type="image/avif" />
    <source srcSet={quilthangingWebp} type="image/webp" />
    <img
      src={quilthanging}
      alt={props.alt || "Quilt hanging"}
      style={{
        flex: '0 0 25%',
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        objectFit: 'contain',
        borderRadius: 18,
        ...(props.style || {})
      }}
    />
  </picture>
);

export const QuiltText = styled(ParagraphTwo)`
  flex: 1;
  min-width: 0;
  padding-right: 0;
  font-size: clamp(1.05rem, 1.6vw, 1.5rem);
  line-height: 1.6;
  color: white;

  @media (max-width: 1400px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1000px) {
    width: 90%;
    max-width: 90%;
    padding-right: 0;
    font-size: 1.6rem; /* slightly bigger on responsive */
    text-align: left;
    margin-top: 1vh;
    padding-bottom: 3vh;
  }
`;

/* ---------- Scene Section Styling ---------- */
const ArtDiv = styled.div`
  overflow-y: hidden;
  width: 100vw;
`;

const GridThemes = styled.div`
  display: grid;
  overflow-y: hidden;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  background-color: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  width: 100vw;
`;

const GridHeader = styled.h1`
  display: grid;
  grid-column-start: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  width: 60vw;
  max-width: 1100px;
  margin: 0 auto;
  text-align: left; /* left align text within 60vw container */
  justify-self: center; /* keep the container centered horizontally */
  align-self: center;   /* center the grid item vertically within its rows */
  font-size: clamp(20px, 6vw, 4.8rem);
  line-height: 1.15; /* tighten desktop line height slightly */
  color: white;
  z-index: 200;
  font-family: 'Space Grotesk', sans-serif;
  text-shadow: 2px 2px 50px rgba(0, 0, 0, 1);

  @media (max-width: 1000px) {
    font-size: 3.2rem; /* slightly larger on mobile */
    line-height: 1.2;
    justify-self: start; /* keep heading more towards left side */
    margin: 0; /* avoid extra centering margins on mobile */
    text-align: left;
  }
  @media (max-width: 800px) {
    font-size: 2.6rem; /* slightly larger on smaller mobile */
    line-height: 1.2;
    justify-self: start;
    margin: 0;
    text-align: left;
  }
`;

const GridImage = styled.div`
  display: grid;
  grid-column-start: 3;
  grid-row-start: 2;
`;

/* SceneInner removed to keep image in original grid placement while only moving header */

const About = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [hiddenForever, setHiddenForever] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 450);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hiddenForever && window.scrollY > 50) {
        setShowArrow(false);
        setHiddenForever(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    const updateMedia = () => setDesktop(window.innerWidth > 450);
    window.addEventListener('resize', updateMedia);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMedia);
    };
  }, [hiddenForever]);

  return (
    <div>
      <Seo {...projects.about} sameAs={site.sameAs} keywords={projects.about.keywords} />
      {/* ---------- Module 1: About Picture + First Paragraph ---------- */}
      <NewSectionTheme Backgroundheight="100vh" style={{ position: "relative" }}>
  <AboutPicture />
        <ParagraphTwo Widthsize='47vw'>
          Hi, I'm Zack MacTavish, an artist and product designer based in Philadelphia, PA.
          For the past three years, I've been with Microsoft's Shopping Team, shaping user
          experiences for digital products.
        </ParagraphTwo>
        {!hiddenForever && (
          <ArrowWrapper visible={showArrow}>
            <Arrow />
          </ArrowWrapper>
        )}
      </NewSectionTheme>

      {/* ---------- Module 2: Second Paragraph ---------- */}
      <FullHeightTextSection style={{ backgroundColor: 'white' }}>
        <TextContainer>
          <TextContent style={{ color: '#5d5d5d' }}>
            Some of the agencies I have worked with include{' '}
            <a
              href="https://www.publicisgroupe.com/en"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#5d5d5d', textDecoration: 'underline' }}
            >
              Publicis Groupe
            </a>
            ,{' '}
            <a
              href="https://prairieandforge.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#5d5d5d', textDecoration: 'underline' }}
            >
              Prairie & Forge
            </a>
            , and{' '}
            <a
              href="https://varfaj.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#5d5d5d', textDecoration: 'underline' }}
            >
              Varfaj Partners
            </a>
            . I've also lived in New York City, working as a graphic designer in Manhattan for{' '}
            <a
              href="https://www.outsourceconsultants.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#5d5d5d', textDecoration: 'underline' }}
            >
              Outsource Consultants
            </a>
            , and studied design in Chicago. I've collaborated with clients such as Microsoft, Walmart, Seagate Technology on Disney-branded products, and Chip Ganassi Racing.
          </TextContent>
        </TextContainer>
      </FullHeightTextSection>

      {/* ---------- Module 3: Quilt + Third Paragraph now uses ImageTextSplit ---------- */}
        <div style={{ padding: '8vh 0' }}>
          <ImageTextSplit
            imageSrc={quilthanging}
            imageAvif={quilthangingAvif}
            imageWebp={quilthangingWebp}
            imageAlt="Quilt hanging"
            textSize="2.6rem"
            textColor="#fff"
          >
            Outside of work, I live with my partner Olivia, who is also an artist. 
            In my own creative time, I focus on making quilts that combine photography, 
            textile techniques, and mixed media, exploring the intersection of art, 
            design, and storytelling.
          </ImageTextSplit>
        </div>

      {/* ---------- Module 4: Three.js Scene ---------- */}
      <ArtDiv>
            <GridThemes>
              <GridHeader>Thanks for <br/>stopping by</GridHeader>
              <GridImage>
                {isDesktop ? (
                  <Scene />
                ) : (
                  <picture>
                    <source srcSet={imagereplaceAvif} type="image/avif" />
                    <source srcSet={imagereplaceWebp} type="image/webp" />
                    <img style={{ width: '90vw' }} src={imagereplace} alt="fallback" />
                  </picture>
                )}
              </GridImage>
            </GridThemes>
      </ArtDiv>
    </div>
  );
};

export default About;