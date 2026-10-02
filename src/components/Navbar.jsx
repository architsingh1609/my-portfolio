import { useEffect, useState } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ArrowUp,
  BriefcaseBusiness,
  Check,
  FileText,
  Moon,
  Search,
  Sun,
  Menu,
  X,
} from "lucide-react";

import PortfolioSearch from "./PortfolioSearch";
import portfolioData from "../data/portfolioData";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isHome, setIsHome] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme =
      window.localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {
      return true;
    }

    if (savedTheme === "light") {
      return false;
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  });

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
      label: "Projects",
      id: "projects",
    },
    {
      label: "Skills",
      id: "skills",
    },
    {
      label: "Certifications",
      id: "certifications",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ];

  const mobileNavItems = [
    ...navItems,
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
  ];

  const bottomNavItems = [
    {
      label: "About",
      id: "about",
      icon: BriefcaseBusiness,
    },
    {
      label: "Experience",
      id: "experience",
      icon: FileText,
    },
    {
      label: "Projects",
      id: "projects",
      icon: BriefcaseBusiness,
    },
    {
      label: "Skills",
      id: "skills",
      icon: Check,
    },
    {
      label: "Certifications",
      id: "certifications",
      icon: FileText,
    },
    {
      label: "Contact",
      id: "contact",
      icon: FileText,
    },
  ];

  // =========================================
  // THEME
  // =========================================

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", darkMode);

    window.localStorage.setItem(
      "portfolio-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((current) => !current);
  };

  // =========================================
  // SCROLL + ACTIVE SECTION
  // =========================================

  useEffect(() => {
    let frameId = null;

    const sections = [
      "about",
      "experience",
      "projects",
      "skills",
      "certifications",
      "systems",
      "workflow",
      "goals",
      "contact",
    ];

    const updateScrollState = () => {
      frameId = null;

      const homePosition = window.scrollY <= 80;

      setIsHome(homePosition);

      if (homePosition) {
        setActiveSection("home");
        return;
      }

      let currentSection = "about";

      sections.forEach((sectionId) => {
        const section =
          document.getElementById(sectionId);

        if (!section) {
          return;
        }

        const rect =
          section.getBoundingClientRect();

        if (rect.top <= 180) {
          currentSection = sectionId;
        }
      });

      setActiveSection((current) =>
        current === currentSection
          ? current
          : currentSection
      );
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId =
        window.requestAnimationFrame(
          updateScrollState
        );
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    updateScrollState();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  // =========================================
  // FOOTER VISIBILITY
  // =========================================

  useEffect(() => {
    const footer =
      document.querySelector("footer");

    if (!footer) {
      return undefined;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(
            entry.isIntersecting
          );
        },
        {
          threshold: 0.05,
        }
      );

    observer.observe(footer);

    return () => {
      observer.disconnect();
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

      if (
        event.key === "Escape" &&
        !searchOpen
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [searchOpen]);

  // =========================================
  // NAVIGATION
  // =========================================

  const scrollToSection = (id) => {
    setOpen(false);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    const section =
      document.getElementById(id);

    if (!section) {
      return;
    }

    const targetPosition =
      section.getBoundingClientRect().top +
      window.scrollY -
      24;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: "smooth",
    });
  };

  // =========================================
  // BACK TO TOP
  // =========================================

  const handleBackToTop = () => {
    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================================
  // SEARCH
  // =========================================

  const handleSearchOpen = () => {
    setSearchOpen(true);
    setOpen(false);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  return (
    <>
      {/* =========================================
          TOP NAVBAR
      ========================================= */}

      <AnimatePresence>
        {isHome && (
          <motion.nav
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              navbar-enter
              fixed
              left-0
              right-0
              top-0
              z-[80]
              border-b
              border-transparent
              bg-transparent
              text-[var(--text-primary)]
              transition-colors
              duration-300
            "
            aria-label="Primary navigation"
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className="flex h-20 items-center justify-between">

                {/* LOGO */}

                <button
                  type="button"
                  onClick={handleBackToTop}
                  className="
                    animate-button
                    text-xl
                    font-bold
                    text-[var(--text-primary)]
                    md:text-2xl
                  "
                  aria-label="Go to top"
                >
                  Archit
                  <span className="text-[var(--accent)]">
                    .
                  </span>
                </button>

                {/* DESKTOP NAVIGATION */}

                <div className="hidden items-center gap-5 lg:flex">

                  {navItems.map((item) => {
                    const isActive =
                      activeSection === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          scrollToSection(item.id)
                        }
                        className={`
                          animated-link
                          py-2
                          text-sm
                          font-medium
                          transition-colors
                          duration-200
                          ${
                            isActive
                              ? "text-[var(--accent)]"
                              : "text-[var(--text-primary)]"
                          }
                        `}
                        aria-current={
                          isActive
                            ? "page"
                            : undefined
                        }
                      >
                        {item.label}
                      </button>
                    );
                  })}

                  {/* SEARCH */}

                  <button
                    type="button"
                    onClick={handleSearchOpen}
                    className="
                      animate-button
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-[var(--text-primary)]
                    "
                    aria-label="Open portfolio search"
                  >
                    <Search
                      className="icon-hover"
                      size={17}
                      aria-hidden="true"
                    />

                    <span>Search</span>

                    <span
                      className="
                        hidden
                        rounded-md
                        border
                        border-[var(--border-light)]
                        bg-[var(--bg-card-soft)]
                        px-2
                        py-1
                        text-[10px]
                        text-[var(--text-muted)]
                        xl:inline-flex
                      "
                    >
                      Ctrl K
                    </span>
                  </button>

                  {/* DARK MODE */}

                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="
                      animate-button
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[var(--border-medium)]
                      bg-[var(--bg-card)]
                      text-[var(--text-primary)]
                      shadow-sm
                    "
                    aria-label={
                      darkMode
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                    }
                    title={
                      darkMode
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                    }
                  >
                    <AnimatePresence
                      mode="wait"
                      initial={false}
                    >
                      {darkMode ? (
                        <motion.span
                          key="sun"
                          initial={{
                            opacity: 0,
                            rotate: -90,
                            scale: 0.7,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: 90,
                            scale: 0.7,
                          }}
                          transition={{
                            duration: 0.22,
                          }}
                        >
                          <Sun
                            className="icon-hover"
                            size={18}
                            aria-hidden="true"
                          />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="moon"
                          initial={{
                            opacity: 0,
                            rotate: 90,
                            scale: 0.7,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: -90,
                            scale: 0.7,
                          }}
                          transition={{
                            duration: 0.22,
                          }}
                        >
                          <Moon
                            className="icon-hover"
                            size={18}
                            aria-hidden="true"
                          />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>

                  {/* RESUME */}

                  <a
                    href={portfolioData.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      animate-button
                      glass-highlight
                      rounded-full
                      border
                      border-[var(--border-accent)]
                      bg-[var(--bg-card)]
                      px-5
                      py-2
                      text-sm
                      font-semibold
                      text-[var(--accent)]
                      shadow-sm
                    "
                  >
                    Resume
                  </a>
                </div>

                {/* MOBILE ACTIONS */}

                <div className="flex items-center gap-2 lg:hidden">

                  {/* THEME */}

                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="
                      animate-button
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[var(--border-medium)]
                      bg-[var(--bg-card)]
                      text-[var(--text-primary)]
                    "
                    aria-label={
                      darkMode
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                    }
                  >
                    <AnimatePresence
                      mode="wait"
                      initial={false}
                    >
                      <motion.span
                        key={
                          darkMode
                            ? "mobile-sun"
                            : "mobile-moon"
                        }
                        initial={{
                          opacity: 0,
                          rotate: -90,
                          scale: 0.7,
                        }}
                        animate={{
                          opacity: 1,
                          rotate: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          rotate: 90,
                          scale: 0.7,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                      >
                        {darkMode ? (
                          <Sun
                            className="icon-hover"
                            size={19}
                          />
                        ) : (
                          <Moon
                            className="icon-hover"
                            size={19}
                          />
                        )}
                      </motion.span>
                    </AnimatePresence>
                  </button>

                  {/* SEARCH */}

                  <button
                    type="button"
                    onClick={handleSearchOpen}
                    className="
                      animate-button
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      text-[var(--accent)]
                    "
                    aria-label="Open portfolio search"
                  >
                    <Search
                      className="icon-hover"
                      size={20}
                    />
                  </button>

                  {/* MENU */}

                  <button
                    type="button"
                    onClick={() =>
                      setOpen((value) => !value)
                    }
                    className="
                      animate-button
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      text-[var(--text-primary)]
                    "
                    aria-label={
                      open
                        ? "Close navigation menu"
                        : "Open navigation menu"
                    }
                    aria-expanded={open}
                    aria-controls="mobile-navigation"
                  >
                    <AnimatePresence
                      mode="wait"
                      initial={false}
                    >
                      {open ? (
                        <motion.span
                          key="close"
                          initial={{
                            opacity: 0,
                            rotate: -90,
                            scale: 0.7,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: 90,
                            scale: 0.7,
                          }}
                        >
                          <X size={22} />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="menu"
                          initial={{
                            opacity: 0,
                            rotate: 90,
                            scale: 0.7,
                          }}
                          animate={{
                            opacity: 1,
                            rotate: 0,
                            scale: 1,
                          }}
                          exit={{
                            opacity: 0,
                            rotate: -90,
                            scale: 0.7,
                          }}
                        >
                          <Menu size={22} />
                        </motion.span>
                      )}
                    </AnimatePresence>
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
                  id="mobile-navigation"
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
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    dropdown-enter
                    overflow-hidden
                    border-t
                    border-[var(--border-light)]
                    bg-[var(--glass-bg-strong)]
                    text-[var(--text-primary)]
                    backdrop-blur-xl
                    lg:hidden
                  "
                >
                  <div className="stagger-children space-y-1 px-6 py-5">

                    {mobileNavItems.map((item) => {
                      const isActive =
                        activeSection === item.id;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            scrollToSection(item.id)
                          }
                          className={`
                            animate-button
                            w-full
                            rounded-xl
                            border
                            px-4
                            py-3
                            text-left
                            text-sm
                            font-medium
                            transition-colors
                            duration-200
                            ${
                              isActive
                                ? `
                                  border-[var(--border-accent)]
                                  bg-[var(--bg-card-soft)]
                                  text-[var(--accent)]
                                `
                                : `
                                  border-transparent
                                  text-[var(--text-primary)]
                                  hover:bg-[var(--bg-card-soft)]
                                  hover:text-[var(--accent)]
                                `
                            }
                          `}
                        >
                          {item.label}
                        </button>
                      );
                    })}

                    {/* SEARCH */}

                    <button
                      type="button"
                      onClick={handleSearchOpen}
                      className="
                        animate-button
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-4
                        py-3
                        text-left
                        text-sm
                        font-medium
                        text-[var(--text-primary)]
                      "
                    >
                      <Search
                        className="icon-hover"
                        size={18}
                      />

                      Search Portfolio
                    </button>

                    {/* RESUME */}

                    <a
                      href={portfolioData.resume}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setOpen(false)}
                      className="
                        animate-button
                        glass-highlight
                        mt-2
                        block
                        rounded-xl
                        border
                        border-[var(--border-accent)]
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-[var(--accent)]
                      "
                    >
                      Resume
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* =========================================
          BOTTOM NAVIGATION
      ========================================= */}

      <AnimatePresence>
        {!isHome && !isFooterVisible && (
          <motion.nav
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              bottom-4
              left-1/2
              z-[70]
              w-[calc(100%-1.5rem)]
              max-w-6xl
              -translate-x-1/2
            "
            aria-label="Section navigation"
          >
            <div
              className="
                glass-highlight
                overflow-hidden
                rounded-2xl
                border
                border-[var(--glass-border)]
                bg-[var(--glass-bg-strong)]
                p-1.5
                shadow-[var(--shadow-medium)]
                backdrop-blur-xl
                transition-colors
                duration-300
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-1
                  overflow-x-auto
                  overscroll-x-contain
                  scrollbar-none
                "
              >
                {/* SECTION BUTTONS */}

                {bottomNavItems.map((item) => {
                  const Icon = item.icon;

                  const isActive =
                    activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        scrollToSection(item.id)
                      }
                      aria-current={
                        isActive
                          ? "page"
                          : undefined
                      }
                      className={`
                        animate-button
                        flex
                        min-w-fit
                        shrink-0
                        items-center
                        gap-2
                        rounded-xl
                        px-3
                        py-2.5
                        text-xs
                        font-medium
                        transition-all
                        duration-200
                        md:px-4
                        ${
                          isActive
                            ? `
                              bg-[var(--accent)]
                              text-white
                              shadow-sm
                            `
                            : `
                              text-[var(--text-secondary)]
                              hover:bg-[var(--bg-card-soft)]
                              hover:text-[var(--text-primary)]
                            `
                        }
                      `}
                    >
                      <Icon
                        className="icon-hover"
                        size={15}
                        strokeWidth={2}
                        aria-hidden="true"
                      />

                      <span>
                        {item.label}
                      </span>
                    </button>
                  );
                })}

                {/* DIVIDER */}

                <span
                  className="
                    mx-1
                    h-6
                    w-px
                    shrink-0
                    bg-[var(--border-light)]
                  "
                  aria-hidden="true"
                />

                {/* SEARCH */}

                <button
                  type="button"
                  onClick={handleSearchOpen}
                  className="
                    animate-button
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    text-[var(--text-secondary)]
                  "
                  aria-label="Open portfolio search"
                  title="Search"
                >
                  <Search
                    className="icon-hover"
                    size={17}
                  />
                </button>

                {/* DARK MODE */}

                <button
                  type="button"
                  onClick={toggleTheme}
                  className="
                    animate-button
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    text-[var(--text-secondary)]
                  "
                  aria-label={
                    darkMode
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                  title={
                    darkMode
                      ? "Switch to light mode"
                      : "Switch to dark mode"
                  }
                >
                  <AnimatePresence
                    mode="wait"
                    initial={false}
                  >
                    <motion.span
                      key={
                        darkMode
                          ? "bottom-sun"
                          : "bottom-moon"
                      }
                      initial={{
                        opacity: 0,
                        rotate: -90,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 90,
                        scale: 0.7,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      {darkMode ? (
                        <Sun size={17} />
                      ) : (
                        <Moon size={17} />
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>

                {/* RESUME */}

                <a
                  href={portfolioData.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    animate-button
                    glass-highlight
                    flex
                    min-w-fit
                    shrink-0
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-[var(--border-accent)]
                    px-3
                    py-2
                    text-xs
                    font-semibold
                    text-[var(--accent)]
                  "
                >
                  <FileText
                    className="icon-hover"
                    size={15}
                  />

                  <span>
                    Resume
                  </span>
                </a>

                {/* BACK TO TOP */}

                <button
                  type="button"
                  onClick={handleBackToTop}
                  className="
                    animate-button
                    flex
                    min-w-fit
                    shrink-0
                    items-center
                    gap-2
                    rounded-xl
                    bg-[var(--text-primary)]
                    px-3
                    py-2.5
                    text-xs
                    font-semibold
                    text-[var(--bg-primary)]
                  "
                  aria-label="Back to top"
                  title="Back to top"
                >
                  <ArrowUp
                    className="icon-hover"
                    size={15}
                  />

                  <span className="hidden sm:inline">
                    Top
                  </span>
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* =========================================
          SEARCH MODAL
      ========================================= */}

      <AnimatePresence>
        {searchOpen && (
          <PortfolioSearch
            onClose={handleSearchClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;