import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative mt-16 border-t border-slate-800 bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Footer Content */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-gray-500"
          >
            © {new Date().getFullYear()} Archit Singh. All rights reserved.
          </motion.p>

          {/* Built With */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="text-sm text-gray-500"
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
            className="flex items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-cyan-400"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-xs" />
          </motion.a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;