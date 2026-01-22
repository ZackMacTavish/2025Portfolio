import React, { useLayoutEffect, useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Seo from '../../components/SEO/Seo';
import { site, projects } from '../../data/metadata';
import Scene from '../../components/Three/three';
import me from '../../assets/Me.jpeg';
import imagereplace from '../../assets/BlackTurtleneck-popart-01.jpg';
import quilthanging from '../../assets/hangingquilts.jpg';
import Socials from '../../components/Social Bar/Socials';
import { FullHeightTextSection, TextContainer, TextContent } from '../Access_Direct/AD';

// Spotlight background animations
const spotlightLeftMove = keyframes`
  0% { transform: translate(-50%, -60%) rotate(0deg); }
  20% { transform: translate(-20%, -80%) rotate(90deg); }
  40% { transform: translate(10%, -40%) rotate(180deg); }
  60% { transform: translate(-40%, -20%) rotate(270deg); }
  80% { transform: translate(-70%, -50%) rotate(320deg); }
  100% { transform: translate(-50%, -60%) rotate(360deg); }
`;

const spotlightRightMove = keyframes`
  0% { transform: translate(60%, -50%) rotate(0deg); }
  20% { transform: translate(80%, -20%) rotate(90deg); }
  40% { transform: translate(40%, -70%) rotate(180deg); }
  60% { transform: translate(20%, -30%) rotate(270deg); }
  80% { transform: translate(70%, -60%) rotate(320deg); }
  100% { transform: translate(60%, -50%) rotate(360deg); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

// Landing section with spotlights
const LandingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4vw;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  position: relative;
  overflow: hidden;
  padding: 0 5vw;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    filter: blur(200px);
    background: rgba(255, 255, 255, 0.3);
    z-index: 0;
  }

  &::before {
    top: 20%;
    left: 10%;
    animation: ${spotlightLeftMove} 35s ease-in-out infinite;
  }

  &::after {
    top: 40%;
    left: 65%;
    animation: ${spotlightRightMove} 40s ease-in-out infinite;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: auto;
    padding: 10vh 5vw;
    gap: 2vh;
  }
`;



const AboutPicture = styled.img`
  width: 22vw;
  height: 22vw;
  object-fit: cover;
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 60vw;
    height: 60vw;
  }

  @media (max-width: 450px) {
    width: 70vw;
    height: 70vw;
  }
`;

const ParagraphWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const ParagraphTwo = styled.div`
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  width: ${(props) => props.Widthsize};
  color: white;
  z-index: 1;

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

const SocialsWrapper = styled.div`
  position: relative;
  z-index: 10;
  margin-bottom: 2vh;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 1.5s infinite ease-in-out;
  opacity: ${(props) => (props.visible ? 0.8 : 0)};
  transition: opacity 0.6s ease;
  pointer-events: none;
  z-index: 10;
`;

const Arrow = styled.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
`;

export const QuiltContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 5vh 10vw;
  gap: 4vw;
  background-color: transparent;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 4vh 0;
    gap: 2vh;
    align-items: center;
  }
`;

export const QuiltImage = styled.img`
  flex: 0 0 auto;
  max-width: 33%;
  height: auto;
  object-fit: contain;

  @media (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const QuiltText = styled(ParagraphTwo)`
  flex: 1;
  max-width: 45%;
  padding-right: 8vw;
  font-size: 2.2rem;
  color: white;

  @media (max-width: 1400px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1000px) {
    max-width: 90%;
    padding-right: 0;
    font-size: 1.4rem;
    text-align: left;
    margin-top: 1vh;
    padding-bottom: 3vh;
  }
`;

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
  padding-left: 5vw;
  grid-row-start: 2;
  grid-row-end: 4;
  font-size: clamp(22px, 10vw, 8rem);
  align-self: center;
  line-height: 14vh;
  color: white;
  z-index: 200;
  font-family: 'Space Grotesk', sans-serif;
  text-shadow: 2px 2px 50px rgba(0, 0, 0, 1);

  @media (max-width: 1000px) {
    line-height: 7vh;
    font-size: 4rem;
    padding-left: 3vw;
  }
  @media (max-width: 800px) {
    line-height: 5vh;
    font-size: 2.8rem;
    padding-left: 6vw;
  }
`;

const GridImage = styled.div`
  display: grid; 
  grid-column-start: 3;
  grid-row-start: 2;
`;

const LandingPage = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [hiddenForever, setHiddenForever] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 450);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Detect desktop/mobile
  useEffect(() => {
    const updateMedia = () => setDesktop(window.innerWidth > 450);
    updateMedia();
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hiddenForever && window.scrollY > 50) {
        setShowArrow(false);
        setHiddenForever(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hiddenForever]);

  return (
    <div>
      <Seo {...projects.landing} sameAs={site.sameAs} keywords={projects.landing.keywords || site.keywords} />
      {/* Landing Section with About Picture + First Paragraph */}
      <LandingDiv>
        <AboutPicture src={me} />
        <ParagraphWrapper>
          <SocialsWrapper>
            <Socials />
          </SocialsWrapper>
          <ParagraphTwo Widthsize='47vw'>
            Hi, I'm Zack MacTavish, an artist and product designer based in Philadelphia, PA.
            For almost four years, I've been with Microsoft's Shopping Team, shaping user
            experiences for digital products.
          </ParagraphTwo>
        </ParagraphWrapper>

        {/* Scroll arrow */}
        {!hiddenForever && (
          <ArrowWrapper visible={showArrow}>
            <Arrow />
          </ArrowWrapper>
        )}
      </LandingDiv>

      {/* Module 2: Second Paragraph */}
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

      {/* Module 3: Quilt + Third Paragraph */}
      <QuiltContainer>
        <QuiltImage src={quilthanging} alt="Quilt hanging" />
        <QuiltText Widthsize='45%'>
          Outside of work, I live with my partner Olivia, who is also an artist. 
          In my own creative time, I focus on making quilts that combine photography, 
          textile techniques, and mixed media, exploring the intersection of art, 
          design, and storytelling.
        </QuiltText>
      </QuiltContainer>

      {/* Module 4: Three.js Scene */}
      <ArtDiv>
        <GridThemes>
          <GridHeader>Thanks for <br/>stopping by</GridHeader>
          <GridImage>
            {isDesktop ? (
              <Scene />
            ) : (
              <img style={{ width: '90vw' }} src={imagereplace} alt="fallback" />
            )}
          </GridImage>
        </GridThemes>
      </ArtDiv>
    </div>
  );
};

export default LandingPage;