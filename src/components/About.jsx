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

  const aboutText =
    typeof portfolioData.about === "string"
      ? portfolioData.about
      : "A quality-focused engineering approach built around automation, reliability, risk, and continuous improvement.";

  const name =
    typeof portfolioData.name === "string"
      ? portfolioData.name
      : "Archit Singh";

  const title =
    typeof portfolioData.title === "string"
      ? portfolioData.title
      : "QA Automation Engineer";

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[var(--bg-primary)]
        px-6
        py-24
        text-[var(--text-primary)]
        transition-colors
        duration-300
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-20
          h-72
          w-72
          rounded-full
          bg-blue-100/30
          blur-3xl
          dark:bg-blue-500/[0.035]
        "
        aria-hidden="true"
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-10
          right-0
          h-80
          w-80
          rounded-full
          bg-slate-100/70
          blur-3xl
          dark:bg-blue-950/20
        "
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =======================================================
            SECTION LABEL
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-4">
            <span
              className="h-[2px] w-10 bg-[var(--accent)]"
              aria-hidden="true"
            />

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.3em]
                text-[var(--accent)]
                md:text-sm
              "
            >
              Engineering Profile
            </p>
          </div>

          <h2
            className="
              text-4xl
              font-bold
              leading-tight
              text-[var(--text-primary)]
              transition-colors
              duration-300
              md:text-6xl
            "
          >
            How I Think About{" "}
            <span className="text-[var(--accent)]">Quality</span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              text-[var(--text-secondary)]
              transition-colors
              duration-300
              md:text-lg
            "
          >
            A quality-focused engineering approach built around automation,
            reliability, risk, and continuous improvement.
          </p>
        </motion.div>

        {/* =======================================================
            MAIN PROFILE
        ======================================================== */}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          {/* =====================================================
              LEFT — ABOUT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[var(--border-light)]
              bg-[var(--bg-card)]
              p-8
              shadow-sm
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[var(--border-accent)]
              hover:bg-[var(--bg-card-soft)]
              hover:shadow-md
              md:p-12
            "
          >
            {/* Top Accent */}

            <div
              className="
                absolute
                left-0
                top-0
                h-[2px]
                w-32
                bg-gradient-to-r
                from-[var(--accent)]
                to-transparent
              "
              aria-hidden="true"
            />

            {/* Corner Accent */}

            <div
              className="
                absolute
                right-0
                top-0
                h-32
                w-32
                bg-blue-100/40
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-blue-100/60
                dark:bg-blue-500/[0.035]
                dark:group-hover:bg-blue-500/[0.07]
              "
              aria-hidden="true"
            />

            <div className="relative z-10">
              <p
                className="
                  mb-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[var(--accent)]
                "
              >
                About Me
              </p>

              <h3
                className="
                  mb-7
                  text-2xl
                  font-bold
                  leading-tight
                  text-[var(--text-primary)]
                  transition-colors
                  duration-300
                  md:text-4xl
                "
              >
                Building confidence through{" "}
                <span className="text-[var(--accent)]">
                  better testing.
                </span>
              </h3>

              <p
                className="
                  max-w-3xl
                  text-base
                  leading-8
                  text-[var(--text-secondary)]
                  transition-colors
                  duration-300
                  md:text-lg
                "
              >
                {aboutText}
              </p>
            </div>

            {/* Bottom Identity */}

            <div
              className="
                relative
                z-10
                mt-10
                flex
                flex-col
                gap-4
                border-t
                border-[var(--border-light)]
                pt-7
                transition-colors
                duration-300
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div>
                <p className="font-semibold text-[var(--text-primary)]">
                  {name}
                </p>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {title}
                </p>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-[var(--text-secondary)]
                "
              >
                <span
                  className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"
                  aria-hidden="true"
                />

                Quality Engineering Mindset
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — ENGINEERING PROFILE
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[var(--border-light)]
              bg-[var(--bg-card-soft)]
              p-8
              shadow-sm
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-[var(--border-accent)]
              md:p-9
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-blue-50/60
                via-transparent
                to-slate-100/50
                dark:from-blue-500/[0.045]
                dark:via-transparent
                dark:to-blue-950/20
              "
              aria-hidden="true"
            />

            <div className="relative z-10">
              <p
                className="
                  mb-8
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[var(--accent)]
                "
              >
                Engineering Focus
              </p>

              <div className="space-y-7">
                <div>
                  <p
                    className="
                      mb-2
                      text-xs
                      uppercase
                      tracking-wider
                      text-[var(--text-muted)]
                    "
                  >
                    Primary Role
                  </p>

                  <p className="text-lg font-semibold text-[var(--text-primary)]">
                    QA Automation Engineer
                  </p>

                  <p className="mt-1 text-sm text-[var(--accent)]">
                    SDET Focus
                  </p>
                </div>

                <div
                  className="h-px bg-[var(--border-light)]"
                  aria-hidden="true"
                />

                <div>
                  <p
                    className="
                      mb-2
                      text-xs
                      uppercase
                      tracking-wider
                      text-[var(--text-muted)]
                    "
                  >
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
                          rounded-lg
                          border
                          border-[var(--border-light)]
                          bg-[var(--bg-card)]
                          px-3
                          py-2
                          text-xs
                          text-[var(--text-secondary)]
                          shadow-sm
                          transition-all
                          duration-300
                          hover:border-[var(--border-accent)]
                          hover:bg-[var(--bg-card-soft)]
                          hover:text-[var(--accent)]
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="h-px bg-[var(--border-light)]"
                  aria-hidden="true"
                />

                <div>
                  <p
                    className="
                      mb-2
                      text-xs
                      uppercase
                      tracking-wider
                      text-[var(--text-muted)]
                    "
                  >
                    Approach
                  </p>

                  <p
                    className="
                      text-sm
                      leading-7
                      text-[var(--text-secondary)]
                    "
                  >
                    Risk-aware testing, maintainable automation, reliable
                    validation, and continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            QUALITY ENGINEERING PHILOSOPHY
        ======================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            relative
            mt-8
            overflow-hidden
            rounded-3xl
            border
            border-[var(--border-light)]
            bg-[var(--bg-card-soft)]
            p-8
            shadow-sm
            transition-all
            duration-300
            hover:border-[var(--border-accent)]
            md:p-10
          "
        >
          <div
            className="
              absolute
              bottom-0
              left-0
              top-0
              w-1
              bg-[var(--accent)]
            "
            aria-hidden="true"
          />

          <div className="relative z-10">
            <p
              className="
                mb-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[var(--accent)]
              "
            >
              Quality Engineering Philosophy
            </p>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h3
                className="
                  max-w-4xl
                  text-2xl
                  font-light
                  italic
                  leading-tight
                  text-[var(--text-primary)]
                  transition-colors
                  duration-300
                  md:text-4xl
                  lg:text-5xl
                "
              >
                “Quality is engineered into the product —
                <span className="text-[var(--accent)]">
                  {" "}
                  not tested after release.
                </span>
                ”
              </h3>

              <span
                className="
                  font-serif
                  text-5xl
                  leading-none
                  text-[var(--border-dark)]
                  md:text-7xl
                "
                aria-hidden="true"
              >
                ”
              </span>
            </div>
          </div>
        </motion.div>

        {/* =======================================================
            ENGINEERING PRINCIPLES
        ======================================================== */}

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                group
                rounded-2xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card)]
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--border-accent)]
                hover:bg-[var(--bg-card-soft)]
                hover:shadow-md
              "
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-sm text-[var(--accent)]">
                  {principle.number}
                </span>

                <span
                  className="
                    h-px
                    w-8
                    bg-[var(--border-medium)]
                    transition-all
                    duration-300
                    group-hover:w-14
                    group-hover:bg-[var(--accent)]
                  "
                  aria-hidden="true"
                />
              </div>

              <h3
                className="
                  mb-3
                  text-xl
                  font-bold
                  text-[var(--text-primary)]
                  transition-colors
                  duration-300
                  group-hover:text-[var(--accent)]
                "
              >
                {principle.title}
              </h3>

              <p
                className="
                  text-sm
                  leading-7
                  text-[var(--text-secondary)]
                  transition-colors
                  duration-300
                "
              >
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