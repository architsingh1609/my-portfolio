import portfolioData from "../data/portfolioData";

function Contact() {

  return (

    <section
      id="contact"
      className="py-24 px-6 bg-slate-950"
    >

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-8">

          Contact Me

        </h2>


        <p className="text-gray-400 text-lg mb-12 leading-8 max-w-3xl mx-auto">

          Focused on delivering reliable, scalable,
          and quality-driven automation solutions
          for modern software systems.

        </p>


        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href={`mailto:${portfolioData.email}`}
            className="
            bg-cyan-500
            hover:bg-cyan-400
            hover:scale-105
            hover:-translate-y-1
            hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]

            text-black
            px-8
            py-4
            rounded-2xl
            font-semibold

            transition-all
            duration-300
            "
          >

            Email Me

          </a>



          <a
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="
            border border-cyan-400
            text-cyan-400

            hover:bg-cyan-400
            hover:text-black
            hover:scale-105
            hover:-translate-y-1
            hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]

            px-8
            py-4
            rounded-2xl
            font-semibold

            transition-all
            duration-300
            "
          >

            GitHub

          </a>



          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
            border border-cyan-400
            text-cyan-400

            hover:bg-cyan-400
            hover:text-black
            hover:scale-105
            hover:-translate-y-1
            hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]

            px-8
            py-4
            rounded-2xl
            font-semibold

            transition-all
            duration-300
            "
          >

            LinkedIn

          </a>

        </div>

      </div>

    </section>

  );
}

export default Contact;