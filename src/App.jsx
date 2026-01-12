import Header from "./components/Header/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Skills from "./components/Skills/Skills.jsx";

function App() {
  return (
    <>
    
    <div style={{ position: "relative", zIndex: 2}}>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
    </>
  );
}

export default App
