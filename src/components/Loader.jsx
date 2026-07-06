import { motion, AnimatePresence } from "framer-motion";

function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: 3.8,
          duration: 1,
        }}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050816]"
      >
        {/* Background Glow */}
        <div className="absolute w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

        {/* Glass Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            px-20
            py-16
            rounded-[30px]
            backdrop-blur-3xl
            bg-white/5
            border border-white/10
            shadow-[0_0_80px_rgba(0,245,255,.15)]
          "
        >
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
            className="text-6xl font-bold tracking-wide text-cyan-400 text-center"
          >
            Archit Singh
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
            }}
            className="mt-8 text-3xl text-white text-center"
          >
            QA Automation Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2,
              duration: 0.8,
            }}
            className="mt-5 text-center tracking-[0.35em] text-cyan-300"
          >
          Automation • Manual • API Testing • CI/CD • SDET
		            </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              delay: 2.4,
              duration: 1,
            }}
            className="mt-10 h-[2px] bg-cyan-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader;