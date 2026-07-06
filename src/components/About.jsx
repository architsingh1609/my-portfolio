import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div
        className="
          glass-card
          spotlight-card

          relative
          overflow-hidden

          max-w-6xl
          mx-auto
          p-12
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
        {/* Heading */}

        <motion.div
          initial={{ y: 35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            About Me
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="
              mt-4
              h-[4px]

              rounded-full

              bg-gradient-to-r
              from-cyan-400
              to-blue-500
            "
          />
        </motion.div>

        {/* About Text */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
        >
          <p
            className="
              text-gray-300

              text-lg
              md:text-xl

              leading-9

              tracking-wide
            "
          >
            {portfolioData.about}
          </p>
        </motion.div>

        {/* Quote */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          whileHover={{
            scale: 1.02,
            x: 10,
          }}
          className="
            mt-12

            border-l-[5px]
            border-cyan-400

            pl-7

            relative
          "
        >
          <div
            className="
              absolute

              -left-[3px]
              top-0
              bottom-0

              w-[5px]

              rounded-full

              bg-cyan-400

              shadow-[0_0_20px_rgba(34,211,238,.7)]
            "
          />

          <p
            className="
              text-2xl
              md:text-3xl

              italic

              text-cyan-300

              font-light

              leading-relaxed
            "
          >
            Quality is engineered into the product —
            <br />
            not tested after release.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;