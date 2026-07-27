import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Journey from "./components/Journey";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import PrintCV from "./components/PrintCV";
import ThemeCustomizer from "./components/ThemeCustomizer";
import CustomCursor from "./components/CustomCursor";
import MouseSpotlight from "./components/MouseSpotlight";
import MarqueeTicker from "./components/MarqueeTicker";

function App() {
  return (
    <div className="App min-h-screen bg-[#080c14] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300 font-sans relative overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg no-print"
      >
        Skip to main content
      </a>
      
      {/* Interactive Cursor & Mouse Spotlight (inspired by bamlab.ch) */}
      <CustomCursor />
      <MouseSpotlight />

      {/* Web Navigation */}
      <NavBar />
      
      {/* Web Portfolio View */}
      <main id="main" className="no-print">
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
