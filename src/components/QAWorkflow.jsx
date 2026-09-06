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
    <section id="workflow" className="py-12 px-0">
      <div className="glass-card spotlight-card relative overflow-hidden w-full p-6 md:p-8">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mb-3">
            Quality Engineering
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400">
            My Quality Engineering Process
          </h2>

          <div className="w-20 h-1 bg-cyan-400 mx-auto mt-5 rounded-full" />

          <p className="text-gray-400 max-w-xl mx-auto mt-5 text-sm md:text-base leading-relaxed">
            My approach combines requirement understanding, risk-based
            testing, automation, API and database validation, defect
            investigation, continuous testing, and release verification
            to build confidence in software quality.
          </p>
        </div>

        {/* Workflow */}
        <div className="flex flex-col items-center">
          {workflow.map((step, index) => {
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
                {index !== workflow.length - 1 && (
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

export default QAWorkflow;