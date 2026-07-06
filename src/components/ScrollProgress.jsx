import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed
        top-0
        left-0
        right-0
        h-1
        origin-left
        z-[9999]
        bg-cyan-400
        shadow-[0_0_20px_rgba(34,211,238,0.8)]
      "
    />
  );
}

export default ScrollProgress;
