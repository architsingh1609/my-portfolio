import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Systems from "./components/Systems";
import FutureGoals from "./components/FutureGoals";
import QAWorkflow from "./components/QAWorkflow";
import FrameworkArchitecture from "./components/FrameworkArchitecture";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
function App() {

  return (
    <>
      <Navbar />
      <Hero />
	  <Stats />
      <About />
	  <Experience />
      <Skills />
      <Projects />
      <Certifications />
	  <Systems />
	  <QAWorkflow />
	  <FrameworkArchitecture />
	  <FutureGoals />
      <Contact />
	  <Footer />
    </>
  );
}

export default App;