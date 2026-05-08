import portfolioData from "../data/portfolioData";

function About() {

  return (

    <section
      id="about"
      className="py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10">

          About Me

        </h2>


		<div className="space-y-8">

		  <p className="text-gray-300 text-lg leading-9">

		    {portfolioData.about}

		  </p>


		  <div className="border-l-4 border-cyan-400 pl-6">

		    <p className="text-2xl italic text-cyan-300 font-light leading-relaxed">

		      Quality is engineered into the product —
		      not tested after release.

		    </p>

		  </div>

		</div>
      </div>

    </section>

  );
}

export default About;