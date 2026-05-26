import React, { useState, Suspense, lazy, useEffect, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import './App.css';

// Themes
import { lightTheme, darkTheme, GlobalStyles } from './components/Themes/Themes';

// Components
import Nav from "./components/Nav/Nav";
import ErrorBoundary from "./components/ErrorBoundary";
import IntroAnimation from "./pages/Intro_Animation/IntroAnimation";

// LandingPage is lazy-loaded so it stays out of the root-route critical
// path; IntroAnimation triggers the same dynamic import on mount, so by the
// time the intro wipe finishes the chunk is already cached.
const LandingPage = lazy(() => import("./pages/Landing_Page/LandingPage"));

// CustomCursor is desktop-only — skip the JS entirely on touch devices.
// Agentation is dev-only — dynamic import keeps it out of prod bundles.
const Customcursor = lazy(() => import("./components/CustomCursor/customcursor"));
const Agentation = lazy(() =>
  import("agentation").then((mod) => ({ default: mod.Agentation }))
);

// Pages (lazy-loaded to reduce initial bundle size)
const Resume = lazy(() => import("./pages/Resume"));
const AccessDirect = lazy(() => import("./pages/Access_Direct/AD"));
const Giga = lazy(() => import("./pages/Giga/Giga"));
const GraphicDesign = lazy(() => import("./pages/Graphic_Design/Graphicdesign"));
const Outsource = lazy(() => import("./pages/Outsource/Outsource"));
const Ux = lazy(() => import("./pages/UX/UX"));
const ThreePillars = lazy(() => import("./pages/ThreePillars/ThreePillars"));
const Piton = lazy(() => import("./pages/Piton/Piton"));
const Microsoft = lazy(() => import("./pages/Microsoft/Microsoft"));
const BusinessConnectors = lazy(() => import("./pages/BusinessConnectors/BusinessConnectors"));
const CopilotPay = lazy(() => import("./pages/CopilotPay/CopilotPay"));
const Journeys = lazy(() => import("./pages/Journeys/Journeys"));
const CashbackHub = lazy(() => import("./pages/CashbackHub/CashbackHub"));

// Assets
import sun from './assets/Sun-DRKGREEN-01.svg';

/**
 * Renders <Nav /> on every route EXCEPT the root path while the intro
 * animation is playing. IntroAnimation dispatches an `intro-animation-done`
 * event on window when its GSAP timeline completes (or when reduced-motion
 * skips the wipe). Until then, the Nav is unmounted so it can't peek over
 * the white prerender-flash cover or the intro overlay.
 */
function NavGate() {
  const location = useLocation();
  const isRoot = location.pathname === "/" || location.pathname === "/index.html";
  const [introDone, setIntroDone] = useState(() => !isRoot);

  useEffect(() => {
    if (!isRoot) {
      setIntroDone(true);
      return undefined;
    }
    setIntroDone(false);
    const onDone = () => setIntroDone(true);
    window.addEventListener("intro-animation-done", onDone);
    return () => window.removeEventListener("intro-animation-done", onDone);
  }, [isRoot]);

  if (!introDone) return null;
  return <Nav />;
}

function App() {
  const [theme, setTheme] = useState("light");
  const [showShortcutsHelp, setShowShortcutsHelp] = useState(false);
  const [showShortcutsPill, setShowShortcutsPill] = useState(false);
  const [enableCustomCursor, setEnableCustomCursor] = useState(false);
  const helpDialogRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  // Only load the custom cursor on devices with a real pointer. Touch devices
  // gain nothing from it and shouldn't pay the JS/render cost.
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const apply = () => setEnableCustomCursor(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  const themeToggler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Global shortcut: press ? to open shortcuts help, Escape to close it.
  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      const isTypingTarget =
        target instanceof HTMLElement &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable);

      if (isTypingTarget) return;

      if (event.key === "?" || (event.key === "/" && event.shiftKey)) {
        event.preventDefault();
        setShowShortcutsHelp(true);
      }

      if (event.key === "Escape") {
        setShowShortcutsHelp(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Manage focus and background scroll when help modal opens/closes.
  useEffect(() => {
    if (!showShortcutsHelp) return;

    lastFocusedElementRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    // Calculate scrollbar width
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      helpDialogRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      if (
        lastFocusedElementRef.current instanceof HTMLElement &&
        !(
          lastFocusedElementRef.current.getAttribute("data-carousel-frame") === "true"
        )
      ) {
        lastFocusedElementRef.current.focus();
      }
    };
  }, [showShortcutsHelp]);

  const closeShortcutsHelp = () => {
    setShowShortcutsHelp(false);
  };

  const handleDialogKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeShortcutsHelp();
      return;
    }

    if (event.key !== "Tab") return;

    const dialogEl = helpDialogRef.current;
    if (!dialogEl) return;

    const focusableElements = dialogEl.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) {
      event.preventDefault();
      dialogEl.focus();
      return;
    }

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
  };


  // Listen for when the intro animation is done (LandingPage receives introDone prop)
  // We'll use a custom event to signal when to show the pill
  useEffect(() => {
    function handleIntroDone() {
      setShowShortcutsPill(true);
    }
    window.addEventListener("intro-animation-done", handleIntroDone);
    return () => window.removeEventListener("intro-animation-done", handleIntroDone);
  }, []);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Router>
          {enableCustomCursor && (
            <Suspense fallback={null}>
              <Customcursor />
            </Suspense>
          )}
          <NavGate />
          {showShortcutsPill && (
            <button
              type="button"
              className="shortcuts-pill"
              onClick={() => setShowShortcutsHelp(true)}
              aria-label="Open keyboard shortcuts help"
            >
              ? Shortcuts
            </button>
          )}

          {showShortcutsHelp && (
            <div
              role="presentation"
              onClick={closeShortcutsHelp}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 120,
                background: "rgba(0, 0, 0, 0.55)",
                display: "grid",
                placeItems: "center",
                padding: "1.25rem",
              }}
            >
              <div
                ref={helpDialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="keyboard-shortcuts-title"
                aria-describedby="keyboard-shortcuts-description"
                tabIndex={-1}
                onClick={(event) => event.stopPropagation()}
                onKeyDown={handleDialogKeyDown}
                style={{
                  width: "min(520px, 100%)",
                  background: "#ffffff",
                  color: "#111827",
                  borderRadius: "14px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 30px 80px rgba(0, 0, 0, 0.35)",
                  padding: "1.2rem 1.2rem 1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <h2
                    id="keyboard-shortcuts-title"
                    style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700 }}
                  >
                    Keyboard Shortcuts
                  </h2>
                  <button
                    type="button"
                    onClick={closeShortcutsHelp}
                    aria-label="Close keyboard shortcuts help"
                    style={{
                      border: "1px solid #d1d5db",
                      background: "#ffffff",
                      borderRadius: "8px",
                      padding: "0.25rem 0.5rem",
                      cursor: "pointer",
                    }}
                  >
                    Esc
                  </button>
                </div>

                <p
                  id="keyboard-shortcuts-description"
                  style={{ margin: "0.75rem 0 1rem", color: "#4b5563", fontSize: "0.92rem" }}
                >
                  Use these shortcuts to navigate transitions and media quickly.
                </p>

                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.6rem" }}>
                  <li style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                    <strong>? </strong>
                    <span>Open this help panel</span>
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                    <strong>Esc</strong>
                    <span>Skip case study transition animation</span>
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                    <strong>Esc</strong>
                    <span>Close this panel</span>
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                    <strong>← / →</strong>
                    <span>Navigate image carousel slides</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          <Suspense
            fallback={
              <div
                style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 100,
                  background:
                    theme === 'light'
                      ? lightTheme.backgroundColor
                      : darkTheme.backgroundColor,
                  color:
                    theme === 'light'
                      ? lightTheme.fontColor
                      : darkTheme.fontColor,
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.04em',
                }}
              >
                Loading…
              </div>
            }
          >
            <Routes>
            {/* Root shows IntroAnimation first */}
            <Route path="/" element={<IntroAnimation />} />

            {/* Landing page with robust error boundary */}
            <Route
              path="/MacTavish"
              element={
                <ErrorBoundary fallback={<div style={{ color: 'red', padding: '2rem', textAlign: 'center' }}>Sorry, something went wrong loading the landing page.</div>}>
                  <LandingPage />
                </ErrorBoundary>
              }
            />

            {/* Design pages */}

            <Route path="/Giga" element={<Giga />} />
            <Route path="/AccessDirect" element={<AccessDirect />} />
            <Route path="/Outsource" element={<Outsource />} />
            <Route path="/GraphicDesign" element={<GraphicDesign />} />
            <Route path="/Ux" element={<Ux />} />
            <Route path="/ThreePillars" element={<ThreePillars />} />
            <Route path="/Piton" element={<Piton />} />
            <Route path="/Microsoft" element={<Microsoft />} />
            <Route path="/BusinessConnectors" element={<BusinessConnectors />} />
            <Route path="/CopilotPay" element={<CopilotPay />} />
            <Route path="/Journeys" element={<Journeys />} />
            <Route path="/CashbackHub" element={<CashbackHub />} />
            <Route path="/Resume" element={<Resume />} />

            {/* Fallback for unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Router>
        {process.env.NODE_ENV === "development" && (
          <Suspense fallback={null}>
            <Agentation />
          </Suspense>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;