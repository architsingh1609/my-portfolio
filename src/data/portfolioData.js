const calculateProfessionalExperience = (experienceList = []) => {
  const today = new Date();

  const parseDate = (dateString) => {
    if (!dateString) {
      return null;
    }

    const date = new Date(`${dateString}T00:00:00`);

    return Number.isNaN(date.getTime()) ? null : date;
  };

  const intervals = experienceList
    .map((experience) => {
      const startDate = parseDate(experience.startDate);

      if (!startDate) {
        return null;
      }

      const endDate = experience.endDate
        ? parseDate(experience.endDate)
        : today;

      if (!endDate || endDate < startDate) {
        return null;
      }

      return {
        start: startDate,
        end: endDate,
      };
    })
    .filter(Boolean)
    .sort(
      (a, b) =>
        a.start.getTime() - b.start.getTime()
    );

  if (intervals.length === 0) {
    return "Less than 1 Month";
  }

  // Merge overlapping or continuous employment periods.
  const mergedIntervals = [];

  intervals.forEach((interval) => {
    const previous =
      mergedIntervals[mergedIntervals.length - 1];

    if (!previous) {
      mergedIntervals.push({
        start: interval.start,
        end: interval.end,
      });

      return;
    }

    if (
      interval.start.getTime() <=
      previous.end.getTime()
    ) {
      if (
        interval.end.getTime() >
        previous.end.getTime()
      ) {
        previous.end = interval.end;
      }

      return;
    }

    mergedIntervals.push({
      start: interval.start,
      end: interval.end,
    });
  });

  let totalMonths = 0;

  mergedIntervals.forEach(({ start, end }) => {
    let months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    if (end.getDate() < start.getDate()) {
      months -= 1;
    }

    totalMonths += Math.max(months, 0);
  });

  if (totalMonths <= 0) {
    return "Less than 1 Month";
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const result = [];

  if (years > 0) {
    result.push(
      `${years} ${years === 1 ? "Year" : "Years"}`
    );
  }

  if (months > 0) {
    result.push(
      `${months} ${months === 1 ? "Month" : "Months"}`
    );
  }

  return result.join(" ");
};

const portfolioData = {
  // =========================================
  // PERSONAL INFORMATION
  // =========================================

  name: "Archit Singh",

  title:
    "QA Automation Engineer | SDET | Selenium | API Testing",

  email: "architsingh1609@gmail.com",

  location: "Mumbai, India",

  github:
    "https://github.com/architsingh1609",

  linkedin:
    "https://linkedin.com/in/qa1503",

  resume:
    "/resume/Archit_Singh_SDET_QA_Engineer_Resume.pdf",

  // =========================================
  // HERO
  // =========================================

  hero: {
    eyebrow: "QA Automation Engineer • SDET",

    heading: "Hello, I'm Archit Singh",

    tagline:
      "Automation With Logic. Testing With Purpose.",

    description:
      "QA Automation Engineer focused on building reliable and maintainable testing solutions across UI automation, API validation, regression testing, and CI/CD workflows.",

    technologies:
      "Java • Selenium WebDriver • TestNG • REST Assured • Jenkins • Git • SQL",

    location: "Mumbai",

    availability: "Open to Opportunities",

    primaryCta: "Download Resume",

    secondaryCta: "Contact Me",

    github:
      "https://github.com/architsingh1609",

    linkedin:
      "https://linkedin.com/in/qa1503",
  },

  // =========================================
  // ENGINEERING SNAPSHOT
  // =========================================

  engineeringSnapshot: {
    title: "QA Automation at a Glance",

    description:
      "A quick overview of my experience, automation stack, testing capabilities, and Quality Engineering focus.",

    cards: [
      {
        label: "Professional Experience",

        value: "auto",

        description:
          "QA & Automation Engineering",

        type: "experience",
      },

      {
        label: "QA Projects",

        value: "8+",

        description:
          "Automation, API & Manual Testing",
      },

      {
        label: "UI Automation",

        value:
          "Selenium + Java + TestNG",

        description:
          "Web application automation",
      },

      {
        label: "API Automation",

        value:
          "REST Assured + Postman",

        description:
          "API validation & automation",
      },

      {
        label: "CI/CD",

        value:
          "Jenkins + GitHub",

        description:
          "Automated execution workflows",
      },

      {
        label: "Database",

        value: "SQL",

        description:
          "Database testing & validation",
      },

      {
        label: "Testing",

        value:
          "Functional • Regression • Integration • API",

        description:
          "End-to-end quality validation",
      },

      {
        label: "Target",

        value:
          "SDET / Quality Engineering",

        description:
          "Automation & engineering-focused QA",
      },
    ],
  },

  // =========================================
  // ENGINEERING PROFILE
  // =========================================

  engineeringProfile: {
    title:
      "How I Think About Quality",

    description:
      "A quality-focused engineering approach built around automation, reliability, risk, and continuous improvement.",

    aboutTitle:
      "Building confidence through better testing.",

    about:
      "I am a QA Automation Engineer focused on building reliable and maintainable testing solutions. I work across UI automation, API validation, test design, regression testing, and CI/CD workflows using Selenium, Java, TestNG, Postman, REST Assured, and related QA tools. My approach goes beyond finding defects — I focus on engineering quality into the software development lifecycle through structured validation, reusable automation, and practical problem solving.",

    name: "Archit Singh",

    role:
      "QA Automation Engineer | SDET | Selenium | API Testing",

    focusTitle:
      "Engineering Focus",

    primaryRole:
      "QA Automation Engineer",

    sdetFocus:
      "SDET Focus",

    engineeringAreas: [
      "UI Automation",
      "API Testing",
      "CI/CD",
      "SQL",
      "Test Automation",
      "Quality Engineering",
    ],

    approach:
      "Risk-aware testing, maintainable automation, reliable validation, and continuous improvement.",
  },

  // =========================================
  // QUALITY ENGINEERING PHILOSOPHY
  // =========================================

  qualityPhilosophy: {
    title:
      "Quality Engineering Philosophy",

    quote:
      "Quality is engineered into the product — not tested after release.",

    principles: [
      {
        number: "01",

        title:
          "Quality by Design",

        description:
          "Quality should be considered throughout the product lifecycle, not treated as a final-stage activity.",
      },

      {
        number: "02",

        title:
          "Automation with Purpose",

        description:
          "Automation should improve coverage, feedback speed, reliability, and maintainability.",
      },

      {
        number: "03",

        title:
          "Engineering Mindset",

        description:
          "I approach testing through systems, risks, data, tools, and continuous improvement.",
      },
    ],
  },

  // =========================================
  // EXPERIENCE
  // =========================================

  experience: [
    {
      id:
        "metaphi-innovations",

      current: true,

      company:
        "Metaphi Innovations Pvt. Ltd.",

      role:
        "QA Automation Engineer",

      startDate:
        "2026-04-26",

      endDate: null,

      location:
        "Mumbai, India",

      duration:
        "auto",

      responsibilities: [
        "Perform manual and automation testing of web applications.",
        "Create and execute test cases, test scenarios, and bug reports.",
        "Validate APIs using Postman and backend testing techniques.",
        "Participate in regression testing and release verification activities.",
        "Work with Selenium WebDriver, TestNG, GitHub and CI/CD workflows.",
      ],

      automation: [
        "Selenium WebDriver",
        "TestNG",
        "Java",
        "API Testing",
        "CI/CD",
        "GitHub",
      ],
    },

    {
      id:
        "bharatskillz",

      current: false,

      company:
        "BharatSkillz (QA Division)",

      role:
        "Quality Assurance Specialist",

      startDate:
        "2025-03-25",

      endDate:
        "2026-04-25",

      location:
        "Gurugram, Haryana, India · On-site",

      duration:
        "auto",

      responsibilities: [
        "Performed manual testing of web applications to ensure functionality and quality.",
        "Designed, reviewed, and executed test cases based on business requirements.",
        "Identified, documented, and tracked software defects using bug reporting tools.",
        "Conducted functional, regression, smoke, and sanity testing across multiple releases.",
        "Collaborated with developers and stakeholders to resolve issues and improve product quality.",
        "Participated in requirement analysis, test planning, and test execution activities.",
        "Verified bug fixes and maintained detailed test documentation.",
        "Worked in an Agile development environment and contributed to sprint testing activities.",
      ],

      automation: [
        "Manual Testing",
        "Functional Testing",
        "Regression Testing",
        "Smoke Testing",
        "Sanity Testing",
        "Test Case Design",
        "Defect Management",
        "Bug Reporting",
        "Agile Testing",
      ],
    },
  ],

  // =========================================
  // SKILLS
  // =========================================

  skills: {
    coreExpertise: [
      "Java",
      "Selenium WebDriver",
      "TestNG",
      "REST Assured",
      "Postman",
      "Maven",
      "Jenkins",
      "Git",
      "GitHub",
      "SQL",
      "API Testing",
      "Page Object Model (POM)",
    ],

    testingExpertise: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "Integration Testing",
      "Cross Browser Testing",
      "Database Testing",
      "Test Case Design",
      "Test Planning",
      "Defect Management",
      "Bug Reporting",
      "Bug Life Cycle",
      "Risk-Based Testing",
    ],

    workingKnowledge: [
      "JUnit",
      "Cucumber BDD",
      "Newman CLI",
      "SOAP UI",
      "CI/CD Pipelines",
      "Allure Reports",
    ],

    currentlyLearning: [
      "Playwright",
      "Docker",
      "Advanced API Automation",
      "Advanced CI/CD",
      "Cloud Testing",
      "Performance Engineering",
    ],
  },

  // =========================================
  // PROJECTS
  // =========================================

  projects: [
    {
      id:
        "banking-system",

      title:
        "Banking System",

      category:
        "Python Application",

      description:
        "A Python-based banking application implementing core banking operations with structured validation and data handling.",

      technologies: [
        "Python",
        "OOP",
        "File Handling",
        "Exception Handling",
      ],

      highlights: [
        "Account creation and management",
        "Deposit and withdrawal operations",
        "Balance validation",
        "Transaction handling",
        "Exception handling",
      ],

      github:
        "https://github.com/architsingh1609",
    },

    {
      id:
        "contact-management",

      title:
        "Contact Management System",

      category:
        "Python Application",

      description:
        "A contact management application using Python and JSON for storing, updating, searching, and deleting contact information.",

      technologies: [
        "Python",
        "JSON",
        "File Handling",
      ],

      highlights: [
        "Create contacts",
        "Update contact information",
        "Search contacts",
        "Delete contacts",
        "JSON-based persistence",
      ],

      github:
        "https://github.com/architsingh1609",
    },

    {
      id:
        "covid-vaccination-api",

      title:
        "COVID-19 Vaccination Certificate API Automation",

      category:
        "API Automation",

      description:
        "API automation project created to validate COVID-19 vaccination certificate services using Java and REST Assured.",

      technologies: [
        "Java",
        "REST Assured",
        "TestNG",
        "Maven",
        "Postman",
      ],

      highlights: [
        "API request validation",
        "Response status validation",
        "Response body validation",
        "JSON response validation",
        "Negative API testing",
        "Automated API test execution",
      ],

      github:
        "https://github.com/architsingh1609",
    },

    {
      id:
        "employee-management-api",

      title:
        "Employee Management System API Testing",

      category:
        "API Testing",

      description:
        "API testing project focused on validating employee management endpoints using Postman and JSON-based request and response validation.",

      technologies: [
        "Postman",
        "REST API",
        "JSON",
        "API Testing",
      ],

      highlights: [
        "GET request validation",
        "POST request validation",
        "PUT request validation",
        "DELETE request validation",
        "Status code validation",
        "Response validation",
      ],

      github:
        "https://github.com/architsingh1609",
    },

    {
      id:
        "neighborfit",

      title:
        "NeighborFit",

      category:
        "Software Engineering Project",

      description:
        "A location-based project developed to help users identify neighborhoods based on relevant preferences and requirements.",

      technologies: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
      ],

      highlights: [
        "User preference handling",
        "Neighborhood matching",
        "Responsive interface",
        "Dynamic content",
        "Component-based development",
      ],

      github:
        "https://github.com/architsingh1609/NeighborFit/tree/main",
    },

    {
      id:
        "anpr-web-application",

      title:
        "ANPR Web Application QA",

      category:
        "Quality Assurance",

      description:
        "Quality assurance testing of an Automatic Number Plate Recognition web application including login, reports, settings, and user management workflows.",

      technologies: [
        "Manual Testing",
        "Functional Testing",
        "Regression Testing",
        "Docker",
        "Test Case Design",
      ],

      highlights: [
        "Login testing",
        "Report module testing",
        "Settings module testing",
        "User management testing",
        "Functional validation",
        "Defect identification",
      ],

      github:
        "https://github.com/architsingh1609",
    },

    {
      id:
        "selenium-automation-framework",

      title:
        "Selenium Automation Framework",

      category:
        "UI Automation",

      description:
        "Web automation framework using Selenium WebDriver, Java, TestNG, Maven, and Page Object Model principles.",

      technologies: [
        "Java",
        "Selenium WebDriver",
        "TestNG",
        "Maven",
        "POM",
        "Git",
      ],

      highlights: [
        "Reusable page objects",
        "TestNG test execution",
        "Explicit waits",
        "Element interaction",
        "Assertions",
        "Regression automation",
      ],

      github:
        "https://github.com/architsingh1609",
    },

    {
      id:
        "api-automation-framework",

      title:
        "API Automation Framework",

      category:
        "API Automation",

      description:
        "Reusable API automation framework focused on validating REST endpoints, response payloads, status codes, and API workflows.",

      technologies: [
        "Java",
        "REST Assured",
        "TestNG",
        "Maven",
        "JSON",
      ],

      highlights: [
        "Reusable API methods",
        "Request validation",
        "Response validation",
        "Status code assertions",
        "JSON validation",
        "Automated regression execution",
      ],

      github:
        "https://github.com/architsingh1609",
    },
  ],

  // =========================================
  // TESTING SYSTEMS
  // =========================================

  systems: {
    title:
      "Testing Systems & Automation Architecture",

    description:
      "The tools, frameworks, and engineering practices I use to build reliable and maintainable QA workflows.",

    categories: [
      {
        title:
          "UI Automation",

        tools: [
          "Selenium WebDriver",
          "Java",
          "TestNG",
          "Maven",
          "Page Object Model",
        ],

        description:
          "Automated browser-based testing using reusable and maintainable test architecture.",
      },

      {
        title:
          "API Automation",

        tools: [
          "REST Assured",
          "Postman",
          "Newman",
          "JSON",
        ],

        description:
          "API validation covering functional workflows, response validation, status codes, and data verification.",
      },

      {
        title:
          "CI/CD",

        tools: [
          "Jenkins",
          "Git",
          "GitHub",
          "Maven",
        ],

        description:
          "Continuous test execution integrated into development and deployment workflows.",
      },

      {
        title:
          "Database Testing",

        tools: [
          "SQL",
          "Data Validation",
          "CRUD Testing",
        ],

        description:
          "Backend data validation and database testing to ensure application and database consistency.",
      },

      {
        title:
          "Test Management",

        tools: [
          "Test Cases",
          "Test Scenarios",
          "Bug Reports",
          "Regression Suites",
        ],

        description:
          "Structured test planning, execution, defect reporting, and regression management.",
      },

      {
        title:
          "Performance & Reliability",

        tools: [
          "JMeter",
          "Load Testing",
          "Response Validation",
        ],

        description:
          "Basic performance validation and reliability-focused testing workflows.",
      },
    ],
  },

  // =========================================
  // QA PROCESS
  // =========================================

  qaProcess: {
    title:
      "Quality Assurance Process",

    description:
      "A structured testing lifecycle from requirement analysis through release validation.",

    steps: [
      {
        number: "01",

        title:
          "Requirement Analysis",

        description:
          "Understand business requirements, acceptance criteria, risks, and testable conditions.",
      },

      {
        number: "02",

        title:
          "Test Planning",

        description:
          "Define test scope, scenarios, environments, test data, priorities, and execution strategy.",
      },

      {
        number: "03",

        title:
          "Test Case Design",

        description:
          "Create positive, negative, boundary, functional, regression, and integration test cases.",
      },

      {
        number: "04",

        title:
          "Test Execution",

        description:
          "Execute manual and automated tests across supported environments and workflows.",
      },

      {
        number: "05",

        title:
          "Defect Management",

        description:
          "Document defects with reproducible steps, expected results, actual results, and evidence.",
      },

      {
        number: "06",

        title:
          "Regression Testing",

        description:
          "Validate existing functionality after changes, fixes, and new feature development.",
      },

      {
        number: "07",

        title:
          "Release Validation",

        description:
          "Perform smoke, sanity, and final verification before release or deployment.",
      },

      {
        number: "08",

        title:
          "Continuous Improvement",

        description:
          "Analyze failures, improve automation coverage, reduce repetitive work, and strengthen quality processes.",
      },
    ],
  },

  // =========================================
  // AUTOMATION WORKFLOW
  // =========================================

  automationWorkflow: {
    title:
      "Automation Workflow",

    description:
      "From test design to continuous execution, the automation workflow focuses on fast feedback and maintainability.",

    stages: [
      {
        number: "01",

        title:
          "Identify Candidates",

        description:
          "Select stable, repetitive, high-value scenarios suitable for automation.",
      },

      {
        number: "02",

        title:
          "Design Framework",

        description:
          "Create reusable page objects, utilities, test data, configuration, and reporting structures.",
      },

      {
        number: "03",

        title:
          "Develop Tests",

        description:
          "Implement maintainable automation using Selenium, Java, TestNG, and supporting tools.",
      },

      {
        number: "04",

        title:
          "Validate Results",

        description:
          "Use assertions, logs, reports, and failure analysis to validate test outcomes.",
      },

      {
        number: "05",

        title:
          "Integrate CI/CD",

        description:
          "Execute automated suites through Jenkins and version-controlled GitHub workflows.",
      },

      {
        number: "06",

        title:
          "Maintain & Improve",

        description:
          "Update tests with application changes and continuously improve coverage, reliability, and execution speed.",
      },
    ],
  },

  // =========================================
  // SDET ROADMAP
  // =========================================

  sdetRoadmap: {
    title:
      "SDET Engineering Roadmap",

    description:
      "The technical areas I am developing to move from QA Automation toward a stronger Software Development Engineer in Test profile.",

    phases: [
      {
        number: "01",

        title:
          "Core Programming",

        status:
          "Strong",

        technologies: [
          "Java",
          "OOP",
          "Collections",
          "Exception Handling",
          "File Handling",
        ],
      },

      {
        number: "02",

        title:
          "Automation Engineering",

        status:
          "Strong",

        technologies: [
          "Selenium",
          "TestNG",
          "POM",
          "Maven",
          "WebDriver",
        ],
      },

      {
        number: "03",

        title:
          "API Engineering",

        status:
          "Strong",

        technologies: [
          "REST Assured",
          "Postman",
          "JSON",
          "Newman",
        ],
      },

      {
        number: "04",

        title:
          "CI/CD Engineering",

        status:
          "Developing",

        technologies: [
          "Jenkins",
          "Git",
          "GitHub",
          "Maven",
        ],
      },

      {
        number: "05",

        title:
          "Advanced Automation",

        status:
          "Learning",

        technologies: [
          "Playwright",
          "Advanced API Automation",
          "Docker",
          "Grid",
        ],
      },

      {
        number: "06",

        title:
          "Quality Engineering",

        status:
          "Learning",

        technologies: [
          "Cloud Testing",
          "Performance Engineering",
          "Test Architecture",
          "Observability",
        ],
      },
    ],
  },

  // =========================================
  // CERTIFICATIONS
  // =========================================

  certifications: [
    {
      title:
        "Web and Mobile Testing with Selenium",

      provider:
        "University of Minnesota",

      date:
        "December 2024",

      category:
        "Software Testing",

      skills: [
        "Selenium",
        "Web Testing",
        "Mobile Testing",
      ],
    },

    {
      title:
        "Foundations of Software Testing and Validation",

      provider:
        "University of Leeds",

      date:
        "April 2025",

      category:
        "Software Testing",

      skills: [
        "Software Testing",
        "Validation",
        "Test Design",
      ],
    },

    {
      title:
        "Understanding Cloud Fundamentals",

      provider:
        "LinkedIn Learning",

      date:
        "January 2025",

      category:
        "Cloud",

      skills: [
        "Cloud Fundamentals",
        "Cloud Concepts",
      ],
    },

    {
      title:
        "Introduction to Web Design and Development",

      provider:
        "Coursera",

      date:
        "February 2025",

      category:
        "Web Development",

      skills: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },

    {
      title:
        "SQL for Data Science",

      provider:
        "Great Learning Academy",

      date:
        "January 2025",

      category:
        "Database",

      skills: [
        "SQL",
        "Data Analysis",
        "Database Concepts",
      ],
    },
  ],

  // =========================================
  // CONTACT
  // =========================================

  contact: {
    title:
      "Let's Build Better Quality",

    description:
      "Interested in QA Automation, SDET opportunities, or testing engineering projects? Let's connect.",

    email:
      "architsingh1609@gmail.com",

    location:
      "Mumbai, India",

    github:
      "https://github.com/architsingh1609",

    linkedin:
      "https://linkedin.com/in/qa1503",

    resume:
      "/resume/Archit_Singh_SDET_QA_Engineer_Resume.pdf",
  },

  // =========================================
  // FOOTER
  // =========================================

  footer: {
    copyright:
      "Archit Singh. All rights reserved.",

    builtWith:
      "React & Tailwind CSS",

    backToTop:
      "Back to top",
  },
};

// =========================================
// CALCULATED DATA
// =========================================

portfolioData.engineeringSnapshot.cards =
  portfolioData.engineeringSnapshot.cards.map(
    (card) => {
      if (card.type === "experience") {
        return {
          ...card,
          value: calculateProfessionalExperience(
            portfolioData.experience
          ),
        };
      }

      return card;
    }
  );

portfolioData.professionalExperience =
  calculateProfessionalExperience(
    portfolioData.experience
  );

export default portfolioData;