import { useEffect, useMemo, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import portfolioData from "../data/portfolioData";

// =========================================
// SAFE HELPERS
// =========================================

function toText(value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (Array.isArray(value)) {
    return value.map(toText).join(" ");
  }

  if (typeof value === "object") {
    return Object.values(value).map(toText).join(" ");
  }

  return String(value);
}

function normalizeText(value) {
  return toText(value)
    .toLowerCase()
    .replace(/[^\w\s+#./-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

// =========================================
// BUILD SEARCH INDEX
// =========================================

function buildSearchItems() {
  const items = [];

  // =========================================
  // PROFILE / HERO
  // =========================================

  if (portfolioData) {
    items.push({
      id: "hero",
      title: toText(portfolioData.name) || "Archit Singh",
      category: "Profile",
      description: `${toText(
        portfolioData.title
      )} — ${toText(portfolioData.hero?.specialization)}`,
      keywords: [
        toText(portfolioData.name),
        toText(portfolioData.title),
        toText(portfolioData.hero?.specialization),
        ...safeArray(portfolioData.hero?.coreStack).map(toText),
        "QA Automation Engineer",
        "SDET",
        "Quality Engineering",
      ],
      sectionId: "hero",
    });
  }

  // =========================================
  // PROFESSIONAL HIGHLIGHTS
  // =========================================

  safeArray(portfolioData?.professionalHighlights).forEach(
    (item, index) => {
      items.push({
        id: `highlight-${index}`,
        title:
          toText(item?.title) || "Professional Highlight",
        category: "Professional Highlight",
        description: `${toText(item?.value)} — ${toText(
          item?.description
        )}`,
        keywords: [
          toText(item?.title),
          toText(item?.value),
          toText(item?.description),
        ],
        sectionId: "about",
      });
    }
  );

  // =========================================
  // ABOUT
  // =========================================

  items.push({
    id: "about",
    title: "About Me",
    category: "Profile",
    description: toText(portfolioData?.about),
    keywords: [
      toText(portfolioData?.about),
      toText(portfolioData?.engineeringPhilosophy),
      "QA",
      "SDET",
      "Automation",
      "Quality Engineering",
      "Software Testing",
    ],
    sectionId: "about",
  });

  // =========================================
  // SKILLS
  // =========================================

  safeArray(portfolioData?.skills).forEach((skill, index) => {
    const skillText = toText(skill);

    items.push({
      id: `skill-${index}`,
      title: skillText,
      category: "Skill",
      description:
        "QA Automation and Software Testing capability",
      keywords: [
        skillText,
        "skill",
        "testing",
        "automation",
        "QA",
        "SDET",
      ],
      sectionId: "skills",
    });
  });

  // =========================================
  // SKILL CATEGORIES
  // =========================================

  safeArray(portfolioData?.skillCategories).forEach(
    (category, categoryIndex) => {
      const categoryName =
        toText(category?.category) ||
        toText(category?.title) ||
        toText(category?.name) ||
        "Skills";

      const categorySkills = safeArray(
        category?.skills ||
          category?.items ||
          category?.tools
      );

      categorySkills.forEach((skill, skillIndex) => {
        const skillText = toText(skill);

        items.push({
          id: `category-skill-${categoryIndex}-${skillIndex}`,
          title: skillText,
          category: categoryName,
          description: `${categoryName} skill`,
          keywords: [
            skillText,
            categoryName,
            "QA",
            "SDET",
            "Testing",
            "Automation",
          ],
          sectionId: "skills",
        });
      });
    }
  );

  // =========================================
  // EXPERIENCE
  // =========================================

  safeArray(portfolioData?.experience).forEach(
    (job, index) => {
      items.push({
        id: `experience-${index}`,
        title: toText(job?.role) || "Experience",
        category: "Experience",
        description: `${toText(job?.company)} — ${toText(
          job?.location
        )}`,
        keywords: [
          toText(job?.company),
          toText(job?.role),
          toText(job?.location),
          ...safeArray(job?.responsibilities).map(toText),
          ...safeArray(job?.automation).map(toText),
          ...safeArray(job?.impact).map(toText),
        ],
        sectionId: "experience",
      });
    }
  );

  // =========================================
  // PROJECTS
  // =========================================

  safeArray(portfolioData?.projects).forEach(
    (project, index) => {
      items.push({
        id: `project-${toText(project?.id) || index}`,
        title: toText(project?.title) || "Project",
        category: "Project",
        description: toText(project?.description),
        keywords: [
          toText(project?.title),
          toText(project?.description),
          toText(project?.category),
          toText(project?.role),
          toText(project?.architecture),
          ...safeArray(project?.technologies).map(toText),
          ...safeArray(project?.testingScope).map(toText),
          ...safeArray(project?.features).map(toText),
          ...safeArray(project?.challenges).map(toText),
          ...safeArray(project?.solutions).map(toText),
          "QA Automation",
          "SDET",
        ],
        sectionId: "projects",
      });
    }
  );

  // =========================================
  // CERTIFICATIONS
  // =========================================

  safeArray(portfolioData?.certifications).forEach(
    (certification, index) => {
      items.push({
        id: `certification-${
          toText(certification?.id) || index
        }`,
        title:
          toText(certification?.title) || "Certification",
        category: "Certification",
        description: `${toText(
          certification?.provider
        )} — ${toText(certification?.year)}`,
        keywords: [
          toText(certification?.title),
          toText(certification?.provider),
          toText(certification?.year),
          toText(certification?.description),
          ...safeArray(certification?.skills).map(toText),
          ...safeArray(
            certification?.technologiesLearned
          ).map(toText),
          ...safeArray(
            certification?.keyConcepts
          ).map(toText),
        ],
        sectionId: "certifications",
      });
    }
  );

  // =========================================
  // APPLICATION & DOMAIN EXPERIENCE
  // =========================================

  safeArray(portfolioData?.systems).forEach(
    (system, index) => {
      items.push({
        id: `system-${index}`,
        title:
          toText(system?.title) || "Application System",
        category: "Application & Domain Experience",
        description:
          toText(system?.description) ||
          "Application or engineering system",
        keywords: [
          toText(system?.title),
          toText(system?.description),
          ...safeArray(system?.technologies).map(toText),
          "system",
          "application",
          "domain",
          "testing",
          "QA",
          "Banking",
          "ERP",
          "CRM",
          "HRMS",
          "E-Commerce",
          "REST API",
        ],
        sectionId: "systems",
      });
    }
  );

  // =========================================
  // QUALITY ENGINEERING PROCESS
  // =========================================

  safeArray(
    portfolioData?.qualityEngineeringProcess
  ).forEach((stage, index) => {
    items.push({
      id: `qe-process-${index}`,
      title:
        toText(stage?.title) ||
        `QE Stage ${index + 1}`,
      category: "Quality Engineering Process",
      description: toText(stage?.description),
      keywords: [
        toText(stage?.title),
        toText(stage?.description),
        toText(stage?.why),
        toText(stage?.outcome),
        ...safeArray(stage?.tools).map(toText),
        "Quality Engineering",
        "QE",
        "SDET",
      ],
      sectionId: "workflow",
    });
  });

  // =========================================
  // AUTOMATION WORKFLOW
  // =========================================

  safeArray(portfolioData?.automationWorkflow).forEach(
    (stage, index) => {
      items.push({
        id: `workflow-${index}`,
        title:
          toText(stage?.title) ||
          `Automation Stage ${index + 1}`,
        category: "End-to-End QA Automation Workflow",
        description: toText(stage?.description),
        keywords: [
          toText(stage?.title),
          toText(stage?.description),
          ...safeArray(stage?.tools).map(toText),
          "Automation",
          "Testing",
          "SDET",
          "Selenium",
          "Java",
          "TestNG",
          "REST Assured",
          "Postman",
          "Jenkins",
          "Maven",
        ],
        sectionId: "workflow",
      });
    }
  );

  // =========================================
  // QUALITY ENGINEERING
  // =========================================

  safeArray(
    portfolioData?.qualityEngineering
  ).forEach((item, index) => {
    items.push({
      id: `qe-${index}`,
      title:
        toText(item?.title) ||
        `Quality Engineering ${index + 1}`,
      category: "Quality Engineering",
      description: toText(item?.description),
      keywords: [
        toText(item?.title),
        toText(item?.description),
        ...safeArray(item?.tools).map(toText),
        "Quality Engineering",
        "QE",
        "SDET",
      ],
      sectionId: "workflow",
    });
  });

  // =========================================
  // SDET ROADMAP
  // =========================================

  safeArray(portfolioData?.sdetRoadmap).forEach(
    (stage, index) => {
      items.push({
        id: `roadmap-${index}`,
        title:
          toText(stage?.label) ||
          toText(stage?.title) ||
          `Roadmap Stage ${index + 1}`,
        category: "SDET Roadmap",
        description: toText(stage?.description),
        keywords: [
          toText(stage?.stage),
          toText(stage?.label),
          toText(stage?.title),
          toText(stage?.status),
          toText(stage?.description),
          ...safeArray(stage?.technologies).map(toText),
          ...safeArray(stage?.practicalProjects).map(toText),
          "SDET",
          "Roadmap",
        ],
        sectionId: "goals",
      });
    }
  );

  // =========================================
  // CURRENTLY BUILDING
  // =========================================

  safeArray(portfolioData?.currentlyBuilding).forEach(
    (technology, index) => {
      const technologyText = toText(
        technology?.title ||
          technology?.name ||
          technology
      );

      items.push({
        id: `building-${index}`,
        title:
          technologyText ||
          `Currently Building ${index + 1}`,
        category: "Currently Building",
        description:
          "Currently developing knowledge and practical capability",
        keywords: [
          technologyText,
          "Currently Learning",
          "Currently Building",
          "SDET",
          "Quality Engineering",
        ],
        sectionId: "goals",
      });
    }
  );

  // =========================================
  // CONTACT
  // =========================================

  items.push({
    id: "contact",
    title: "Contact",
    category: "Contact",
    description:
      "Get in touch for QA Automation, SDET and Quality Engineering opportunities.",
    keywords: [
      "contact",
      "email",
      "reach",
      "hire",
      "opportunity",
      "opportunities",
      "QA",
      "SDET",
    ],
    sectionId: "contact",
  });

  return items.filter((item) => item.title);
}

// =========================================
// SEARCH SCORING
// =========================================

function calculateSearchScore(item, query) {
  const normalizedQuery = normalizeText(query);

  if (!normalizedQuery) {
    return 0;
  }

  const queryWords = normalizedQuery.split(" ");

  const title = normalizeText(item?.title);

  const category = normalizeText(item?.category);

  const description = normalizeText(item?.description);

  const keywords = safeArray(item?.keywords).map(
    normalizeText
  );

  const searchableText = [
    title,
    category,
    description,
    ...keywords,
  ].join(" ");

  let score = 0;

  // Exact title
  if (title === normalizedQuery) {
    score += 100;
  }

  // Title starts with query
  if (title.startsWith(normalizedQuery)) {
    score += 70;
  }

  // Title contains query
  if (title.includes(normalizedQuery)) {
    score += 50;
  }

  // Category
  if (category === normalizedQuery) {
    score += 45;
  }

  if (category.includes(normalizedQuery)) {
    score += 25;
  }

  // Exact keyword
  if (
    keywords.some(
      (keyword) => keyword === normalizedQuery
    )
  ) {
    score += 40;
  }

  // Keyword contains query
  if (
    keywords.some((keyword) =>
      keyword.includes(normalizedQuery)
    )
  ) {
    score += 25;
  }

  // Description
  if (description.includes(normalizedQuery)) {
    score += 15;
  }

  // Individual words
  queryWords.forEach((word) => {
    if (word.length < 2) {
      return;
    }

    if (title.includes(word)) {
      score += 15;
    }

    if (category.includes(word)) {
      score += 10;
    }

    if (
      keywords.some((keyword) =>
        keyword.includes(word)
      )
    ) {
      score += 8;
    }

    if (description.includes(word)) {
      score += 4;
    }
  });

  // QA / SDET relevance
  if (
    ["qa", "sdet", "testing", "automation"].includes(
      normalizedQuery
    )
  ) {
    if (searchableText.includes(normalizedQuery)) {
      score += 10;
    }
  }

  return score;
}

// =========================================
// SEARCH COMPONENT
// =========================================

function PortfolioSearch({ onClose }) {
  const [query, setQuery] = useState("");

  const searchItems = useMemo(() => {
    try {
      return buildSearchItems();
    } catch (error) {
      console.error(
        "Portfolio search index error:",
        error
      );

      return [];
    }
  }, []);

  const results = useMemo(() => {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return [];
    }

    return searchItems
      .map((item) => ({
        ...item,
        score: calculateSearchScore(
          item,
          trimmedQuery
        ),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [query, searchItems]);

  // =========================================
  // ESCAPE KEY + BODY SCROLL LOCK
  // =========================================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        originalOverflow;
    };
  }, [onClose]);

  // =========================================
  // RESULT CLICK
  // =========================================

  const handleResultClick = (sectionId) => {
    onClose?.();

    setTimeout(() => {
      const section =
        document.getElementById(sectionId);

      if (section) {
        const navbarOffset = 90;

        const targetPosition =
          section.getBoundingClientRect().top +
          window.scrollY -
          navbarOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        fixed
        inset-0
        z-[9999]
        bg-slate-950/80
        backdrop-blur-md
        px-4
        pt-24
        md:pt-28
        overflow-y-auto
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -25,
          scale: 0.98,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 0.25 }}
        className="
          max-w-3xl
          mx-auto
          bg-slate-900
          border
          border-cyan-400/20
          rounded-3xl
          shadow-[0_25px_80px_rgba(0,245,255,0.12)]
          overflow-hidden
        "
      >
        {/* SEARCH HEADER */}

        <div className="p-5 md:p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="text-cyan-400 text-xl">
              🔎
            </div>

            <input
              autoFocus
              type="text"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search skills, projects, Selenium, API, Jenkins..."
              className="
                flex-1
                bg-transparent
                outline-none
                text-white
                placeholder:text-gray-500
                text-base
                md:text-lg
              "
            />

            <button
              type="button"
              onClick={() => onClose?.()}
              className="
                text-gray-400
                hover:text-cyan-400
                transition
                text-xl
                px-2
              "
              aria-label="Close search"
            >
              ✕
            </button>
          </div>
        </div>

        {/* SEARCH RESULTS */}

        <div className="max-h-[65vh] overflow-y-auto">
          <AnimatePresence mode="popLayout">
            {query.trim() && results.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-3"
              >
                {results.map((result) => (
                  <motion.button
                    key={result.id}
                    type="button"
                    onClick={() =>
                      handleResultClick(
                        result.sectionId
                      )
                    }
                    whileHover={{ x: 4 }}
                    className="
                      w-full
                      text-left
                      p-4
                      rounded-2xl
                      hover:bg-slate-800
                      transition
                      group
                    "
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-white font-semibold group-hover:text-cyan-400 transition">
                          {result.title}
                        </p>

                        <p className="text-xs text-cyan-400 mt-1 uppercase tracking-wider">
                          {result.category}
                        </p>

                        <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                          {result.description}
                        </p>
                      </div>

                      <span className="text-gray-500 group-hover:text-cyan-400 transition">
                        →
                      </span>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}

            {query.trim() && results.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-10 text-center"
              >
                <p className="text-gray-300 text-lg">
                  No matching results found.
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  Try searching for Java, Selenium, API,
                  Jenkins, Banking, ERP, CRM, HRMS,
                  projects, certifications, or SDET.
                </p>
              </motion.div>
            )}

            {!query.trim() && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8"
              >
                <p className="text-gray-400 text-sm mb-4">
                  Search your portfolio
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Java",
                    "Selenium",
                    "API Testing",
                    "Jenkins",
                    "Banking",
                    "ERP",
                    "CRM",
                    "HRMS",
                    "Projects",
                    "Certifications",
                    "SDET",
                  ].map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() =>
                        setQuery(suggestion)
                      }
                      className="
                        px-3
                        py-2
                        rounded-full
                        bg-slate-800
                        border
                        border-slate-700
                        text-gray-300
                        text-sm
                        hover:border-cyan-400
                        hover:text-cyan-400
                        transition
                      "
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PortfolioSearch;