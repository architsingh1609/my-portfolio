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
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-card max-w-6xl mx-auto p-12">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14">
          Experience
        </h2>

        <div className="relative border-l-2 border-cyan-400 ml-6">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="
                glass-card
                group
                relative
                ml-10
                mb-10
                p-8
                rounded-3xl

                hover:-translate-y-2
                hover:scale-[1.02]
                hover:shadow-[0_20px_60px_rgba(0,245,255,.20)]

                transition-all
                duration-500
              "
            >

              <div
                className="
                  absolute
                  -left-14
                  top-10

                  w-6
                  h-6

                  rounded-full
                  bg-cyan-400

                  border-4
                  border-[#050816]

                  group-hover:scale-125

                  transition-all
                  duration-300
                "
              />

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

                  <li key={i} className="leading-7">
                    • {point}
                  </li>

                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>
    </motion.section>
  );
}

export default Experience;
