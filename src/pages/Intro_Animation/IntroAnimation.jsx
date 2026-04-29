import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { useReducedMotion } from 'framer-motion';
import LandingPage from '../Landing_Page/LandingPage';
import CaseStudyTransition from '../../components/CaseStudyTransition';

import leysiTile from '../../assets/LeysiApp—Screens copy.jpg';
import threePillarsTile from '../../assets/ThreePillars—pages.jpg';
import pitonTile from '../../assets/Piton—Screens.jpg';
import outsourceTile from '../../assets/BrandGuidelines—Mockup.jpg';

const IntroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #3F4739; /* muted light olive */
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 10;
  clip-path: inset(0% 0% 0% 0%);
`;

const IntroText = styled.h1`
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2.1rem, 7vw, 6.2rem);
  letter-spacing: 0.04em;
  color: #000;
  position: relative;
  text-align: center;
  z-index: 60;
  line-height: 1.04;

  @media (max-width: 900px) {
    letter-spacing: 0.03em;
  }
`;

const IntroNameWrap = styled.div`
  position: relative;
  z-index: 60;
`;

const LetterMask = styled.span`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
`;

const LetterInner = styled.span`
  display: inline-block;
  will-change: transform, opacity;
`;

const IntroCounter = styled.div`
  position: absolute;
  right: clamp(18px, 2.8vw, 40px);
  bottom: clamp(18px, 2.8vw, 40px);
  z-index: 60;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.9rem, 1.35vw, 1.2rem);
  letter-spacing: 0.08em;
`;

const baseIntroTransitionImages = [
  {
    src: '/assets/HP.png',
    alt: 'Microsoft shopping ecosystem preview',
    objectPosition: 'top center',
  },
  {
    src: leysiTile,
    alt: 'Leysi project preview',
  },
  {
    src: threePillarsTile,
    alt: 'ThreePillars project preview',
  },
  {
    src: pitonTile,
    alt: 'Piton project preview',
  },
  {
    src: outsourceTile,
    alt: 'Outsource project preview',
  },
];

function shuffleImages(images) {
  const shuffled = [...images];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}


export default function IntroAnimation() {
  const text = 'ZACHARY MACTAVISH.';
  const introGreen = '#3F4739';
  const [counter, setCounter] = useState('000%');
  const [showIntro, setShowIntro] = useState(true);
  const [introTransitionImages] = useState(() => shuffleImages(baseIntroTransitionImages));
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const introRef = useRef(null);
  const letterRefs = useRef([]);
  const prefersReducedMotion = useReducedMotion();

  // Preload the first image in the shuffled array
  useEffect(() => {
    const img = new window.Image();
    img.src = introTransitionImages[0]?.src;
    if (img.complete) {
      setFirstImageLoaded(true);
    } else {
      img.onload = () => setFirstImageLoaded(true);
      img.onerror = () => setFirstImageLoaded(true); // fail gracefully
    }
  }, [introTransitionImages]);

  useEffect(() => {
    if (!showIntro || !firstImageLoaded) return;

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setCounter('100%');
      setShowIntro(false);
      return;
    }

    const letters = letterRefs.current.filter(Boolean);
    const progress = { value: 0 };

    gsap.set(letters, { yPercent: 110, autoAlpha: 0 });
    gsap.set(introRef.current, { clipPath: 'inset(0% 0% 0% 0%)' });

    const tl = gsap.timeline({
      onComplete: () => {
        setShowIntro(false);
        window.dispatchEvent(new Event("intro-animation-done"));
      },
    });

    tl.to(progress, {
      value: 100,
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        setCounter(`${String(Math.round(progress.value)).padStart(3, '0')}%`);
      },
    });

    tl.to(
      letters,
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power3.out',
      },
      '-=2'
    );

    tl.to(introRef.current, {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 0.8,
      ease: 'power4.inOut',
    });

    return () => {
      tl.kill();
    };
  }, [showIntro, prefersReducedMotion, firstImageLoaded]);

  const handleTransitionComplete = () => {};

  return (
    <>
      {/* Pass introDone so the landing page chevron waits until the overlay wipes away */}
      <LandingPage introDone={!showIntro} />
      {showIntro && (
        <IntroDiv ref={introRef}>
          {/* Optionally, show a solid background or spinner until the first image is loaded */}
          {!firstImageLoaded && (
            <div style={{position: 'absolute', inset: 0, background: introGreen, zIndex: 1}} />
          )}
          {firstImageLoaded && (
            <CaseStudyTransition
              images={introTransitionImages}
              isActive={showIntro}
              onComplete={handleTransitionComplete}
              overlayColor={introGreen}
              loadingBackgroundColor={introGreen}
            />
          )}
          {/* Only show the intro text when the first image is loaded (so it doesn't flash early) */}
          {firstImageLoaded && (
            <IntroNameWrap>
              <IntroText aria-label={text}>
                {Array.from(text).map((char, index) => (
                  <LetterMask key={`intro-char-${index}`}>
                    <LetterInner
                      ref={el => {
                        letterRefs.current[index] = el;
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </LetterInner>
                  </LetterMask>
                ))}
              </IntroText>
            </IntroNameWrap>
          )}
          <IntroCounter>{counter}</IntroCounter>
        </IntroDiv>
      )}
    </>
  );
}