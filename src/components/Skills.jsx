import portfolioData from "../data/portfolioData";

function Skills() {

  return (

    <section
      id="skills"
      className="py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14">

          Skills & Tools

        </h2>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {portfolioData.skills.map((skill, index) => (

            <div
              key={index}
			  className="
			  bg-slate-900
			  border border-slate-800
			  rounded-2xl
			  p-5
			  text-center
			  cursor-pointer

			  hover:bg-slate-800
			  hover:border-cyan-400
			  hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
			  hover:-translate-y-2
			  hover:scale-105

			  transition-all
			  duration-300
			  "            >

              {skill}

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Skills;