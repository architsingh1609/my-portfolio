import { useState } from "react";
import portfolioData from "../data/portfolioData";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", "Automation", "API Testing", "Java"];

  const filteredProjects = portfolioData.projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCategory =
      filter === "All" ||
      (filter === "Automation" &&
        (project.title.includes("Automation") ||
          project.technologies.includes("Selenium WebDriver"))) ||
      (filter === "API Testing" &&
        (project.title.includes("API") ||
          project.technologies.includes("Postman"))) ||
      (filter === "Java" &&
        project.technologies.includes("Java"));

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="projects" className="py-24 px-6">
      <div className="glass-card max-w-7xl mx-auto p-12">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10">
          Featured Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`glass-button px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-cyan-400 text-black"
                  : "text-white hover:scale-105"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Search */}
        <div className="mb-10">

          <input
            type="text"
            placeholder="Search projects, technologies, frameworks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              glass-button
              rounded-2xl
              px-5
              py-4
              text-white
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400
              transition-all
              duration-300
            "
          />

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {filteredProjects.map((project, index) => (

            <div
              key={index}
              className="
                glass-card
                group
                rounded-3xl
                p-8
                overflow-hidden
                cursor-pointer

                transition-all
                duration-500

                hover:-translate-y-4
                hover:scale-[1.03]
                hover:rotate-[0.4deg]
                hover:shadow-[0_20px_80px_rgba(0,245,255,.25)]
              "
            >

              <h3 className="text-2xl font-bold mb-5 transition-all duration-300 group-hover:text-cyan-400">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-8 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {project.technologies.map((tech, i) => (

                  <span
                    key={i}
                    className="
                      glass-button
                      px-4
                      py-2
                      rounded-full
                      text-sm

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
                    glass-button
                    px-6
                    py-3
                    rounded-xl
                    font-semibold

                    hover:scale-105
                    hover:-translate-y-1

                    transition-all
                    duration-300
                  "
                >
                  View Project
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    glass-button
                    px-6
                    py-3
                    rounded-xl
                    font-semibold

                    hover:scale-105
                    hover:-translate-y-1

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

