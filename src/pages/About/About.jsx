import React, { useLayoutEffect, useEffect, useState } from 'react';
import { NewSectionTheme, ParagraphTwo } from '../Art_Landing/Art';
import styled, { keyframes } from 'styled-components';
import me from '../../assets/Me.jpeg';
import { FullHeightTextSection, TextContainer, TextContent } from '../Printmaking/Artworks';

// Bounce animation
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
`;

// Arrow container
const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 5%; /* keeps it inside viewport, not cut off */
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 1.5s infinite ease-in-out;
  opacity: ${(props) => (props.visible ? 0.8 : 0)};
  transition: opacity 0.6s ease;
  pointer-events: none;
`;

// Modern subtle arrow
const Arrow = styled.div`
  width: 24px;
  height: 24px;
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  transform: rotate(-45deg);
  border-radius: 2px;
`;

const AboutPicture = styled.img`
  width: 40vw;
  padding-left: 2vw;
  padding-top: 6vh;

  @media (max-width: 850px) { 
    width: 60vw;       /* larger on tablets */
    padding-top: 5vh;
  }

  @media (max-width: 450px) { 
    width: 90vw;       /* almost full width on mobile */
    padding-top: 8vh;  /* extra space from top */
  }
`;

const About = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [hiddenForever, setHiddenForever] = useState(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!hiddenForever && window.scrollY > 50) {
        setShowArrow(false);
        setHiddenForever(true); // lock it hidden forever
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hiddenForever]);

  return (
    <div>
      {/* First section with arrow */}
      <NewSectionTheme Backgroundheight="100vh" style={{ position: "relative" }}>
        <AboutPicture src={me} />
        <ParagraphTwo Widthsize='47vw'>
       Hi, I’m Zack MacTavish, an artist and product designer based in Philadelphia, PA. For the past three years, I’ve been with Microsoft’s Shopping Team, shaping user experiences for digital products.
        </ParagraphTwo>
        {!hiddenForever && (
          <ArrowWrapper visible={showArrow}>
            <Arrow />
          </ArrowWrapper>
        )}
      </NewSectionTheme>

      {/* Second section */}
 {/* Second section - white background */}
<FullHeightTextSection style={{ backgroundColor: 'white' }}>
  <TextContainer>
    <TextContent style={{ color: '#5d5d5d' }}>
      Some of the agencies I have worked with include Publicis Groupe, Arkane Society, 
      and Varfaj Partners. I’ve also lived in New York City, working as a graphic designer 
      in Manhattan for Outsource Consultants, and studied design in Chicago. 
      I’ve collaborated with clients such as Microsoft, Walmart, Seagate Technology 
      on Disney-branded products, and Chip Ganassi Racing.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>

{/* Third section - black background */}
<FullHeightTextSection style={{ backgroundColor: 'black' }}>
  <TextContainer>
    <TextContent style={{ color: 'white' }}>
      Outside of work, I live with my partner Olivia, who is also an artist. 
      In my own creative time, I focus on making quilts that combine photography, textile techniques, 
      and mixed media, exploring the intersection of art, design, and storytelling.
    </TextContent>
  </TextContainer>
</FullHeightTextSection>
    </div>
  );
};

export default About;