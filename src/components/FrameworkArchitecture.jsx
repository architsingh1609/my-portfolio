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

  return (
    <section id="framework" className="py-12 px-0">
      <div className="glass-card spotlight-card relative overflow-hidden w-full p-6 md:p-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-3">
            Automation Architecture
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            End-to-End QA Automation Workflow
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />

          <p className="text-gray-400 max-w-xl mx-auto mt-5 text-sm md:text-base leading-relaxed">
            A practical automation flow covering test strategy, framework
            design, UI and API automation, execution, CI/CD integration,
            and quality reporting.
          </p>
        </div>

        {/* Workflow */}
        <div className="flex flex-col items-center">
          {framework.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <div
                key={index}
                className="w-full"
              >
                {/* Step Card */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveStep(
                      isActive ? null : index
                    )
                  }
                  className={`w-full text-left rounded-2xl border p-5 transition-all duration-300 ${
                    isActive
                      ? "bg-slate-800 border-cyan-400 shadow-[0_15px_40px_rgba(34,211,238,0.18)]"
                      : "bg-slate-900 border-slate-800 hover:bg-slate-800 hover:border-cyan-400 hover:-translate-y-1"
                  }`}
                  aria-expanded={isActive}
                >
                  {/* Step Header */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-slate-800 text-cyan-400 border border-slate-700"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3
                      className={`flex-1 text-base md:text-lg font-semibold ${
                        isActive
                          ? "text-cyan-400"
                          : "text-gray-200"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <div
                      className={`text-cyan-400 text-2xl transition-transform duration-300 ${
                        isActive
                          ? "rotate-45"
                          : ""
                      }`}
                    >
                      +
                    </div>
                  </div>

                  {/* Expanded Description */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-5"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-700 pt-5">
                        <p className="text-gray-300 leading-7 text-sm md:text-base">
                          {step.description}
                        </p>

                        {/* Tools */}
                        <div className="flex flex-wrap gap-2 mt-5">
                          {step.tools
                            .split(" • ")
                            .map((tool) => (
                              <span
                                key={tool}
                                className="px-3 py-1.5 rounded-full bg-slate-950 border border-slate-700 text-cyan-300 text-xs"
                              >
                                {tool}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Connector */}
                {index !== framework.length - 1 && (
                  <div className="flex flex-col items-center py-2">
                    <div className="w-px h-4 bg-slate-700" />

                    <div className="text-cyan-400 text-lg leading-none">
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