import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import portfolioData from "../data/portfolioData";

import profileImage from "../assets/archit.png.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-[#020617]
        via-[#0b1120]
        to-[#111827]
        px-6
        pt-28
        pb-12
        text-white
      "
    >

      {/* =========================================================
          PROFESSIONAL BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Soft top gradient */}
        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[420px]
            bg-gradient-to-b
            from-slate-800/30
            via-slate-900/10
            to-transparent
          "
        />

        {/* Left Ambient Light */}
        <motion.div
          animate={{
            x: [-60, 60, -60],
            y: [-20, 30, -20],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-48
            top-1/4
            h-[520px]
            w-[520px]
            rounded-full
            bg-blue-500/[0.045]
            blur-[150px]
          "
        />

        {/* Right Ambient Light */}
        <motion.div
          animate={{
            x: [60, -60, 60],
            y: [30, -30, 30],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-48
            top-1/4
            h-[600px]
            w-[600px]
            rounded-full
            bg-cyan-500/[0.04]
            blur-[170px]
          "
        />

        {/* Bottom Ambient Light */}
        <motion.div
          animate={{
            x: [-50, 50, -50],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[-280px]
            left-1/3
            h-[500px]
            w-[500px]
            rounded-full
            bg-indigo-500/[0.035]
            blur-[150px]
          "
        />

        {/* Very subtle center light */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[450px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-slate-400/[0.015]
            blur-[120px]
          "
        />

        {/* Subtle premium grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top highlight line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />

      </div>

      {/* =========================================================
          MAIN HERO
      ========================================================== */}

      <div className="relative mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl items-center">

        <div className="w-full">

          {/* =====================================================
              PROFILE + CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Top Profile Row */}

            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:text-left">

              {/* Profile Image */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                whileHover={{
                  scale: 1.04,
                  rotate: 2,
                }}
                className="relative shrink-0"
              >

                {/* Glow */}

                <div className="absolute -inset-5 rounded-full bg-cyan-400/10 blur-3xl" />

                {/* Image Frame */}

                <div className="relative h-36 w-36 overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-slate-900 p-1 shadow-[0_0_50px_rgba(34,211,238,0.15)] sm:h-44 sm:w-44 md:h-48 md:w-48">

                  <img
                    src={profileImage}
                    alt="Archit Singh - QA Automation Engineer and SDET"
                    className="h-full w-full rounded-[1.7rem] object-cover"
                  />

                  <div className="pointer-events-none absolute inset-1 rounded-[1.7rem] bg-gradient-to-tr from-cyan-400/15 via-transparent to-blue-500/10" />

                </div>

                {/* Availability Indicator */}

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-slate-950 bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.6)]"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
                </motion.div>

              </motion.div>

              {/* Identity */}

              <div className="min-w-0 flex-1">

                {/* System Label */}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.04] px-4 py-2 backdrop-blur-xl"
                >

                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                  </span>

                  <span className="font-mono text-xs font-semibold tracking-[0.2em] text-cyan-300">
                    QA_AUTOMATION_ENGINEER
                  </span>

                </motion.div>

                {/* Code Label */}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="mb-3 font-mono text-sm text-gray-500"
                >
                  {"// building quality into software"}
                </motion.p>

                {/* Heading */}

                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.8,
                  }}
                  className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl"
                >
                  Archit{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(34,211,238,0.25)]">
                    Singh.
                  </span>
                </motion.h1>

                {/* Role */}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  className="mt-6"
                >

                  <p className="font-mono text-lg font-semibold text-gray-300 md:text-xl">
                    QA Automation Engineer
                    <span className="mx-2 text-cyan-400">|</span>
                    SDET
                  </p>

                  <div className="mt-4 h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent md:w-32" />

                </motion.div>

              </div>

            </div>

            {/* =====================================================
                MAIN DESCRIPTION
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mx-auto mt-10 max-w-5xl text-center md:text-left"
            >

              <h2 className="text-2xl font-semibold leading-relaxed text-gray-200 md:text-3xl">
                Automation With Logic.
                <br className="sm:hidden" />{" "}
                <span className="text-cyan-400">
                  Testing With Purpose.
                </span>
              </h2>

              <p className="mt-5 max-w-4xl text-base leading-8 text-gray-400 md:text-lg">
                {portfolioData.hero?.description ||
                  "Building reliable and maintainable testing solutions across UI automation, API validation, regression testing, and CI/CD workflows."}
              </p>

            </motion.div>

            {/* =====================================================
                ENGINEERING HIGHLIGHTS
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >

              {[
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
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.05 + index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]"
                >

                  <div className="mb-3 flex items-center justify-between">

                    <span className="font-mono text-[9px] tracking-[0.15em] text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                  </div>

                  <p className="font-mono text-[9px] tracking-wider text-gray-500">
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-gray-200">
                    {item.value}
                  </p>

                </motion.div>
              ))}

            </motion.div>

            {/* =====================================================
                CORE STACK
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.35 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-2 md:justify-start"
            >

              <span className="mr-2 font-mono text-[10px] tracking-[0.2em] text-cyan-500/60">
                CORE_STACK
              </span>

              {[
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
              ].map((technology, index) => (
                <motion.span
                  key={technology}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.4 + index * 0.04,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                  }}
                  className="cursor-default rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 font-mono text-[10px] text-gray-400 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  {technology}
                </motion.span>
              ))}

            </motion.div>

            {/* =====================================================
                STATUS
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.55 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-5 text-sm md:justify-start"
            >

              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-cyan-400">⌖</span>

                {portfolioData.location}
              </div>

              <div className="hidden h-4 w-px bg-slate-700 sm:block" />

              <div className="flex items-center gap-2 text-gray-300">

                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                {portfolioData.hero?.availability ||
                  "Open to Opportunities"}

              </div>

              <div className="hidden h-4 w-px bg-slate-700 sm:block" />

              <div className="font-mono text-xs text-gray-500">
                TARGET_ROLE:{" "}
                <span className="text-cyan-400">
                  SDET / QE
                </span>
              </div>

            </motion.div>

            {/* =====================================================
                CTA
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start"
            >

              {/* Projects */}

              <motion.a
                href="#projects"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative overflow-hidden rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.45)]"
              >

                <span className="relative z-10">
                  View Projects

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-500 group-hover:translate-x-full" />

              </motion.a>

              {/* Resume */}

              <motion.a
                href={portfolioData.resume}
                download
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 font-semibold text-gray-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/5 hover:text-cyan-300"
              >
                Download Resume
              </motion.a>

              {/* Contact */}

              <motion.a
                href="#contact"
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                className="rounded-xl border border-slate-700 bg-transparent px-6 py-3.5 font-semibold text-gray-300 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-300"
              >
                Contact Me
              </motion.a>

            </motion.div>

            {/* =====================================================
                SOCIAL + TERMINAL
            ====================================================== */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
            >

              {/* Social */}

              <div className="flex items-center justify-center gap-5 md:justify-start">

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
                  Connect
                </span>

                <div className="h-px w-10 bg-slate-800" />

                <motion.a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -4,
                    scale: 1.15,
                  }}
                  className="text-2xl text-gray-500 transition-colors duration-300 hover:text-cyan-400"
                  aria-label="GitHub profile"
                  title="GitHub"
                >
                  <FaGithub />
                </motion.a>

                <motion.a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -4,
                    scale: 1.15,
                  }}
                  className="text-2xl text-gray-500 transition-colors duration-300 hover:text-cyan-400"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>

              </div>

              {/* Terminal */}

              <div className="mx-auto flex w-full max-w-xl items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 backdrop-blur-xl sm:mx-0 sm:w-auto sm:min-w-[420px] sm:justify-start">

                <div className="flex items-center gap-2 font-mono text-[10px]">

                  <span className="text-cyan-400">
                    archit@sdet
                  </span>

                  <span className="text-gray-600">
                    :
                  </span>

                  <span className="text-blue-400">
                    ~/quality
                  </span>

                  <span className="text-gray-500">
                    $
                  </span>

                  <TypeAnimation
                    sequence={[
                      " automate --build-quality",
                      1800,
                      " test --with-purpose",
                      1800,
                      " ship --with-confidence",
                      1800,
                    ]}
                    speed={45}
                    repeat={Infinity}
                    cursor
                    className="text-gray-400"
                  />

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM TECH STRIP
      ========================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="relative mx-auto mt-10 max-w-7xl border-t border-slate-800/70 pt-5"
      >

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.18em] text-gray-600 md:justify-between">

          <span className="text-cyan-500/60">
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

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <motion.a
        href="#engineering-snapshot"
        animate={{
          y: [0, 7, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 transition-colors hover:text-cyan-400 md:flex"
      >

        <span className="font-mono text-[9px] tracking-[0.25em]">
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