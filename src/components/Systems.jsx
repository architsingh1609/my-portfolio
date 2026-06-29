function Systems() {

  const systems = [
    "🏦 Banking Applications",
    "🛒 E-Commerce Applications",
    "👨‍💼 Employee Management Systems",
    "🏘 Recommendation Systems",
    "🔗 REST APIs & Backend Services",
    "📊 Automation Frameworks"
  ];

  return (

    <section
      id="systems"
      className="py-24 px-6 bg-slate-950"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-14">

          Systems I've Worked With

        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {systems.map((system, index) => (

            <div
              key={index}
              className="
              bg-slate-900
              border border-slate-800
              rounded-3xl
              p-8
              text-center
              font-semibold

              hover:bg-slate-800
              hover:border-cyan-400
              hover:-translate-y-2
              hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]

              transition-all
              duration-300
              "
            >
              {system}
            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Systems;