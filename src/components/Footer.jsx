import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        relative
        z-20
        mt-16
        border-t
        border-[var(--border-light)]
        bg-[var(--bg-primary)]
        px-6
        pb-32
        pt-8
        text-[var(--text-primary)]
        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-6xl">
        {/* Footer Content */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            md:flex-row
          "
        >
          {/* Copyright */}

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              text-center
              text-sm
              text-[var(--text-secondary)]
              transition-colors
              duration-300
              md:text-left
            "
          >
            © {new Date().getFullYear()} Archit Singh. All rights reserved.
          </motion.p>

          {/* Built With */}

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="
              text-center
              text-sm
              text-[var(--text-secondary)]
              transition-colors
              duration-300
            "
          >
            Built with React & Tailwind CSS
          </motion.p>

          {/* Back To Top */}

          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="#hero"
            aria-label="Back to top"
            title="Back to top"
            className="
              flex
              items-center
              gap-2
              text-sm
              text-[var(--text-secondary)]
              transition-colors
              duration-300
              hover:text-[var(--accent)]
            "
          >
            <span>Back to top</span>

            <motion.span
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaArrowUp className="text-xs" />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;