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
    <section
      id="goals"
      className="
        bg-[var(--bg-primary)]
        px-6
        py-24
        text-[var(--text-primary)]
        transition-colors
        duration-300
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
          rounded-3xl
          border
          border-[var(--border-light)]
          bg-[var(--bg-card)]
          p-8
          shadow-[var(--shadow-soft)]
          transition-all
          duration-300
          md:p-12
        "
      >
        <div className="mb-10">
          <p
            className="
              mb-4
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[var(--accent)]
            "
          >
            Career Direction
          </p>

          <h2
            className="
              text-4xl
              font-bold
              text-[var(--text-primary)]
              md:text-5xl
            "
          >
            Future SDET Goals
          </h2>

          <div
            className="
              mt-4
              h-1
              w-32
              rounded-full
              bg-[var(--accent)]
            "
          />
        </div>

        <p
          className="
            mb-10
            max-w-4xl
            text-lg
            leading-8
            text-[var(--text-secondary)]
          "
        >
          My goal is to evolve from a QA Automation Engineer into a Software
          Development Engineer in Test (SDET) by strengthening expertise in
          automation framework architecture, API automation, cloud testing,
          CI/CD pipelines, performance testing, and software engineering best
          practices.
        </p>

        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {goals.map((goal, index) => (
            <div
              key={goal.title}
              className="
                group
                rounded-3xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[var(--border-accent)]
                hover:bg-[var(--bg-card)]
                hover:shadow-[var(--shadow-medium)]
              "
            >
              <div
                className="
                  mb-4
                  text-sm
                  font-semibold
                  text-[var(--accent)]
                  transition-colors
                  duration-300
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3
                className="
                  mb-3
                  text-xl
                  font-bold
                  text-[var(--text-primary)]
                  transition-colors
                  duration-300
                  group-hover:text-[var(--accent)]
                "
              >
                {goal.title}
              </h3>

              <p
                className="
                  leading-7
                  text-[var(--text-secondary)]
                "
              >
                {goal.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            mt-10
            border-t
            border-[var(--border-light)]
            pt-8
          "
        >
          <p
            className="
              text-lg
              leading-8
              text-[var(--text-secondary)]
            "
          >
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