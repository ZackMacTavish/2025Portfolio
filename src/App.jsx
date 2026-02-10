import React, { useState, Suspense, lazy } from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

// Themes
import { lightTheme, darkTheme, GlobalStyles } from './components/Themes/Themes';

// Components
import Customcursor from "./components/CustomCursor/customcursor";
import Nav from "./components/Nav/Nav";

// Pages (lazy-loaded to reduce initial bundle size)
const About = lazy(() => import("./pages/About/About"));
const AccessDirect = lazy(() => import("./pages/Access_Direct/AD"));
const Giga = lazy(() => import("./pages/Giga/Giga"));
const GraphicDesign = lazy(() => import("./pages/Graphic_Design/Graphicdesign"));
const LandingPage = lazy(() => import("./pages/Landing_Page/LandingPage"));
const Outsource = lazy(() => import("./pages/Outsource/Outsource"));
const Ux = lazy(() => import("./pages/UX/UX"));
const ThreePillars = lazy(() => import("./pages/ThreePillars/ThreePillars"));
const Piton = lazy(() => import("./pages/Piton/Piton"));
const Microsoft = lazy(() => import("./pages/Microsoft/Microsoft"));

// Intro Animation
const IntroAnimation = lazy(() => import("./pages/Intro_Animation/IntroAnimation"));

// Assets
import sun from './assets/Sun-DRKGREEN-01.svg';

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Router>
          <Customcursor />
          <Nav />
          <Suspense fallback={<div style={{ color: '#888', padding: '2rem', textAlign: 'center' }}>Loading…</div>}>
            <Routes>
            {/* Root shows IntroAnimation first */}
            <Route path="/" element={<IntroAnimation />} />

            {/* Landing page */}
            <Route path="/MacTavish" element={<LandingPage />} />

            {/* Design pages */}

            <Route path="/Giga" element={<Giga />} />
            <Route path="/AccessDirect" element={<AccessDirect />} />
            <Route path="/Outsource" element={<Outsource />} />
            <Route path="/GraphicDesign" element={<GraphicDesign />} />
            <Route path="/Ux" element={<Ux />} />
            <Route path="/ThreePillars" element={<ThreePillars />} />
            <Route path="/Piton" element={<Piton />} />
            <Route path="/About" element={<About />} />
            <Route path="/Microsoft" element={<Microsoft />} />

            {/* Fallback for unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;