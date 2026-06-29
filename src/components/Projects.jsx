import { useState } from "react";
import portfolioData from "../data/portfolioData";

function Projects() {

const [filter, setFilter] = useState("All");
const [search, setSearch] = useState("");

const categories = [
"All",
"Automation",
"API Testing",
"Java"
];

const filteredProjects = portfolioData.projects.filter((project) => {


const matchesSearch =
  project.title.toLowerCase().includes(search.toLowerCase()) ||
  project.description.toLowerCase().includes(search.toLowerCase()) ||
  project.technologies.some((tech) =>
    tech.toLowerCase().includes(search.toLowerCase())
  );

const matchesCategory =
  filter === "All" ||
  (
    filter === "Automation" &&
    (
      project.title.includes("Automation") ||
      project.technologies.includes("Selenium WebDriver")
    )
  ) ||
  (
    filter === "API Testing" &&
    (
      project.title.includes("API") ||
      project.technologies.includes("Postman")
    )
  ) ||
  (
    filter === "Java" &&
    project.technologies.includes("Java")
  );

return matchesSearch && matchesCategory;


});

return (


<section
  id="projects"
  className="py-24 px-6 bg-slate-950"
>

  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10">
      Featured Projects
    </h2>

    <div className="flex flex-wrap gap-4 mb-8">

      {categories.map((category) => (

        <button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
            filter === category
              ? "bg-cyan-400 text-black"
              : "bg-slate-800 text-gray-300 hover:bg-slate-700"
          }`}
        >
          {category}
        </button>

      ))}

    </div>

    <div className="mb-10">

      <input
        type="text"
        placeholder="Search projects, technologies, frameworks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
        w-full
        bg-slate-900
        border
        border-slate-700
        rounded-2xl
        px-5
        py-4
        text-white

        focus:outline-none
        focus:border-cyan-400

        transition-all
        duration-300
        "
      />

    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {filteredProjects.map((project, index) => (

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

          <div className="flex flex-wrap gap-4">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              bg-cyan-500
              hover:bg-cyan-400
              text-black
              font-semibold
              px-6
              py-3
              rounded-xl
              transition-all
              duration-300
              hover:scale-105
              "
            >
              View Project
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              border
              border-cyan-400
              text-cyan-400

              px-6
              py-3
              rounded-xl
              font-semibold

              hover:bg-cyan-400
              hover:text-black
              hover:scale-105

              transition-all
              duration-300
              "
            >
              GitHub
            </a>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


);
}

export default Projects;
