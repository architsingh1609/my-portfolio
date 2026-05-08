import portfolioData from "../data/portfolioData";

function Certifications() {

  return (

    <section
      id="certifications"
      className="py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14">

          Certifications

        </h2>


        <div className="grid md:grid-cols-2 gap-10">

          {portfolioData.certifications.map((cert, index) => (

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
              hover:-translate-y-3
              hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]

              transition-all
              duration-500
              "
            >

			<div className="mb-5">

			  <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition duration-300">

			    {cert.title}

			  </h3>

			</div>


              <p className="text-gray-400 mb-4">

                {cert.provider}

              </p>


              <p className="text-gray-300 leading-8 mb-6">

                {cert.description}

              </p>


              <div className="flex flex-wrap gap-3">

                {cert.skills.map((skill, i) => (

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

                    transition-all
                    duration-300
                    "
                  >

                    {skill}

                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Certifications;