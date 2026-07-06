import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
    >
      <div
        className="
          glass-card
          spotlight-card

          relative
          overflow-hidden

          max-w-5xl
          mx-auto
          p-12

          text-center
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

        {/* Background Glow */}

        <div
          className="
            absolute

            -top-40
            -right-40

            w-96
            h-96

            rounded-full

            bg-cyan-500/10

            blur-[140px]

            pointer-events-none
          "
        />

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Contact Me
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{
              delay: .3,
              duration: .8,
            }}
            className="
              mx-auto
              mt-4

              h-1

              rounded-full

              bg-gradient-to-r
              from-cyan-400
              to-blue-500
            "
          />
        </motion.div>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: .2,
            duration: .6,
          }}
          className="
            text-gray-400

            text-lg

            leading-8

            max-w-3xl

            mx-auto

            mt-10
            mb-12
          "
        >
          Interested in QA Automation, SDET, API Testing, and Quality Engineering
          opportunities. Let's connect and build reliable software together.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: .4,
            duration: .6,
          }}
          className="
            flex
            flex-col
            md:flex-row

            justify-center

            gap-6
          "
        >

          <motion.a
            whileHover={{
              scale: 1.06,
              y: -4,
            }}
            whileTap={{
              scale: .96,
            }}
            href={`mailto:${portfolioData.email}`}
            className="
              glass-button

              px-8
              py-4

              rounded-2xl

              font-semibold

              border
              border-cyan-400/20

              hover:border-cyan-400

              hover:shadow-[0_0_30px_rgba(34,211,238,.35)]

              transition-all
              duration-300
            "
          >
            📧 Email Me
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.06,
              y: -4,
            }}
            whileTap={{
              scale: .96,
            }}
            href={portfolioData.github}
            target="_blank"
            rel="noreferrer"
            className="
              glass-button

              px-8
              py-4

              rounded-2xl

              font-semibold

              border
              border-cyan-400/20

              hover:border-cyan-400

              hover:shadow-[0_0_30px_rgba(34,211,238,.35)]

              transition-all
              duration-300
            "
          >
            💻 GitHub
          </motion.a>

          <motion.a
            whileHover={{
              scale: 1.06,
              y: -4,
            }}
            whileTap={{
              scale: .96,
            }}
            href={portfolioData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              glass-button

              px-8
              py-4

              rounded-2xl

              font-semibold

              border
              border-cyan-400/20

              hover:border-cyan-400

              hover:shadow-[0_0_30px_rgba(34,211,238,.35)]

              transition-all
              duration-300
            "
          >
            🔗 LinkedIn
          </motion.a>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;