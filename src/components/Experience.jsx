import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      company: "Metaphi Innovations Pvt. Ltd.",
      role: "SDET Quality Assurance Engineer",
      duration: "Apr 2026 - Present",
      location: "Mumbai",
      points: [
        "Perform manual and automation testing of web applications.",
        "Create and execute test cases, test scenarios, and bug reports.",
        "Validate APIs using Postman and backend testing techniques.",
        "Participate in regression testing and release verification activities.",
        "Work with Selenium WebDriver, TestNG, GitHub and CI/CD workflows."
      ]
    },
    {
      company: "BharatSkillz (QA Division)",
      role: "Quality Assurance Specialist",
      duration: "Jul 2025 - Apr 2026",
      location: "Gurugram",
      points: [
        "Performed functional, regression and smoke testing.",
        "Designed and executed test cases for web applications.",
        "Reported and tracked defects throughout the testing lifecycle.",
        "Learned automation testing concepts using Selenium and Java.",
        "Contributed to quality assurance activities during project delivery."
      ]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="py-24 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-card max-w-6xl mx-auto p-12">

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14"
        >
          Experience
        </motion.h2>

        {/* Timeline */}

        <div className="relative ml-8">

          {/* Animated Vertical Line */}

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-300 to-transparent"
          />

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
              }}
              className="relative pl-12 mb-12"
            >

              {/* Timeline Dot */}

              <motion.div
                whileHover={{
                  scale: 1.25,
                }}
                className="
                  absolute
                  left-[-11px]
                  top-10

                  w-6
                  h-6

                  rounded-full

                  bg-cyan-400

                  border-4
                  border-[#050816]

                  shadow-[0_0_25px_rgba(34,211,238,0.7)]
                "
              />

              {/* Card */}

              <div
                className="
                  glass-card
                  spotlight-card

                  rounded-3xl
                  p-8

                  transition-all
                  duration-500

                  hover:-translate-y-3
                  hover:scale-[1.02]
                  hover:shadow-[0_20px_60px_rgba(34,211,238,0.22)]
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

                <h3 className="text-2xl font-bold text-cyan-400">
                  {exp.role}
                </h3>

                <p className="text-xl font-semibold mt-2">
                  {exp.company}
                </p>

                <p className="text-gray-400 mt-2">
                  {exp.duration} | {exp.location}
                </p>

                <ul className="mt-6 space-y-3 text-gray-300">

                  {exp.points.map((point, i) => (

                    <li
                      key={i}
                      className="leading-7 transition-all duration-300 hover:text-white"
                    >
                      • {point}
                    </li>

                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Experience;