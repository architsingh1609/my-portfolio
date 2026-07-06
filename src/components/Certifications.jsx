import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6"
    >
      <div className="glass-card max-w-7xl mx-auto p-12">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Certifications
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "130px" }}
            viewport={{ once: true }}
            transition={{ delay: .3, duration: .8 }}
            className="
              mt-4
              h-1
              rounded-full

              bg-gradient-to-r
              from-cyan-400
              to-blue-500
            "
          />
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-10">

          {portfolioData.certifications.map((cert, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .6,
              }}
            >

              <div
                className="
                  glass-card
                  spotlight-card

                  relative
                  overflow-hidden

                  rounded-3xl
                  p-8

                  transition-all
                  duration-500

                  hover:-translate-y-4
                  hover:scale-[1.02]
                  hover:shadow-[0_20px_60px_rgba(34,211,238,.25)]
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

                {/* Certificate Badge */}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                  className="
                    absolute
                    top-6
                    right-6

                    w-12
                    h-12

                    rounded-full

                    bg-cyan-500/15

                    flex
                    items-center
                    justify-center

                    text-2xl

                    border
                    border-cyan-400/30
                  "
                >
                  🏆
                </motion.div>

                {/* Title */}

                <h3
                  className="
                    text-2xl
                    font-bold

                    text-white

                    pr-14

                    transition-all
                    duration-300

                    hover:text-cyan-400
                  "
                >
                  {cert.title}
                </h3>

                {/* Provider */}

                <p className="mt-4 text-gray-400">
                  {cert.provider}
                </p>

                {/* Description */}

                <p
                  className="
                    mt-6

                    text-gray-300

                    leading-8
                  "
                >
                  {cert.description}
                </p>

                {/* Skills */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {cert.skills.map((skill, i) => (

                    <motion.span
                      key={i}
                      whileHover={{
                        scale: 1.08,
                        y: -2,
                      }}
                      className="
                        glass-button

                        px-4
                        py-2

                        rounded-full

                        text-sm

                        border
                        border-cyan-400/20

                        text-cyan-300

                        transition-all
                        duration-300

                        hover:border-cyan-400
                        hover:shadow-[0_0_18px_rgba(34,211,238,.35)]
                      "
                    >
                      {skill}
                    </motion.span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;