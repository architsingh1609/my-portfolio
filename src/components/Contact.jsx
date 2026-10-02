import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[var(--bg-primary)]
        px-6
        py-16
        text-[var(--text-primary)]
        transition-colors
        duration-300
      "
    >
      <div
        className="
          spotlight-card
          relative
          mx-auto
          max-w-5xl
          overflow-hidden
          rounded-3xl
          border
          border-[var(--border-light)]
          bg-[var(--bg-card)]
          p-7
          text-center
          shadow-[var(--shadow-soft)]
          transition-all
          duration-300
          hover:shadow-[var(--shadow-medium)]
          md:p-9
        "
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
        {/* Spotlight */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-300
            hover:opacity-100
          "
          style={{
            background:
              "radial-gradient(500px circle at var(--x) var(--y), rgba(59,130,246,0.10), transparent 45%)",
          }}
        />

        {/* Background Glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-72
            w-72
            rounded-full
            bg-blue-400/10
            blur-[120px]
          "
        />

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Let's Connect
          </p>

          <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Contact Me
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-3 h-1 rounded-full bg-[var(--accent)]"
          />
        </motion.div>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="
            relative
            z-10
            mx-auto
            mt-6
            max-w-2xl
            text-base
            leading-7
            text-[var(--text-secondary)]
          "
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
          className="
            relative
            z-10
            mb-7
            mt-5
            flex
            flex-col
            items-center
            justify-center
            gap-2
            text-sm
            text-[var(--text-secondary)]
            md:flex-row
            md:gap-6
          "
        >
          <span>📍 {portfolioData.location}</span>

          <span className="hidden opacity-40 md:block">•</span>

          <span>💼 QA Automation Engineer | SDET</span>
        </motion.div>

        {/* Contact Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="
            relative
            z-10
            flex
            flex-col
            justify-center
            gap-3
            sm:flex-row
          "
        >
          {/* Email */}

          <motion.a
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${portfolioData.email}`}
            className="
              rounded-xl
              border
              border-[var(--border-light)]
              bg-[var(--bg-card-soft)]
              px-6
              py-3
              text-sm
              font-semibold
              text-[var(--text-primary)]
              shadow-[var(--shadow-soft)]
              transition-all
              duration-300
              hover:border-[var(--border-accent)]
              hover:bg-[var(--bg-card)]
              hover:text-[var(--accent)]
              hover:shadow-[var(--shadow-medium)]
            "
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
            className="
              rounded-xl
              border
              border-[var(--border-light)]
              bg-[var(--bg-card-soft)]
              px-6
              py-3
              text-sm
              font-semibold
              text-[var(--text-primary)]
              shadow-[var(--shadow-soft)]
              transition-all
              duration-300
              hover:border-[var(--border-accent)]
              hover:bg-[var(--bg-card)]
              hover:text-[var(--accent)]
              hover:shadow-[var(--shadow-medium)]
            "
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
            className="
              rounded-xl
              border
              border-[var(--border-light)]
              bg-[var(--bg-card-soft)]
              px-6
              py-3
              text-sm
              font-semibold
              text-[var(--text-primary)]
              shadow-[var(--shadow-soft)]
              transition-all
              duration-300
              hover:border-[var(--border-accent)]
              hover:bg-[var(--bg-card)]
              hover:text-[var(--accent)]
              hover:shadow-[var(--shadow-medium)]
            "
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
          className="
            relative
            z-10
            mt-5
            break-all
            text-xs
            text-[var(--text-secondary)]
            opacity-70
          "
        >
          {portfolioData.email}
        </motion.p>

        {/* =========================================================
            BUG RUNNER ANIMATION
            Person ---> ---> ---> Bug
            ========================================================= */}

        <div
          className="
            relative
            z-10
            mt-12
            h-16
            w-full
            overflow-hidden
            rounded-2xl
            border
            border-[var(--border-light)]
            bg-[var(--bg-card-soft)]
          "
        >
          {/* Ground */}

          <div
            className="
              absolute
              bottom-2
              left-0
              h-px
              w-full
              bg-[var(--border-medium)]
            "
          />

          {/* Running Group */}

          <motion.div
            className="
              absolute
              bottom-3
              left-0
              flex
              items-center
              whitespace-nowrap
            "
            animate={{
              x: ["-180px", "calc(100vw + 180px)"],
            }}
            transition={{
              duration: 9,
              ease: "linear",
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
          >
            {/* Person */}

            <motion.div
              className="
                flex
                items-center
                text-3xl
                leading-none
              "
              animate={{
                y: [0, -2, 0, -2, 0],
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              🧑‍💻
            </motion.div>

            {/* Fixed Distance */}

            <div className="w-20 shrink-0 md:w-28" />

            {/* Bug */}

            <motion.div
              className="
                flex
                items-center
                text-2xl
                leading-none
              "
              animate={{
                y: [0, -1, 0],
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              🐞
            </motion.div>
          </motion.div>
        </div>

        {/* Small Animation Label */}

        <p
          className="
            relative
            z-10
            mt-3
            text-[10px]
            uppercase
            tracking-[0.2em]
            text-[var(--text-secondary)]
            opacity-50
          "
        >
          Hunting Bugs. Shipping Confidence.
        </p>
      </div>
    </section>
  );
}

export default Contact;