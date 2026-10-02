import { useState } from "react";

function FrameworkArchitecture() {
  const [activeStep, setActiveStep] = useState(null);

  const framework = [
    {
      title: "1. Requirements → Test Strategy",
      description:
        "I begin by converting business requirements into testable scenarios and defining the automation scope. I prioritize stable, repeatable, and high-value workflows that provide meaningful regression coverage while keeping manual validation where automation would add limited value.",
      tools:
        "Requirements Analysis • Test Planning • Risk-Based Testing",
    },
    {
      title: "2. Test Design → Framework Structure",
      description:
        "Test scenarios are translated into maintainable automation components. I organize the framework using Page Object Model principles, reusable methods, clear test data handling, and separation between test logic and application-specific interactions. This keeps the framework easier to maintain as the application evolves.",
      tools:
        "Java • Selenium WebDriver • Page Object Model • Maven",
    },
    {
      title: "3. UI & API Automation",
      description:
        "I automate critical end-to-end UI workflows using Selenium WebDriver, Java, and TestNG. API validation is handled through Postman and REST Assured to verify endpoints, authentication, CRUD operations, status codes, response payloads, and service behavior. Combining UI and API coverage helps validate the application across multiple layers.",
      tools:
        "Selenium WebDriver • Java • TestNG • REST Assured • Postman",
    },
    {
      title: "4. Test Execution → Validation",
      description:
        "The automation suite executes functional and regression scenarios and validates expected application behavior. Failed tests are analyzed to distinguish between genuine application defects, automation issues, test-data problems, and environmental failures before results are reported.",
      tools:
        "TestNG • Functional Testing • Regression Testing • API Validation",
    },
    {
      title: "5. CI/CD → Automated Execution",
      description:
        "The framework can be integrated into a Jenkins-based CI/CD workflow so automated tests can be executed consistently as part of the delivery process. Git and GitHub provide version control and collaboration, while Maven manages the project build and test execution.",
      tools:
        "Jenkins • Git • GitHub • Maven • CI/CD",
    },
    {
      title: "6. Reporting → Quality Feedback",
      description:
        "After execution, test results are reviewed to understand pass and failure patterns and identify areas requiring investigation. Reporting provides visibility into automation results, while the final quality feedback focuses on defects, regression status, critical workflow health, and release confidence.",
      tools:
        "Allure Reports • Test Results • Defect Analysis • Release Verification",
    },
  ];

  const toggleStep = (index) => {
    setActiveStep((currentStep) =>
      currentStep === index ? null : index
    );
  };

  return (
    <section
      id="framework"
      className="
        h-full
        bg-[var(--bg-primary)]
        px-0
        py-12
        text-[var(--text-primary)]
        transition-colors
        duration-300
      "
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
          transition-all
          duration-300
          md:p-8
        "
      >
        <div className="mb-10 text-center">
          <p
            className="
              mb-3
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[var(--accent)]
              md:text-sm
            "
          >
            Automation Architecture
          </p>

          <h2
            className="
              text-3xl
              font-bold
              text-[var(--text-primary)]
              md:text-4xl
            "
          >
            End-to-End QA Automation Workflow
          </h2>

          <div
            className="
              mx-auto
              mt-5
              h-1
              w-20
              rounded-full
              bg-[var(--accent)]
            "
          />

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-relaxed
              text-[var(--text-secondary)]
              md:text-base
            "
          >
            A practical automation flow covering test strategy, framework
            design, UI and API automation, execution, CI/CD integration,
            and quality reporting.
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center">
          {framework.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <div
                key={step.title}
                className="w-full"
              >
                <button
                  type="button"
                  onClick={() => toggleStep(index)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[var(--border-accent)] bg-[var(--bg-card)] shadow-[var(--shadow-medium)]"
                      : "border-[var(--border-light)] bg-[var(--bg-card)] hover:-translate-y-1 hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-soft)] hover:shadow-[var(--shadow-soft)]"
                  }`}
                  aria-expanded={isActive}
                  aria-controls={`framework-step-${index}`}
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
                      aria-hidden="true"
                      className={`text-2xl text-[var(--accent)] transition-transform duration-300 ${
                        isActive ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </div>
                  </div>

                  <div
                    id={`framework-step-${index}`}
                    className={`grid transition-all duration-300 ${
                      isActive
                        ? "mt-5 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[var(--border-light)] pt-5">
                        <p
                          className="
                            text-sm
                            leading-7
                            text-[var(--text-secondary)]
                            md:text-base
                          "
                        >
                          {step.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {step.tools.split(" • ").map((tool) => (
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

                {index !== framework.length - 1 && (
                  <div className="flex flex-col items-center py-2">
                    <div className="h-4 w-px bg-[var(--border-medium)]" />

                    <div
                      aria-hidden="true"
                      className="
                        text-lg
                        leading-none
                        text-[var(--accent)]
                      "
                    >
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

export default FrameworkArchitecture;