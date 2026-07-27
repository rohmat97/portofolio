import React from "react";
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

import PrintCV from "./components/print/PrintCV";

function App() {
  return (
    <div className="App min-h-screen bg-[#080c14] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 font-sans relative overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg no-print"
      >
        Skip to main content
      </a>
      
      {/* Cosmic Sparkling Background, Cursor & Mouse Spotlight */}
      <StarBackground />
      <CustomCursor />
      <MouseSpotlight />

      {/* Web Navigation */}
      <NavBar />
      
      {/* Web Portfolio View */}
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
      <ThemeCustomizer />

      {/* Print / Export PDF Formal Resume View */}
      <PrintCV />
    </div>
  );
}

export default App;
