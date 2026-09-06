import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../data/portfolioData";

// =========================================
// DATE HELPERS
// =========================================

function formatDate(dateString) {
  if (!dateString) return "Present";

  const date = new Date(`${dateString}T00:00:00`);

  if (isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function calculateDuration(startDate, endDate) {
  if (!startDate) return "";

  const start = new Date(`${startDate}T00:00:00`);
  const end = endDate
    ? new Date(`${endDate}T00:00:00`)
    : new Date();

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return "";
  }

  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (end.getDate() < start.getDate()) {
    months -= 1;
  }

  months = Math.max(months, 0);

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} month${
      remainingMonths !== 1 ? "s" : ""
    }`;
  }

  if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? "s" : ""}`;
  }

  return `${years} year${years !== 1 ? "s" : ""} ${
    remainingMonths
  } month${remainingMonths !== 1 ? "s" : ""}`;
}

// =========================================
// EXPERIENCE SECTION
// =========================================

function Experience() {
  const experience = Array.isArray(portfolioData.experience)
    ? portfolioData.experience
    : [];

  const [activeIndex, setActiveIndex] = useState(0);

  if (experience.length === 0) {
    return (
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-400">
            Experience information is currently unavailable.
          </p>
        </div>
      </section>
    );
  }

  const activeJob = experience[activeIndex];

  const isCurrent = !activeJob.endDate;

  const duration = calculateDuration(
    activeJob.startDate,
    activeJob.endDate
  );

  return (
    <section
      id="experience"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="absolute -left-40 top-40 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-[2px] bg-cyan-400" />

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold">
              Career Architecture
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Experience
                <span className="text-cyan-400"> / </span>
                Engineering Journey
              </h2>

              <p className="mt-5 text-gray-500 max-w-2xl text-base md:text-lg leading-8">
                A closer look at the roles, responsibilities, and
                engineering practices that have shaped my QA career.
              </p>
            </div>

            {/* Console Status */}

            <div
              className="
                hidden
                lg:flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                border
                border-slate-800
                bg-slate-950/80
                font-mono
                text-xs
              "
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

              <span className="text-gray-500">
                CAREER_STATUS:
              </span>

              <span className="text-cyan-400">
                ACTIVE
              </span>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            EXPERIENCE CONSOLE
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[330px_1fr]
            rounded-3xl
            border
            border-slate-800
            bg-slate-950/80
            overflow-hidden
            shadow-[0_20px_80px_rgba(0,0,0,0.25)]
          "
        >
          {/* =========================================
              LEFT NAVIGATION
          ========================================= */}

          <div
            className="
              border-b
              lg:border-b-0
              lg:border-r
              border-slate-800
              bg-slate-900/50
            "
          >
            {/* Console Header */}

            <div className="px-6 py-5 border-b border-slate-800">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                  Professional History
                </p>

                <span className="font-mono text-xs text-cyan-400">
                  {String(experience.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Roles */}

            <div className="p-3">
              {experience.map((job, index) => {
                const selected = index === activeIndex;
                const current = !job.endDate;

                return (
                  <button
                    key={`${job.company}-${job.role}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`
                      w-full
                      text-left
                      rounded-2xl
                      p-5
                      mb-2
                      border
                      transition-all
                      duration-300
                      relative
                      overflow-hidden
                      ${
                        selected
                          ? "bg-cyan-400/[0.07] border-cyan-400/40"
                          : "bg-transparent border-transparent hover:bg-slate-800/50 hover:border-slate-700"
                      }
                    `}
                  >
                    {/* Active Indicator */}

                    {selected && (
                      <motion.div
                        layoutId="experience-active"
                        className="
                          absolute
                          left-0
                          top-0
                          bottom-0
                          w-1
                          bg-cyan-400
                        "
                      />
                    )}

                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`
                          font-mono
                          text-xs
                          ${
                            selected
                              ? "text-cyan-400"
                              : "text-gray-600"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      {current && (
                        <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-cyan-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    <h3
                      className={`
                        mt-4
                        font-semibold
                        leading-snug
                        ${
                          selected
                            ? "text-white"
                            : "text-gray-400"
                        }
                      `}
                    >
                      {job.role}
                    </h3>

                    <p className="mt-2 text-sm text-gray-600">
                      {job.company}
                    </p>

                    <p className="mt-3 text-xs text-gray-600">
                      {formatDate(job.startDate)} —{" "}
                      {formatDate(job.endDate)}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =========================================
              RIGHT DETAIL PANEL
          ========================================= */}

          <div className="relative p-7 md:p-10 lg:p-12 min-h-[600px]">
            {/* Grid Background */}

            <div
              className="
                absolute
                inset-0
                opacity-[0.025]
                pointer-events-none
                bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
                bg-[size:40px_40px]
              "
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="relative z-10"
              >
                {/* =========================================
                    ROLE HEADER
                ========================================= */}

                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                  <div>
                    {isCurrent && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Currently Building
                      </div>
                    )}

                    <p className="font-mono text-xs text-gray-600 mb-3">
                      ROLE_0{activeIndex + 1}
                    </p>

                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                      {activeJob.role}
                    </h3>

                    <p className="mt-3 text-xl text-cyan-400 font-semibold">
                      {activeJob.company}
                    </p>
                  </div>

                  {/* Duration */}

                  <div className="xl:text-right">
                    <p className="font-mono text-xs text-gray-600 uppercase tracking-wider mb-2">
                      Duration
                    </p>

                    <p className="text-white font-semibold">
                      {duration}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {formatDate(activeJob.startDate)} —{" "}
                      {formatDate(activeJob.endDate)}
                    </p>
                  </div>
                </div>

                {/* =========================================
                    LOCATION
                ========================================= */}

                {activeJob.location && (
                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                    <span className="text-cyan-400">⌖</span>

                    <span>{activeJob.location}</span>
                  </div>
                )}

                {/* Divider */}

                <div className="my-9 h-px bg-slate-800" />

                {/* =========================================
                    RESPONSIBILITIES
                ========================================= */}

                {Array.isArray(activeJob.responsibilities) &&
                  activeJob.responsibilities.length > 0 && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="font-mono text-xs text-cyan-400">
                          01
                        </span>

                        <h4 className="text-sm font-semibold text-white uppercase tracking-[0.2em]">
                          Responsibilities
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeJob.responsibilities.map(
                          (item, index) => (
                            <motion.div
                              key={index}
                              initial={{
                                opacity: 0,
                                y: 15,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                delay: index * 0.05,
                              }}
                              className="
                                group
                                rounded-2xl
                                border
                                border-slate-800
                                bg-slate-900/60
                                p-5
                                hover:border-cyan-400/40
                                transition-all
                                duration-300
                              "
                            >
                              <div className="flex gap-3">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                                <p className="text-sm text-gray-400 leading-7">
                                  {item}
                                </p>
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* =========================================
                    AUTOMATION
                ========================================= */}

                {Array.isArray(activeJob.automation) &&
                  activeJob.automation.length > 0 && (
                    <div className="mt-10">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="font-mono text-xs text-cyan-400">
                          02
                        </span>

                        <h4 className="text-sm font-semibold text-white uppercase tracking-[0.2em]">
                          Automation & Engineering
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {activeJob.automation.map(
                          (item, index) => (
                            <span
                              key={index}
                              className="
                                px-4
                                py-2.5
                                rounded-xl
                                border
                                border-slate-800
                                bg-slate-900
                                text-gray-300
                                text-sm
                                hover:border-cyan-400/50
                                hover:text-cyan-400
                                hover:bg-cyan-400/[0.03]
                                transition-all
                                duration-300
                              "
                            >
                              {item}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                {/* =========================================
                    IMPACT
                ========================================= */}

                {activeJob.impact &&
                  (Array.isArray(activeJob.impact)
                    ? activeJob.impact.length > 0
                    : true) && (
                    <div className="mt-10">
                      <div className="flex items-center gap-3 mb-5">
                        <span className="font-mono text-xs text-cyan-400">
                          03
                        </span>

                        <h4 className="text-sm font-semibold text-white uppercase tracking-[0.2em]">
                          Impact
                        </h4>
                      </div>

                      {Array.isArray(activeJob.impact) ? (
                        <div className="space-y-3">
                          {activeJob.impact.map(
                            (item, index) => (
                              <p
                                key={index}
                                className="text-gray-400 text-sm leading-7"
                              >
                                {item}
                              </p>
                            )
                          )}
                        </div>
                      ) : (
                        <p className="text-gray-400 text-sm leading-7">
                          {activeJob.impact}
                        </p>
                      )}
                    </div>
                  )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =========================================
            CAREER FOOTER
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-6
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-4
            px-2
          "
        >
          <p className="text-xs text-gray-600 font-mono">
            QA → AUTOMATION → SDET → QUALITY ENGINEERING
          </p>

          <p className="text-xs text-gray-700 font-mono">
            {experience.length} PROFESSIONAL ROLE
            {experience.length !== 1 ? "S" : ""}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;