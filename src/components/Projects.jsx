import portfolioData from "../data/portfolioData";

function Projects() {

  return (

    <section
      id="projects"
      className="py-24 px-6 bg-slate-950"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14">

          Featured Projects

        </h2>


        <div className="grid md:grid-cols-2 gap-10">

          {portfolioData.projects.map((project, index) => (

            <div
              key={index}
              className="
              group
              bg-slate-900
              border border-slate-800
              rounded-3xl
              p-8

              hover:bg-slate-800
              hover:border-cyan-400
              hover:-translate-y-4
              hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]

              transition-all
              duration-500
              "
            >

              <h3 className="text-2xl font-bold mb-5 group-hover:text-cyan-400 transition duration-300">

                {project.title}

              </h3>


              <p className="text-gray-400 leading-8 mb-6">

                {project.description}

              </p>


              <div className="flex flex-wrap gap-3 mb-8">

                {project.technologies.map((tech, i) => (

                  <span
                    key={i}
                    className="
                    bg-cyan-500/10
                    text-cyan-400
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    border border-cyan-500/20

                    group-hover:bg-cyan-500/20
                    group-hover:border-cyan-400
                    group-hover:scale-105

                    transition-all
                    duration-300
                    "
                  >

                    {tech}

                  </span>

                ))}

              </div>


              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                inline-block
                bg-cyan-500
                hover:bg-cyan-400
                hover:scale-105
                text-black
                font-semibold
                px-6
                py-3
                rounded-xl
                transition-all
                duration-300
                "
              >

                View Project

              </a>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Projects;