import React from 'react';
import styled from 'styled-components';

const AppCursorstyles = styled.div`
  z-index: 2000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgba(136, 136, 136, 0.2);
  backdrop-filter: blur(6px);
  pointer-events: none;
  position: fixed;
  transform: translate3d(0, 0, 0) scale(1);
  transition: transform 0.15s ease, background-color 0.2s ease, box-shadow 0.2s ease;

  &.hovered {
    background-color: #E88D67;
    box-shadow: 0 0 12px 6px rgba(232, 141, 103, 0.6);
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export const Customcursor = () => {
  const cursorRef = React.useRef(null);
  const hoveredRef = React.useRef(false);

  React.useEffect(() => {
    // Force body to never show native cursor
    document.body.style.cursor = 'none';

    const moveCursor = (event) => {
      const { clientX, clientY } = event;
      const scale = hoveredRef.current ? 0.3 : 1;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${scale})`;
    };

    const onHover = (e) => {
      const tag = e.currentTarget.tagName.toLowerCase();
      if (tag === 'a' || tag === 'svg') {
        hoveredRef.current = true;
        cursorRef.current.classList.add('hovered');
      }
    };

    const onHoverOut = (e) => {
      const tag = e.currentTarget.tagName.toLowerCase();
      if (tag === 'a' || tag === 'svg') {
        hoveredRef.current = false;
        cursorRef.current.classList.remove('hovered');
      }
    };

    document.addEventListener('mousemove', moveCursor);

    const hoverElements = document.querySelectorAll('a, svg');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', onHover);
        el.removeEventListener('mouseleave', onHoverOut);
      });
      document.body.style.cursor = 'auto'; // reset on unmount
    };
  }, []);

  return <AppCursorstyles ref={cursorRef} />;
};

export default Customcursor;