import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/archit.png.jpg";
function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
      >

        {/* Left Side */}

        <div className="text-center lg:text-left">

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">

            Hi, I'm

            <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
              {" "}Archit Singh
            </span>

          </h1>

          <p className="mt-8 text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">

            Automation With Logic.

            <span className="text-cyan-400">
              {" "}Testing With Purpose.
            </span>

          </p>
		  <p className="mt-4 text-lg md:text-xl text-gray-400">
		    QA Automation Engineer | API Testing | CI/CD | SDET Aspirant
		  </p>

          <div className="mt-6 inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 px-5 py-2 rounded-full text-sm font-medium">

            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

            Open to QA Automation, SDET & Software Testing Opportunities

          </div>

		  <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">

		    <a
		      href="/resume/Archit_Singh_SDET_QA_Engineer_Resume.pdf"
		      download
		      className="
		      bg-cyan-400
		      text-black
		      px-8
		      py-4
		      rounded-2xl
		      font-semibold
		      hover:bg-cyan-300
		      hover:-translate-y-1
		      hover:scale-105
		      hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
		      transition-all
		      duration-300
		      "
		    >
		      Download Resume
		    </a>

		    <a
		      href="/resume/Archit_Singh_SDET_QA_Engineer_Resume.pdf"
		      target="_blank"
		      rel="noreferrer"
		      className="
		      border
		      border-green-400
		      text-green-400
		      px-8
		      py-4
		      rounded-2xl
		      font-semibold
		      hover:bg-green-400
		      hover:text-black
		      hover:-translate-y-1
		      hover:scale-105
		      transition-all
		      duration-300
		      "
		    >
		      Preview Resume
		    </a>

		    <a
		      href="#contact"
		      className="
		      border
		      border-cyan-400
		      text-cyan-400
		      px-8
		      py-4
		      rounded-2xl
		      font-semibold
		      hover:bg-cyan-400
		      hover:text-black
		      hover:-translate-y-1
		      hover:scale-105
		      transition-all
		      duration-300
		      "
		    >
		      Get In Touch
		    </a>

		  </div>

          <div className="flex justify-center lg:justify-start gap-8 mt-8">

            <a
              href="https://github.com/architsingh1609"
              target="_blank"
              rel="noreferrer"
              className="
              text-4xl
              text-gray-400
              hover:text-cyan-400
              hover:scale-125
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/qa1503"
              target="_blank"
              rel="noreferrer"
              className="
              text-4xl
              text-gray-400
              hover:text-cyan-400
              hover:scale-125
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Right Side Photo */}

        <div className="flex justify-center">

          <img
            src={profileImage}
            alt="Archit Singh"
            className="
            w-80
            h-80
            md:w-96
            md:h-96
            object-cover
            rounded-full
            border-4
            border-cyan-400
            shadow-[0_0_60px_rgba(34,211,238,0.35)]
            hover:scale-105
            hover:shadow-[0_0_80px_rgba(34,211,238,0.5)]
            transition-all
            duration-500
            "
          />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;