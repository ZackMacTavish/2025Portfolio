// src/components/Nav/Nav.jsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/Final-M-SinglePiece.svg';
import { Link, useLocation } from 'react-router-dom';

const spotlightLeftMove = keyframes`
  0% { transform: translateX(-40%) translateY(0); opacity: 1; }
  25% { transform: translateX(-35%) translateY(-5px); opacity: 0.9; }
  50% { transform: translateX(-30%) translateY(3px); opacity: 0.8; }
  75% { transform: translateX(-35%) translateY(-2px); opacity: 0.9; }
  100% { transform: translateX(-40%) translateY(0); opacity: 0.85; }
`;

const spotlightRightMove = keyframes`
  0% { transform: translateX(140%) translateY(0); opacity: 1; }
  25% { transform: translateX(135%) translateY(4px); opacity: 0.95; }
  50% { transform: translateX(130%) translateY(-3px); opacity: 0.9; }
  75% { transform: translateX(135%) translateY(2px); opacity: 0.95; }
  100% { transform: translateX(140%) translateY(0); opacity: 0.9; }
`;

const Spotlight = styled.span`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,255,255,0.6) 0%, rgba(255,192,203,0.35) 60%, transparent 100%);
  filter: blur(70px);
  pointer-events: none;
  z-index: 997;
`;

const SpotlightLeft = styled(Spotlight)`
  left: 0;
  animation: ${spotlightLeftMove} 6s ease-in-out infinite;
`;

const SpotlightRight = styled(Spotlight)`
  right: 0;
  animation: ${spotlightRightMove} 6s ease-in-out infinite;
`;

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
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  position: fixed;
  width: 100vw;
  height: 8vh;
  padding: 0 3vw;
  z-index: 1000;
`;

const StrokeWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
  pointer-events: none;
  overflow: visible;
`;

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

const NeonStroke = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 650px;
  height: 4px;
  background: linear-gradient(to right, #FF8D67, #E88D67, #FFAA88);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  filter: blur(20px);
  mask-image: linear-gradient(to right, transparent 5%, black 15%, black 85%, transparent 95%);
  -webkit-mask-image: linear-gradient(to right, transparent 5%, black 15%, black 85%, transparent 95%);
  animation: ${slideFade} 10s ease-in-out forwards;
  z-index: 999;
`;

const pinkPulse = keyframes`
  0% { background-position: 0% 0; }
  50% { background-position: 50% 0; }
  100% { background-position: 0% 0; }
`;

const PinkMicroStroke = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 700px; 
  height: 16px;
  background: linear-gradient(
    to right,
    transparent 0%, 
    #ff6ec7 10%, 
    #ff1493 50%, 
    #ff6ec7 85%, 
    transparent 100%
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  filter: blur(36px);
  mask-image: linear-gradient(to top, black 0%, transparent 100%);
  -webkit-mask-image: linear-gradient(to top, black 0%, transparent 100%);
  animation: ${slideFade} 10s ease-in-out forwards;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 30, 150, 0.8) 35%,
      rgba(255, 30, 150, 1) 50%,
      rgba(255, 30, 150, 0.8) 65%,
      transparent 100%
    );
    background-size: 100% 100%;
    background-repeat: no-repeat;
    animation: ${pinkPulse} 2s ease-in-out infinite;
  }

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 60px;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 30, 150, 0.2), transparent);
    pointer-events: none;
  }

  z-index: 1001;
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

  @media (max-width: 1200px) { gap: 1rem; }
  @media (max-width: 800px) { gap: 0.8rem; font-size: 1rem; }
`;

const NavLabel = styled.span`
  color: #a6d1ca;
  font-weight: 800;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  cursor: default;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;

const ListItem = styled.li`
  position: relative;
  white-space: nowrap;

  /* enable hover-open for devices that support hover (desktop) */
  @media (hover: hover) {
    &:hover > div {
      display: block;
    }
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
  top: calc(100% + 24px);
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(6px);
  border-radius: 0 0 0.25rem 0.25rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: ${(props) => (props.$open ? 'block' : 'none')};
  min-width: 10rem; /* Increased from 8rem */
  z-index: 1200;
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

const DropdownDivider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0.25rem 0;
`;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = React.useRef();

  useEffect(() => {
    // close dropdown on route change
    setOpen(false);
  }, [location.pathname]);

  // Mobile: close dropdown on scroll or outside click
  useEffect(() => {
    if (!open) return;
    // Only activate on mobile
    if (!window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const handleScroll = () => setOpen(false);
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [open]);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <Navdiv>
      <Link to="/MacTavish" style={{ cursor: 'none' }}>
        <Logo src={logo} />
      </Link>

      <NavLinksWrapper>
        <NavLinks>
          <ListItem>
            <NavLabel
              role="presentation"
              aria-haspopup="true"
              aria-expanded={open}
              style={{ cursor: 'default' }}
              onClick={(e) => {
                // Only allow click on mobile
                if (window.matchMedia('(hover: none)').matches) {
                  handleToggle();
                } else {
                  e.preventDefault();
                }
              }}
            >
              Projects
            </NavLabel>
            <div
              style={{
                position: 'absolute',
                left: '-40px',
                top: 'calc(100% - 40px)',
                width: '180px',
                height: '75px',
                background: 'rgba(255,0,0,0.0)',
                border: 'none',
                pointerEvents:
                  window.matchMedia && window.matchMedia('(hover: none) and (pointer: coarse)').matches
                    ? 'none'
                    : 'auto',
                zIndex: 1100,
              }}
            />
            <Dropdown $open={open} ref={dropdownRef}>
              <DropdownMenu to="/Microsoft" onClick={handleClose}>Microsoft</DropdownMenu>
              <DropdownMenu to="/Outsource" onClick={handleClose}>Outsource</DropdownMenu>
              <DropdownMenu to="/Ux" onClick={handleClose}>Leysi</DropdownMenu>
              <DropdownMenu to="/Piton" onClick={handleClose}>Piton</DropdownMenu>
              <DropdownMenu to="/ThreePillars" onClick={handleClose}>Three Pillars</DropdownMenu>
              <DropdownMenu to="/AccessDirect" onClick={handleClose}>Access Direct</DropdownMenu>
              <DropdownMenu to="/Giga" onClick={handleClose}>Giga</DropdownMenu>
              <DropdownMenu to="/GraphicDesign" onClick={handleClose}>Graphic Design</DropdownMenu>
            </Dropdown>
          </ListItem>
        </NavLinks>

        <StrokeWrapper>
          <SolidStroke />
          <NeonStroke />
          <PinkMicroStroke />
          <SpotlightLeft />
          <SpotlightRight />
        </StrokeWrapper>
      </NavLinksWrapper>
    </Navdiv>
  );
}