import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Services from "./components/Services";
import HowIWork from "./components/HowIWork";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <HowIWork />
      <Contact />
      <Footer />
      <BackToTop />
    </ThemeProvider>
  );
}

export default App;