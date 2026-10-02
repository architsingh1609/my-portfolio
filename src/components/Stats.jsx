import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

/* =========================================================
   EXPERIENCE CALCULATOR
========================================================= */

function calculateTotalExperience(experience) {
  if (!Array.isArray(experience) || experience.length === 0) {
    return "0 Months";
  }

  const validExperience = experience
    .filter((job) => job?.startDate)
    .map((job) => {
      const start = new Date(`${job.startDate}T00:00:00`);

      const end = job.endDate
        ? new Date(`${job.endDate}T00:00:00`)
        : new Date();

      return {
        start,
        end,
      };
    })
    .filter(
      ({ start, end }) =>
        !Number.isNaN(start.getTime()) &&
        !Number.isNaN(end.getTime()) &&
        end >= start,
    );

  if (validExperience.length === 0) {
    return "0 Months";
  }

  const earliestStart = new Date(
    Math.min(...validExperience.map((job) => job.start.getTime())),
  );

  const latestEnd = new Date(
    Math.max(...validExperience.map((job) => job.end.getTime())),
  );

  let totalMonths =
    (latestEnd.getFullYear() - earliestStart.getFullYear()) * 12 +
    (latestEnd.getMonth() - earliestStart.getMonth());

  /*
   * If the latest end day has not reached the starting
   * day of the month, the final month is not complete.
   */
  if (latestEnd.getDate() < earliestStart.getDate()) {
    totalMonths -= 1;
  }

  totalMonths = Math.max(totalMonths, 0);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} Month${months !== 1 ? "s" : ""}`;
  }

  if (months === 0) {
    return `${years}+ Year${years !== 1 ? "s" : ""}`;
  }

  return `${years} Year${years !== 1 ? "s" : ""} ${months} Month${
    months !== 1 ? "s" : ""
  }`;
}

/* =========================================================
   ENGINEERING SNAPSHOT DATA
========================================================= */

function getSnapshotItems(totalExperience) {
  return [
    {
      label: "Professional Experience",
      value: totalExperience,
      description: "QA & Automation Engineering",
    },
    {
      label: "QA Projects",
      value: "6+",
      description: "Automation, API & Manual Testing",
    },
    {
      label: "UI Automation",
      value: "Selenium + Java + TestNG",
      description: "Web application automation",
    },
    {
      label: "API Automation",
      value: "REST Assured + Postman",
      description: "API validation & automation",
    },
    {
      label: "CI/CD",
      value: "Jenkins + GitHub",
      description: "Automated execution workflows",
    },
    {
      label: "Database",
      value: "SQL",
      description: "Database testing & validation",
    },
    {
      label: "Testing",
      value: "Functional • Regression • Integration • API",
      description: "End-to-end quality validation",
    },
    {
      label: "Target",
      value: "SDET / Quality Engineering",
      description: "Automation & engineering-focused QA",
    },
  ];
}

/* =========================================================
   ENGINEERING SNAPSHOT
========================================================= */

function Stats() {
  const totalExperience = calculateTotalExperience(
    portfolioData.experience,
  );

  const snapshotItems = getSnapshotItems(totalExperience);

  return (
    <section
      id="engineering-snapshot"
      aria-labelledby="engineering-snapshot-heading"
      className="
        relative
        overflow-hidden
        bg-[var(--bg-primary)]
        px-4
        py-20
        text-[var(--text-primary)]
        transition-colors
        duration-300
        sm:px-6
        sm:py-24
      "
    >
      {/* =======================================================
          BACKGROUND DECORATION
      ======================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-24
          top-20
          h-72
          w-72
          rounded-full
          bg-blue-100/20
          blur-3xl
          dark:bg-blue-500/[0.025]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-20
          h-80
          w-80
          rounded-full
          bg-slate-100/60
          blur-3xl
          dark:bg-blue-950/20
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 text-center sm:mb-14"
        >
          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[var(--accent)]
              sm:text-sm
            "
          >
            Engineering Snapshot
          </p>

          <h2
            id="engineering-snapshot-heading"
            className="
              text-3xl
              font-bold
              text-[var(--text-primary)]
              transition-colors
              duration-300
              sm:text-4xl
              md:text-5xl
            "
          >
            QA Automation at a Glance
          </h2>

          <div
            aria-hidden="true"
            className="
              mx-auto
              mt-4
              h-1
              w-24
              rounded-full
              bg-[var(--accent)]
              sm:w-32
            "
          />

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-[var(--text-secondary)]
              transition-colors
              duration-300
              sm:text-base
              sm:leading-8
              md:text-lg
            "
          >
            A quick overview of my experience, automation stack, testing
            capabilities, and Quality Engineering focus.
          </p>
        </motion.div>

        {/* =====================================================
            SNAPSHOT CARDS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-4
          "
        >
          {snapshotItems.map((item, index) => (
            <motion.article
              key={`${item.label}-${index}`}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                flex
                min-h-[190px]
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card)]
                p-6
                shadow-[var(--shadow-soft)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--border-accent)]
                hover:bg-[var(--bg-card-soft)]
                hover:shadow-[var(--shadow-medium)]
              "
            >
              {/* Card Accent */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-[var(--accent)]
                  opacity-[0.04]
                  blur-2xl
                  transition-all
                  duration-300
                  group-hover:opacity-[0.08]
                "
              />

              {/* Card Content */}

              <div className="relative z-10">
                <p
                  className="
                    mb-3
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[var(--accent)]
                    sm:text-sm
                  "
                >
                  {item.label}
                </p>

                <h3
                  className="
                    break-words
                    text-xl
                    font-bold
                    leading-snug
                    text-[var(--text-primary)]
                    transition-colors
                    duration-300
                    group-hover:text-[var(--accent)]
                    md:text-2xl
                  "
                >
                  {item.value}
                </h3>
              </div>

              <p
                className="
                  relative
                  z-10
                  mt-auto
                  pt-5
                  text-sm
                  leading-6
                  text-[var(--text-secondary)]
                  transition-colors
                  duration-300
                "
              >
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;