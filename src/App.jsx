import {
  Component,
  useEffect,
  useState,
} from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Systems from "./components/Systems";
import QAWorkflow from "./components/QAWorkflow";
import FrameworkArchitecture from "./components/FrameworkArchitecture";
import FutureGoals from "./components/FutureGoals";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import ProfileViewTracker from "./components/ProfileViewTracker";

// =========================================
// ERROR BOUNDARY
// =========================================

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(
      "PORTFOLIO RUNTIME ERROR:",
      error
    );

    console.error(
      "COMPONENT ERROR INFO:",
      errorInfo
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            padding: "40px",
            background: "#ffffff",
            color: "#111111",
            fontFamily: "monospace",
          }}
        >
          <h1
            style={{
              marginBottom: "20px",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            Portfolio Runtime Error
          </h1>

          <p
            style={{
              marginBottom: "20px",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            The application loaded, but one of
            the portfolio components crashed
            while rendering.
          </p>

          <pre
            style={{
              overflowX: "auto",
              padding: "20px",
              border:
                "1px solid #dddddd",
              borderRadius: "12px",
              background: "#f5f5f5",
              whiteSpace: "pre-wrap",
              lineHeight: "1.5",
            }}
          >
            {this.state.error?.stack ||
              this.state.error?.message ||
              "Unknown runtime error"}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

// =========================================
// PORTFOLIO
// =========================================

function Portfolio() {
  return (
    <div className="portal-shell">
      {/* =====================================
          GLOBAL UI
      ====================================== */}

      <ScrollProgress />

      <ProfileViewTracker />

      <CustomCursor />

      <Navbar />

      {/* =====================================
          MAIN PORTFOLIO CONTENT
      ====================================== */}

      <main className="portal-content">
        {/* HERO */}

        <div
          className="
            portal-section
            portal-section-hero
          "
        >
          <Hero />
        </div>

        {/* STATS */}

        <div className="portal-section">
          <Stats />
        </div>

        {/* ABOUT */}

        <div className="portal-section">
          <About />
        </div>

        {/* EXPERIENCE */}

        <div className="portal-section">
          <Experience />
        </div>

        {/* PROJECTS */}

        <div className="portal-section">
          <Projects />
        </div>

        {/* SKILLS */}

        <div className="portal-section">
          <Skills />
        </div>

        {/* CERTIFICATIONS */}

        <div className="portal-section">
          <Certifications />
        </div>

        {/* SYSTEMS */}

        <div className="portal-section">
          <Systems />
        </div>

        {/* QA WORKFLOW + FRAMEWORK ARCHITECTURE */}

        <div
          className="
            portal-section
            px-6
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-7xl
              grid-cols-1
              gap-8
              lg:grid-cols-2
              lg:items-stretch
            "
          >
            <QAWorkflow />

            <FrameworkArchitecture />
          </div>
        </div>

        {/* FUTURE GOALS */}

        <div className="portal-section">
          <FutureGoals />
        </div>

        {/* CONTACT */}

        <div className="portal-section">
          <Contact />
        </div>
      </main>

      {/* =====================================
          FOOTER
      ====================================== */}

      <Footer />
    </div>
  );
}

// =========================================
// APP
// =========================================

function App() {
  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    // Keep the loader visible for 3.4 seconds.
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 3400);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <ErrorBoundary>
          <Portfolio />
        </ErrorBoundary>
      )}
    </>
  );
}

export default App;