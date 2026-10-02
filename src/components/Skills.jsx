import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function Skills() {
  const skillData = portfolioData.skills || {};

  const categories = [
    {
      title: "Core Expertise",
      skills: Array.isArray(skillData.coreExpertise)
        ? skillData.coreExpertise
        : [],
    },
    {
      title: "Testing Expertise",
      skills: Array.isArray(skillData.testingExpertise)
        ? skillData.testingExpertise
        : [],
    },
    {
      title: "Working Knowledge",
      skills: Array.isArray(skillData.workingKnowledge)
        ? skillData.workingKnowledge
        : [],
    },
    {
      title: "Currently Learning",
      skills: Array.isArray(skillData.currentlyLearning)
        ? skillData.currentlyLearning
        : [],
    },
  ];

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="
        bg-[var(--bg-primary)]
        px-4
        py-20
        text-[var(--text-primary)]
        transition-colors
        duration-300
        sm:px-6
        sm:py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-3xl
          border
          border-[var(--border-light)]
          bg-[var(--bg-card)]
          p-6
          shadow-[var(--shadow-soft)]
          transition-colors
          duration-300
          sm:p-8
          md:p-12
        "
      >
        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 md:mb-14"
        >
          <p
            className="
              mb-4
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[var(--accent)]
              sm:text-sm
            "
          >
            Technical Expertise
          </p>

          <h2
            id="skills-heading"
            className="
              text-3xl
              font-bold
              text-[var(--text-primary)]
              sm:text-4xl
              md:text-5xl
            "
          >
            Skills & Tools
          </h2>

          <div
            className="
              mt-4
              h-1
              w-24
              rounded-full
              bg-[var(--accent)]
              sm:w-32
            "
          />

          <p
            className="
              mt-6
              max-w-4xl
              text-sm
              leading-7
              text-[var(--text-secondary)]
              sm:text-base
              sm:leading-8
              md:text-lg
            "
          >
            A practical overview of my QA, automation, API testing,
            engineering, and software testing capabilities.
          </p>
        </motion.div>

        {/* =========================================
            SKILL CATEGORIES
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            md:gap-6
          "
        >
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={`${category.title}-${categoryIndex}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: categoryIndex * 0.08,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              className="
                group
                rounded-3xl
                border
                border-[var(--border-light)]
                bg-[var(--bg-card-soft)]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[var(--border-accent)]
                hover:bg-[var(--bg-card)]
                hover:shadow-[var(--shadow-medium)]
                sm:p-7
              "
            >
              {/* Category Heading */}

              <div className="mb-6">
                <h3
                  className="
                    text-xl
                    font-bold
                    text-[var(--text-primary)]
                    transition-colors
                    duration-300
                    group-hover:text-[var(--accent)]
                    md:text-2xl
                  "
                >
                  {category.title}
                </h3>

                <div
                  className="
                    mt-3
                    h-1
                    w-16
                    rounded-full
                    bg-[var(--accent)]
                  "
                />
              </div>

              {/* Skills */}

              <div
                aria-label={`${category.title} skills`}
                className="flex flex-wrap gap-2.5 sm:gap-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={`${category.title}-${skillIndex}`}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: skillIndex * 0.03,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.1,
                    }}
                    className="
                      spotlight-card
                      will-change-transform
                      rounded-xl
                      border
                      border-[var(--border-light)]
                      bg-[var(--bg-card)]
                      px-3.5
                      py-2.5
                      text-xs
                      font-medium
                      text-[var(--text-secondary)]
                      shadow-[var(--shadow-soft)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-105
                      hover:border-[var(--border-accent)]
                      hover:bg-[var(--bg-card-soft)]
                      hover:text-[var(--accent)]
                      hover:shadow-[var(--shadow-medium)]
                      sm:px-4
                      sm:py-3
                      sm:text-sm
                    "
                    onMouseMove={(e) => {
                      const rect =
                        e.currentTarget.getBoundingClientRect();

                      e.currentTarget.style.setProperty(
                        "--x",
                        `${e.clientX - rect.left}px`
                      );

                      e.currentTarget.style.setProperty(
                        "--y",
                        `${e.clientY - rect.top}px`
                      );
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;