import { useState, useEffect } from "react";

function Navbar() {

const [open, setOpen] = useState(false);
const [activeSection, setActiveSection] = useState("about");

useEffect(() => {


const sections = document.querySelectorAll("section");

const handleScroll = () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

  setActiveSection(current);

};

window.addEventListener("scroll", handleScroll);

return () => {
  window.removeEventListener("scroll", handleScroll);
};


}, []);

return (


<nav className="fixed w-full bg-black/40 backdrop-blur-md z-50">

  <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

    <h1 className="text-2xl font-bold text-cyan-400">
      Archit.SDET
    </h1>

    <div className="hidden md:flex gap-8">

      <a
        href="#about"
        className={`transition ${
          activeSection === "about"
            ? "text-cyan-400"
            : "hover:text-cyan-400"
        }`}
      >
        About
      </a>

      <a
        href="#experience"
        className={`transition ${
          activeSection === "experience"
            ? "text-cyan-400"
            : "hover:text-cyan-400"
        }`}
      >
        Experience
      </a>

      <a
        href="#skills"
        className={`transition ${
          activeSection === "skills"
            ? "text-cyan-400"
            : "hover:text-cyan-400"
        }`}
      >
        Skills
      </a>

      <a
        href="#projects"
        className={`transition ${
          activeSection === "projects"
            ? "text-cyan-400"
            : "hover:text-cyan-400"
        }`}
      >
        Projects
      </a>

      <a
        href="#certifications"
        className={`transition ${
          activeSection === "certifications"
            ? "text-cyan-400"
            : "hover:text-cyan-400"
        }`}
      >
        Certifications
      </a>

      <a
        href="#systems"
        className={`transition ${
          activeSection === "systems"
            ? "text-cyan-400"
            : "hover:text-cyan-400"
        }`}
      >
        Systems
      </a>

      <a
        href="#workflow"
        className={`transition ${
          activeSection === "workflow"
            ? "text-cyan-400"
            : "hover:text-cyan-400"
        }`}
      >
        Workflow
      </a>

      <a
        href="#goals"
        className={`transition ${
          activeSection === "goals"
            ? "text-cyan-400"
            : "hover:text-cyan-400"
        }`}
      >
        Goals
      </a>

      <a
        href="#contact"
        className={`transition ${
          activeSection === "contact"
            ? "text-cyan-400"
            : "hover:text-cyan-400"
        }`}
      >
        Contact
      </a>

    </div>

    <button
      className="md:hidden"
      onClick={() => setOpen(!open)}
    >
      ☰
    </button>
	<a
	  href="/resume/Archit_Singh_SDET_QA_Engineer_Resume.pdf"
	  target="_blank"
	  rel="noreferrer"
	  className="bg-cyan-400 text-black px-4 py-2 rounded-xl"
	>
	  Resume
	</a>

  </div>

</nav>


);
}

export default Navbar;
