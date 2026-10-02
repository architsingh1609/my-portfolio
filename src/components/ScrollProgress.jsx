import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="
        pointer-events-none
        fixed
        left-0
        right-0
        top-0
        z-[9999]
        h-1
        origin-left
        bg-blue-600
        shadow-[0_0_12px_rgba(37,99,235,0.25)]
      "
    />
  );
}

export default ScrollProgress;