import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import portfolioData from "../data/portfolioData";

function getArray(value) {
  return Array.isArray(value) ? value : [];
}

function getText(value, fallback = "") {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function CertificationDetails({ certification, onClose }) {
  const skills = getArray(certification.skills);
  const technologies = getArray(certification.technologiesLearned);
  const concepts = getArray(certification.keyConcepts);
  const appliedProjects = getArray(certification.appliedProjects);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-card border border-cyan-400/20 rounded-2xl p-7 md:p-10"
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.3 }}
          onClick={(event) => event.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 h-10 w-10 rounded-full border border-gray-700 bg-black/30 text-gray-300 hover:text-white hover:border-cyan-400 transition-all duration-300"
            aria-label="Close certification details"
          >
            ×
          </button>

          {/* Header */}
          <div className="pr-12">
            <p className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase">
              Certification Details
            </p>

            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              {certification.title}
            </h3>

            {certification.provider && (
              <p className="mt-3 text-cyan-300 text-lg font-medium">
                {certification.provider}
              </p>
            )}

            {certification.year && (
              <p className="mt-2 text-gray-500">
                {certification.year}
              </p>
            )}
          </div>

          {/* Description */}
          {certification.description && (
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-white mb-3">
                Overview
              </h4>

              <p className="text-gray-300 leading-8">
                {certification.description}
              </p>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mt-9">
              <h4 className="text-xl font-semibold text-white mb-4">
                Skills Learned
              </h4>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="mt-9">
              <h4 className="text-xl font-semibold text-white mb-4">
                Technologies Learned
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {technologies.map((technology, index) => (
                  <div
                    key={`${technology}-${index}`}
                    className="rounded-xl border border-gray-800 bg-black/20 px-5 py-4 text-gray-300"
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Concepts */}
          {concepts.length > 0 && (
            <div className="mt-9">
              <h4 className="text-xl font-semibold text-white mb-4">
                Key Concepts
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {concepts.map((concept, index) => (
                  <div
                    key={`${concept}-${index}`}
                    className="rounded-xl border border-gray-800 bg-black/20 p-5"
                  >
                    <p className="text-gray-300 leading-7">{concept}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applied Projects */}
          {appliedProjects.length > 0 && (
            <div className="mt-9">
              <h4 className="text-xl font-semibold text-white mb-4">
                Applied Projects
              </h4>

              <div className="space-y-3">
                {appliedProjects.map((project, index) => (
                  <div
                    key={`${project}-${index}`}
                    className="rounded-xl border border-gray-800 bg-black/20 px-5 py-4"
                  >
                    <p className="text-gray-300 leading-7">{project}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How Knowledge Was Applied */}
          {certification.howKnowledgeWasApplied && (
            <div className="mt-9">
              <h4 className="text-xl font-semibold text-white mb-3">
                How the Knowledge Was Applied
              </h4>

              <p className="text-gray-300 leading-8">
                {certification.howKnowledgeWasApplied}
              </p>
            </div>
          )}

          {/* Practical Impact */}
          {certification.practicalImpact && (
            <div className="mt-9">
              <h4 className="text-xl font-semibold text-white mb-3">
                Practical Impact
              </h4>

              <p className="text-gray-300 leading-8">
                {certification.practicalImpact}
              </p>
            </div>
          )}

          {/* Outcomes */}
          {certification.outcomes && (
            <div className="mt-9">
              <h4 className="text-xl font-semibold text-white mb-3">
                Key Outcomes & Benefits
              </h4>

              <p className="text-gray-300 leading-8">
                {certification.outcomes}
              </p>
            </div>
          )}

          {/* Bottom Summary */}
          <div className="mt-10 pt-7 border-t border-gray-800">
            <div className="flex flex-wrap items-center gap-3">
              {certification.provider && (
                <span className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm">
                  {certification.provider}
                </span>
              )}

              {certification.year && (
                <span className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm">
                  {certification.year}
                </span>
              )}

              {skills.length > 0 && (
                <span className="px-4 py-2 rounded-full border border-cyan-400/20 text-cyan-300 text-sm">
                  {skills.length} Skills
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Certifications() {
  const [activeCertification, setActiveCertification] = useState(null);

  const certifications = getArray(portfolioData.certifications);

  return (
    <section id="certifications" className="py-28 px-6">
      <div className="glass-card max-w-[1600px] mx-auto p-8 md:p-12 lg:p-14">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase">
            Professional Development
          </p>

          <h2 className="mt-3 text-5xl md:text-6xl lg:text-7xl font-bold text-cyan-400">
            Certifications
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-5 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />

          <p className="mt-6 text-gray-400 text-lg leading-8 max-w-3xl">
            Certifications and structured learning that support my QA
            Automation, software testing, API testing, and SDET journey.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id || cert.title || index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="glass-card spotlight-card relative min-h-[500px] h-full flex flex-col p-8 md:p-9">

                {/* Certificate Icon */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-7 right-7 h-14 w-14 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 flex items-center justify-center text-2xl"
                >
                  🏆
                </motion.div>

                {/* Number */}
                <div className="text-cyan-400 text-sm font-semibold tracking-[0.15em] mb-5">
                  CERTIFICATION {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white pr-16 leading-tight">
                  {getText(cert.title, "Certification")}
                </h3>

                {/* Provider */}
                {cert.provider && (
                  <p className="mt-4 text-cyan-300 font-medium text-lg">
                    {cert.provider}
                  </p>
                )}

                {/* Year */}
                {cert.year && (
                  <p className="mt-2 text-gray-500 text-sm">
                    {cert.year}
                  </p>
                )}

                {/* Description */}
                {cert.description && (
                  <p className="mt-6 text-gray-300 leading-8">
                    {cert.description}
                  </p>
                )}

                {/* Skills */}
                {getArray(cert.skills).length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-auto pt-8">
                    {getArray(cert.skills).map((skill, skillIndex) => (
                      <motion.span
                        key={`${skill}-${skillIndex}`}
                        whileHover={{ y: -2 }}
                        className="px-3 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                )}

                {/* Explore Button */}
                <motion.button
                  type="button"
                  onClick={() => setActiveCertification(cert)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-5 py-4 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300"
                >
                  Explore Certification Details →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Strip */}
        {certifications.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              Continuous learning & professional development
            </p>

            <p className="text-cyan-400 text-sm font-semibold">
              {certifications.length} Certifications
            </p>
          </div>
        )}
      </div>

      {/* Certification Modal */}
      {activeCertification && (
        <CertificationDetails
          certification={activeCertification}
          onClose={() => setActiveCertification(null)}
        />
      )}
    </section>
  );
}

export default Certifications;