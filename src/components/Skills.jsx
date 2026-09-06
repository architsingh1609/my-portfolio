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
    <section id="skills" className="py-24 px-6">
      <div className="glass-card max-w-7xl mx-auto p-8 md:p-12">
        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Technical Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Skills & Tools
          </h2>

          <div className="mt-4 w-32 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

          <p className="mt-6 text-gray-400 text-base md:text-lg leading-8 max-w-4xl">
            A practical overview of my QA, automation, API testing,
            engineering, and software testing capabilities.
          </p>
        </motion.div>

        {/* =========================================
            SKILL CATEGORIES
        ========================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, categoryIndex) => {
            return (
              <motion.div
                key={`${category.title}-${categoryIndex}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  group
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-3xl
                  p-7
                  transition-all
                  duration-300
                  hover:border-cyan-400
                  hover:-translate-y-2
                  hover:shadow-[0_15px_40px_rgba(34,211,238,0.12)]
                "
              >
                {/* Category Heading */}

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {category.title}
                  </h3>

                  <div className="mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>

                {/* Skills */}

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={`${category.title}-${skillIndex}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: skillIndex * 0.03,
                      }}
                      viewport={{ once: true }}
                      className="
                        glass-card
                        spotlight-card
                        rounded-xl
                        px-4
                        py-3
                        text-sm
                        md:text-base
                        font-medium
                        text-gray-200
                        cursor-pointer
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:scale-105
                        hover:border-cyan-400
                        hover:text-cyan-400
                        hover:shadow-[0_10px_25px_rgba(34,211,238,0.15)]
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
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;