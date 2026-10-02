import { motion } from "framer-motion";

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white transition-colors duration-500 dark:bg-[#05070d]">
      {/* Primary Blue Ambient Light */}
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
          left-20
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-100/20
          blur-[140px]
          dark:bg-blue-500/[0.035]
        "
      />

      {/* Secondary Blue Ambient Light */}
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
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-50/15
          blur-[160px]
          dark:bg-blue-950/20
        "
      />

      {/* Center Blue Ambient Light */}
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
          left-1/2
          top-1/2
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-50/10
          blur-[120px]
          dark:bg-blue-900/[0.025]
        "
      />
    </div>
  );
}

export default Background;