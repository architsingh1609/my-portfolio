import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../assets/archit.png.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden"
    >
      {/* Animated Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [-80, 100, -80],
            y: [-60, 80, -60],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-0
            left-0

            w-[650px]
            h-[650px]

            rounded-full

            bg-cyan-500/10

            blur-[170px]
          "
        />

        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [80, -80, 80],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-0
            right-0

            w-[600px]
            h-[600px]

            rounded-full

            bg-purple-500/10

            blur-[170px]
          "
        />

      </div>

      <div
        className="
          glass-card
          max-w-7xl
          mx-auto
          p-12
          grid
          lg:grid-cols-2
          gap-12
          items-center
        "
      >

        {/* Left */}

        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center lg:text-left"
        >

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >

            Hello,

            <br />

            I'm

            <br />

            <TypeAnimation
              sequence={[
                "",
                400,
                "Archit Singh",
                2000,
              ]}
              speed={55}
              repeat={0}
              cursor
              className="
                block

                bg-gradient-to-r

                from-cyan-400
                via-sky-300
                to-blue-500

                bg-clip-text
                text-transparent

                drop-shadow-[0_0_40px_rgba(0,245,255,.65)]
              "
            />

          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
            }}
            className="
              mt-8
              text-2xl
              text-gray-300
              leading-relaxed
            "
          >

            Automation With Logic.

            <span className="text-cyan-400">
              {" "}
              Testing With Purpose.
            </span>

          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-5 text-lg text-gray-300"
          >

            QA Automation Engineer

            <span className="text-cyan-400">
              {" "}
              • API Testing • CI/CD • SDET
            </span>

          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="
              mt-8
              flex
              flex-wrap
              gap-4
              justify-center
              lg:justify-start
            "
          >

            <motion.span
              whileHover={{ scale: 1.06 }}
              className="
                glass-button
                px-5
                py-2
                rounded-full
                hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
              "
            >
              📍 Mumbai
            </motion.span>

            <motion.span
              animate={{
                boxShadow: [
                  "0 0 0 rgba(34,211,238,0)",
                  "0 0 18px rgba(34,211,238,.4)",
                  "0 0 0 rgba(34,211,238,0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
                glass-button
                px-5
                py-2
                rounded-full
              "
            >
              🟢 Open to Opportunities
            </motion.span>

          </motion.div>
		    {/* CTA Buttons */}

		    <motion.div
		      initial={{ opacity: 0 }}
		      animate={{ opacity: 1 }}
		      transition={{ delay: 2.5 }}
		      className="mt-10 flex flex-wrap gap-5 justify-center lg:justify-start"
		    >

		      <motion.a
		        whileHover={{
		          scale: 1.08,
		          y: -4,
		        }}
		        whileTap={{ scale: 0.95 }}
		        href="/resume/Archit_Singh_SDET_QA_Engineer_Resume.pdf"
		        download
		        className="
		          glass-button

		          px-8
		          py-4

		          rounded-2xl
		          font-semibold

		          border
		          border-cyan-400/20

		          hover:border-cyan-400
		          hover:shadow-[0_0_35px_rgba(34,211,238,.45)]

		          transition-all
		          duration-300
		        "
		      >
		        Download Resume
		      </motion.a>

		      <motion.a
		        whileHover={{
		          scale: 1.08,
		          y: -4,
		        }}
		        whileTap={{ scale: 0.95 }}
		        href="/resume/Archit_Singh_SDET_QA_Engineer_Resume.pdf"
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
		          hover:shadow-[0_0_35px_rgba(34,211,238,.45)]

		          transition-all
		          duration-300
		        "
		      >
		        Preview Resume
		      </motion.a>

		      <motion.a
		        whileHover={{
		          scale: 1.08,
		          y: -4,
		        }}
		        whileTap={{ scale: 0.95 }}
		        href="#contact"
		        className="
		          glass-button

		          px-8
		          py-4

		          rounded-2xl
		          font-semibold

		          border
		          border-cyan-400/20

		          hover:border-cyan-400
		          hover:shadow-[0_0_35px_rgba(34,211,238,.45)]

		          transition-all
		          duration-300
		        "
		      >
		        Contact
		      </motion.a>

		    </motion.div>

		    {/* Social Icons */}

		    <motion.div
		      initial={{ opacity: 0 }}
		      animate={{ opacity: 1 }}
		      transition={{ delay: 3 }}
		      className="flex gap-8 mt-12 justify-center lg:justify-start"
		    >

		      <motion.a
		        whileHover={{
		          scale: 1.25,
		          rotate: -8,
		          y: -6,
		        }}
		        whileTap={{ scale: 0.95 }}
		        href="https://github.com/architsingh1609"
		        target="_blank"
		        rel="noreferrer"
		        className="
		          text-4xl

		          hover:text-cyan-400

		          transition-all

		          hover:drop-shadow-[0_0_25px_rgba(34,211,238,.7)]
		        "
		      >
		        <FaGithub />
		      </motion.a>

		      <motion.a
		        whileHover={{
		          scale: 1.25,
		          rotate: 8,
		          y: -6,
		        }}
		        whileTap={{ scale: 0.95 }}
		        href="https://linkedin.com/in/qa1503"
		        target="_blank"
		        rel="noreferrer"
		        className="
		          text-4xl

		          hover:text-cyan-400

		          transition-all

		          hover:drop-shadow-[0_0_25px_rgba(34,211,238,.7)]
		        "
		      >
		        <FaLinkedin />
		      </motion.a>

		    </motion.div>

		  </motion.div>

		  {/* Right Side */}

		  <motion.div
		    initial={{
		      opacity: 0,
		      scale: 0.75,
		    }}
		    animate={{
		      opacity: 1,
		      scale: 1,
		      y: [0, -12, 0],
		    }}
		    transition={{
		      opacity: {
		        duration: 1,
		      },
		      scale: {
		        duration: 1,
		      },
		      y: {
		        duration: 5,
		        repeat: Infinity,
		        ease: "easeInOut",
		      },
		    }}
		    className="flex justify-center"
		  >

		    <div className="relative flex justify-center items-center">

		      {/* Main Glow */}

		      <motion.div
		        animate={{
		          rotate: 360,
		          scale: [1, 1.08, 1],
		        }}
		        transition={{
		          duration: 20,
		          repeat: Infinity,
		          ease: "linear",
		        }}
		        className="
		          absolute

		          w-[320px]
		          h-[320px]

		          sm:w-[380px]
		          sm:h-[380px]

		          md:w-[470px]
		          md:h-[470px]

		          rounded-full

		          bg-gradient-to-r
		          from-cyan-400/30
		          via-sky-500/20
		          to-purple-500/30

		          blur-[90px]
		        "
		      />

		      {/* Outer Ring */}

		      <motion.div
		        animate={{
		          rotate: 360,
		        }}
		        transition={{
		          duration: 30,
		          repeat: Infinity,
		          ease: "linear",
		        }}
		        className="
		          absolute

		          w-[300px]
		          h-[300px]

		          sm:w-[360px]
		          sm:h-[360px]

		          md:w-[455px]
		          md:h-[455px]

		          rounded-full

		          border
		          border-cyan-400/20
		        "
		      />
			              {/* Inner Ring */}

			              <motion.div
			                animate={{
			                  rotate: -360,
			                }}
			                transition={{
			                  duration: 18,
			                  repeat: Infinity,
			                  ease: "linear",
			                }}
			                className="
			                  absolute

			                  w-[280px]
			                  h-[280px]

			                  sm:w-[340px]
			                  sm:h-[340px]

			                  md:w-[425px]
			                  md:h-[425px]

			                  rounded-full

			                  border
			                  border-white/10
			                "
			              />

			              {/* Floating Particle 1 */}

			              <motion.div
			                animate={{
			                  y: [0, -15, 0],
			                  opacity: [0.4, 1, 0.4],
			                }}
			                transition={{
			                  duration: 3,
			                  repeat: Infinity,
			                }}
			                className="
			                  absolute
			                  -top-6
			                  right-10

			                  w-3
			                  h-3

			                  rounded-full

			                  bg-cyan-400

			                  shadow-[0_0_25px_rgba(34,211,238,.8)]
			                "
			              />

			              {/* Floating Particle 2 */}

			              <motion.div
			                animate={{
			                  y: [0, 18, 0],
			                  opacity: [1, .4, 1],
			                }}
			                transition={{
			                  duration: 4,
			                  repeat: Infinity,
			                }}
			                className="
			                  absolute
			                  bottom-8
			                  left-5

			                  w-2
			                  h-2

			                  rounded-full

			                  bg-sky-300

			                  shadow-[0_0_20px_rgba(34,211,238,.8)]
			                "
			              />

			              {/* Floating Particle 3 */}

			              <motion.div
			                animate={{
			                  x: [-10, 10, -10],
			                  opacity: [0.5, 1, 0.5],
			                }}
			                transition={{
			                  duration: 5,
			                  repeat: Infinity,
			                }}
			                className="
			                  absolute
			                  top-20
			                  -left-5

			                  w-4
			                  h-4

			                  rounded-full

			                  bg-purple-400

			                  shadow-[0_0_25px_rgba(168,85,247,.8)]
			                "
			              />

			              {/* Glass Reflection */}

			              <div
			                className="
			                  absolute
			                  z-20

			                  top-8
			                  left-10

			                  w-24
			                  h-24

			                  rounded-full

			                  bg-white/10

			                  blur-xl
			                "
			              />

			              {/* Profile Image */}

			              <motion.img
			                src={profileImage}
			                alt="Archit Singh"

			                whileHover={{
			                  scale: 1.08,
			                  rotateY: 10,
			                  rotateX: -5,
			                }}

			                transition={{
			                  duration: 0.35,
			                }}

			                className="
			                  relative
			                  z-30

			                  w-[280px]
			                  h-[280px]

			                  sm:w-[340px]
			                  sm:h-[340px]

			                  md:w-[430px]
			                  md:h-[430px]

			                  rounded-full

			                  object-cover

			                  border-[3px]
			                  border-cyan-400/30

			                  shadow-[0_0_130px_rgba(34,211,238,.45)]
			                "
			              />

			            </div>

			          </motion.div>

			        </div>

			      </section>
			    );
			  }

			  export default Hero;