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
    <section id="systems" className="py-24 px-6">
      <div className="glass-card max-w-7xl mx-auto p-8 md:p-12">
        {/* Heading */}
        <div className="mb-14">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Domain & Engineering Exposure
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
            Systems I've Worked With
          </h2>

          <div
            className="
              mt-4
              w-32
              h-1
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
            "
          />

          <p className="mt-6 text-gray-400 text-lg leading-8 max-w-4xl">
            Experience testing different business applications and technology
            layers, including banking websites, ERP, CRM, HRMS, e-commerce
            applications, REST APIs, and backend services.
          </p>
        </div>

        {/* Systems */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((system) => (
            <div
              key={system.title}
              className="
                group
                bg-slate-900
                border border-slate-800
                rounded-3xl
                p-8
                min-h-[230px]
                hover:bg-slate-800
                hover:border-cyan-400
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                  text-4xl
                  mb-6
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {system.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-xl
                  font-bold
                  text-white
                  group-hover:text-cyan-400
                  transition-colors
                  duration-300
                "
              >
                {system.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-400 leading-7">
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