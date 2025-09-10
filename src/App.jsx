import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Journey from "./components/Journey";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="App">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[9999] bg-pink-600 text-white px-4 py-2 rounded">Skip to content</a>
      <NavBar />
      <main id="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
