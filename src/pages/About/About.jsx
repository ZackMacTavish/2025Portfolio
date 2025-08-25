import React, { useLayoutEffect } from 'react';
import { NewSectionTheme, ParagraphTwo } from '../Art_Landing/Art';
import { TextLineone, TextSection } from '../Giga/Giga';
import styled from 'styled-components';
import me from '../../assets/Me.jpeg'; // <- move Me.jpeg to src/assets

const AboutGrid = styled.div`
  display: grid; 
  grid-template-columns: 4vw 60vw 32vw 4vw;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};

  @media (max-width: 450px) {
    height: 75vh;
  }
`;

const AboutPicture = styled.img`
  width: 40vw;
  padding-left: 2vw;

  @media (max-width: 450px) { 
    width: 90vw;
    padding-top: 10vh;
  }
`;

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NewSectionTheme Backgroundheight="100vh">
        <AboutPicture src={me} />
        <ParagraphTwo Widthsize='50vw'>
      Hi, I’m Zack MacTavish, a product designer working since 2015. I’ve been with Microsoft for the past three years, working on the Microsoft Shopping Team to shape user experiences for digital products.
        </ParagraphTwo>
      </NewSectionTheme>

      <AboutGrid>
        <TextLineone RowsSet="1" />
        <TextSection Fontsize='3rem' style={{ color: 'white' }}>
          Some of the agencies I have worked with include Publicis Groupe, Arkane Society, and Varfaj Partners. 
          I’ve also lived in New York City, working as a graphic designer in Manhattan for Outsource Consultants, 
          and studied design in Chicago. I’ve collaborated with clients such as Microsoft, Walmart, 
          Seagate Technology on Disney-branded products, and Chip Ganassi Racing.

        </TextSection>
      </AboutGrid>

      <AboutGrid>
        <TextLineone RowsSet="1" />
        <TextSection Fontsize='3.5rem' style={{ color: 'white' }}>
        Outside of work, I live in Philadelphia with my partner Olivia, who is also an artist. In my own creative time, 
        I focus on making quilts that combine photography, textile techniques, and mixed media, exploring the intersection of art, design, and storytelling.
        </TextSection>
      </AboutGrid>
    </div>
  );
};

export default About;