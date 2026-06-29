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
    <section
      id="experience"
      className="py-24 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14">
          Experience
        </h2>

        <div className="relative border-l-2 border-cyan-400 ml-6">

          {experiences.map((exp, index) => (

			<div
			  key={index}
			  className="
			  relative
			  ml-10
			  mb-10

			  bg-slate-900
			  border border-slate-800
			  rounded-3xl
			  p-8

			  hover:border-cyan-400
			  hover:bg-slate-800

			  transition-all
			  duration-300
			  "
			>
			<div
			  className="
			  absolute
			  -left-14
			  top-10

			  w-6
			  h-6

			  bg-cyan-400
			  rounded-full
			  border-4
			  border-slate-950
			  "
			></div>
			
              <h3 className="text-2xl font-bold text-cyan-400">
                {exp.role}
              </h3>

              <p className="text-xl font-semibold mt-2">
                {exp.company}
              </p>

              <p className="text-gray-400 mt-2">
                {exp.duration} | {exp.location}
              </p>

              <ul className="mt-5 space-y-3 text-gray-300">

                {exp.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;