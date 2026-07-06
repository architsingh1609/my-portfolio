import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">

      {/* Top Divider */}

      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Logo */}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center"
        >
          <span className="text-cyan-400">Archit</span>
          <span className="text-white">.SDET</span>
        </motion.h2>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-400 mt-3"
        >
          QA Automation Engineer • SDET
        </motion.p>

        {/* Social Icons */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8 mt-8"
        >
          <motion.a
            whileHover={{
              scale: 1.2,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/architsingh1609"
            target="_blank"
            rel="noreferrer"
            className="
              text-3xl
              text-gray-300
              hover:text-cyan-400
              transition-all
              hover:drop-shadow-[0_0_20px_rgba(34,211,238,.6)]
            "
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.2,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/qa1503"
            target="_blank"
            rel="noreferrer"
            className="
              text-3xl
              text-gray-300
              hover:text-cyan-400
              transition-all
              hover:drop-shadow-[0_0_20px_rgba(34,211,238,.6)]
            "
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>

        {/* Bottom */}

        <div className="mt-12 pt-8 border-t border-white/10 text-center">

          <p className="text-gray-400">
            © 2026 Archit Singh
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Built with React, Tailwind CSS & Passion for Quality Engineering
          </p>

          {/* Back to Top */}

          <motion.a
            whileHover={{
              scale: 1.15,
              rotate: 360,
            }}
            whileTap={{ scale: 0.9 }}
            href="#hero"
            className="
              inline-flex
              mt-8

              glass-button

              p-4

              rounded-full

              hover:shadow-[0_0_30px_rgba(34,211,238,.35)]

              transition-all
            "
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;