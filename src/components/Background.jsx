import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-20
          left-20
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -150, 80, 0],
          y: [0, 120, -100, 0],
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
          w-[450px]
          h-[450px]
          rounded-full
          bg-violet-500/20
          blur-[160px]
        "
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 80, -120, 0],
          y: [0, -120, 80, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[350px]
          h-[350px]
          rounded-full
          bg-sky-400/15
          blur-[120px]
        "
      />

    </div>
  );
}

export default Background;