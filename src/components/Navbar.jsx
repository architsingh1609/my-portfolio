import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import PortfolioSearch from "./PortfolioSearch";

import portfolioData from "../data/portfolioData";

function Navbar() {
  const [open, setOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("about");

  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    {
      label: "About",
      id: "about",
    },
    {
      label: "Experience",
      id: "experience",
    },
    {
      label: "Skills",
      id: "skills",
    },
    {
      label: "Projects",
      id: "projects",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ];

  const mobileNavItems = [
    {
      label: "About",
      id: "about",
    },
    {
      label: "Experience",
      id: "experience",
    },
    {
      label: "Skills",
      id: "skills",
    },
    {
      label: "Projects",
      id: "projects",
    },
    {
      label: "Certifications",
      id: "certifications",
    },
    {
      label: "Systems",
      id: "systems",
    },
    {
      label: "Workflow",
      id: "workflow",
    },
    {
      label: "Goals",
      id: "goals",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ];

  // =========================================
  // SCROLL EFFECT
  // =========================================

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "about",
        "experience",
        "skills",
        "projects",
        "certifications",
        "systems",
        "workflow",
        "goals",
        "contact",
      ];

      let currentSection = "about";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();

        if (rect.top <= 160) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================================
  // KEYBOARD SHORTCUTS
  // =========================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();

        setSearchOpen(true);
        setOpen(false);
      }

      if (event.key === "Escape" && !searchOpen) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchOpen]);

  // =========================================
  // NAVIGATION
  // =========================================

  const scrollToSection = (id) => {
    setOpen(false);

    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    const navbarOffset = 90;

    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      navbarOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  // =========================================
  // SEARCH OPEN
  // =========================================

  const handleSearchOpen = () => {
    setSearchOpen(true);
    setOpen(false);
  };

  // =========================================
  // SEARCH CLOSE
  // =========================================

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  return (
    <>
      {/* =========================================
          NAVBAR
      ========================================= */}

      <nav
        className={`
          fixed
          top-0
          left-0
          right-0
          z-[80]
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-slate-950/90 backdrop-blur-xl border-b border-cyan-400/10 shadow-lg"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-20 flex items-center justify-between">
            {/* =====================================
                LOGO
            ===================================== */}

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="
                text-xl
                md:text-2xl
                font-bold
                text-white
                hover:text-cyan-400
                transition
              "
              aria-label="Go to top"
            >
              Archit<span className="text-cyan-400">.</span>
            </button>

            {/* =====================================
                DESKTOP NAVIGATION
            ===================================== */}

            <div className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative
                    text-sm
                    font-medium
                    transition
                    ${
                      activeSection === item.id
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }
                  `}
                >
                  {item.label}

                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="
                        absolute
                        -bottom-2
                        left-0
                        right-0
                        h-0.5
                        bg-cyan-400
                        rounded-full
                      "
                    />
                  )}
                </button>
              ))}

              {/* ===================================
                  DESKTOP SEARCH
              =================================== */}

              <button
                type="button"
                onClick={handleSearchOpen}
                className="
                  flex
                  items-center
                  gap-2
                  text-gray-300
                  hover:text-cyan-400
                  transition
                  text-sm
                  font-medium
                "
                aria-label="Open portfolio search"
              >
                <span
                  className="
                    text-3xl
                    font-bold
                    leading-none
                  "
                  aria-hidden="true"
                >
                  ⌕
                </span>

                <span>Search</span>

                <span
                  className="
                    hidden
                    xl:inline-flex
                    items-center
                    rounded-md
                    border
                    border-slate-700
                    bg-slate-900/70
                    px-2
                    py-1
                    text-[10px]
                    text-gray-500
                  "
                >
                  Ctrl K
                </span>
              </button>

              {/* ===================================
                  RESUME
              =================================== */}

              <a
                href={portfolioData.resume}
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-full
                  border
                  border-cyan-400/40
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-cyan-400
                  hover:bg-cyan-400
                  hover:text-slate-950
                  transition
                "
              >
                Resume
              </a>
            </div>

            {/* =====================================
                MOBILE ACTIONS
            ===================================== */}

            <div className="lg:hidden flex items-center gap-2">
              {/* Mobile Search */}

              <button
                type="button"
                onClick={handleSearchOpen}
                className="
                  flex
                  items-center
                  justify-center
                  w-11
                  h-11
                  rounded-xl
                  text-cyan-400
                  hover:bg-slate-800
                  transition
                "
                aria-label="Open portfolio search"
              >
                <span
                  className="
                    text-3xl
                    font-bold
                    leading-none
                  "
                  aria-hidden="true"
                >
                  ⌕
                </span>
              </button>

              {/* Mobile Menu */}

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-1.5
                  w-11
                  h-11
                  rounded-xl
                  hover:bg-slate-800
                  transition
                "
                aria-label={
                  open
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={open}
              >
                <span
                  className={`
                    block
                    w-6
                    h-0.5
                    bg-gray-300
                    transition
                    ${
                      open
                        ? "rotate-45 translate-y-2"
                        : ""
                    }
                  `}
                />

                <span
                  className={`
                    block
                    w-6
                    h-0.5
                    bg-gray-300
                    transition
                    ${
                      open
                        ? "opacity-0"
                        : "opacity-100"
                    }
                  `}
                />

                <span
                  className={`
                    block
                    w-6
                    h-0.5
                    bg-gray-300
                    transition
                    ${
                      open
                        ? "-rotate-45 -translate-y-2"
                        : ""
                    }
                  `}
                />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================
            MOBILE MENU
        ========================================= */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="
                lg:hidden
                overflow-hidden
                border-t
                border-slate-800
                bg-slate-950/95
                backdrop-blur-xl
              "
            >
              <div className="px-6 py-5 space-y-1">
                {mobileNavItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full
                      text-left
                      px-4
                      py-3
                      rounded-xl
                      text-sm
                      font-medium
                      transition
                      ${
                        activeSection === item.id
                          ? "bg-cyan-400/10 text-cyan-400"
                          : "text-gray-300 hover:bg-slate-800 hover:text-cyan-400"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile Search */}

                <button
                  type="button"
                  onClick={handleSearchOpen}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    text-left
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-medium
                    text-gray-300
                    hover:bg-slate-800
                    hover:text-cyan-400
                    transition
                  "
                >
                  <span className="text-2xl font-bold">
                    ⌕
                  </span>

                  Search Portfolio
                </button>

                {/* Mobile Resume */}

                <a
                  href={portfolioData.resume}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="
                    block
                    mt-2
                    px-4
                    py-3
                    rounded-xl
                    text-sm
                    font-semibold
                    text-cyan-400
                    border
                    border-cyan-400/30
                    hover:bg-cyan-400/10
                    transition
                  "
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* =========================================
          SEARCH MODAL
      ========================================= */}

      <AnimatePresence>
        {searchOpen && (
          <PortfolioSearch onClose={handleSearchClose} />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;