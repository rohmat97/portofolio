import React, { useState, useEffect } from "react";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import BackToTop from "./components/layout/BackToTop";

import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import Journey from "./components/sections/Journey";
import Contact from "./components/sections/Contact";

import StarBackground from "./components/ui/StarBackground";
import CustomCursor from "./components/ui/CustomCursor";
import MouseSpotlight from "./components/ui/MouseSpotlight";
import MarqueeTicker from "./components/ui/MarqueeTicker";
import ThemeCustomizer from "./components/ui/ThemeCustomizer";
import ScrollProgress from "./components/ui/ScrollProgress";
import DynamicSectionBackground from "./components/ui/DynamicSectionBackground";
import DigimonSplashGate from "./components/ui/DigimonSplashGate";

import PrintCV from "./components/print/PrintCV";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [dimensionWarp, setDimensionWarp] = useState(false);
  const [isMainRevealing, setIsMainRevealing] = useState(false);
  const [isMainFeatureRevealing, setIsMainFeatureRevealing] = useState(false);

  // Lock body scroll while Digimon splash gate or dimensional warp is active
  useEffect(() => {
    if (showSplash || dimensionWarp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showSplash, dimensionWarp]);

  const handleEnterMain = () => {
    // Phase 1: Splash gate implodes (handled by CSS on DigimonSplashGate)
    // Phase 2: Dimensional vortex overlay appears
    setDimensionWarp(true);

    // Phase 2→3: Remove splash gate after implosion, start materializing main page
    setTimeout(() => {
      setShowSplash(false);
      setIsMainRevealing(true);
      setIsMainFeatureRevealing(true);
    }, 600);

    // Phase 3 complete: Remove vortex overlay and reveal animation class
    setTimeout(() => {
      setDimensionWarp(false);
      setIsMainRevealing(false);
    }, 1800);
  };

  return (
    <div className="App min-h-screen bg-[#080c14] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 font-sans relative overflow-x-hidden">
      {/* Digimon World 3 Interactive Cyber Matrix Landing Gate */}
      {showSplash && <DigimonSplashGate onEnter={handleEnterMain} />}

      {/* Dimensional Warp Vortex Overlay — visible during gate transition */}
      {dimensionWarp && <div className="dimension-warp-overlay" />}

      {/* Main Page Container with dimensional materialization animation */}
      {isMainFeatureRevealing && (
        <div className={isMainRevealing ? "animate-main-reveal" : ""}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg no-print"
          >
            Skip to main content
          </a>

          {/* Top Scroll Progress Bar */}
          <ScrollProgress />

          {/* Dynamic Section Background Animations & Sparkling Stars */}
          <StarBackground />
          <DynamicSectionBackground />

          {/* Dynamic Section-Aware Magnetic Cursor & Mouse Spotlight */}
          <CustomCursor />
          <MouseSpotlight />

          {/* Web Navigation */}
          <NavBar onReopenGate={() => setShowSplash(true)} />

          {/* Web Portfolio View with Multi-Theme Section Experience */}
          <main id="main" className="no-print relative z-10">
            <Home />
            <MarqueeTicker />
            <About />
            <Skills />
            <Work />
            <Journey />
            <Contact />
          </main>

          {/* Web Footer, Back to top & Theme Customizer */}
          <Footer />
          <BackToTop />
          <ThemeCustomizer onReopenGate={() => setShowSplash(true)} />
        </div>
      )}

      {/* Print / Export PDF Formal Resume View */}
      <PrintCV />
    </div>
  );
}

export default App;
