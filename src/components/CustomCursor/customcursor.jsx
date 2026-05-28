import React, { useRef, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalCursorStyle = createGlobalStyle`
  html, body, * { cursor: none !important; }
  .hide-cursor, .hide-cursor * { cursor: none !important; }
  [data-agentation], [data-agentation] *, #feedback-toolbar, #feedback-toolbar * { cursor: auto !important; }
`;

const AppCursorstyles = styled.div`
  z-index: 2147483647;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(136,136,136,0.2);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  pointer-events: none;
  position: fixed;
  transform: translate3d(0,0,0) scale(1);
  will-change: transform;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  display: none;

  &.hovered {
    background-color: #E88D67;
    box-shadow: 0 0 12px 6px rgba(232,141,103,0.6);
  }

  &.visible {
    display: block;
  }
`;

const CustomCursor = () => {
  const [showCursor, setShowCursor] = useState(false);
  const cursorRef = useRef(null);
  const hoveredRef = useRef(false);
  const scaleRef = useRef(1);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const firstMove = useRef(false);
  const rafId = useRef(null);

  // Detect whether this device actually uses a mouse/fine pointer.
  // Many Windows PCs (e.g. HP touchscreen laptops) report touch support
  // via maxTouchPoints but still primarily use a mouse. We use the
  // (pointer: fine) media query as the primary signal — it's true for
  // any device with a mouse/trackpad — and fall back to waiting for
  // the first real mousemove on devices where the media query is absent.
  useEffect(() => {
    // Pure mobile / tablet with no mouse → skip
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isMobileOnly = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) &&
      !hasFinePointer;

    if (isMobileOnly) {
      setShowCursor(false);
      return;
    }

    // Desktop or touch-laptop with a mouse → enable immediately
    if (hasFinePointer) {
      setShowCursor(true);
      return;
    }

    // Edge case: no fine pointer detected yet (some browsers).
    // Wait for first real mousemove (non-simulated) before enabling.
    const onFirstMouse = (e) => {
      // Touch-simulated mouse events have 0 movementX/Y and width > 1
      if (e.sourceCapabilities && !e.sourceCapabilities.firesTouchEvents) {
        setShowCursor(true);
        window.removeEventListener('mousemove', onFirstMouse);
      } else if (e.movementX !== 0 || e.movementY !== 0) {
        setShowCursor(true);
        window.removeEventListener('mousemove', onFirstMouse);
      }
    };
    window.addEventListener('mousemove', onFirstMouse);
    return () => window.removeEventListener('mousemove', onFirstMouse);
  }, []);

  useEffect(() => {
    if (!showCursor) return;

    // The cursor element starts display:none, so offsetWidth/Height are 0.
    // Use the known CSS dimensions (50×50) directly.
    const halfW = 25, halfH = 25;

    const LINKISH_SELECTORS = 'a, button, input, textarea, select, [role="link"], [role="button"], [data-cursor="link"], [data-route], [data-routes-to], .nav-link, .router-link, .link, .btn';

    let unhoverTimer = null;

    const updateHover = (el) => {
      const isOver = el && el.closest && !!el.closest(LINKISH_SELECTORS);
      if (isOver) {
        // Immediately show hover; cancel any pending unhover
        if (unhoverTimer) { clearTimeout(unhoverTimer); unhoverTimer = null; }
        if (!hoveredRef.current) {
          hoveredRef.current = true;
          if (cursorRef.current) cursorRef.current.classList.add('hovered');
        }
      } else if (hoveredRef.current && !unhoverTimer) {
        // Debounce unhover so moving between adjacent targets stays smooth
        unhoverTimer = setTimeout(() => {
          unhoverTimer = null;
          hoveredRef.current = false;
          if (cursorRef.current) cursorRef.current.classList.remove('hovered');
        }, 60);
      }
    };

    const moveCursor = (e) => {
      if (!cursorRef.current) return;

      const x = e.clientX - halfW;
      const y = e.clientY - halfH;

      target.current.x = x;
      target.current.y = y;

      if (!firstMove.current) {
        firstMove.current = true;
        cursorRef.current.classList.add('visible');
      }

      // Check hover state on every move — more reliable than mouseover/mouseout
      updateHover(e.target);

      // Apply position immediately for zero-lag tracking
      cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scaleRef.current})`;
    };

    const hideCursor = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('visible');
      firstMove.current = false;
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        hideCursor();
      } else {
        firstMove.current = false;
      }
    };

    const animate = () => {
      if (cursorRef.current && firstMove.current) {
        // Only animate scale (for hover effect); position is set directly in mousemove
        const targetScale = hoveredRef.current ? 0.3 : 1;
        const diff = targetScale - scaleRef.current;
        // Snap when close enough, otherwise lerp quickly
        scaleRef.current = Math.abs(diff) < 0.01 ? targetScale : scaleRef.current + diff * 0.55;
        cursorRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) scale(${scaleRef.current})`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (unhoverTimer) clearTimeout(unhoverTimer);
    };
  }, [showCursor]);

  return (
    <>
      {showCursor && <GlobalCursorStyle />}
      {showCursor && <AppCursorstyles ref={cursorRef} />}
    </>
  );
};

export default CustomCursor;