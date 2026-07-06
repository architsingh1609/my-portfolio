import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/archit.png.jpg";

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-32">
      <div className="glass-card max-w-7xl mx-auto p-12 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div className="text-center lg:text-left">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            Hello,

            <br />

            I'm

            <br />

            <TypeAnimation
              sequence={[
                "Archit Singh",
                1500,
              ]}
              speed={40}
              repeat={0}
              cursor={true}
              className="text-cyan-400 block drop-shadow-[0_0_25px_rgba(0,245,255,.45)]"
            />

          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-8 text-2xl text-gray-300"
          >
            Automation With Logic.
            <span className="text-cyan-400">
              {" "}Testing With Purpose.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
            className="mt-6"
          >

            <p className="text-lg text-gray-300">
              QA Automation Engineer
              <span className="text-cyan-400">
                {" "}• API Testing • CI/CD • SDET
              </span>
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
          >

            <span className="glass-button px-5 py-2 rounded-full">
              📍 Mumbai
            </span>

            <span className="glass-button px-5 py-2 rounded-full">
              🟢 Available for Opportunities
            </span>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2 }}
            className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start"
          >

            <a
              href="/resume/Archit_Singh_SDET_QA_Engineer_Resume.pdf"
              download
              className="glass-button px-8 py-4 rounded-2xl"
            >
              Download Resume
            </a>

            <a
              href="/resume/Archit_Singh_SDET_QA_Engineer_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="glass-button px-8 py-4 rounded-2xl"
            >
              Preview Resume
            </a>

            <a
              href="#contact"
              className="glass-button px-8 py-4 rounded-2xl"
            >
              Contact
            </a>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            className="flex gap-8 mt-10 justify-center lg:justify-start"
          >

            <a
              href="https://github.com/architsingh1609"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/qa1503"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </motion.div>

        </div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center"
        >

          <img
            src={profileImage}
            alt="Archit Singh"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border border-white/20 shadow-[0_0_80px_rgba(0,245,255,.25)]"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;