// src/components/Nav/Nav.jsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/Final-M-SinglePiece.svg';
import { Link, useLocation } from 'react-router-dom';
import CaseStudyTransitionLink from '../CaseStudyTransitionLink';

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
  /* The frosted bar lives on ::before instead of the element itself. If the
     Navdiv carried backdrop-filter, it would become a "backdrop root" and
     isolate its descendants — meaning the Projects dropdown's own
     backdrop-filter would have nothing from the page behind it to blur. */
  background-color: transparent;
  position: fixed;
  width: 100vw;
  height: 8vh;
  padding: 0 3vw;
  z-index: 1000;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    z-index: -1;
  }
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
  max-height: 5vh;
  object-fit: contain;
  transition: all 0.3s ease;

  &:hover {
    filter: invert(0.2) sepia(0.5) saturate(11.7) hue-rotate(313.2deg) brightness(1.2);
  }
`;

const NavLinksWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding-right: 6vw;
  max-width: calc(100vw - 6vw);
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2.5rem;
  height: 100%;

  @media (max-width: 1200px) { gap: 1.5rem; }
  @media (max-width: 800px) { gap: 1rem; font-size: 1rem; }
  /* Remove mobile column layout so header nav stays in header */
  /* The dropdown menu handles mobile project links */
  
`;

const NavLabel = styled.span`
  color: #a6d1ca;
  font-weight: 700;
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
  display: flex;
  align-items: center;
  height: 100%;

  /* Hover-open for any device that supports hover (laptops/desktops),
     at every width. The fullscreen takeover is gated on (hover: none)
     below, so hovering a narrow laptop opens the normal dropdown
     rather than the mobile overlay. */
  @media (hover: hover) {
    &:hover > div {
      display: block;
    }
  }
`;

const NavLink = styled(Link)`
  color: #a6d1ca;
  font-weight: 700;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.25rem;
  font-weight: 700;
  z-index: 1300;
  cursor: pointer;
  opacity: 0.85;
  display: none;
  transition: opacity 0.2s;
  &:hover { opacity: 1; }
  @media (hover: none) and (max-width: 850px) {
    display: block;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  /* Frosted "liquid glass": a translucent tint over a blurred + saturated
     backdrop, with a soft top highlight + hairline border to catch the light. */
  background-color: rgba(20, 20, 20, 0.45);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
  display: ${(props) => (props.$open ? 'block' : 'none')};
  min-width: 10rem;
  z-index: 1200;

  @media (hover: none) and (max-width: 850px) {
    position: fixed;
    top: 0;
    left: 0;
    transform: none;
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    min-width: unset;
    border: none;
    border-radius: 0;
    display: ${(props) => (props.$open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.97);
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    box-shadow: none;
    padding: 0;
    gap: 0.5rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
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

  @media (hover: none) and (max-width: 850px) {
    font-family: var(--font-body);
    font-size: clamp(1.5rem, 6vw, 2rem);
    font-weight: 600;
    padding: 0.6rem 1.5rem;
    text-align: center;
    min-height: 44px;
    width: auto;
    border-radius: 999px;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 120ms ease, transform 120ms ease;

    &:hover {
      background-color: transparent;
    }

    &:active {
      background-color: rgba(166, 209, 202, 0.28);
      transform: scale(0.97);
    }

    &:focus-visible {
      outline: 2px solid #a6d1ca;
      outline-offset: 2px;
    }
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

  // Lock body scroll while the fullscreen mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const isMobile =
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: none) and (max-width: 850px)').matches;
    if (!open || !isMobile) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Mobile: close dropdown on outside click (no longer on scroll — menu is fullscreen)
  useEffect(() => {
    if (!open) return;
    if (typeof window === 'undefined') return;
    // Only activate on touch devices (where the fullscreen takeover applies)
    if (!window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
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
              data-cursor="link"
              style={{ cursor: 'default' }}
              onClick={(e) => {
                // Tap-to-toggle only on touch devices (no hover). On
                // hover-capable laptops the dropdown is hover-driven at all
                // widths (see ListItem CSS), so suppress the click default.
                if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
                  handleToggle();
                } else {
                  e.preventDefault();
                }
              }}
            >
              Projects
            </NavLabel>
            {/* Bridge div to keep hover active between nav label and dropdown (desktop only) */}
            <div
              style={{
                position: 'absolute',
                left: '-20px',
                top: '0',
                width: '120px',
                height: '100%',
                background: 'transparent',
                border: 'none',
                pointerEvents: 'auto',
                zIndex: 1100,
              }}
              className="nav-hover-bridge"
            />
            <Dropdown $open={open} ref={dropdownRef}>
              {/* Mobile close button */}
              <CloseButton
                aria-label="Close menu"
                onClick={handleClose}
                style={{ display: open ? undefined : 'none' }}
              >
                ×
              </CloseButton>
              <DropdownMenu to="/Microsoft" onClick={handleClose}>Microsoft</DropdownMenu>
              <CaseStudyTransitionLink
                slug="outsource"
                to="/Outsource"
                onActivate={handleClose}
                preloadRoute={() => import('../../pages/Outsource/Outsource')}
              >
                {({ onClick, onIntent }) => (
                  <DropdownMenu
                    to="/Outsource"
                    onClick={onClick}
                    onPointerEnter={onIntent}
                    onFocus={onIntent}
                    onPointerDown={onIntent}
                  >
                    Outsource
                  </DropdownMenu>
                )}
              </CaseStudyTransitionLink>
              <DropdownMenu to="/Ux" onClick={handleClose}>Leysi</DropdownMenu>
              <DropdownMenu to="/Piton" onClick={handleClose}>Piton</DropdownMenu>
              <DropdownMenu to="/ThreePillars" onClick={handleClose}>Three Pillars</DropdownMenu>
              <DropdownMenu to="/AccessDirect" onClick={handleClose}>Access Direct</DropdownMenu>
              <DropdownMenu to="/Giga" onClick={handleClose}>Giga</DropdownMenu>
              <DropdownMenu to="/GraphicDesign" onClick={handleClose}>Graphic Design</DropdownMenu>
            </Dropdown>
          </ListItem>
          <ListItem>
            <NavLink to="/Resume">Resume</NavLink>
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