import React from 'react';
import dribbble from '../../assets/dribbble.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import medium from '../../assets/medium.svg';
import styled from 'styled-components';

const Socialbar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1vw;
  
  @media (max-width: 450px) { 
    max-width: 320px;
    justify-content: flex-start;
    gap: 3vw;
  }
`;

const SocialImages = styled.img`
  width: clamp(44px, 2vw, 70px);
  transition: all 1s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`;

export default function Socials() {
  return (
    <Socialbar>
      <a href="https://dribbble.com/Zmactavish" target='_blank' rel="noreferrer">
        <SocialImages src={dribbble} />
      </a>
      
      <a href="https://www.instagram.com/zackmichaelmactavish" target='_blank' rel="noreferrer">
        <SocialImages src={instagram} />
      </a>
     
      <a href="https://www.linkedin.com/in/zacharymactavish/" target='_blank' rel="noreferrer">
        <SocialImages src={linkedin} />
      </a>
      
      <a href="https://github.com/ZackMacTavish" target='_blank' rel="noreferrer">
        <SocialImages src={github} />
      </a>
      
      <a href="https://medium.com/@zmactavish" target='_blank' rel="noreferrer">
        <SocialImages src={medium} />
      </a>  
    </Socialbar>
  );
}