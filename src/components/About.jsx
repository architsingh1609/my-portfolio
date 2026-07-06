import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";

function About() {
  return (
    <motion.section
      id="about"
      className="py-24 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <div className="glass-card max-w-6xl mx-auto p-12">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-10">
          About Me
        </h2>

        <div className="space-y-8">

          <p className="text-gray-300 text-lg leading-9">
            {portfolioData.about}
          </p>

          <div className="border-l-4 border-cyan-400 pl-6">

            <p className="text-2xl italic text-cyan-300 font-light leading-relaxed">
              Quality is engineered into the product —
              not tested after release.
            </p>

          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default About;

