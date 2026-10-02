import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import portfolioData from "../data/portfolioData";

/* =========================================================
   HELPERS
========================================================= */

const getArray = (value) => {
  return Array.isArray(value) ? value : [];
};

const getText = (value) => {
  return typeof value === "string" && value.trim()
    ? value.trim()
    : null;
};

const getProjectType = (project = {}) => {
  const technologies = getArray(project.technologies)
    .filter((technology) => typeof technology === "string")
    .join(" ");

  const text = `
    ${project.title || ""}
    ${project.description || ""}
    ${project.category || ""}
    ${technologies}
  `.toLowerCase();

  if (
    text.includes("api") ||
    text.includes("postman") ||
    text.includes("rest") ||
    text.includes("newman")
  ) {
    return "API TESTING";
  }

  if (
    text.includes("manual") ||
    text.includes("anpr")
  ) {
    return "MANUAL TESTING";
  }

  if (
    text.includes("selenium") ||
    text.includes("automation") ||
    text.includes("webdriver") ||
    text.includes("testng")
  ) {
    return "UI AUTOMATION";
  }

  return (
    getText(project.category) ||
    "QUALITY ENGINEERING"
  ).toUpperCase();
};

const getProjectIcon = (project) => {
  const type = getProjectType(project);

  if (type.includes("API")) {
    return "</>";
  }

  if (type.includes("MANUAL")) {
    return "✓";
  }

  if (type.includes("UI")) {
    return "◈";
  }

  return "⚙";
};

/* =========================================================
   PROJECT DETAIL MODAL
========================================================= */

function ProjectDetails({
  project,
  onClose,
}) {
  const technologies = getArray(project?.technologies).filter(
    (technology) => typeof technology === "string",
  );

  const testingScope = getArray(
    project?.testingScope || project?.testing,
  );

  const implementation = getArray(
    project?.implementation ||
      project?.implementationSteps,
  );

  const challenges = getArray(project?.challenges);

  const learnings = getArray(
    project?.learnings ||
      project?.keyLearnings,
  );

  const impact = getArray(
    project?.impact ||
      project?.results,
  );

  const role = getText(project?.role);

  const overview = getText(project?.overview);

  const objective = getText(
    project?.objective ||
      project?.projectObjective,
  );

  const architecture = getText(
    project?.architecture,
  );

  const cicd = getText(
    project?.cicd ||
      project?.ciCd,
  );

  const reporting = getText(
    project?.reporting,
  );

  const outcome = getText(
    project?.outcome ||
      project?.projectOutcome,
  );

  const hasJenkins = technologies.some(
    (technology) =>
      technology.toLowerCase().includes("jenkins"),
  );

  const hasCICD = technologies.some(
    (technology) =>
      technology.toLowerCase().includes("ci/cd"),
  );

  const hasAllure = technologies.some(
    (technology) =>
      technology.toLowerCase().includes("allure"),
  );

  /* =======================================================
     ESCAPE KEY
  ======================================================== */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [onClose]);

  /* =======================================================
     BODY SCROLL LOCK
  ======================================================== */

  useEffect(() => {
    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        originalOverflow;
    };
  }, []);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/40
        p-4
        transition-colors
        duration-300
        dark:bg-black/65
        md:p-8
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* =====================================================
          BACKDROP
      ====================================================== */}

      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className="
          absolute
          inset-0
          cursor-default
          bg-black/40
          backdrop-blur-md
          dark:bg-black/65
        "
      />

      {/* =====================================================
          MODAL
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
          y: 25,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.96,
          y: 25,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          z-10
          max-h-[92vh]
          w-full
          max-w-6xl
          overflow-y-auto
          rounded-[2rem]
          border
          border-[var(--border-light)]
          bg-[var(--bg-card)]
          shadow-[0_30px_100px_rgba(0,0,0,0.18)]
          transition-colors
          duration-300
          dark:shadow-[0_30px_100px_rgba(0,0,0,0.65)]
        "
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        {/* Top Accent */}

        <div
          aria-hidden="true"
          className="
            sticky
            top-0
            z-20
            h-[3px]
            bg-gradient-to-r
            from-[var(--accent)]
            via-[var(--accent-light)]
            to-transparent
          "
        />

        {/* Close */}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="
            absolute
            right-5
            top-5
            z-30
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            border
            border-[var(--border-light)]
            bg-[var(--bg-card-soft)]
            text-2xl
            text-[var(--text-secondary)]
            transition-all
            duration-300
            hover:border-[var(--border-accent)]
            hover:text-[var(--accent)]
            focus:outline-none
            focus:ring-2
            focus:ring-[var(--accent)]
          "
        >
          ×
        </button>

        <div className="p-7 md:p-12 lg:p-14">
          {/* =================================================
              HEADER
          ================================================== */}

          <div className="pr-14">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="font-mono text-sm text-[var(--accent)]">
                PROJECT_CASE_STUDY
              </span>

              <span
                aria-hidden="true"
                className="h-px w-10 bg-[var(--border-medium)]"
              />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[var(--text-muted)]
                "
              >
                {getProjectType(project)}
              </span>
            </div>

            <h2
              id="project-dialog-title"
              className="
                text-4xl
                font-bold
                leading-tight
                text-[var(--text-primary)]
                md:text-6xl
              "
            >
              {project.title || "Project"}
            </h2>

            <p
              className="
                mt-6
                max-w-4xl
                text-base
                leading-8
                text-[var(--text-secondary)]
                md:text-lg
              "
            >
              {project.description ||
                "A software quality engineering project focused on testing, automation, and validation."}
            </p>
          </div>

          {/* =================================================
              SNAPSHOT
          ================================================== */}

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div
              className="
                rounded-2xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-5
              "
            >
              <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Type
              </p>

              <p className="mt-2 text-sm font-semibold text-[var(--accent)]">
                {getProjectType(project)}
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-5
              "
            >
              <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Tools
              </p>

              <p className="mt-2 text-base font-semibold text-[var(--text-primary)]">
                {technologies.length}
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-5
              "
            >
              <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Role
              </p>

              <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
                {role || "QA Automation Engineer"}
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-5
              "
            >
              <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                Repository
              </p>

              <p className="mt-2 text-sm font-semibold text-[var(--accent)]">
                {project.github
                  ? "Available"
                  : "Private"}
              </p>
            </div>
          </div>

          {/* =================================================
              OVERVIEW / OBJECTIVE
          ================================================== */}

          <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-2">
            <div
              className="
                rounded-2xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-7
                shadow-sm
              "
            >
              <p className="mb-5 font-mono text-sm text-[var(--accent)]">
                01 / OVERVIEW
              </p>

              <p className="text-base leading-8 text-[var(--text-secondary)]">
                {overview ||
                  project.description ||
                  "Project focused on software quality, testing, and automation."}
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-7
                shadow-sm
              "
            >
              <p className="mb-5 font-mono text-sm text-[var(--accent)]">
                02 / OBJECTIVE
              </p>

              <p className="text-base leading-8 text-[var(--text-secondary)]">
                {objective ||
                  "Improve testing reliability, repeatability, and software quality through a structured QA approach."}
              </p>
            </div>
          </div>

          {/* =================================================
              ROLE
          ================================================== */}

          <div
            className="
              mt-7
              rounded-2xl
              border
              border-[var(--border-light)]
              bg-[var(--bg-card-soft)]
              p-7
              shadow-sm
            "
          >
            <p className="mb-5 font-mono text-sm text-[var(--accent)]">
              03 / MY ROLE
            </p>

            <p className="text-base leading-8 text-[var(--text-secondary)]">
              {role ||
                "Worked across test planning, functional validation, automation, regression coverage, defect identification, and test execution."}
            </p>
          </div>

          {/* =================================================
              TECHNOLOGY + ARCHITECTURE
          ================================================== */}

          <div className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-2">
            <div
              className="
                rounded-2xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-7
                shadow-sm
              "
            >
              <p className="mb-6 font-mono text-sm text-[var(--accent)]">
                04 / TECHNOLOGY
              </p>

              <div className="flex flex-wrap gap-2.5">
                {technologies.length > 0 ? (
                  technologies.map(
                    (technology, index) => (
                      <span
                        key={`${technology}-${index}`}
                        className="
                          rounded-lg
                          border
                          border-[var(--border-light)]
                          bg-[var(--bg-card)]
                          px-3
                          py-2
                          text-sm
                          text-[var(--text-secondary)]
                          transition-all
                          duration-300
                          hover:border-[var(--border-accent)]
                          hover:bg-[var(--bg-card-soft)]
                          hover:text-[var(--accent)]
                        "
                      >
                        {technology}
                      </span>
                    ),
                  )
                ) : (
                  <span className="text-sm text-[var(--text-muted)]">
                    Technology stack not specified.
                  </span>
                )}
              </div>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-7
                shadow-sm
              "
            >
              <p className="mb-6 font-mono text-sm text-[var(--accent)]">
                05 / ARCHITECTURE
              </p>

              <p
                className="
                  rounded-xl
                  border
                  border-[var(--border-light)]
                  bg-[var(--bg-card)]
                  p-6
                  font-mono
                  text-sm
                  leading-8
                  text-[var(--text-secondary)]
                "
              >
                {architecture ||
                  (technologies.some(
                    (technology) =>
                      technology
                        .toLowerCase()
                        .includes("pom"),
                  )
                    ? "Page Object Model based automation structure focused on reusable components and maintainable test code."
                    : getProjectType(project) ===
                        "API TESTING"
                      ? "API validation workflow covering request execution, response validation, and organized test execution."
                      : "Structured QA workflow using reusable testing components and maintainable execution practices.")}
              </p>
            </div>
          </div>

          {/* =================================================
              TESTING APPROACH
          ================================================== */}

          <div
            className="
              mt-7
              rounded-2xl
              border
              border-[var(--border-light)]
              bg-[var(--bg-card-soft)]
              p-7
              shadow-sm
            "
          >
            <p className="mb-6 font-mono text-sm text-[var(--accent)]">
              06 / TESTING APPROACH
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(testingScope.length > 0
                ? testingScope
                : [
                    "Functional Testing",
                    "Regression Testing",
                    getProjectType(project),
                  ]
              ).map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-[var(--border-light)]
                    bg-[var(--bg-card)]
                    px-5
                    py-4
                    text-sm
                    text-[var(--text-secondary)]
                  "
                >
                  <span className="text-base text-[var(--accent)]">
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              IMPLEMENTATION
          ================================================== */}

          <div className="mt-7">
            <p className="mb-6 font-mono text-sm text-[var(--accent)]">
              07 / IMPLEMENTATION
            </p>

            {implementation.length > 0 ? (
              <div className="space-y-3">
                {implementation.map(
                  (step, index) => (
                    <div
                      key={`${step}-${index}`}
                      className="
                        flex
                        gap-5
                        rounded-xl
                        border
                        border-[var(--border-light)]
                        bg-[var(--bg-card-soft)]
                        p-6
                      "
                    >
                      <span className="font-mono text-sm text-[var(--accent)]">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      <p className="text-base leading-8 text-[var(--text-secondary)]">
                        {step}
                      </p>
                    </div>
                  ),
                )}
              </div>
            ) : (
              <div
                className="
                  rounded-2xl
                  border
                  border-[var(--border-light)]
                  bg-[var(--bg-card-soft)]
                  p-7
                "
              >
                <div className="space-y-6">
                  {[
                    "Understand application workflows and define the testing scope.",
                    "Design test scenarios around functional behavior and regression requirements.",
                    "Apply reusable automation and QA components where appropriate.",
                    "Execute tests, analyze failures, and validate defects.",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex gap-5"
                    >
                      <span className="font-mono text-sm text-[var(--accent)]">
                        {String(index + 1).padStart(
                          2,
                          "0",
                        )}
                      </span>

                      <p className="text-base leading-8 text-[var(--text-secondary)]">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              CI/CD + REPORTING
          ================================================== */}

          <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-2">
            <div
              className="
                rounded-2xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-7
                shadow-sm
              "
            >
              <p className="mb-4 font-mono text-sm text-[var(--accent)]">
                08 / CI/CD
              </p>

              <p className="text-base leading-8 text-[var(--text-secondary)]">
                {cicd ||
                  (hasJenkins || hasCICD
                    ? "CI/CD integration is included in the project technology stack for automated test execution workflows."
                    : "CI/CD details are not separately specified for this project.")}
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-7
                shadow-sm
              "
            >
              <p className="mb-4 font-mono text-sm text-[var(--accent)]">
                09 / REPORTING
              </p>

              <p className="text-base leading-8 text-[var(--text-secondary)]">
                {reporting ||
                  (hasAllure
                    ? "Allure Reports is included in the project technology stack for test reporting."
                    : "Reporting details are not separately specified for this project.")}
              </p>
            </div>
          </div>

          {/* =================================================
              CHALLENGES
          ================================================== */}

          {challenges.length > 0 && (
            <div className="mt-7">
              <p className="mb-6 font-mono text-sm text-[var(--accent)]">
                10 / CHALLENGES & SOLUTIONS
              </p>

              <div className="space-y-4">
                {challenges.map(
                  (challenge, index) => (
                    <div
                      key={index}
                      className="
                        rounded-2xl
                        border
                        border-[var(--border-light)]
                        bg-[var(--bg-card-soft)]
                        p-7
                        shadow-sm
                      "
                    >
                      {typeof challenge ===
                      "object" &&
                      challenge !== null ? (
                        <>
                          {challenge.challenge && (
                            <div>
                              <p className="text-xs uppercase tracking-wider text-red-500">
                                Challenge
                              </p>

                              <p className="mt-3 text-base leading-8 text-[var(--text-secondary)]">
                                {challenge.challenge}
                              </p>
                            </div>
                          )}

                          {challenge.solution && (
                            <div className="mt-6">
                              <p className="text-xs uppercase tracking-wider text-[var(--accent)]">
                                Solution
                              </p>

                              <p className="mt-3 text-base leading-8 text-[var(--text-secondary)]">
                                {challenge.solution}
                              </p>
                            </div>
                          )}
                        </>
                      ) : (
                        <p className="text-base leading-8 text-[var(--text-secondary)]">
                          {challenge}
                        </p>
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          )}

          {/* =================================================
              IMPACT
          ================================================== */}

          {impact.length > 0 && (
            <div className="mt-7">
              <p className="mb-6 font-mono text-sm text-[var(--accent)]">
                11 / IMPACT & RESULTS
              </p>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {impact.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      gap-3
                      rounded-xl
                      border
                      border-[var(--border-light)]
                      bg-[var(--bg-card-soft)]
                      p-5
                      text-base
                      text-[var(--text-secondary)]
                    "
                  >
                    <span className="text-[var(--accent)]">
                      →
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =================================================
              LEARNINGS
          ================================================== */}

          {learnings.length > 0 && (
            <div className="mt-7">
              <p className="mb-6 font-mono text-sm text-[var(--accent)]">
                12 / KEY LEARNINGS
              </p>

              <div className="space-y-4">
                {learnings.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      gap-3
                      text-base
                      leading-8
                      text-[var(--text-secondary)]
                    "
                  >
                    <span className="text-[var(--accent)]">
                      +
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =================================================
              OUTCOME
          ================================================== */}

          <div
            className="
              mt-7
              rounded-2xl
              border
              border-[var(--border-accent)]
              bg-[var(--accent)]/[0.06]
              p-7
            "
          >
            <p className="mb-4 font-mono text-sm text-[var(--accent)]">
              13 / PROJECT OUTCOME
            </p>

            <p className="text-base leading-8 text-[var(--text-secondary)]">
              {outcome ||
                "Demonstrates practical application of QA engineering, testing, automation, and maintainable quality practices."}
            </p>
          </div>

          {/* =================================================
              LINKS
          ================================================== */}

          <div
            className="
              mt-9
              flex
              flex-wrap
              gap-4
              border-t
              border-[var(--border-light)]
              pt-8
            "
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open GitHub repository for ${project.title || "project"}`}
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-[var(--accent)]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[var(--accent-dark)]
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[var(--accent)]
                "
              >
                GitHub Repository
                <span aria-hidden="true">
                  ↗
                </span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="
                rounded-xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                px-7
                py-4
                text-sm
                text-[var(--text-secondary)]
                transition-all
                duration-300
                hover:border-[var(--border-accent)]
                hover:text-[var(--text-primary)]
                focus:outline-none
                focus:ring-2
                focus:ring-[var(--accent)]
              "
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   MAIN PROJECTS COMPONENT
========================================================= */

function Projects() {
  const [activeProject, setActiveProject] =
    useState(null);

  const projects = Array.isArray(
    portfolioData?.projects,
  )
    ? portfolioData.projects.filter(
        (project) =>
          project &&
          typeof project === "object",
      )
    : [];

  /* =======================================================
     EMPTY STATE
  ======================================================== */

  if (projects.length === 0) {
    return (
      <section
        id="projects"
        className="
          bg-[var(--bg-primary)]
          px-6
          py-24
          text-[var(--text-primary)]
          transition-colors
          duration-300
        "
      >
        <div className="mx-auto max-w-[1600px]">
          <p className="text-[var(--text-secondary)]">
            No project data available.
          </p>
        </div>
      </section>
    );
  }

  /* =======================================================
     MAIN
  ======================================================== */

  return (
    <>
      <section
        id="projects"
        className="
          relative
          overflow-hidden
          bg-[var(--bg-primary)]
          px-6
          py-28
          text-[var(--text-primary)]
          transition-colors
          duration-300
        "
      >
        {/* ===================================================
            BACKGROUND
        ==================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[-180px]
            top-40
            h-96
            w-96
            rounded-full
            bg-blue-50/50
            blur-3xl
            dark:bg-blue-950/20
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-20
            right-[-180px]
            h-96
            w-96
            rounded-full
            bg-neutral-100/70
            blur-3xl
            dark:bg-blue-950/15
          "
        />

        <div className="relative z-10 mx-auto max-w-[1600px]">
          {/* =================================================
              HEADER
          ================================================== */}

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
            }}
            className="mb-16"
          >
            <div className="mb-6 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-[2px] w-12 bg-[var(--accent)]"
              />

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[var(--accent)]
                "
              >
                Engineering Portfolio
              </p>
            </div>

            <div
              className="
                flex
                flex-col
                justify-between
                gap-8
                md:flex-row
                md:items-end
              "
            >
              <div>
                <h2
                  className="
                    text-5xl
                    font-bold
                    leading-tight
                    text-[var(--text-primary)]
                    md:text-7xl
                  "
                >
                  Projects
                  <span className="text-[var(--accent)]">
                    {" "}
                    That I Build
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    max-w-4xl
                    text-lg
                    leading-8
                    text-[var(--text-secondary)]
                    md:text-xl
                  "
                >
                  A collection of QA automation, API
                  testing, and software quality
                  engineering projects built around
                  practical testing workflows.
                </p>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  border
                  border-[var(--border-light)]
                  bg-[var(--bg-card-soft)]
                  px-7
                  py-5
                "
              >
                <span
                  className="
                    font-mono
                    text-3xl
                    font-bold
                    text-[var(--accent)]
                  "
                >
                  {projects.length}
                </span>

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-[var(--text-muted)]
                  "
                >
                  Engineering
                  <br />
                  Projects
                </span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              PROJECT GRID
          ================================================== */}

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map(
              (project, index) => {
                const technologies =
                  getArray(
                    project.technologies,
                  ).filter(
                    (technology) =>
                      typeof technology ===
                      "string",
                  );

                const isFeatured =
                  project.featured === true;

                const projectTitle =
                  project.title ||
                  `Project ${index + 1}`;

                return (
                  <motion.article
                    key={`${projectTitle}-${index}`}
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
                      duration: 0.45,
                      delay:
                        (index % 4) * 0.08,
                    }}
                    className={`
                      group
                      relative
                      flex
                      min-h-[500px]
                      flex-col
                      overflow-hidden
                      rounded-[1.75rem]
                      border
                      bg-[var(--bg-card)]
                      shadow-sm
                      transition-all
                      duration-500
                      hover:-translate-y-2
                      hover:shadow-md
                      ${
                        isFeatured
                          ? "border-[var(--border-accent)] hover:border-[var(--accent)]"
                          : "border-[var(--border-light)] hover:border-[var(--border-accent)]"
                      }
                    `}
                  >
                    {/* Top Accent */}

                    <div
                      aria-hidden="true"
                      className={`
                        absolute
                        left-0
                        right-0
                        top-0
                        h-[3px]
                        ${
                          isFeatured
                            ? "bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-transparent"
                            : "bg-gradient-to-r from-[var(--border-medium)] via-[var(--accent-light)] to-transparent"
                        }
                      `}
                    />

                    {/* Large Number */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        right-[-15px]
                        top-[-18px]
                        select-none
                        text-[8rem]
                        font-black
                        leading-none
                        text-[var(--border-light)]
                        transition-all
                        duration-500
                        group-hover:text-[var(--border-accent)]
                      "
                    >
                      {String(index + 1).padStart(
                        2,
                        "0",
                      )}
                    </div>

                    {/* Card Content */}

                    <div className="relative z-10 flex flex-1 flex-col p-8">
                      {/* Card Top */}

                      <div className="flex items-start justify-between">
                        <div
                          aria-hidden="true"
                          className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-[var(--border-light)]
                            bg-[var(--bg-card-soft)]
                            font-mono
                            text-base
                            text-[var(--accent)]
                            transition-all
                            duration-300
                            group-hover:border-[var(--border-accent)]
                            group-hover:bg-[var(--accent)]/[0.06]
                          "
                        >
                          {getProjectIcon(project)}
                        </div>

                        {isFeatured && (
                          <span
                            className="
                              rounded-full
                              border
                              border-[var(--border-accent)]
                              bg-[var(--accent)]/[0.06]
                              px-3
                              py-1.5
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-wider
                              text-[var(--accent)]
                            "
                          >
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Type + Title */}

                      <div className="mt-8">
                        <p
                          className="
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-[var(--text-muted)]
                          "
                        >
                          {getProjectType(project)}
                        </p>

                        <h3
                          className="
                            mt-3
                            min-h-[70px]
                            text-2xl
                            font-bold
                            leading-tight
                            text-[var(--text-primary)]
                            transition-colors
                            duration-300
                            group-hover:text-[var(--accent)]
                          "
                        >
                          {projectTitle}
                        </h3>
                      </div>

                      {/* Description */}

                      <p
                        className="
                          mt-5
                          line-clamp-4
                          text-base
                          leading-7
                          text-[var(--text-secondary)]
                        "
                      >
                        {project.description ||
                          "A practical quality engineering project focused on testing and automation."}
                      </p>

                      <div className="my-6 h-px bg-[var(--border-light)]" />

                      {/* Technology */}

                      <div className="min-h-[82px]">
                        <p
                          className="
                            mb-3
                            text-[10px]
                            uppercase
                            tracking-[0.18em]
                            text-[var(--text-muted)]
                          "
                        >
                          Technology Stack
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {technologies
                            .slice(0, 4)
                            .map(
                              (
                                technology,
                                techIndex,
                              ) => (
                                <span
                                  key={`${technology}-${techIndex}`}
                                  className="
                                    rounded-lg
                                    border
                                    border-[var(--border-light)]
                                    bg-[var(--bg-card-soft)]
                                    px-2.5
                                    py-1.5
                                    text-xs
                                    text-[var(--text-secondary)]
                                    transition-all
                                    duration-300
                                    group-hover:border-[var(--border-accent)]
                                    group-hover:text-[var(--text-primary)]
                                  "
                                >
                                  {technology}
                                </span>
                              ),
                            )}

                          {technologies.length >
                            4 && (
                            <span
                              className="
                                rounded-lg
                                border
                                border-[var(--border-light)]
                                bg-[var(--bg-card-soft)]
                                px-2.5
                                py-1.5
                                text-xs
                                text-[var(--text-muted)]
                              "
                            >
                              +
                              {technologies.length -
                                4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Bottom */}

                      <div className="mt-auto pt-6">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveProject(
                              project,
                            )
                          }
                          aria-label={`View details for ${projectTitle}`}
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            rounded-xl
                            border
                            border-[var(--border-light)]
                            bg-[var(--bg-card-soft)]
                            px-5
                            py-4
                            text-sm
                            font-semibold
                            text-[var(--text-secondary)]
                            transition-all
                            duration-300
                            hover:border-[var(--border-accent)]
                            hover:bg-[var(--accent)]/[0.06]
                            hover:text-[var(--accent)]
                            focus:outline-none
                            focus:ring-2
                            focus:ring-[var(--accent)]
                          "
                        >
                          <span>
                            View Project
                          </span>

                          <span
                            aria-hidden="true"
                            className="
                              text-lg
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                            "
                          >
                            →
                          </span>
                        </button>

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View repository for ${projectTitle}`}
                            className="
                              mt-3
                              flex
                              items-center
                              justify-center
                              text-[10px]
                              uppercase
                              tracking-wider
                              text-[var(--text-muted)]
                              transition-colors
                              hover:text-[var(--accent)]
                              focus:outline-none
                              focus:text-[var(--accent)]
                            "
                          >
                            View Repository ↗
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Glow */}

                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        bottom-[-80px]
                        left-1/2
                        h-40
                        w-40
                        -translate-x-1/2
                        rounded-full
                        bg-blue-100/40
                        opacity-0
                        blur-3xl
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                        dark:bg-blue-500/[0.08]
                      "
                    />
                  </motion.article>
                );
              },
            )}
          </div>

          {/* =================================================
              BOTTOM ENGINEERING STRIP
          ================================================== */}

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
            }}
            transition={{
              duration: 0.5,
            }}
            className="
              mt-10
              rounded-2xl
              border
              border-[var(--border-light)]
              bg-[var(--bg-card-soft)]
              p-6
              transition-colors
              duration-300
              md:p-7
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[var(--border-accent)]
                    bg-[var(--accent)]/[0.06]
                    text-[var(--accent)]
                  "
                >
                  ✓
                </div>

                <div>
                  <p className="text-base font-semibold text-[var(--text-primary)]">
                    Built with a Quality Engineering mindset
                  </p>

                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Test • Automate • Validate • Improve
                  </p>
                </div>
              </div>

              <p
                className="
                  font-mono
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-[var(--text-muted)]
                "
              >
                QA_ENGINEERING / AUTOMATION / API / CI_CD
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROJECT DETAIL MODAL
      ====================================================== */}

      <AnimatePresence>
        {activeProject && (
          <ProjectDetails
            project={activeProject}
            onClose={() =>
              setActiveProject(null)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;
