import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="glass-card max-w-7xl mx-auto p-12">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14"
        >
          Skills & Tools
        </motion.h2>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {portfolioData.skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
            >
              <div
                className="
                  glass-card
                  spotlight-card

                  rounded-2xl
                  p-5

                  text-center
                  font-medium
                  text-gray-200

                  cursor-pointer

                  transition-all
                  duration-300

                  hover:-translate-y-3
                  hover:scale-105
                  hover:border-cyan-400
                  hover:shadow-[0_15px_40px_rgba(34,211,238,0.25)]
                "
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();

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
              </div>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;