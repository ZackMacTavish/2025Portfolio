import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import IntroOverlay from '../pages/Intro_Animation/IntroOverlay';

const SESSION_KEY = 'intro-played';

function hasIntroPlayed() {
  if (typeof window === 'undefined') return true;
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch {
    return false;
  }
}

function markIntroPlayed() {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(SESSION_KEY, 'true');
  } catch {
    /* ignore (private mode etc.) */
  }
}

/**
 * Plays the intro overlay once per session when a user lands directly on a
 * non-root route. The IntroAnimation component handles the root route on its
 * own and marks the session flag when it completes, so this gate stays inert
 * for in-app navigation between routes.
 */
export default function IntroGate() {
  // Capture the pathname at first mount only — we only want to play on the
  // initial landing route, not on later client-side navigations.
  const initialPath = useLocation().pathname;
  const isRoot = initialPath === '/' || initialPath === '/index.html';

  const [active, setActive] = useState(() => !isRoot && !hasIntroPlayed());

  // Always set the session flag when the gate mounts on a non-root route, so
  // any subsequent reloads or navigations within this session won't replay it.
  useEffect(() => {
    if (active) markIntroPlayed();
  }, [active]);

  // Listen for the intro-animation-done event fired by IntroAnimation on the
  // root route, so navigating from `/` to a deep link in the same session
  // doesn't queue up a second intro.
  useEffect(() => {
    const onDone = () => markIntroPlayed();
    window.addEventListener('intro-animation-done', onDone);
    return () => window.removeEventListener('intro-animation-done', onDone);
  }, []);

  if (!active) return null;
  return <IntroOverlay onComplete={() => setActive(false)} />;
}
