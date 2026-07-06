function QAWorkflow() {
  const workflow = [
    "Requirements Analysis",
    "Test Planning",
    "Test Case Design",
    "Automation Development",
    "API Validation",
    "Bug Reporting",
    "Regression Testing",
    "Release Verification",
  ];

  return (
    <section
      id="workflow"
      className="py-24 px-6"
    >
      <div className="glass-card max-w-5xl mx-auto p-12">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14">
          Day in the Life of a QA Engineer
        </h2>

        <div className="flex flex-col items-center gap-4">

          {workflow.map((step, index) => (
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

                  transition-all
                  duration-300
                "
              >
                {step}
              </div>

              {index !== workflow.length - 1 && (
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

export default QAWorkflow;