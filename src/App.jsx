import { useEffect, useState } from "react";

import Loader from "./components/Loader";

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

import CustomCursor from "./components/CustomCursor";

import ScrollProgress from "./components/ScrollProgress";

import ProfileViewTracker from "./components/ProfileViewTracker";

function App() {
  const [loading, setLoading] = useState(true);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ScrollProgress />

      <ProfileViewTracker />

      <CustomCursor />

      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Experience />

      <Skills />

      <Projects />

      <Certifications />

      <Systems />

      {/* Quality Engineering + Automation Workflow */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto">
        <QAWorkflow />

        <FrameworkArchitecture />
      </div>

      <FutureGoals />

      <Contact />

      <Footer />
    </>
  );
}

export default App;