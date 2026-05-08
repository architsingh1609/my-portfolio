import { useState } from "react";

function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/40 backdrop-blur-md z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <h1 className="text-2xl font-bold text-cyan-400">
          Archit.SDET
        </h1>

        <div className="hidden md:flex gap-8">

		<a
		  href="#about"
		  className="hover:text-cyan-400 transition"
		>

		  About

		</a>


		<a
		  href="#skills"
		  className="hover:text-cyan-400 transition"
		>

		  Skills

		</a>


		<a
		  href="#projects"
		  className="hover:text-cyan-400 transition"
		>

		  Projects

		</a>


		<a
		  href="#certifications"
		  className="hover:text-cyan-400 transition"
		>

		  Certifications

		</a>


		<a
		  href="#contact"
		  className="hover:text-cyan-400 transition"
		>

		  Contact

		</a>

        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

    </nav>
  );
}

export default Navbar;