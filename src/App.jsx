import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

// Themes
import { lightTheme, darkTheme, GlobalStyles } from './components/Themes/Themes';

// Components
import Customcursor from "./components/CustomCursor/customcursor";
import Nav from "./components/Nav/Nav";

// Pages
import About from "./pages/About/About";
import AccessDirect from "./pages/Access_Direct/AD";
import Art from "./pages/Art_Landing/Art";
import Composition from "./pages/COMPOSITION/Composition";
import Design from "./pages/Design_Landing/Design";
import Dwelling from "./pages/Dwelling/Dwelling";
import Giga from "./pages/Giga/Giga";
import Graffiti from "./pages/3d/MergedGraffiti"; 
import GraphicDesign from "./pages/Graphic_Design/Graphicdesign";
import LandingPage from "./pages/Landing_Page/LandingPage";
import Outsource from "./pages/Outsource/Outsource";
import Photography from "./pages/Photography/Photography";
import Ux from "./pages/UX/UX";
import ThreePillars from "./pages/ThreePillars/ThreePillars";
import Piton from "./pages/Piton/Piton";

// Combined Artworks Page
import Artworks from "./pages/Printmaking/Artworks";

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
          {/* Theme Toggle Button */}
          <img 
            src={sun} 
            onClick={themeToggler} 
            style={{ 
              zIndex: 100, 
              width: 'clamp(45px, 2.5vw, 100px)', 
              position: 'fixed', 
              right: '2vw', 
              bottom: '2vw', 
              cursor: 'pointer' 
            }} 
          />
          <Customcursor />
          <Nav />
          <Routes>
            <Route path="/Composition" element={<Composition />} />
            
            {/* All art pages route to Artworks */}
            <Route path="/Artworks" element={<Artworks />} />
            <Route path="/Painting" element={<Artworks />} />
            <Route path="/Collages" element={<Artworks />} />
            <Route path="/Printmaking" element={<Artworks />} />

            <Route path="/Dwelling" element={<Dwelling />} />
            <Route path="/Photography" element={<Photography />} />

            {/* Graffiti page accessible via both paths */}
            <Route path="/Graffiti" element={<Graffiti />} />
            <Route path="/MergedGraffiti" element={<Graffiti />} />

            <Route path="/Art" element={<Art />} />
            <Route path="/Design" element={<Design />} />
            <Route path="/Giga" element={<Giga />} />
            <Route path="/AccessDirect" element={<AccessDirect />} />
            <Route path="/Outsource" element={<Outsource />} />
            <Route path="/GraphicDesign" element={<GraphicDesign />} />
            <Route path="/Ux" element={<Ux />} />
            <Route path="/ThreePillars" element={<ThreePillars />} />
            <Route path="/Piton" element={<Piton />} />
            <Route path="/About" element={<About />} />
            <Route path="/MacTavish" element={<LandingPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;