// src/components/Nav/Nav.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/Final-M-SinglePiece.svg';
import { Link } from 'react-router-dom';

// Keyframes: move back and forth 3 times, fade out starts earlier on the last back pass
const slideFade = keyframes`
  0% { transform: translateX(0); opacity: 1; }
  33% { transform: translateX(calc(100vw - 650px)); opacity: 1; }
  66% { transform: translateX(0); opacity: 1; }
  85% { transform: translateX(50vw); opacity: 0; }
  100% { transform: translateX(0); opacity: 0; }
`;

const Navdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  position: fixed;
  width: 100vw;
  height: 8vh;
  padding: 0 3vw;
  z-index: 1000;
  /* overflow removed so dropdowns are no longer clipped */
`;

const StrokeWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  pointer-events: none;
  overflow: visible; /* allow neon blur to extend outside nav */
`;

// Solid stroke with gradient masks for fade on edges
const SolidStroke = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 1pt;
  background-color: #E88D67;
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  animation: ${slideFade} 10s ease-in-out forwards;
  z-index: 998;
`;

// Neon stroke with stronger blur
const NeonStroke = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 4px;
  background: linear-gradient(to right, transparent, #E88D67, transparent);
  filter: blur(14px);
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  animation: ${slideFade} 10s ease-in-out forwards;
  z-index: 999;
`;

const Logo = styled.img`
  width: clamp(46px, 2.6vw, 90px);
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-right: 6vw;
  max-width: calc(100vw - 6vw);
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.5rem;

  @media (max-width: 1200px) {
    gap: 1rem;
  }

  @media (max-width: 800px) {
    gap: 0.8rem;
    font-size: 1rem;
  }
`;

const ListItem = styled.li`
  position: relative;
  white-space: nowrap;

  &:hover > div {
    display: block;
  }
`;

const NavLink = styled(Link)`
  color: #a6d1ca;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(74, 74, 74, 0.9);
  backdrop-filter: blur(6px);
  border-radius: 0.25rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: none;
  min-width: 8rem;
  z-index: 1000;
`;

const DropdownMenu = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: rgba(166, 209, 202, 0.4);
    color: white;
  }
`;

// Divider between series and individual works
const DropdownDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.25rem 0;
`;

export default function Nav() {
  return (
    <Navdiv>
      <Link to="/MacTavish" style={{ cursor: 'none' }}>
        <Logo src={logo} />
      </Link>

      <NavLinksWrapper>
        <NavLinks>
          <ListItem>
            <NavLink to="/Art">Art</NavLink>
            <Dropdown>
              <DropdownMenu to="/Dwelling">Dwelling</DropdownMenu>
              <DropdownMenu to="/Composition">Composition</DropdownMenu>
              
              <DropdownDivider /> {/* Divider between series and individual works */}
              
              <DropdownMenu to="/Artworks">Artworks</DropdownMenu>
              <DropdownMenu to="/Photography">Photo</DropdownMenu>
              <DropdownMenu to="/Graffiti">3D + Graffiti</DropdownMenu>
            </Dropdown>
          </ListItem>

          <ListItem>
            <NavLink to="/Design">Design</NavLink>
            <Dropdown>
              <DropdownMenu to="/Giga">Giga</DropdownMenu>
              <DropdownMenu to="/ThreePillars">Three Pillars</DropdownMenu>
              <DropdownMenu to="/Ux">Leysi</DropdownMenu>
              <DropdownMenu to="/Piton">Piton</DropdownMenu>
              <DropdownMenu to="/AccessDirect">Access Direct</DropdownMenu>
              <DropdownMenu to="/Outsource">Outsource</DropdownMenu>
              <DropdownMenu to="/GraphicDesign">Graphic Design</DropdownMenu>
            </Dropdown>
          </ListItem>

          <ListItem>
            <NavLink to="/About">About</NavLink>
          </ListItem>
        </NavLinks>

        <StrokeWrapper>
          <SolidStroke />
          <NeonStroke />
        </StrokeWrapper>
      </NavLinksWrapper>
    </Navdiv>
  );
}