import portfolioData from "../data/portfolioData";

// =========================================
// EXPERIENCE CALCULATOR
// =========================================

function calculateTotalExperience(experience) {
  if (!experience || experience.length === 0) {
    return "0 Months";
  }

  let totalMonths = 0;

  experience.forEach((job) => {
    if (!job.startDate) return;

    const start = new Date(`${job.startDate}T00:00:00`);

    const end = job.endDate
      ? new Date(`${job.endDate}T00:00:00`)
      : new Date();

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return;
    }

    let months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    // Do not count the current month as complete
    // until the starting day has been reached.
    if (end.getDate() < start.getDate()) {
      months -= 1;
    }

    totalMonths += Math.max(months, 0);
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} Month${months !== 1 ? "s" : ""}`;
  }

  if (months === 0) {
    return `${years}+ Year${years !== 1 ? "s" : ""}`;
  }

  return `${years} Year${years !== 1 ? "s" : ""} ${months} Month${
    months !== 1 ? "s" : ""
  }`;
}

// =========================================
// ENGINEERING SNAPSHOT DATA
// =========================================

function getSnapshotItems(totalExperience) {
  return [
    {
      label: "Professional Experience",
      value: totalExperience,
      description: "QA & Automation Engineering",
    },
    {
      label: "QA Projects",
      value: "8+",
      description: "Automation, API & Manual Testing",
    },
    {
      label: "UI Automation",
      value: "Selenium + Java + TestNG",
      description: "Web application automation",
    },
    {
      label: "API Automation",
      value: "REST Assured + Postman",
      description: "API validation & automation",
    },
    {
      label: "CI/CD",
      value: "Jenkins + GitHub",
      description: "Automated execution workflows",
    },
    {
      label: "Database",
      value: "SQL",
      description: "Database testing & validation",
    },
    {
      label: "Testing",
      value: "Functional • Regression • Integration • API",
      description: "End-to-end quality validation",
    },
    {
      label: "Target",
      value: "SDET / Quality Engineering",
      description: "Automation & engineering-focused QA",
    },
  ];
}

// =========================================
// ENGINEERING SNAPSHOT
// =========================================

function Stats() {
  const totalExperience = calculateTotalExperience(
    portfolioData.experience
  );

  const snapshotItems = getSnapshotItems(totalExperience);

  return (
    <section
      id="engineering-snapshot"
      className="py-20 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm font-semibold mb-3">
            Engineering Snapshot
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            QA Automation at a Glance
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-base md:text-lg leading-7">
            A quick overview of my experience, automation stack, testing
            capabilities, and Quality Engineering focus.
          </p>
        </div>

        {/* =========================================
            SNAPSHOT CARDS
        ========================================= */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {snapshotItems.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="
                group
                relative
                bg-slate-900
                border border-slate-800
                rounded-3xl
                p-6
                min-h-[190px]
                flex
                flex-col
                justify-between
                overflow-hidden
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                transition-all
                duration-300
              "
            >
              {/* =========================================
                  CARD GLOW
              ========================================= */}

              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-32
                  h-32
                  rounded-full
                  bg-cyan-400/5
                  blur-2xl
                  group-hover:bg-cyan-400/10
                  transition-all
                  duration-300
                "
              />

              {/* =========================================
                  CARD CONTENT
              ========================================= */}

              <div className="relative z-10">
                <p className="text-sm text-cyan-400 font-semibold uppercase tracking-wider mb-3">
                  {item.label}
                </p>

                <h3
                  className="
                    text-xl
                    md:text-2xl
                    font-bold
                    text-white
                    leading-snug
                    break-words
                  "
                >
                  {item.value}
                </h3>
              </div>

              <p className="relative z-10 text-gray-400 text-sm mt-5 leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;