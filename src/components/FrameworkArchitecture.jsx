function FrameworkArchitecture() {

	const flow = [
	  "Requirements Analysis",
	  "Test Planning",
	  "Test Case Design",
	  "Selenium / Playwright Automation",
	  "API Testing (Postman / REST Assured)",
	  "Page Object Model Framework",
	  "TestNG Execution",
	  "Jenkins CI/CD Pipeline",
	  "Docker Execution",
	  "Allure Reporting",
	  "GitHub Version Control",
	  "Quality Delivery"
	];

  return (

    <section
      id="framework"
      className="py-24 px-6"
    >

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14">

          End-to-End QA Automation Workflow

        </h2>

        <div className="flex flex-col items-center gap-4">

          {flow.map((item, index) => (

            <div key={index} className="w-full">

              <div
                className="
                bg-slate-900
                border border-slate-800
                rounded-2xl
                p-5
                text-center
                font-semibold

                hover:bg-slate-800
                hover:border-cyan-400
                hover:-translate-y-1
                hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]

                transition-all
                duration-300
                "
              >
                {item}
              </div>

              {index !== flow.length - 1 && (
                <div className="text-cyan-400 text-center text-3xl py-2">
                  ↓
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default FrameworkArchitecture;