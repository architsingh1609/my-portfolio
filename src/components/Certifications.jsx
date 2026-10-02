import { useEffect, useState } from "react";
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

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="
          fixed
          inset-0
          z-[100]
          flex
          items-center
          justify-center
          overflow-hidden
          bg-black/40
          px-4
          py-6
          backdrop-blur-md
          dark:bg-black/70
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certification-modal-title"
      >
        <motion.div
          className="
            relative
            w-full
            max-w-5xl
            max-h-[90vh]
            overflow-y-auto
            rounded-2xl
            border
            border-[var(--border-light)]
            bg-[var(--bg-card)]
            p-6
            shadow-[var(--shadow-large)]
            backdrop-blur-xl
            sm:p-8
            md:p-10
          "
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 24,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.94,
            y: 24,
          }}
          transition={{
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          onClick={(event) => event.stopPropagation()}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="
              absolute
              right-4
              top-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border-light)]
              bg-[var(--bg-card-soft)]
              text-xl
              leading-none
              text-[var(--text-secondary)]
              transition-all
              duration-300
              hover:border-[var(--border-accent)]
              hover:bg-[var(--bg-card)]
              hover:text-[var(--accent)]
              focus:outline-none
              focus:ring-2
              focus:ring-[var(--accent)]
              focus:ring-offset-2
              focus:ring-offset-[var(--bg-card)]
            "
            aria-label="Close certification details"
          >
            ×
          </button>

          {/* Header */}
          <div className="pr-12">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[var(--accent)]
                sm:text-sm
              "
            >
              Certification Details
            </p>

            <h3
              id="certification-modal-title"
              className="
                mt-3
                text-2xl
                font-bold
                leading-tight
                text-[var(--text-primary)]
                sm:text-3xl
                md:text-4xl
              "
            >
              {getText(certification.title, "Certification")}
            </h3>

            {certification.provider && (
              <p className="mt-3 text-base font-medium text-[var(--accent)] sm:text-lg">
                {certification.provider}
              </p>
            )}

            {certification.year && (
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                {certification.year}
              </p>
            )}
          </div>

          {/* Description */}
          {certification.description && (
            <div className="mt-8">
              <h4 className="mb-3 text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                Overview
              </h4>

              <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">
                {certification.description}
              </p>
            </div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                Skills Learned
              </h4>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="
                      rounded-full
                      border
                      border-[var(--border-accent)]
                      bg-[var(--bg-card-soft)]
                      px-3.5
                      py-2
                      text-xs
                      text-[var(--accent)]
                      sm:px-4
                      sm:text-sm
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                Technologies Learned
              </h4>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {technologies.map((technology, index) => (
                  <div
                    key={`${technology}-${index}`}
                    className="
                      rounded-xl
                      border
                      border-[var(--border-light)]
                      bg-[var(--bg-card-soft)]
                      px-4
                      py-3
                      text-sm
                      text-[var(--text-secondary)]
                      transition-all
                      duration-300
                      hover:border-[var(--border-accent)]
                      hover:bg-[var(--bg-card)]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Concepts */}
          {concepts.length > 0 && (
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                Key Concepts
              </h4>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                {concepts.map((concept, index) => (
                  <div
                    key={`${concept}-${index}`}
                    className="
                      rounded-xl
                      border
                      border-[var(--border-light)]
                      bg-[var(--bg-card-soft)]
                      p-4
                      transition-all
                      duration-300
                      hover:border-[var(--border-accent)]
                      hover:bg-[var(--bg-card)]
                      sm:p-5
                    "
                  >
                    <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                      {concept}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Applied Projects */}
          {appliedProjects.length > 0 && (
            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                Applied Projects
              </h4>

              <div className="space-y-3">
                {appliedProjects.map((project, index) => (
                  <div
                    key={`${project}-${index}`}
                    className="
                      rounded-xl
                      border
                      border-[var(--border-light)]
                      bg-[var(--bg-card-soft)]
                      px-4
                      py-3
                      transition-all
                      duration-300
                      hover:border-[var(--border-accent)]
                      hover:bg-[var(--bg-card)]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                      {project}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How Knowledge Was Applied */}
          {certification.howKnowledgeWasApplied && (
            <div className="mt-8">
              <h4 className="mb-3 text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                How the Knowledge Was Applied
              </h4>

              <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">
                {certification.howKnowledgeWasApplied}
              </p>
            </div>
          )}

          {/* Practical Impact */}
          {certification.practicalImpact && (
            <div className="mt-8">
              <h4 className="mb-3 text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                Practical Impact
              </h4>

              <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">
                {certification.practicalImpact}
              </p>
            </div>
          )}

          {/* Outcomes */}
          {certification.outcomes && (
            <div className="mt-8">
              <h4 className="mb-3 text-lg font-semibold text-[var(--text-primary)] sm:text-xl">
                Key Outcomes & Benefits
              </h4>

              <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8">
                {certification.outcomes}
              </p>
            </div>
          )}

          {/* Bottom Summary */}
          <div className="mt-9 border-t border-[var(--border-light)] pt-6 sm:mt-10 sm:pt-7">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {certification.provider && (
                <span
                  className="
                    rounded-full
                    border
                    border-[var(--border-light)]
                    bg-[var(--bg-card-soft)]
                    px-3.5
                    py-2
                    text-xs
                    text-[var(--text-secondary)]
                    sm:px-4
                    sm:text-sm
                  "
                >
                  {certification.provider}
                </span>
              )}

              {certification.year && (
                <span
                  className="
                    rounded-full
                    border
                    border-[var(--border-light)]
                    bg-[var(--bg-card-soft)]
                    px-3.5
                    py-2
                    text-xs
                    text-[var(--text-secondary)]
                    sm:px-4
                    sm:text-sm
                  "
                >
                  {certification.year}
                </span>
              )}

              {skills.length > 0 && (
                <span
                  className="
                    rounded-full
                    border
                    border-[var(--border-accent)]
                    bg-[var(--bg-card-soft)]
                    px-3.5
                    py-2
                    text-xs
                    text-[var(--accent)]
                    sm:px-4
                    sm:text-sm
                  "
                >
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
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="
        bg-[var(--bg-primary)]
        px-4
        py-20
        text-[var(--text-primary)]
        transition-colors
        duration-300
        sm:px-6
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          max-w-[1600px]
          rounded-3xl
          border
          border-[var(--border-light)]
          bg-[var(--bg-card)]
          p-6
          shadow-[var(--shadow-soft)]
          transition-colors
          duration-300
          sm:p-8
          md:p-12
          lg:p-14
        "
      >
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-12 sm:mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)] sm:text-sm">
            Professional Development
          </p>

          <h2
            id="certifications-heading"
            className="
              mt-3
              text-3xl
              font-bold
              text-[var(--text-primary)]
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Certifications
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mt-5 h-1 rounded-full bg-[var(--accent)]"
          />

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base sm:leading-8 md:text-lg">
            Certifications and structured learning that support my QA
            Automation, software testing, API testing, and SDET journey.
          </p>
        </motion.div>

        {/* Certification Cards */}
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id || cert.title || index}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full"
              >
                <div
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[460px]
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[var(--border-light)]
                    bg-[var(--bg-card-soft)]
                    p-6
                    shadow-[var(--shadow-soft)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[var(--border-accent)]
                    hover:bg-[var(--bg-card)]
                    hover:shadow-[var(--shadow-medium)]
                    sm:min-h-[500px]
                    sm:p-8
                    md:p-9
                  "
                >
                  {/* Certificate Icon */}
                  <motion.div
                    initial={{
                      scale: 0.8,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      absolute
                      right-5
                      top-5
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-[var(--border-accent)]
                      bg-[var(--bg-card)]
                      text-xl
                      transition-transform
                      duration-300
                      group-hover:scale-105
                      sm:right-7
                      sm:top-7
                      sm:h-14
                      sm:w-14
                      sm:text-2xl
                    "
                    aria-hidden="true"
                  >
                    🏆
                  </motion.div>

                  {/* Number */}
                  <div className="mb-5 text-xs font-semibold tracking-[0.15em] text-[var(--accent)] sm:text-sm">
                    CERTIFICATION {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Title */}
                  <h3 className="pr-14 text-xl font-bold leading-tight text-[var(--text-primary)] sm:text-2xl md:pr-16 md:text-3xl">
                    {getText(cert.title, "Certification")}
                  </h3>

                  {/* Provider */}
                  {cert.provider && (
                    <p className="mt-4 text-base font-medium text-[var(--accent)] sm:text-lg">
                      {cert.provider}
                    </p>
                  )}

                  {/* Year */}
                  {cert.year && (
                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                      {cert.year}
                    </p>
                  )}

                  {/* Description */}
                  {cert.description && (
                    <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] sm:mt-6 sm:text-base sm:leading-8">
                      {cert.description}
                    </p>
                  )}

                  {/* Skills */}
                  {getArray(cert.skills).length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-2.5 pt-7 sm:gap-3 sm:pt-8">
                      {getArray(cert.skills).map((skill, skillIndex) => (
                        <motion.span
                          key={`${skill}-${skillIndex}`}
                          whileHover={{
                            y: -2,
                          }}
                          className="
                            rounded-full
                            border
                            border-[var(--border-accent)]
                            bg-[var(--bg-card)]
                            px-3
                            py-1.5
                            text-xs
                            text-[var(--accent)]
                            transition-colors
                            duration-300
                            sm:px-3
                            sm:py-2
                          "
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
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      mt-7
                      w-full
                      rounded-xl
                      border
                      border-[var(--accent)]
                      bg-[var(--accent)]
                      px-5
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[var(--accent-dark)]
                      hover:shadow-[var(--shadow-medium)]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[var(--accent)]
                      focus:ring-offset-2
                      focus:ring-offset-[var(--bg-card-soft)]
                      sm:mt-8
                      sm:py-4
                    "
                    aria-label={`Explore details for ${getText(
                      cert.title,
                      "certification"
                    )}`}
                  >
                    Explore Certification Details →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-[var(--border-light)]
              bg-[var(--bg-card-soft)]
              p-8
              text-center
            "
          >
            <p className="text-sm text-[var(--text-muted)] sm:text-base">
              Certification details will be added soon.
            </p>
          </div>
        )}

        {/* Bottom Strip */}
        {certifications.length > 0 && (
          <div className="mt-10 flex flex-col gap-3 border-t border-[var(--border-light)] pt-7 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:pt-8">
            <p className="text-xs text-[var(--text-muted)] sm:text-sm">
              Continuous learning & professional development
            </p>

            <p className="text-xs font-semibold text-[var(--accent)] sm:text-sm">
              {certifications.length}{" "}
              {certifications.length === 1
                ? "Certification"
                : "Certifications"}
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