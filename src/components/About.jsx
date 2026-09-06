import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function About() {
  const principles = [
    {
      number: "01",
      title: "Quality by Design",
      description:
        "Quality should be considered throughout the product lifecycle, not treated as a final-stage activity.",
    },
    {
      number: "02",
      title: "Automation with Purpose",
      description:
        "Automation should improve coverage, feedback speed, reliability, and maintainability.",
    },
    {
      number: "03",
      title: "Engineering Mindset",
      description:
        "I approach testing through systems, risks, data, tools, and continuous improvement.",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================
            SECTION LABEL
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-[2px] bg-cyan-400" />

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
              Engineering Profile
            </p>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            How I Think About
            <span className="text-cyan-400"> Quality</span>
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl text-base md:text-lg">
            A quality-focused engineering approach built around automation,
            reliability, risk, and continuous improvement.
          </p>
        </motion.div>

        {/* =========================================
            MAIN PROFILE
        ========================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8">
          {/* =========================================
              LEFT — ABOUT
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative
              rounded-3xl
              border
              border-slate-800
              bg-slate-900/70
              backdrop-blur-xl
              p-8
              md:p-12
              overflow-hidden
              group
            "
          >
            {/* Top Accent */}

            <div
              className="
                absolute
                top-0
                left-0
                w-32
                h-[2px]
                bg-gradient-to-r
                from-cyan-400
                to-transparent
              "
            />

            {/* Corner Accent */}

            <div
              className="
                absolute
                top-0
                right-0
                w-32
                h-32
                bg-cyan-400/5
                blur-3xl
                group-hover:bg-cyan-400/10
                transition-all
                duration-500
              "
            />

            <div className="relative z-10">
              <p className="text-cyan-400 text-xs uppercase tracking-[0.25em] font-semibold mb-5">
                About Me
              </p>

              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-7">
                Building confidence through
                <span className="text-cyan-400"> better testing.</span>
              </h3>

              <p className="text-gray-300 text-base md:text-lg leading-8 max-w-3xl">
                {portfolioData.about}
              </p>
            </div>

            {/* Bottom Identity */}

            <div className="relative z-10 mt-10 pt-7 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-white font-semibold">
                  {portfolioData.name}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {portfolioData.title}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                Quality Engineering Mindset
              </div>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT — ENGINEERING PROFILE
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-950/80
              p-8
              md:p-9
              relative
              overflow-hidden
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.04] via-transparent to-blue-500/[0.04]" />

            <div className="relative z-10">
              <p className="text-cyan-400 text-xs uppercase tracking-[0.25em] font-semibold mb-8">
                Engineering Focus
              </p>

              <div className="space-y-7">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                    Primary Role
                  </p>

                  <p className="text-white text-lg font-semibold">
                    QA Automation Engineer
                  </p>

                  <p className="text-cyan-400 text-sm mt-1">
                    SDET Focus
                  </p>
                </div>

                <div className="h-px bg-slate-800" />

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                    Engineering Areas
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "UI Automation",
                      "API Testing",
                      "CI/CD",
                      "SQL",
                      "Test Automation",
                      "Quality Engineering",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                          px-3
                          py-2
                          rounded-lg
                          bg-slate-900
                          border
                          border-slate-800
                          text-gray-300
                          text-xs
                          hover:border-cyan-400
                          hover:text-cyan-400
                          transition-all
                          duration-300
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-slate-800" />

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                    Approach
                  </p>

                  <p className="text-gray-300 leading-7 text-sm">
                    Risk-aware testing, maintainable automation, reliable
                    validation, and continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            QUALITY ENGINEERING PHILOSOPHY
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            mt-8
            relative
            rounded-3xl
            border
            border-cyan-400/20
            bg-gradient-to-r
            from-cyan-400/[0.07]
            via-slate-900
            to-blue-500/[0.05]
            p-8
            md:p-10
            overflow-hidden
          "
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400" />

          <div className="relative z-10">
            <p className="text-cyan-400 text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              Quality Engineering Philosophy
            </p>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-light italic text-white leading-tight max-w-4xl">
                “Quality is engineered into the product —
                <span className="text-cyan-400">
                  {" "}
                  not tested after release.
                </span>
                ”
              </h3>

              <span className="text-gray-600 text-5xl md:text-7xl font-serif leading-none">
                ”
              </span>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            ENGINEERING PRINCIPLES
        ========================================= */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                group
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/60
                p-7
                hover:border-cyan-400/60
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-cyan-400 font-mono text-sm">
                  {principle.number}
                </span>

                <span className="w-8 h-px bg-slate-700 group-hover:w-14 group-hover:bg-cyan-400 transition-all duration-300" />
              </div>

              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {principle.title}
              </h3>

              <p className="text-gray-500 text-sm leading-7">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;