import React from 'react';
import dribbble from '../../assets/dribbble.svg';
import github from '../../assets/github.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import medium from '../../assets/medium.svg';
import styled from 'styled-components';

const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  background: #222;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 4px 10px;
  position: absolute;
  z-index: 10;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.85rem;
  pointer-events: none;
  transition: opacity 0.18s;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
`;

const SocialLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 4px;
  &:hover ${Tooltip}, &:focus ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

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
  width: ${(p) => p.$small ? "clamp(26px, 1.2vw, 40px)" : "clamp(44px, 2vw, 70px)"};
  transition: all 1s ease;
  display: block;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`;


export default function Socials({ small } = {}) {
  return (
    <Socialbar>
      <SocialLink href="https://dribbble.com/Zmactavish" target="_blank" rel="noreferrer" aria-label="Dribbble">
        <SocialImages src={dribbble} $small={small} />
        <Tooltip>Dribbble</Tooltip>
      </SocialLink>
      <SocialLink href="https://www.instagram.com/zackmichaelmactavish" target="_blank" rel="noreferrer" aria-label="Instagram">
        <SocialImages src={instagram} $small={small} />
        <Tooltip>Instagram</Tooltip>
      </SocialLink>
      <SocialLink href="https://www.linkedin.com/in/zacharymactavish/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <SocialImages src={linkedin} $small={small} />
        <Tooltip>LinkedIn</Tooltip>
      </SocialLink>
      <SocialLink href="https://github.com/ZackMacTavish" target="_blank" rel="noreferrer" aria-label="Github">
        <SocialImages src={github} $small={small} />
        <Tooltip>Github</Tooltip>
      </SocialLink>
      <SocialLink href="https://medium.com/@zmactavish" target="_blank" rel="noreferrer" aria-label="Medium">
        <SocialImages src={medium} $small={small} />
        <Tooltip>Medium</Tooltip>
      </SocialLink>
    </Socialbar>
  );
}