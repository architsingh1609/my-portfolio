function FutureGoals() {
  return (
    <section
      id="goals"
      className="py-24 px-6"
    >
      <div className="glass-card max-w-5xl mx-auto p-12">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10">
          Future SDET Goals
        </h2>

        <div
          className="
            bg-slate-900
            border border-slate-800
            rounded-3xl
            p-10

            hover:bg-slate-800
            hover:border-cyan-400
            hover:-translate-y-2
            hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]

            transition-all
            duration-300
          "
        >
          <p className="text-gray-300 text-lg leading-9">
            My goal is to evolve from a QA Automation Engineer into a Software
            Development Engineer in Test (SDET) by strengthening expertise in
            automation framework architecture, API automation, cloud testing,
            CI/CD pipelines, performance testing, and software engineering best
            practices. I aim to design scalable quality engineering solutions
            that integrate seamlessly into modern development workflows and
            contribute to building highly reliable software systems.
          </p>
        </div>

      </div>
    </section>
  );
}

export default FutureGoals;