import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Background from "./components/Background";

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
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Stats from "./components/Stats";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Show ONLY the loader while loading
  if (loading) {
    return <Loader />;
  }

  // ✅ Render the portfolio only after loading is complete
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