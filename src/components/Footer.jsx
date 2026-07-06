import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">

      {/* Divider */}

      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="glass-card max-w-7xl mx-auto mt-12 rounded-3xl p-10">

        {/* Logo */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-3xl font-bold text-center"
        >
          <span className="text-cyan-400">
            Archit
          </span>

          <span className="text-white">
            .SDET
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="text-gray-400 text-center mt-3"
        >
          QA Automation Engineer • API Testing • Selenium • SDET
        </motion.p>

        {/* Navigation */}

        <div className="flex flex-wrap justify-center gap-8 mt-10">

          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-cyan-400 transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="hover:text-cyan-400 transition"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>

        </div>

        {/* Social Icons */}

        <div className="flex justify-center gap-8 mt-10">

          <motion.a
            whileHover={{
              scale: 1.2,
              y: -4,
            }}
            href="https://github.com/architsingh1609"
            target="_blank"
            rel="noreferrer"
            className="
              text-3xl
              hover:text-cyan-400
              hover:drop-shadow-[0_0_20px_rgba(34,211,238,.6)]
              transition-all
            "
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.2,
              y: -4,
            }}
            href="https://linkedin.com/in/qa1503"
            target="_blank"
            rel="noreferrer"
            className="
              text-3xl
              hover:text-cyan-400
              hover:drop-shadow-[0_0_20px_rgba(34,211,238,.6)]
              transition-all
            "
          >
            <FaLinkedin />
          </motion.a>

        </div>

        {/* Tech Stack */}

        <div className="flex flex-wrap justify-center gap-3 mt-10">

          {[
            "React",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
            "Java",
            "Selenium",
          ].map((item) => (

            <span
              key={item}
              className="
                glass-button

                px-4
                py-2

                rounded-full

                text-sm
              "
            >
              {item}
            </span>

          ))}

        </div>

        {/* Bottom */}

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <p className="text-gray-400">
              © 2026 Archit Singh
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Built with React, Tailwind CSS & Passion for Quality Engineering
            </p>

          </div>

          <motion.a
            whileHover={{
              scale: 1.15,
              rotate: 360,
            }}
            whileTap={{
              scale: .9,
            }}
            href="#hero"
            className="
              glass-button

              p-4

              rounded-full

              hover:shadow-[0_0_30px_rgba(34,211,238,.35)]

              transition-all
            "
          >
            <FaArrowUp />
          </motion.a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;