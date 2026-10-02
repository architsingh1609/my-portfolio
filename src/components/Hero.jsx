import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import portfolioData from "../data/portfolioData";
import profileImage from "../assets/archit.png.jpg";

function Hero() {
  // ============================================================
  // SAFE DATA
  // ============================================================

  const data = portfolioData ?? {};
  const hero = data.hero ?? {};

  const description =
    hero.description ??
    "Building reliable and maintainable testing solutions across UI automation, API validation, regression testing, and CI/CD workflows.";

  const availability =
    hero.availability ??
    "Open to Opportunities";

  const location =
    data.location ??
    "Mumbai, India";

  const github =
    data.github ??
    "#";

  const linkedin =
    data.linkedin ??
    "#";

  const resume =
    data.resume ??
    "#";

  // ============================================================
  // STATIC DATA
  // ============================================================

  const engineeringHighlights = [
    {
      label: "UI AUTOMATION",
      value: "Selenium + Java",
    },
    {
      label: "API AUTOMATION",
      value: "REST Assured + Postman",
    },
    {
      label: "TEST FRAMEWORK",
      value: "TestNG + POM",
    },
    {
      label: "CI / CD",
      value: "Jenkins + Git",
    },
  ];

  const technologies = [
    "Java",
    "Selenium",
    "TestNG",
    "REST Assured",
    "Postman",
    "Jenkins",
    "Git",
    "GitHub",
    "Maven",
    "SQL",
    "POM",
  ];

  // ============================================================
  // COMPONENT
  // ============================================================

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[var(--bg-primary)]
        px-6
        pt-28
        pb-16
        text-[var(--text-primary)]
        transition-colors
        duration-300
      "
    >
      {/* ========================================================
          BACKGROUND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
        aria-hidden="true"
      >
        {/* Top gradient */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[420px]
            bg-gradient-to-b
            from-[var(--bg-secondary)]
            via-transparent
            to-transparent
            opacity-70
          "
        />

        {/* Left glow */}

        <div
          className="
            absolute
            -left-48
            top-1/4
            h-[520px]
            w-[520px]
            rounded-full
            bg-[var(--accent)]
            opacity-[0.035]
            blur-[150px]
          "
        />

        {/* Right glow */}

        <div
          className="
            absolute
            -right-48
            top-1/4
            h-[600px]
            w-[600px]
            rounded-full
            bg-[var(--accent-secondary)]
            opacity-[0.03]
            blur-[170px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            absolute
            bottom-[-280px]
            left-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-[var(--accent)]
            opacity-[0.025]
            blur-[150px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(127,127,127,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(127,127,127,0.45) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top line */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-[var(--accent)]
            to-transparent
            opacity-30
          "
        />

        {/* Bottom fade */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-40
            bg-gradient-to-t
            from-[var(--bg-primary)]
            to-transparent
          "
        />
      </div>

      {/* ========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[calc(100vh-140px)]
          max-w-7xl
          items-center
        "
      >
        <div className="w-full">

          {/* ====================================================
              PROFILE + IDENTITY
          ==================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <div
              className="
                flex
                flex-col
                items-center
                gap-8
                text-center
                md:flex-row
                md:items-center
                md:text-left
              "
            >
              {/* =================================================
                  PROFILE IMAGE
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="relative shrink-0"
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    -inset-5
                    rounded-full
                    bg-[var(--accent)]
                    opacity-10
                    blur-3xl
                  "
                />

                {/* Image */}

                <div
                  className="
                    relative
                    h-36
                    w-36
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-[var(--border-accent)]
                    bg-[var(--bg-card)]
                    p-1
                    shadow-[var(--shadow-medium)]
                    sm:h-44
                    sm:w-44
                    md:h-48
                    md:w-48
                    transition-colors
                    duration-300
                  "
                >
                  <img
                    src={profileImage}
                    alt="Archit Singh - QA Automation Engineer and SDET"
                    className="
                      h-full
                      w-full
                      rounded-[1.7rem]
                      object-cover
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-1
                      rounded-[1.7rem]
                      bg-gradient-to-tr
                      from-[var(--accent)]
                      via-transparent
                      to-[var(--accent-secondary)]
                      opacity-10
                    "
                  />
                </div>

                {/* Availability indicator */}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -bottom-2
                    -right-2
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border-4
                    border-[var(--bg-primary)]
                    bg-emerald-400
                    shadow-[0_0_20px_rgba(52,211,153,0.6)]
                  "
                >
                  <span
                    className="
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-slate-950
                    "
                  />
                </motion.div>
              </motion.div>

              {/* =================================================
                  IDENTITY
              ================================================== */}

              <div className="min-w-0 flex-1">

                {/* System label */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                    duration: 0.5,
                  }}
                  className="
                    mb-5
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[var(--border-accent)]
                    bg-[var(--accent)]
                    bg-opacity-[0.04]
                    px-4
                    py-2
                  "
                >
                  <span
                    className="
                      relative
                      flex
                      h-2.5
                      w-2.5
                    "
                  >
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-[var(--accent)]
                        opacity-50
                      "
                    />

                    <span
                      className="
                        relative
                        inline-flex
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-[var(--accent)]
                      "
                    />
                  </span>

                  <span
                    className="
                      font-mono
                      text-xs
                      font-semibold
                      tracking-[0.2em]
                      text-[var(--accent)]
                    "
                  >
                    QA_AUTOMATION_ENGINEER
                  </span>
                </motion.div>

                {/* Code label */}

                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.35,
                    duration: 0.5,
                  }}
                  className="
                    mb-3
                    font-mono
                    text-sm
                    text-[var(--text-muted)]
                  "
                >
                  {"// building quality into software"}
                </motion.p>

                {/* Name */}

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.4,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="
                    text-5xl
                    font-black
                    leading-[0.95]
                    tracking-tight
                    text-[var(--text-primary)]
                    sm:text-6xl
                    md:text-7xl
                    xl:text-8xl
                  "
                >
                  Archit{" "}

                  <span
                    className="
                      bg-gradient-to-r
                      from-[var(--accent)]
                      via-[var(--accent-light)]
                      to-[var(--accent-secondary)]
                      bg-clip-text
                      text-transparent
                    "
                  >
                    Singh.
                  </span>
                </motion.h1>

                {/* Role */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                  }}
                  className="mt-6"
                >
                  <p
                    className="
                      font-mono
                      text-lg
                      font-semibold
                      text-[var(--text-secondary)]
                      md:text-xl
                    "
                  >
                    QA Automation Engineer

                    <span className="mx-2 text-[var(--accent)]">
                      |
                    </span>

                    SDET
                  </p>

                  <div
                    className="
                      mt-4
                      h-px
                      w-24
                      bg-gradient-to-r
                      from-[var(--accent)]
                      to-transparent
                      md:w-32
                    "
                  />
                </motion.div>
              </div>
            </div>

            {/* ====================================================
                DESCRIPTION
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.75,
                duration: 0.6,
              }}
              className="
                mx-auto
                mt-10
                max-w-5xl
                text-center
                md:text-left
              "
            >
              <h2
                className="
                  text-2xl
                  font-semibold
                  leading-relaxed
                  text-[var(--text-primary)]
                  md:text-3xl
                "
              >
                Automation With Logic.

                <br className="sm:hidden" />

                <span className="text-[var(--accent)]">
                  Testing With Purpose.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-4xl
                  text-base
                  leading-8
                  text-[var(--text-secondary)]
                  md:text-lg
                "
              >
                {description}
              </p>
            </motion.div>

            {/* ====================================================
                ENGINEERING HIGHLIGHTS
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.6,
              }}
              className="
                mt-9
                grid
                gap-3
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >
              {engineeringHighlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.95 + index * 0.08,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-[var(--border-light)]
                    bg-[var(--glass-bg-soft)]
                    p-5
                    shadow-[var(--shadow-soft)]
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-[var(--border-accent)]
                  "
                >
                  <div
                    className="
                      mb-3
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[9px]
                        tracking-[0.15em]
                        text-[var(--text-subtle)]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[var(--accent)]
                      "
                    />
                  </div>

                  <p
                    className="
                      font-mono
                      text-[9px]
                      tracking-wider
                      text-[var(--text-muted)]
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      text-[var(--text-primary)]
                    "
                  >
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* ====================================================
                CORE STACK
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.3,
                duration: 0.6,
              }}
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-2
                md:justify-start
              "
            >
              <span
                className="
                  mr-2
                  font-mono
                  text-[10px]
                  tracking-[0.2em]
                  text-[var(--accent)]
                  opacity-70
                "
              >
                CORE_STACK
              </span>

              {technologies.map((technology, index) => (
                <motion.span
                  key={technology}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 1.35 + index * 0.035,
                    duration: 0.4,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  className="
                    cursor-default
                    rounded-lg
                    border
                    border-[var(--border-light)]
                    bg-[var(--glass-bg-soft)]
                    px-3
                    py-2
                    font-mono
                    text-[10px]
                    text-[var(--text-secondary)]
                    shadow-[var(--shadow-soft)]
                    transition-all
                    duration-300
                    hover:border-[var(--border-accent)]
                    hover:text-[var(--accent)]
                  "
                >
                  {technology}
                </motion.span>
              ))}
            </motion.div>

            {/* ====================================================
                STATUS
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.5,
                duration: 0.6,
              }}
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-5
                text-sm
                md:justify-start
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[var(--text-secondary)]
                "
              >
                <span className="text-[var(--accent)]">
                  ⌖
                </span>

                {location}
              </div>

              <div
                className="
                  hidden
                  h-4
                  w-px
                  bg-[var(--border-medium)]
                  sm:block
                "
              />

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-[var(--text-secondary)]
                "
              >
                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-emerald-400
                  "
                />

                {availability}
              </div>

              <div
                className="
                  hidden
                  h-4
                  w-px
                  bg-[var(--border-medium)]
                  sm:block
                "
              />

              <div
                className="
                  font-mono
                  text-xs
                  text-[var(--text-muted)]
                "
              >
                TARGET_ROLE:

                <span className="ml-1 text-[var(--accent)]">
                  SDET / QE
                </span>
              </div>
            </motion.div>

            {/* ====================================================
                CTA
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.65,
                duration: 0.6,
              }}
              className="
                mt-9
                flex
                flex-wrap
                justify-center
                gap-3
                md:justify-start
              "
            >
              {/* Projects */}

              <motion.a
                href="#projects"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  rounded-xl
                  bg-[var(--accent)]
                  px-6
                  py-3.5
                  font-semibold
                  text-white
                  shadow-[var(--shadow-accent)]
                  transition-all
                  duration-300
                  hover:brightness-105
                "
              >
                View Projects

                <span className="ml-2">
                  →
                </span>
              </motion.a>

              {/* Resume */}

              <motion.a
                href={resume}
                download
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  rounded-xl
                  border
                  border-[var(--border-medium)]
                  bg-[var(--glass-bg)]
                  px-6
                  py-3.5
                  font-semibold
                  text-[var(--text-primary)]
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[var(--border-accent)]
                  hover:text-[var(--accent)]
                "
              >
                Download Resume
              </motion.a>

              {/* Contact */}

              <motion.a
                href="#contact"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  rounded-xl
                  border
                  border-[var(--border-medium)]
                  bg-transparent
                  px-6
                  py-3.5
                  font-semibold
                  text-[var(--text-secondary)]
                  transition-all
                  duration-300
                  hover:border-[var(--border-accent)]
                  hover:text-[var(--accent)]
                "
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* ====================================================
                SOCIAL
            ==================================================== */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.8,
                duration: 0.6,
              }}
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-5
                md:justify-start
              "
            >
              <span
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[var(--text-subtle)]
                "
              >
                Connect
              </span>

              <div
                className="
                  h-px
                  w-10
                  bg-[var(--border-medium)]
                "
              />

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="
                  text-2xl
                  text-[var(--text-muted)]
                  transition-colors
                  duration-300
                  hover:text-[var(--accent)]
                "
              >
                <FaGithub />
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="
                  text-2xl
                  text-[var(--text-muted)]
                  transition-colors
                  duration-300
                  hover:text-[var(--accent)]
                "
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ========================================================
          BOTTOM TECH STRIP
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.9,
          duration: 0.6,
        }}
        className="
          relative
          mx-auto
          mt-10
          max-w-7xl
          border-t
          border-[var(--border-light)]
          pt-5
        "
      >
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-2
            font-mono
            text-[10px]
            tracking-[0.18em]
            text-[var(--text-subtle)]
            md:justify-between
          "
        >
          <span className="text-[var(--accent)] opacity-70">
            QUALITY_ENGINEERING
          </span>

          <span>JAVA</span>
          <span>SELENIUM</span>
          <span>TESTNG</span>
          <span>REST_ASSURED</span>
          <span>JENKINS</span>
          <span>GIT</span>
          <span>SQL</span>
        </div>
      </motion.div>

      {/* ========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.a
        href="#engineering-snapshot"
        animate={{
          y: [0, 6, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-[var(--text-muted)]
          transition-colors
          hover:text-[var(--accent)]
          md:flex
        "
      >
        <span
          className="
            font-mono
            text-[9px]
            tracking-[0.25em]
          "
        >
          EXPLORE
        </span>

        <span className="text-lg">
          ↓
        </span>
      </motion.a>
    </section>
  );
}

export default Hero;