function FutureGoals() {
  const goals = [
    {
      title: "Automation Architecture",
      description:
        "Strengthen expertise in scalable and maintainable automation framework architecture.",
    },
    {
      title: "API & Service Automation",
      description:
        "Expand API automation capabilities and improve validation across application and service layers.",
    },
    {
      title: "Cloud & CI/CD",
      description:
        "Build stronger cloud testing and CI/CD capabilities to integrate quality engineering into modern delivery workflows.",
    },
    {
      title: "Performance Engineering",
      description:
        "Develop practical performance testing skills to evaluate application reliability, scalability, and responsiveness.",
    },
    {
      title: "Software Engineering",
      description:
        "Continue improving programming, design, debugging, and software engineering practices required for an effective SDET role.",
    },
    {
      title: "Quality Engineering",
      description:
        "Design scalable quality engineering solutions that improve reliability and provide meaningful quality feedback throughout the development lifecycle.",
    },
  ];

  return (
    <section id="goals" className="py-24 px-6">
      <div className="glass-card max-w-6xl mx-auto p-8 md:p-12">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
          Future SDET Goals
        </h2>

        <p className="text-gray-300 text-lg leading-8 max-w-4xl mb-10">
          My goal is to evolve from a QA Automation Engineer into a Software
          Development Engineer in Test (SDET) by strengthening expertise in
          automation framework architecture, API automation, cloud testing,
          CI/CD pipelines, performance testing, and software engineering best
          practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, index) => (
            <div
              key={goal.title}
              className="
                bg-slate-900
                border border-slate-800
                rounded-3xl
                p-7
                hover:bg-slate-800
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                duration-300
              "
            >
              <div className="text-cyan-400 text-sm font-semibold mb-4">
                0{index + 1}
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {goal.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {goal.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800">
          <p className="text-gray-300 text-lg leading-8">
            I aim to design scalable quality engineering solutions that
            integrate seamlessly into modern development workflows and
            contribute to building highly reliable software systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FutureGoals;