import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function Contact() {
  return (
    <section id="contact" className="px-6 py-16">
      <div
        className="glass-card spotlight-card relative mx-auto max-w-5xl overflow-hidden p-7 text-center md:p-9"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();

          e.currentTarget.style.setProperty(
            "--x",
            `${e.clientX - rect.left}px`
          );

          e.currentTarget.style.setProperty(
            "--y",
            `${e.clientY - rect.top}px`
          );
        }}
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Let's Connect
          </p>

          <h2 className="text-3xl font-bold text-cyan-400 md:text-4xl">
            Contact Me
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-3 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400"
        >
          Interested in QA Automation, SDET, API Testing, and Quality
          Engineering opportunities. Let's connect and build reliable software
          together.
        </motion.p>

        {/* Professional Context */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-7 mt-5 flex flex-col items-center justify-center gap-2 text-sm text-gray-400 md:flex-row md:gap-6"
        >
          <span>📍 {portfolioData.location}</span>

          <span className="hidden text-slate-700 md:block">•</span>

          <span>💼 QA Automation Engineer | SDET</span>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-col justify-center gap-3 sm:flex-row"
        >
          {/* Email */}
          <motion.a
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${portfolioData.email}`}
            className="glass-button rounded-xl border border-cyan-400/20 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.25)]"
          >
            📧 Email Me
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="glass-button rounded-xl border border-cyan-400/20 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.25)]"
          >
            💻 GitHub
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass-button rounded-xl border border-cyan-400/20 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,.25)]"
          >
            🔗 LinkedIn
          </motion.a>
        </motion.div>

        {/* Email */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-5 break-all text-xs text-gray-500"
        >
          {portfolioData.email}
        </motion.p>
      </div>
    </section>
  );
}

export default Contact;