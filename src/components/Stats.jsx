function Stats() {

  const highlights = [
    " SDET QA Engineer at Metaphi",
    " 8+ QA Projects",
    " Selenium + TestNG + Java",
    " API Testing & Automation",
    " Open to QA Automation & SDET Opportunities"
  ];

  return (

    <section className="py-16 px-6 bg-slate-950">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Professional Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {highlights.map((item, index) => (

            <div
              key={index}
              className="
              bg-slate-900
              border border-slate-800
              rounded-3xl
              p-6

              hover:border-cyan-400
              hover:-translate-y-2
              hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]

              transition-all
              duration-300
              "
            >

              <p className="text-lg text-gray-300 font-medium">
                {item}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default Stats;