import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// Lightweight inline replacement for framer-motion's useReducedMotion.
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

const IntroDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: 900px) {
    height: 100dvh;
  }
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 9999;
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
  color: #111111;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(0.9rem, 1.35vw, 1.2rem);
  letter-spacing: 0.08em;
`;

/**
 * Lightweight intro overlay (wordmark + counter + clip-path wipe).
 * Used by `IntroGate` when a user lands directly on a deep-link route.
 * Calls `onComplete` and dispatches a window `intro-animation-done` event
 * when the wipe finishes.
 */
export default function IntroOverlay({ onComplete }) {
  const text = 'ZACHARY MACTAVISH.';
  const [counter, setCounter] = useState('000%');
  const [visible, setVisible] = useState(true);
  const introRef = useRef(null);
  const letterRefs = useRef([]);
  const prefersReducedMotion = useReducedMotion();

  // Lock scroll while the overlay is visible.
  useEffect(() => {
    if (!visible) return undefined;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow =
        previousOverflow === 'hidden' ? '' : previousOverflow;
      document.body.style.paddingRight =
        previousPaddingRight && previousPaddingRight !== '0px'
          ? previousPaddingRight
          : '';
    };
  }, [visible]);

  useLayoutEffect(() => {
    if (!visible) return undefined;

    const finish = () => {
      setVisible(false);
      window.dispatchEvent(new Event('intro-animation-done'));
      if (typeof onComplete === 'function') onComplete();
    };

    if (prefersReducedMotion) {
      setCounter('100%');
      finish();
      return undefined;
    }

    let cancelled = false;
    let timeline = null;

    import('gsap').then(({ gsap }) => {
      if (cancelled) return;
      const letters = letterRefs.current.filter(Boolean);
      const progress = { value: 0 };

      gsap.set(letters, { yPercent: 110, autoAlpha: 0 });
      gsap.set(introRef.current, { clipPath: 'inset(0% 0% 0% 0%)' });

      const tl = gsap.timeline({ onComplete: finish });

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
    });

    return () => {
      cancelled = true;
      if (timeline) timeline.kill();
    };
  }, [visible, prefersReducedMotion, onComplete]);

  if (!visible) return null;

  return (
    <IntroDiv ref={introRef}>
      <IntroNameWrap>
        <IntroText aria-label={text}>
          {Array.from(text).map((char, index) => (
            <LetterMask key={`intro-overlay-char-${index}`}>
              <LetterInner
                ref={(el) => {
                  letterRefs.current[index] = el;
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </LetterInner>
            </LetterMask>
          ))}
        </IntroText>
      </IntroNameWrap>
      <IntroCounter>{counter}</IntroCounter>
    </IntroDiv>
  );
}
