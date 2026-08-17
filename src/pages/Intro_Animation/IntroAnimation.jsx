import React, { useEffect, useLayoutEffect, useRef, useState, Suspense, lazy } from 'react';
import styled, { useTheme } from 'styled-components';
import { shouldRunCardTransition } from '../../components/transitionGate';
// Static import: CaseStudyTransition is already in the root bundle via
// Nav -> CaseStudyTransitionLink, so a dynamic import here doesn't split it
// out and only triggers a Vite mixed-import warning.
import CaseStudyTransition from '../../components/CaseStudyTransition';

// LandingPage is rendered immediately but covered by the intro overlay until
// the wipe animation completes. Lazy-loading it keeps ~130KB of image URL
// imports and below-the-fold components out of the root-route critical path;
// the chunk loads in parallel with the intro animation.
const LandingPage = lazy(() => import('../Landing_Page/LandingPage'));

// Lightweight inline replacement for framer-motion's `useReducedMotion`.
// Keeping this local removes the entire framer-motion package from the
// root-route bundle (the only consumer was this one hook call).
function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(mq.matches);
    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, []);
  return reduced;
}

import leysiTile from '../../assets/LeysiApp—Screens copy.jpg';
import leysiTileMobile from '../../assets/LeysiApp—Screens copy-mobile-900.webp';
import threePillarsTile from '../../assets/ThreePillars—pages.jpg';
import threePillarsTileMobile from '../../assets/ThreePillars—pages-mobile-900.webp';
import pitonTile from '../../assets/Piton—Screens.jpg';
import pitonTileMobile from '../../assets/Piton—Screens-mobile-900.webp';
import outsourceTile from '../../assets/BrandGuidelines—Mockup.jpg';
import outsourceTileMobile from '../../assets/BrandGuidelines—Mockup-mobile-900.webp';
import hpTileMobile from '../../assets/HP-mobile-900.webp';

const IntroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    width: 100vw;
    height: 100vh;
    @media (max-width: 900px) {
      height: 100dvh;
    }
  background-color: ${({ $background }) => $background};
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
  color: ${({ $color }) => $color};
  position: relative;
  text-align: center;
  white-space: nowrap;
  z-index: 60;
  line-height: 1.04;

  @media (max-width: 900px) {
    font-size: clamp(1.25rem, 7vw, 2.1rem);
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
  opacity: 0;
`;

const IntroCounter = styled.div`
  position: absolute;
  right: clamp(18px, 2.8vw, 40px);
  bottom: clamp(18px, 2.8vw, 40px);
  z-index: 60;
  color: ${({ $color }) => $color};
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

const mobileIntroTransitionImages = [
  {
    src: hpTileMobile,
    alt: 'Microsoft shopping ecosystem preview',
    objectPosition: 'top center',
  },
  {
    src: leysiTileMobile,
    alt: 'Leysi project preview',
  },
  {
    src: threePillarsTileMobile,
    alt: 'ThreePillars project preview',
  },
  {
    src: pitonTileMobile,
    alt: 'Piton project preview',
  },
  {
    src: outsourceTileMobile,
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

function getIntroTransitionImages() {
  if (typeof window !== 'undefined' && window.matchMedia?.('(max-width: 900px)').matches) {
    return mobileIntroTransitionImages;
  }
  return baseIntroTransitionImages;
}


export default function IntroAnimation() {
  const text = 'ZACHARY MACTAVISH.';
  const theme = useTheme();
  const isDark = theme.name === 'dark';
  const [counter, setCounter] = useState('000%');
  const [showIntro, setShowIntro] = useState(true);
  const [introTransitionImages] = useState(() => shuffleImages(getIntroTransitionImages()));
  const [introDecisionReady, setIntroDecisionReady] = useState(false);
  const [introCardsEnabled, setIntroCardsEnabled] = useState(false);
  const introRef = useRef(null);
  const letterRefs = useRef([]);
  const prefersReducedMotion = useReducedMotion();
  const introReady = introDecisionReady;
  const introBackground = isDark ? '#000000' : '#ffffff';
  const introForeground = isDark ? '#ffffff' : '#111111';
  const introCardBorder = isDark ? 'rgba(255, 255, 255, 0.55)' : 'rgba(17, 17, 17, 0.32)';

  // Decide whether the intro card stack is fast enough to animate smoothly.
  useEffect(() => {
    let isCancelled = false;

    const desktopCardsQuery = window.matchMedia(
      '(min-width: 1001px) and (pointer: fine) and (not (prefers-reduced-motion: reduce))'
    );

    if (!desktopCardsQuery.matches) {
      setIntroCardsEnabled(false);
      setIntroDecisionReady(true);
      return undefined;
    }

    shouldRunCardTransition(introTransitionImages, undefined, {
      lockSessionOnFailure: false,
    })
      .then((shouldAnimate) => {
        if (!isCancelled) {
          setIntroCardsEnabled(shouldAnimate);
          setIntroDecisionReady(true);
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setIntroCardsEnabled(false);
          setIntroDecisionReady(true);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [introTransitionImages]);

  useEffect(() => {
    if (!showIntro) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      // Defensive: if the inline style was already 'hidden' at mount (e.g.
      // baked into prerendered HTML from a prior intro mount), don't restore
      // it — always clear so the page is scrollable once the intro finishes.
      document.body.style.overflow =
        previousOverflow === 'hidden' ? '' : previousOverflow;
      document.body.style.paddingRight =
        previousPaddingRight && previousPaddingRight !== '0px'
          ? previousPaddingRight
          : '';
    };
  }, [showIntro]);

  useLayoutEffect(() => {
    if (!showIntro) return;

    // Skip animation if user prefers reduced motion
    if (prefersReducedMotion) {
      setCounter('100%');
      setShowIntro(false);
      // NavGate (and any other listeners) need this event even when the
      // animation is skipped, otherwise Nav stays hidden forever.
      window.dispatchEvent(new Event('intro-animation-done'));
      return;
    }

    let cancelled = false;
    let timeline = null;
    const safetyTimeout = window.setTimeout(() => {
      if (cancelled) return;
      setShowIntro(false);
      window.dispatchEvent(new Event('intro-animation-done'));
    }, 6000);

    // Dynamic-import gsap so it stays out of the critical-path bundle. The
    // letters start invisible via CSS (`LetterInner { opacity: 0 }`), so a
    // brief delay before gsap loads is visually identical to the previous
    // synchronous setup.
    import('gsap').then(({ gsap }) => {
      if (cancelled) return;

      const letters = letterRefs.current.filter(Boolean);
      const progress = { value: 0 };

      gsap.set(letters, { yPercent: 110, autoAlpha: 0 });
      gsap.set(introRef.current, { clipPath: 'inset(0% 0% 0% 0%)' });

      const tl = gsap.timeline({
        onComplete: () => {
          setShowIntro(false);
          window.dispatchEvent(new Event('intro-animation-done'));
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

      timeline = tl;
    }).catch(() => {
      if (cancelled) return;
      setShowIntro(false);
      window.dispatchEvent(new Event('intro-animation-done'));
    });

    return () => {
      cancelled = true;
      if (timeline) timeline.kill();
      window.clearTimeout(safetyTimeout);
    };
  }, [showIntro, prefersReducedMotion]);

  const handleTransitionComplete = () => {};

  return (
    <>
      {/* Pass introDone so the landing page chevron waits until the overlay wipes away.
          Suspense fallback is null because the intro overlay covers the viewport
          until the wipe animation completes; by then LandingPage is loaded. */}
      <Suspense fallback={null}>
        <LandingPage introDone={!showIntro} />
      </Suspense>
      {showIntro && (
        <IntroDiv
          ref={introRef}
          $background={introBackground}
          style={{ backgroundColor: introBackground, position: 'fixed', inset: 0 }}
        >
          {/* Optionally, show a solid background or spinner until the first image is loaded */}
          {!introReady && (
            <div style={{position: 'absolute', inset: 0, background: introBackground, zIndex: 1}} />
          )}
          {introCardsEnabled && introReady && (
            <CaseStudyTransition
              images={introTransitionImages}
              isActive={showIntro}
              onComplete={handleTransitionComplete}
              overlayColor={introBackground}
              loadingBackgroundColor={introBackground}
              cardBorderColor={introCardBorder}
              cardFilter={isDark ? 'brightness(0.62)' : 'none'}
              usePortal={false}
            />
          )}
          {/* On slower devices, show only the Zachary MacTavish intro animation. */}
          {showIntro && (
            <IntroNameWrap>
              <IntroText aria-label={text} $color={introForeground}>
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
          <IntroCounter $color={introForeground}>{counter}</IntroCounter>
        </IntroDiv>
      )}
    </>
  );
}