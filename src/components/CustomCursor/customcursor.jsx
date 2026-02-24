import React, { useRef, useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalCursorStyle = createGlobalStyle`
  html, body, * { cursor: none !important; }
  .hide-cursor, .hide-cursor * { cursor: none !important; }
`;

const AppCursorstyles = styled.div`
  z-index: 2000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(136,136,136,0.2);
  backdrop-filter: blur(6px);
  pointer-events: none;
  position: fixed;
  transform: translate3d(0,0,0) scale(1);
  transition: background-color 0.3s ease, box-shadow 0.3s ease; /* smoother visual hover while keeping movement snappy */
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
  const [isTouchOrTablet, setIsTouchOrTablet] = useState(false);
  const cursorRef = useRef(null);
  const hoveredRef = useRef(false);
  const scaleRef = useRef(1);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const firstMove = useRef(false);

  useEffect(() => {
    // Detect touch device or tablet (touch + width <= 1100)
    const checkTouchOrTablet = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
      const isTabletSize = window.innerWidth <= 1100 && window.innerWidth > 450;
      const isMobileSize = window.innerWidth <= 450;
      // Hide cursor for all touch devices, and for tablets (touch + width <= 1100)
      setIsTouchOrTablet(isTouch || isTabletSize && isTouch);
      // Add/remove class to body for native cursor hiding
      if (isTouch || isTabletSize && isTouch || isMobileSize && isTouch) {
        document.body.classList.add('hide-cursor');
      } else {
        document.body.classList.remove('hide-cursor');
      }
    };
    checkTouchOrTablet();
    window.addEventListener('resize', checkTouchOrTablet);
    return () => window.removeEventListener('resize', checkTouchOrTablet);
  }, []);

  useEffect(() => {
    if (isTouchOrTablet) return; // disable all cursor logic on touch/tablet

    const moveCursor = (e) => {
      if (!cursorRef.current) return;

      const mouseX = e.clientX - cursorRef.current.clientWidth / 2;
      const mouseY = e.clientY - cursorRef.current.clientHeight / 2;

      if (!firstMove.current) {
        current.current = { x: mouseX, y: mouseY };
        target.current = { x: mouseX, y: mouseY };
        cursorRef.current.classList.add('visible');
        firstMove.current = true;
      } else {
        target.current = { x: mouseX, y: mouseY };
        cursorRef.current.classList.add('visible');
      }
    };

    const hideCursor = () => {
      if (cursorRef.current) cursorRef.current.classList.remove('visible');
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
        // Snappy position tracking
        current.current.x += (target.current.x - current.current.x) * 0.9;
        current.current.y += (target.current.y - current.current.y) * 0.9;

        // Smooth hover scaling
        const targetScale = hoveredRef.current ? 0.3 : 1;
        scaleRef.current += (targetScale - scaleRef.current) * 0.22;
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) scale(${scaleRef.current})`;
      }
      requestAnimationFrame(animate);
    };

    // Treat anything that routes or is clearly clickable as a "linkish" hover target.
  const LINKISH_SELECTORS = 'a, button, input, textarea, select, [role="link"], [role="button"], [data-cursor="link"], [data-route], [data-routes-to], .nav-link, .router-link, .link, .btn';

    const onDocumentMouseOver = (e) => {
      const el = e.target.closest(LINKISH_SELECTORS);
      if (el && cursorRef.current) {
        hoveredRef.current = true;
        cursorRef.current.classList.add('hovered');
      }
    };

    const onDocumentMouseOut = (e) => {
      // If moving to another linkish element, keep hovered
      const toEl = e.relatedTarget && (e.relatedTarget.closest ? e.relatedTarget.closest(LINKISH_SELECTORS) : null);
      if (toEl) return;
      if (cursorRef.current) {
        hoveredRef.current = false;
        cursorRef.current.classList.remove('hovered');
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Event delegation so dynamically rendered links/buttons are covered
    document.addEventListener('mouseover', onDocumentMouseOver);
    document.addEventListener('mouseout', onDocumentMouseOut);

    animate();

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('mouseover', onDocumentMouseOver);
      document.removeEventListener('mouseout', onDocumentMouseOut);
    };
  }, [isTouchOrTablet]);

  // Always render GlobalCursorStyle to keep the native cursor hidden,
  // even when the custom cursor is disabled on mobile.
  return (
    <>
      <GlobalCursorStyle />
      {!isTouchOrTablet && <AppCursorstyles ref={cursorRef} />}
    </>
  );
};

export default CustomCursor;