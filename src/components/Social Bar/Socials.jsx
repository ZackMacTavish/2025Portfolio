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
  filter: ${(p) => (p.theme.name === 'light' ? 'brightness(0)' : 'brightness(0) invert(1)')};
  opacity: 1;
  transition: filter 0.3s ease, transform 0.3s ease;
  display: block;

  &:hover {
    filter: ${(p) => (p.theme.name === 'light'
      ? 'brightness(0) saturate(100%) invert(27%) sepia(9%) saturate(779%) hue-rotate(42deg) brightness(91%) contrast(88%)'
      : 'brightness(0) saturate(100%) invert(68%) sepia(38%) saturate(1166%) hue-rotate(324deg) brightness(99%) contrast(83%)')};
    transform: translateY(-2px);
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