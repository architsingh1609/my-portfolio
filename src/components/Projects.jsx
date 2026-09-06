import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../data/portfolioData";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = Array.isArray(portfolioData.projects)
    ? portfolioData.projects
    : [];

  // =========================================
  // HELPERS
  // =========================================

  const getArray = (value) => {
    return Array.isArray(value) ? value : [];
  };

  const getText = (value) => {
    return typeof value === "string" && value.trim() ? value : null;
  };

  const getProjectType = (project) => {
    const technologies = getArray(project.technologies).join(" ");

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
      project.category ||
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

  // =========================================
  // PROJECT DETAIL MODAL
  // =========================================

  const ProjectDetails = ({ project }) => {
    if (!project) return null;

    const technologies = getArray(project.technologies);

    const testingScope = getArray(
      project.testingScope ||
        project.testing
    );

    const implementation = getArray(
      project.implementation ||
        project.implementationSteps
    );

    const challenges = getArray(
      project.challenges
    );

    const learnings = getArray(
      project.learnings ||
        project.keyLearnings
    );

    const impact = getArray(
      project.impact ||
        project.results
    );

    const role = getText(project.role);

    const overview = getText(
      project.overview
    );

    const objective = getText(
      project.objective ||
        project.projectObjective
    );

    const architecture = getText(
      project.architecture
    );

    const cicd = getText(
      project.cicd ||
        project.ciCd
    );

    const reporting = getText(
      project.reporting
    );

    const outcome = getText(
      project.outcome ||
        project.projectOutcome
    );

    const hasJenkins = technologies.some(
      (technology) =>
        technology
          .toLowerCase()
          .includes("jenkins")
    );

    const hasCICD = technologies.some(
      (technology) =>
        technology
          .toLowerCase()
          .includes("ci/cd")
    );

    const hasAllure = technologies.some(
      (technology) =>
        technology
          .toLowerCase()
          .includes("allure")
    );

    return (
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
        />

        {/* MODAL */}
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
          transition={{ duration: 0.3 }}
          className="relative z-10 max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-slate-800 bg-slate-950 shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
        >
          {/* TOP LINE */}
          <div className="sticky top-0 z-20 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent" />

          {/* CLOSE */}
          <button
            type="button"
            onClick={() =>
              setActiveProject(null)
            }
            aria-label="Close project details"
            className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-2xl text-gray-400 transition-all hover:border-cyan-400/40 hover:text-cyan-400"
          >
            ×
          </button>

          <div className="p-7 md:p-12 lg:p-14">
            {/* HEADER */}
            <div className="pr-14">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="font-mono text-sm text-cyan-400">
                  PROJECT_CASE_STUDY
                </span>

                <span className="h-px w-10 bg-slate-700" />

                <span className="text-xs uppercase tracking-[0.2em] text-gray-600">
                  {getProjectType(project)}
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                {project.title}
              </h2>

              <p className="mt-6 max-w-4xl text-base leading-8 text-gray-400 md:text-lg">
                {project.description}
              </p>
            </div>

            {/* SNAPSHOT */}
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-[10px] uppercase tracking-wider text-gray-600">
                  Type
                </p>

                <p className="mt-2 text-sm font-semibold text-cyan-400">
                  {getProjectType(project)}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-[10px] uppercase tracking-wider text-gray-600">
                  Tools
                </p>

                <p className="mt-2 text-base font-semibold text-white">
                  {technologies.length}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-[10px] uppercase tracking-wider text-gray-600">
                  Role
                </p>

                <p className="mt-2 text-sm font-semibold text-white">
                  {role ||
                    "QA Automation Engineer"}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-[10px] uppercase tracking-wider text-gray-600">
                  Repository
                </p>

                <p className="mt-2 text-sm font-semibold text-cyan-400">
                  {project.github
                    ? "Available"
                    : "Private"}
                </p>
              </div>
            </div>

            {/* OVERVIEW / OBJECTIVE */}
            <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                <p className="mb-5 font-mono text-sm text-cyan-400">
                  01 / OVERVIEW
                </p>

                <p className="text-base leading-8 text-gray-400">
                  {overview ||
                    project.description ||
                    "Project focused on software quality, testing, and automation."}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                <p className="mb-5 font-mono text-sm text-cyan-400">
                  02 / OBJECTIVE
                </p>

                <p className="text-base leading-8 text-gray-400">
                  {objective ||
                    "Improve testing reliability, repeatability, and software quality through a structured QA approach."}
                </p>
              </div>
            </div>

            {/* ROLE */}
            <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
              <p className="mb-5 font-mono text-sm text-cyan-400">
                03 / MY ROLE
              </p>

              <p className="text-base leading-8 text-gray-400">
                {role ||
                  "Worked across test planning, functional validation, automation, regression coverage, defect identification, and test execution."}
              </p>
            </div>

            {/* TECH + ARCHITECTURE */}
            <div className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                <p className="mb-6 font-mono text-sm text-cyan-400">
                  04 / TECHNOLOGY
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {technologies.map(
                    (technology, index) => (
                      <span
                        key={`${technology}-${index}`}
                        className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-gray-300 transition-all hover:border-cyan-400/40 hover:text-cyan-400"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                <p className="mb-6 font-mono text-sm text-cyan-400">
                  05 / ARCHITECTURE
                </p>

                <p className="rounded-xl border border-slate-800 bg-slate-950 p-6 font-mono text-sm leading-8 text-gray-400">
                  {architecture ||
                    (technologies.some(
                      (technology) =>
                        technology
                          .toLowerCase()
                          .includes("pom")
                    )
                      ? "Page Object Model based automation structure focused on reusable components and maintainable test code."
                      : getProjectType(project) ===
                        "API TESTING"
                      ? "API validation workflow covering request execution, response validation, and organized test execution."
                      : "Structured QA workflow using reusable testing components and maintainable execution practices.")}
                </p>
              </div>
            </div>

            {/* TESTING APPROACH */}
            <div className="mt-7 rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
              <p className="mb-6 font-mono text-sm text-cyan-400">
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
                ).map(
                  (item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-5 py-4 text-sm text-gray-400"
                    >
                      <span className="text-base text-cyan-400">
                        ✓
                      </span>

                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* IMPLEMENTATION */}
            <div className="mt-7">
              <p className="mb-6 font-mono text-sm text-cyan-400">
                07 / IMPLEMENTATION
              </p>

              {implementation.length > 0 ? (
                <div className="space-y-3">
                  {implementation.map(
                    (step, index) => (
                      <div
                        key={index}
                        className="flex gap-5 rounded-xl border border-slate-800 bg-slate-900/40 p-6"
                      >
                        <span className="font-mono text-sm text-cyan-400">
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <p className="text-base leading-8 text-gray-400">
                          {step}
                        </p>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                  <div className="space-y-6">
                    <div className="flex gap-5">
                      <span className="font-mono text-sm text-cyan-400">
                        01
                      </span>

                      <p className="text-base leading-8 text-gray-400">
                        Understand application workflows
                        and define the testing scope.
                      </p>
                    </div>

                    <div className="flex gap-5">
                      <span className="font-mono text-sm text-cyan-400">
                        02
                      </span>

                      <p className="text-base leading-8 text-gray-400">
                        Design test scenarios around
                        functional behavior and regression
                        requirements.
                      </p>
                    </div>

                    <div className="flex gap-5">
                      <span className="font-mono text-sm text-cyan-400">
                        03
                      </span>

                      <p className="text-base leading-8 text-gray-400">
                        Apply reusable automation and QA
                        components where appropriate.
                      </p>
                    </div>

                    <div className="flex gap-5">
                      <span className="font-mono text-sm text-cyan-400">
                        04
                      </span>

                      <p className="text-base leading-8 text-gray-400">
                        Execute tests, analyze failures,
                        and validate defects.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CI/CD + REPORTING */}
            <div className="mt-7 grid grid-cols-1 gap-7 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                <p className="mb-4 font-mono text-sm text-cyan-400">
                  08 / CI/CD
                </p>

                <p className="text-base leading-8 text-gray-400">
                  {cicd ||
                    (hasJenkins || hasCICD
                      ? "CI/CD integration is included in the project technology stack for automated test execution workflows."
                      : "CI/CD details are not separately specified for this project.")}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7">
                <p className="mb-4 font-mono text-sm text-cyan-400">
                  09 / REPORTING
                </p>

                <p className="text-base leading-8 text-gray-400">
                  {reporting ||
                    (hasAllure
                      ? "Allure Reports is included in the project technology stack for test reporting."
                      : "Reporting details are not separately specified for this project.")}
                </p>
              </div>
            </div>

            {/* CHALLENGES */}
            {challenges.length > 0 && (
              <div className="mt-7">
                <p className="mb-6 font-mono text-sm text-cyan-400">
                  10 / CHALLENGES & SOLUTIONS
                </p>

                <div className="space-y-4">
                  {challenges.map(
                    (challenge, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7"
                      >
                        {typeof challenge ===
                        "object" ? (
                          <>
                            {challenge.challenge && (
                              <div>
                                <p className="text-xs uppercase tracking-wider text-red-400">
                                  Challenge
                                </p>

                                <p className="mt-3 text-base leading-8 text-gray-400">
                                  {challenge.challenge}
                                </p>
                              </div>
                            )}

                            {challenge.solution && (
                              <div className="mt-6">
                                <p className="text-xs uppercase tracking-wider text-cyan-400">
                                  Solution
                                </p>

                                <p className="mt-3 text-base leading-8 text-gray-400">
                                  {challenge.solution}
                                </p>
                              </div>
                            )}
                          </>
                        ) : (
                          <p className="text-base leading-8 text-gray-400">
                            {challenge}
                          </p>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* IMPACT */}
            {impact.length > 0 && (
              <div className="mt-7">
                <p className="mb-6 font-mono text-sm text-cyan-400">
                  11 / IMPACT & RESULTS
                </p>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {impact.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-base text-gray-400"
                      >
                        <span className="text-cyan-400">
                          →
                        </span>

                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* LEARNINGS */}
            {learnings.length > 0 && (
              <div className="mt-7">
                <p className="mb-6 font-mono text-sm text-cyan-400">
                  12 / KEY LEARNINGS
                </p>

                <div className="space-y-4">
                  {learnings.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex gap-3 text-base leading-8 text-gray-400"
                      >
                        <span className="text-cyan-400">
                          +
                        </span>

                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* OUTCOME */}
            <div className="mt-7 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7">
              <p className="mb-4 font-mono text-sm text-cyan-400">
                13 / PROJECT OUTCOME
              </p>

              <p className="text-base leading-8 text-gray-300">
                {outcome ||
                  "Demonstrates practical application of QA engineering, testing, automation, and maintainable quality practices."}
              </p>
            </div>

            {/* LINKS */}
            <div className="mt-9 flex flex-wrap gap-4 border-t border-slate-800 pt-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-300"
                >
                  GitHub Repository
                  <span>↗</span>
                </a>
              )}

              <button
                type="button"
                onClick={() =>
                  setActiveProject(null)
                }
                className="rounded-xl border border-slate-700 px-7 py-4 text-sm text-gray-400 transition-all hover:border-slate-500 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // =========================================
  // EMPTY STATE
  // =========================================

  if (projects.length === 0) {
    return (
      <section
        id="projects"
        className="px-6 py-24"
      >
        <div className="mx-auto max-w-[1600px]">
          <p className="text-gray-400">
            No project data available.
          </p>
        </div>
      </section>
    );
  }

  // =========================================
  // MAIN
  // =========================================

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden px-6 py-28"
      >
        {/* BACKGROUND */}
        <div className="pointer-events-none absolute left-[-180px] top-40 h-96 w-96 rounded-full bg-cyan-400/5 blur-3xl" />

        <div className="pointer-events-none absolute bottom-20 right-[-180px] h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1600px]">
          {/* HEADER */}
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
              <span className="h-[2px] w-12 bg-cyan-400" />

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Engineering Portfolio
              </p>
            </div>

            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <h2 className="text-5xl font-bold leading-tight text-white md:text-7xl">
                  Projects
                  <span className="text-cyan-400">
                    {" "}That I Build
                  </span>
                </h2>

                <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-400 md:text-xl">
                  A collection of QA automation, API testing,
                  and software quality engineering projects
                  built around practical testing workflows.
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950 px-7 py-5">
                <span className="font-mono text-3xl font-bold text-cyan-400">
                  {projects.length}
                </span>

                <span className="text-xs uppercase tracking-[0.15em] text-gray-600">
                  Engineering
                  <br />
                  Projects
                </span>
              </div>
            </div>
          </motion.div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map(
              (project, index) => {
                const technologies = getArray(
                  project.technologies
                );

                const isFeatured =
                  project.featured === true;

                return (
                  <motion.article
                    key={`${project.title}-${index}`}
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
                    className={`group relative flex min-h-[500px] flex-col overflow-hidden rounded-[1.75rem] border bg-slate-950 transition-all duration-500 hover:-translate-y-2 ${
                      isFeatured
                        ? "border-cyan-400/25 hover:border-cyan-400/60"
                        : "border-slate-800 hover:border-cyan-400/40"
                    }`}
                  >
                    {/* TOP ACCENT */}
                    <div
                      className={`absolute left-0 right-0 top-0 h-[3px] ${
                        isFeatured
                          ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent"
                          : "bg-gradient-to-r from-slate-700 via-cyan-400/40 to-transparent"
                      }`}
                    />

                    {/* LARGE NUMBER */}
                    <div className="pointer-events-none absolute right-[-15px] top-[-18px] select-none text-[8rem] font-black leading-none text-slate-900 transition-all duration-500 group-hover:text-cyan-400/[0.07]">
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </div>

                    {/* CARD CONTENT */}
                    <div className="relative z-10 flex flex-1 flex-col p-8">
                      {/* CARD TOP */}
                      <div className="flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 font-mono text-base text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                          {getProjectIcon(project)}
                        </div>

                        {isFeatured && (
                          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400">
                            Featured
                          </span>
                        )}
                      </div>

                      {/* TYPE */}
                      <div className="mt-8">
                        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                          {getProjectType(project)}
                        </p>

                        {/* TITLE */}
                        <h3 className="mt-3 min-h-[70px] text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-400">
                          {project.title}
                        </h3>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="mt-5 line-clamp-4 text-base leading-7 text-gray-400">
                        {project.description}
                      </p>

                      {/* DIVIDER */}
                      <div className="my-6 h-px bg-slate-800" />

                      {/* TECHNOLOGIES */}
                      <div className="min-h-[82px]">
                        <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-gray-700">
                          Technology Stack
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {technologies
                            .slice(0, 4)
                            .map(
                              (
                                technology,
                                techIndex
                              ) => (
                                <span
                                  key={`${technology}-${techIndex}`}
                                  className="rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-gray-400 transition-colors group-hover:border-slate-700 group-hover:text-gray-300"
                                >
                                  {technology}
                                </span>
                              )
                            )}

                          {technologies.length >
                            4 && (
                            <span className="rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs text-gray-700">
                              +
                              {technologies.length -
                                4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* BOTTOM */}
                      <div className="mt-auto pt-6">
                        <button
                          type="button"
                          onClick={() =>
                            setActiveProject(
                              project
                            )
                          }
                          className="flex w-full items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 text-sm font-semibold text-gray-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400"
                        >
                          <span>
                            View Project
                          </span>

                          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </button>

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 flex items-center justify-center text-[10px] uppercase tracking-wider text-gray-700 transition-colors hover:text-cyan-400"
                          >
                            View Repository ↗
                          </a>
                        )}
                      </div>
                    </div>

                    {/* HOVER GLOW */}
                    <div className="pointer-events-none absolute bottom-[-80px] left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  </motion.article>
                );
              }
            )}
          </div>

          {/* BOTTOM ENGINEERING STRIP */}
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
            className="mt-10 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 md:p-7"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                  ✓
                </div>

                <div>
                  <p className="text-base font-semibold text-white">
                    Built with a Quality Engineering mindset
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    Test • Automate • Validate • Improve
                  </p>
                </div>
              </div>

              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-700">
                QA_ENGINEERING / AUTOMATION / API / CI_CD
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      <AnimatePresence>
        {activeProject && (
          <ProjectDetails
            project={activeProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Projects;