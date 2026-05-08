import { motion } from "framer-motion";

function Hero() {

  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <h1 className="text-5xl md:text-7xl font-bold">

		Hi, I'm
		<span className="text-cyan-400"> Archit Singh</span>

        </h1>

		<p className="mt-8 text-2xl md:text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">

		  Automation With Logic.
		  <span className="text-cyan-400">
		    {" "}Testing With Purpose.
		  </span>

		</p>

      </motion.div>

    </section>
  );
}

export default Hero;