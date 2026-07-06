import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  const desktopLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const mobileLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certificates" },
    { id: "systems", label: "Systems" },
    { id: "workflow", label: "Workflow" },
    { id: "goals", label: "Goals" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "about";

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.clientHeight;

        if (
          window.scrollY >= top - 150 &&
          window.scrollY < top + height - 150
        ) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? "top-3 w-[90%] max-w-6xl"
          : "top-6 w-[85%] max-w-5xl"
      }`}
    >
      <div
        className={`
          bg-slate-900/45
          backdrop-blur-3xl
          border
          border-cyan-400/10
          rounded-full
          shadow-[0_20px_60px_rgba(0,245,255,.12)]
          transition-all
          duration-500
          ${scrolled ? "py-3" : "py-4"}
        `}
      >
        <div className="grid grid-cols-3 items-center px-8">

          {/* Logo */}

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="justify-self-start text-xl font-bold cursor-pointer"
          >
            <span className="text-cyan-400">
              Archit
            </span>
            <span className="text-white">
              .SDET
            </span>
          </motion.a>

          {/* Desktop Menu */}

          <div className="hidden lg:flex justify-center items-center gap-10">

            {desktopLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative group text-gray-300 font-medium transition-colors duration-300 hover:text-cyan-400"
              >
                <span
                  className={
                    activeSection === item.id
                      ? "text-cyan-400"
                      : ""
                  }
                >
                  {item.label}
                </span>

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
                    activeSection === item.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}

          </div>

          {/* Resume */}

          <motion.a
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.96 }}
            href="/resume/Archit_Singh_SDET_QA_Engineer_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="
              hidden
              lg:flex
              justify-self-end
              items-center

              glass-button

              px-5
              py-2.5
              rounded-full

              font-semibold
            "
          >
            Resume
          </motion.a>

          {/* Mobile Button */}

          <button
            className="lg:hidden justify-self-end text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}

        <AnimatePresence>

          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-8 pt-5 pb-6 flex flex-col gap-5">

                {mobileLinks.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="text-gray-300 hover:text-cyan-400 transition"
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href="/resume/Archit_Singh_SDET_QA_Engineer_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-button rounded-xl py-3 text-center"
                >
                  Resume
                </a>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </motion.nav>
  );
}

export default Navbar;