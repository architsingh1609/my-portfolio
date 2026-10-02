import { useState } from "react";
function QAWorkflow() {
  const [activeStep, setActiveStep] = useState(null);
  const workflow = [
    {
      title: "1. Understand the Product & Requirements",
      description:
        "I start by understanding the business requirement, user journey, acceptance criteria, and expected product behavior. I identify what needs to be validated, clarify ambiguous scenarios, and think about quality risks before testing begins. This helps me build a testing approach around real product behavior rather than simply testing individual features.",
      tools:
        "Requirement Analysis • Acceptance Criteria • Risk Identification",
    },
    {
      title: "2. Plan Coverage & Design Test Scenarios",
      description:
        "Once the requirements are clear, I define the testing scope and design meaningful test scenarios covering positive, negative, boundary, functional, integration, regression, and critical business flows. I also consider test data, environment requirements, dependencies, and areas where failures could have the highest impact.",
      tools:
        "Test Planning • Test Case Design • Functional Testing • Risk-Based Testing",
    },
    {
      title: "3. Build & Execute Automation",
      description:
        "For stable and repeatable scenarios, I develop automation using maintainable framework practices. My UI automation work uses Java, Selenium WebDriver, TestNG, Maven, and Page Object Model principles, while API validation covers request and response behavior, authentication, CRUD operations, status codes, and JSON responses using REST Assured and Postman.",
      tools:
        "Java • Selenium WebDriver • TestNG • Maven • POM • REST Assured • Postman",
    },
    {
      title: "4. Validate Application, APIs & Data",
      description:
        "Testing does not stop at the UI. I validate application behavior across different layers by checking UI workflows, APIs, integrations, and backend data. Where required, I use SQL to verify that application actions produce the expected database results and that the data flowing through the system remains consistent.",
      tools:
        "UI Testing • API Testing • SQL • Database Testing • Integration Testing",
    },
    {
      title: "5. Investigate Defects & Regression",
      description:
        "When a failure is identified, I investigate the behavior, reproduce the issue, collect relevant evidence, and report the defect with clear expected and actual results. After fixes are delivered, I perform targeted verification followed by regression testing to make sure the change has not introduced problems elsewhere in the application.",
      tools:
        "Bug Reporting • Defect Management • Regression Testing • Smoke Testing • Sanity Testing",
    },
    {
      title: "6. Continuous Validation & Release Confidence",
      description:
        "I integrate repeatable automation into the delivery process so tests can be executed consistently as the application evolves. I use Git and Jenkins-based workflows for continuous validation, review test results and failures, and focus release verification on critical user journeys and known risk areas. The goal is not simply to report test results, but to provide useful quality information that supports confident release decisions.",
      tools:
        "Jenkins • Git • GitHub • CI/CD • Allure Reports • Release Verification",
    },
  ];
  return (
    <section
      id="workflow"
      className="h-full bg-transparent px-0 py-12 text-[var(--text-primary)]"
    >
      <div
        className="
          relative
          flex
          h-full
          w-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-[var(--border-light)]
          bg-[var(--bg-card)]
          p-6
          shadow-[var(--shadow-soft)]
          transition-colors
          duration-300
          md:p-8
        "
      >
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] md:text-sm">
            Quality Engineering
          </p>
      <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
        My Quality Engineering Process
      </h2>

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[var(--accent)]" />

      <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
        My approach combines requirement understanding, risk-based
        testing, automation, API and database validation, defect
        investigation, continuous testing, and release verification
        to build confidence in software quality.
      </p>
    </div>

    <div className="flex flex-1 flex-col items-center">
      {workflow.map((step, index) => {
        const isActive = activeStep === index;

        return (
          <div key={index} className="w-full">
            <button
              type="button"
              onClick={() =>
                setActiveStep(isActive ? null : index)
              }
              className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                isActive
                  ? "border-[var(--border-accent)] bg-[var(--bg-card)] shadow-[var(--shadow-medium)]"
                  : "border-[var(--border-light)] bg-[var(--bg-card-soft)] hover:-translate-y-1 hover:border-[var(--border-accent)] hover:bg-[var(--bg-card)] hover:shadow-[var(--shadow-soft)]"
              }`}
              aria-expanded={isActive}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--accent)] text-white"
                      : "border border-[var(--border-light)] bg-[var(--bg-card)] text-[var(--accent)]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3
                  className={`flex-1 text-base font-semibold md:text-lg ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-primary)]"
                  }`}
                >
                  {step.title}
                </h3>

                <div
                  className={`text-2xl text-[var(--accent)] transition-transform duration-300 ${
                    isActive ? "rotate-45" : ""
                  }`}
                >
                  +
                </div>
              </div>

              <div
                className={`grid transition-all duration-300 ${
                  isActive
                    ? "mt-5 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[var(--border-light)] pt-5">
                    <p className="text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                      {step.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {step.tools
                        .split(" • ")
                        .map((tool) => (
                          <span
                            key={tool}
                            className="
                              rounded-full
                              border
                              border-[var(--border-accent)]
                              bg-[var(--bg-card)]
                              px-3
                              py-1.5
                              text-xs
                              text-[var(--accent)]
                              transition-colors
                              duration-300
                            "
                          >
                            {tool}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {index !== workflow.length - 1 && (
              <div className="flex flex-col items-center py-2">
                <div className="h-4 w-px bg-[var(--border-medium)]" />

                <div className="text-lg leading-none text-[var(--accent)]">
                  ↓
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>

  );
}
export default QAWorkflow;