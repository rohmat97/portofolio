import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Journey from "./components/Journey";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Journey />
      <Contact />
    </div>
  );
}

export default App;
