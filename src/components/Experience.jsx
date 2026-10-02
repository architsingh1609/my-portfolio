import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import portfolioData from "../data/portfolioData";

/* =========================================================
   DATE HELPERS
========================================================= */

function parseDate(dateString) {
  if (!dateString) {
    return null;
  }

  const date = new Date(`${dateString}T00:00:00`);

  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(dateString) {
  if (!dateString) {
    return "Present";
  }

  const date = parseDate(dateString);

  if (!date) {
    return dateString;
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function calculateDuration(
  startDate,
  endDate,
  referenceDate = new Date(),
) {
  if (!startDate) {
    return "";
  }

  const start = parseDate(startDate);
  const end = endDate
    ? parseDate(endDate)
    : referenceDate;

  if (!start || !end || end < start) {
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

/* =========================================================
   TOTAL EXPERIENCE CALCULATION
========================================================= */

function calculateTotalExperience(
  experience,
  referenceDate = new Date(),
) {
  if (!Array.isArray(experience) || experience.length === 0) {
    return {
      years: 0,
      months: 0,
      label: "0 Months",
    };
  }

  const periods = experience
    .map((job) => {
      const start = parseDate(job?.startDate);
      const end = job?.endDate
        ? parseDate(job.endDate)
        : referenceDate;

      if (!start || !end || end < start) {
        return null;
      }

      return {
        start,
        end,
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.start - b.start);

  if (periods.length === 0) {
    return {
      years: 0,
      months: 0,
      label: "0 Months",
    };
  }

  /*
   * Merge overlapping or directly connected employment
   * periods so overlapping roles are not double-counted.
   */
  const mergedPeriods = [];

  periods.forEach((period) => {
    const lastPeriod =
      mergedPeriods[mergedPeriods.length - 1];

    if (!lastPeriod) {
      mergedPeriods.push({
        start: period.start,
        end: period.end,
      });

      return;
    }

    const oneDayAfterLastEnd = new Date(lastPeriod.end);

    oneDayAfterLastEnd.setDate(
      oneDayAfterLastEnd.getDate() + 1,
    );

    if (period.start <= oneDayAfterLastEnd) {
      if (period.end > lastPeriod.end) {
        lastPeriod.end = period.end;
      }
    } else {
      mergedPeriods.push({
        start: period.start,
        end: period.end,
      });
    }
  });

  let totalMonths = 0;

  mergedPeriods.forEach((period) => {
    let months =
      (period.end.getFullYear() -
        period.start.getFullYear()) *
        12 +
      (period.end.getMonth() -
        period.start.getMonth());

    if (period.end.getDate() < period.start.getDate()) {
      months -= 1;
    }

    totalMonths += Math.max(months, 0);
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let label = "";

  if (years > 0) {
    label += `${years} Year${
      years !== 1 ? "s" : ""
    }`;
  }

  if (months > 0) {
    if (label) {
      label += " ";
    }

    label += `${months} Month${
      months !== 1 ? "s" : ""
    }`;
  }

  if (!label) {
    label = "Less than 1 Month";
  }

  return {
    years,
    months,
    label,
  };
}

/* =========================================================
   EXPERIENCE SECTION
========================================================= */

function Experience() {
  const experience = Array.isArray(
    portfolioData.experience,
  )
    ? portfolioData.experience.filter(
        (job) => job?.startDate,
      )
    : [];

  const [activeIndex, setActiveIndex] = useState(0);

  /*
   * Refresh current-role duration automatically.
   * This keeps the displayed experience current without
   * requiring a page refresh.
   */
  const [currentDate, setCurrentDate] = useState(
    () => new Date(),
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentDate(new Date());
    }, 60 * 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  const totalExperience = useMemo(
    () =>
      calculateTotalExperience(
        experience,
        currentDate,
      ),
    [experience, currentDate],
  );

  if (experience.length === 0) {
    return (
      <section
        id="experience"
        className="
          bg-[var(--bg-primary)]
          px-6
          py-24
          text-[var(--text-primary)]
          transition-colors
          duration-300
        "
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-[var(--text-secondary)]">
            Experience information is currently unavailable.
          </p>
        </div>
      </section>
    );
  }

  const safeActiveIndex = Math.min(
    Math.max(activeIndex, 0),
    experience.length - 1,
  );

  const activeJob = experience[safeActiveIndex];

  const isCurrent = !activeJob?.endDate;

  const duration = calculateDuration(
    activeJob?.startDate,
    activeJob?.endDate,
    currentDate,
  );

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
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
      {/* =======================================================
          BACKGROUND
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-40
          h-96
          w-96
          rounded-full
          bg-blue-100/30
          blur-3xl
          dark:bg-blue-500/[0.035]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-20
          h-96
          w-96
          rounded-full
          bg-neutral-200/40
          blur-3xl
          dark:bg-blue-950/20
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10"
        >
          <div className="mb-4 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-[2px] w-10 bg-[var(--accent)]"
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
              Career Architecture
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              gap-6
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <h2
                id="experience-heading"
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
                Experience
                <span className="text-[var(--accent)]">
                  {" "}
                  /{" "}
                </span>
                Engineering Journey
              </h2>

              <p
                className="
                  mt-5
                  max-w-2xl
                  text-base
                  leading-8
                  text-[var(--text-secondary)]
                  transition-colors
                  duration-300
                  md:text-lg
                "
              >
                A closer look at the roles, responsibilities,
                and engineering practices that have shaped my
                QA career.
              </p>
            </div>

            {/* Console Status */}

            <div
              className="
                hidden
                items-center
                gap-3
                rounded-xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                px-4
                py-3
                font-mono
                text-xs
                shadow-sm
                transition-colors
                duration-300
                lg:flex
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-green-500
                "
              />

              <span className="text-[var(--text-muted)]">
                CAREER_STATUS:
              </span>

              <span className="font-semibold text-green-500">
                ACTIVE
              </span>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TOTAL WORKING EXPERIENCE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            mb-8
            rounded-2xl
            border
            border-[var(--border-light)]
            bg-[var(--bg-card)]
            px-6
            py-5
            shadow-sm
            transition-colors
            duration-300
            md:px-7
          "
        >
          <div
            className="
              flex
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p
                className="
                  font-mono
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[var(--text-muted)]
                "
              >
                Total Working Experience
              </p>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-[var(--text-secondary)]
                "
              >
                Automatically calculated from the employment
                periods in the portfolio.
              </p>
            </div>

            <div className="sm:text-right">
              <p
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-[var(--text-primary)]
                  md:text-3xl
                "
              >
                {totalExperience.label}
              </p>

              <p
                className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-[var(--text-muted)]
                "
              >
                Years & Months
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            EXPERIENCE CONSOLE
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            overflow-hidden
            rounded-3xl
            border
            border-[var(--border-light)]
            bg-[var(--bg-card)]
            shadow-sm
            transition-colors
            duration-300
            lg:grid-cols-[330px_1fr]
          "
        >
          {/* ===================================================
              LEFT NAVIGATION
          ==================================================== */}

          <div
            className="
              border-b
              border-[var(--border-light)]
              bg-[var(--bg-card-soft)]
              transition-colors
              duration-300
              lg:border-b-0
              lg:border-r
            "
          >
            {/* Console Header */}

            <div
              className="
                border-b
                border-[var(--border-light)]
                px-6
                py-5
                transition-colors
                duration-300
              "
            >
              <div className="flex items-center justify-between">
                <p
                  className="
                    font-mono
                    text-xs
                    uppercase
                    tracking-wider
                    text-[var(--text-muted)]
                  "
                >
                  Professional History
                </p>

                <span
                  className="
                    font-mono
                    text-xs
                    font-semibold
                    text-[var(--accent)]
                  "
                >
                  {String(experience.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Roles */}

            <div className="p-3">
              {experience.map((job, index) => {
                const selected =
                  index === safeActiveIndex;

                const current = !job?.endDate;

                return (
                  <button
                    key={`${job.company}-${job.role}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={selected}
                    aria-label={`View ${job.role} at ${job.company}`}
                    className={`
                      relative
                      mb-2
                      w-full
                      overflow-hidden
                      rounded-2xl
                      border
                      p-5
                      text-left
                      transition-all
                      duration-300
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[var(--accent)]
                      focus:ring-offset-2
                      focus:ring-offset-[var(--bg-card-soft)]
                      ${
                        selected
                          ? "border-[var(--border-accent)] bg-[var(--bg-card)] shadow-sm"
                          : "border-transparent bg-transparent hover:border-[var(--border-light)] hover:bg-[var(--bg-card)]"
                      }
                    `}
                  >
                    {selected && (
                      <motion.div
                        layoutId="experience-active"
                        aria-hidden="true"
                        className="
                          absolute
                          bottom-0
                          left-0
                          top-0
                          w-1
                          bg-[var(--accent)]
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
                              ? "text-[var(--accent)]"
                              : "text-[var(--text-muted)]"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>

                      {current && (
                        <span
                          className="
                            flex
                            items-center
                            gap-1.5
                            text-[10px]
                            uppercase
                            tracking-wider
                            text-green-500
                          "
                        >
                          <span
                            aria-hidden="true"
                            className="
                              h-1.5
                              w-1.5
                              animate-pulse
                              rounded-full
                              bg-green-500
                            "
                          />

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
                            ? "text-[var(--text-primary)]"
                            : "text-[var(--text-secondary)]"
                        }
                      `}
                    >
                      {job.role}
                    </h3>

                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                      {job.company}
                    </p>

                    <p className="mt-3 text-xs text-[var(--text-muted)]">
                      {formatDate(job.startDate)} —{" "}
                      {formatDate(job.endDate)}
                    </p>

                    <p
                      className="
                        mt-2
                        text-xs
                        font-medium
                        text-[var(--accent)]
                      "
                    >
                      {calculateDuration(
                        job.startDate,
                        job.endDate,
                        currentDate,
                      )}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              RIGHT DETAIL PANEL
          ==================================================== */}

          <div
            className="
              relative
              min-h-[600px]
              bg-[var(--bg-card)]
              p-7
              transition-colors
              duration-300
              md:p-10
              lg:p-12
            "
          >
            {/* Subtle Grid Background */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-50
                dark:opacity-[0.28]
              "
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={safeActiveIndex}
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
                {/* =================================================
                    ROLE HEADER
                ================================================== */}

                <div
                  className="
                    flex
                    flex-col
                    gap-6
                    xl:flex-row
                    xl:items-start
                    xl:justify-between
                  "
                >
                  <div>
                    {isCurrent && (
                      <div
                        className="
                          mb-5
                          inline-flex
                          items-center
                          gap-2
                          rounded-full
                          border
                          border-green-200
                          bg-green-50
                          px-3
                          py-1.5
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-green-700
                          dark:border-green-400/20
                          dark:bg-green-500/[0.08]
                          dark:text-green-300
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="
                            h-1.5
                            w-1.5
                            animate-pulse
                            rounded-full
                            bg-green-500
                          "
                        />

                        Currently Building
                      </div>
                    )}

                    <p
                      className="
                        mb-3
                        font-mono
                        text-xs
                        text-[var(--text-muted)]
                      "
                    >
                      ROLE_0{safeActiveIndex + 1}
                    </p>

                    <h3
                      className="
                        text-3xl
                        font-bold
                        leading-tight
                        text-[var(--text-primary)]
                        transition-colors
                        duration-300
                        md:text-4xl
                      "
                    >
                      {activeJob.role}
                    </h3>

                    <p
                      className="
                        mt-3
                        text-xl
                        font-semibold
                        text-[var(--accent)]
                      "
                    >
                      {activeJob.company}
                    </p>
                  </div>

                  {/* Duration */}

                  <div className="xl:text-right">
                    <p
                      className="
                        mb-2
                        font-mono
                        text-xs
                        uppercase
                        tracking-wider
                        text-[var(--text-muted)]
                      "
                    >
                      Duration
                    </p>

                    <p className="font-semibold text-[var(--text-primary)]">
                      {duration}
                    </p>

                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {formatDate(activeJob.startDate)} —{" "}
                      {formatDate(activeJob.endDate)}
                    </p>
                  </div>
                </div>

                {/* =================================================
                    LOCATION
                ================================================== */}

                {activeJob.location && (
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-sm
                      text-[var(--text-secondary)]
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="text-[var(--accent)]"
                    >
                      ⌖
                    </span>

                    <span>{activeJob.location}</span>
                  </div>
                )}

                {/* Divider */}

                <div className="my-9 h-px bg-[var(--border-light)]" />

                {/* =================================================
                    RESPONSIBILITIES
                ================================================== */}

                {Array.isArray(activeJob.responsibilities) &&
                  activeJob.responsibilities.length > 0 && (
                    <div>
                      <div className="mb-6 flex items-center gap-3">
                        <span className="font-mono text-xs text-[var(--accent)]">
                          01
                        </span>

                        <h4
                          className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[var(--text-primary)]
                          "
                        >
                          Responsibilities
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {activeJob.responsibilities.map(
                          (item, index) => (
                            <motion.div
                              key={`${item}-${index}`}
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
                                border-[var(--border-light)]
                                bg-[var(--bg-card-soft)]
                                p-5
                                transition-all
                                duration-300
                                hover:border-[var(--border-accent)]
                                hover:bg-[var(--bg-card)]
                                hover:shadow-sm
                              "
                            >
                              <div className="flex gap-3">
                                <span
                                  aria-hidden="true"
                                  className="
                                    mt-2
                                    h-1.5
                                    w-1.5
                                    flex-shrink-0
                                    rounded-full
                                    bg-[var(--accent)]
                                    transition-all
                                    duration-300
                                    group-hover:scale-125
                                  "
                                />

                                <p
                                  className="
                                    text-sm
                                    leading-7
                                    text-[var(--text-secondary)]
                                  "
                                >
                                  {item}
                                </p>
                              </div>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                {/* =================================================
                    AUTOMATION
                ================================================== */}

                {Array.isArray(activeJob.automation) &&
                  activeJob.automation.length > 0 && (
                    <div className="mt-10">
                      <div className="mb-6 flex items-center gap-3">
                        <span className="font-mono text-xs text-[var(--accent)]">
                          02
                        </span>

                        <h4
                          className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[var(--text-primary)]
                          "
                        >
                          Automation & Engineering
                        </h4>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {activeJob.automation.map(
                          (item, index) => (
                            <span
                              key={`${item}-${index}`}
                              className="
                                rounded-xl
                                border
                                border-[var(--border-light)]
                                bg-[var(--bg-card-soft)]
                                px-4
                                py-2.5
                                text-sm
                                text-[var(--text-secondary)]
                                transition-all
                                duration-300
                                hover:border-[var(--border-accent)]
                                hover:bg-[var(--bg-card)]
                                hover:text-[var(--accent)]
                              "
                            >
                              {item}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                {/* =================================================
                    IMPACT
                ================================================== */}

                {activeJob.impact &&
                  (Array.isArray(activeJob.impact)
                    ? activeJob.impact.length > 0
                    : true) && (
                    <div className="mt-10">
                      <div className="mb-5 flex items-center gap-3">
                        <span className="font-mono text-xs text-[var(--accent)]">
                          03
                        </span>

                        <h4
                          className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.2em]
                            text-[var(--text-primary)]
                          "
                        >
                          Impact
                        </h4>
                      </div>

                      {Array.isArray(activeJob.impact) ? (
                        <div className="space-y-3">
                          {activeJob.impact.map(
                            (item, index) => (
                              <p
                                key={`${item}-${index}`}
                                className="
                                  text-sm
                                  leading-7
                                  text-[var(--text-secondary)]
                                "
                              >
                                {item}
                              </p>
                            ),
                          )}
                        </div>
                      ) : (
                        <p
                          className="
                            text-sm
                            leading-7
                            text-[var(--text-secondary)]
                          "
                        >
                          {activeJob.impact}
                        </p>
                      )}
                    </div>
                  )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =======================================================
            CAREER FOOTER
        ======================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mt-6
            flex
            flex-col
            gap-4
            px-2
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="font-mono text-xs text-[var(--text-secondary)]">
            QA → AUTOMATION → SDET → QUALITY ENGINEERING
          </p>

          <p className="font-mono text-xs text-[var(--text-muted)]">
            {experience.length} PROFESSIONAL ROLE
            {experience.length !== 1 ? "S" : ""}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;