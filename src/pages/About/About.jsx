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
          My name is Zack MacTavish and I've been a designer since 2015. I recently just finished a contract position with Microsoft. I am constantly taking on new projects for startups, and fortune 500 companies. 
          I am skilled in illustration, branding, packaging, print, digital, UX/UI, and front-end development (I hand coded this site).
        </ParagraphTwo>
      </NewSectionTheme>

      <AboutGrid>
        <TextLineone RowsSet="1" />
        <TextSection Fontsize='3rem' style={{ color: 'white' }}>
          Some of the agencies I have worked with include Publicis Groupe, Arkane Society, and Varfaj Partners. I've worked with clients such as Chip Ganassi Racing, Walmart, Leysi, VaynerSports, LoudLuxury, Three Pillars Recruiting, and many others.
          I have recently won my first design award, and you can find a link to this <a style={{ textDecoration:'underline', color:'white'}} href="https://www.indigoawards.com/winners/2390">here.</a>
        </TextSection>
      </AboutGrid>

      <AboutGrid>
        <TextLineone RowsSet="1" />
        <TextSection Fontsize='3.5rem' style={{ color: 'white' }}>
          My goal is to meet more art & design friends. I would love to write more blog posts on Medium, and engage with the design community there. I am looking for my next position as a Product Designer. Thanks for checking out my website, and reading this far!
        </TextSection>
      </AboutGrid>
    </div>
  );
};

export default About;