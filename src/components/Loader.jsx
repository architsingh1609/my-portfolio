import { motion, useReducedMotion } from "framer-motion";

function Loader() {
  const shouldReduceMotion = useReducedMotion();

  const easing = [0.22, 1, 0.36, 1];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[var(--bg-primary)]
        text-[var(--text-primary)]
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-100/30
          blur-[160px]
          dark:bg-blue-500/[0.06]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[240px]
          w-[240px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-200/20
          blur-[100px]
          dark:bg-blue-400/[0.04]
        "
      />

      {/* =====================================================
          GLASS LOADER CARD
      ====================================================== */}

      <motion.div
        initial={
          shouldReduceMotion
            ? {
                opacity: 1,
                scale: 1,
                y: 0,
              }
            : {
                opacity: 0,
                scale: 0.96,
                y: 18,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={
          shouldReduceMotion
            ? {
                duration: 0,
              }
            : {
                duration: 0.65,
                ease: easing,
              }
        }
        className="
          relative
          w-[min(90vw,760px)]
          overflow-hidden
          rounded-[30px]
          border
          border-[var(--glass-border)]
          bg-[var(--glass-bg-strong)]
          px-8
          py-12
          shadow-[var(--shadow-large)]
          backdrop-blur-[24px]
          backdrop-saturate-[180%]
          sm:px-12
          sm:py-14
          md:px-20
          md:py-16
        "
      >
        {/* ===================================================
            TOP ACCENT
        ==================================================== */}

        <motion.div
          aria-hidden="true"
          initial={
            shouldReduceMotion
              ? {
                  width: "100%",
                  opacity: 1,
                }
              : {
                  width: 0,
                  opacity: 0,
                }
          }
          animate={{
            width: "100%",
            opacity: 1,
          }}
          transition={
            shouldReduceMotion
              ? {
                  duration: 0,
                }
              : {
                  delay: 0.55,
                  duration: 0.9,
                  ease: "easeOut",
                }
          }
          className="
            absolute
            left-0
            top-0
            h-[2px]
            rounded-full
            bg-[var(--accent)]
          "
        />

        {/* ===================================================
            IDENTITY
        ==================================================== */}

        <motion.div
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={
            shouldReduceMotion
              ? {
                  duration: 0,
                }
              : {
                  delay: 0.1,
                  duration: 0.6,
                  ease: easing,
                }
          }
        >
          <p
            className="
              mb-4
              text-center
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[var(--accent)]
              sm:text-sm
            "
          >
            Quality Engineering Portfolio
          </p>

          <h1
            className="
              text-center
              text-4xl
              font-bold
              tracking-tight
              text-[var(--text-primary)]
              sm:text-5xl
              md:text-6xl
            "
          >
            Archit Singh
          </h1>
        </motion.div>

        {/* ===================================================
            PROFESSIONAL ROLE
        ==================================================== */}

        <motion.h2
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 12,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={
            shouldReduceMotion
              ? {
                  duration: 0,
                }
              : {
                  delay: 0.45,
                  duration: 0.6,
                  ease: easing,
                }
          }
          className="
            mt-6
            text-center
            text-xl
            font-semibold
            text-[var(--text-primary)]
            sm:text-2xl
            md:text-3xl
          "
        >
          QA Automation Engineer
        </motion.h2>

        {/* ===================================================
            CAPABILITY LINE
        ==================================================== */}

        <motion.p
          initial={
            shouldReduceMotion
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 8,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={
            shouldReduceMotion
              ? {
                  duration: 0,
                }
              : {
                  delay: 0.8,
                  duration: 0.55,
                  ease: easing,
                }
          }
          className="
            mt-5
            text-center
            text-xs
            font-medium
            tracking-[0.16em]
            text-[var(--text-secondary)]
            sm:text-sm
            md:text-base
            md:tracking-[0.25em]
          "
        >
          Automation • Manual • API Testing • CI/CD • SDET
        </motion.p>

        {/* ===================================================
            LOADING PROGRESS
        ==================================================== */}

        <div
          role="progressbar"
          aria-label="Portfolio loading"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={shouldReduceMotion ? 100 : undefined}
          className="
            mt-10
            h-[2px]
            overflow-hidden
            rounded-full
            bg-[var(--border-light)]
          "
        >
          <motion.div
            initial={{
              width: shouldReduceMotion ? "100%" : "0%",
            }}
            animate={{
              width: "100%",
            }}
            transition={
              shouldReduceMotion
                ? {
                    duration: 0,
                  }
                : {
                    delay: 1,
                    duration: 1,
                    ease: "easeInOut",
                  }
            }
            className="
              h-full
              rounded-full
              bg-[var(--accent)]
            "
          />
        </div>

        {/* ===================================================
            LOADING STATUS
        ==================================================== */}

        <motion.p
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={
            shouldReduceMotion
              ? {
                  duration: 0,
                }
              : {
                  delay: 1.25,
                  duration: 0.45,
                  ease: easing,
                }
          }
          className="
            mt-4
            text-center
            text-xs
            font-medium
            tracking-wider
            text-[var(--text-muted)]
          "
        >
          Initializing quality engineering workspace...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Loader;