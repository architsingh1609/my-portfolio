function Systems() {
  const systems = [
    {
      icon: "🏦",
      title: "Banking Websites",
      description:
        "Worked with banking web applications covering account creation, customer details, account information, authentication, and transaction-related workflows.",
    },
    {
      icon: "🏢",
      title: "ERP Systems",
      description:
        "Worked with ERP applications and validated business workflows, data handling, user operations, and functional requirements across different application modules.",
    },
    {
      icon: "👥",
      title: "CRM Systems",
      description:
        "Worked with CRM applications involving customer information, records, business workflows, data validation, and functional testing of user-facing features.",
    },
    {
      icon: "👨‍💼",
      title: "HRMS Applications",
      description:
        "Worked with HRMS applications covering employee information, employee-related workflows, data validation, and functional and regression testing.",
    },
    {
      icon: "🛒",
      title: "E-Commerce Applications",
      description:
        "Worked with end-to-end e-commerce workflows including product selection, cart operations, checkout, order processing, and functional validation.",
    },
    {
      icon: "🔗",
      title: "REST APIs & Backend Services",
      description:
        "Validated API endpoints, authentication, CRUD operations, status codes, JSON responses, request and response data, and backend service behavior.",
    },
  ];

  return (
    <section
      id="systems"
      className="bg-[var(--bg-primary)] px-6 py-24 text-[var(--text-primary)] transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-[var(--border-light)] bg-[var(--bg-card)] p-8 shadow-[var(--shadow-soft)] transition-colors duration-300 md:p-12">
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Domain & Engineering Exposure
          </p>

          <h2 className="text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Systems I've Worked With
          </h2>

          <div className="mt-4 h-1 w-32 rounded-full bg-[var(--accent)]" />

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[var(--text-secondary)]">
            Experience testing different business applications and technology
            layers, including banking websites, ERP, CRM, HRMS, e-commerce
            applications, REST APIs, and backend services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <div
              key={system.title}
              className="group min-h-[230px] rounded-3xl border border-[var(--border-light)] bg-[var(--bg-card-soft)] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--border-accent)] hover:bg-[var(--bg-card)] hover:shadow-[var(--shadow-medium)]"
            >
              <div className="mb-6 text-4xl transition-transform duration-300 group-hover:scale-110">
                {system.icon}
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                {system.title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Systems;