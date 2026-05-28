import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between px-8 py-5">
        {/* LOGO */}
        <h1 className="text-2xl font-bold text-yellow-400">VIP WHITE</h1>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li>
            <a href="#inicio" className="hover:text-yellow-400 transition">
              Inicio
            </a>
          </li>

          <li>
            <a href="#servicios" className="hover:text-yellow-400 transition">
              Servicios
            </a>
          </li>

          <li>
            <a href="#flota" className="hover:text-yellow-400 transition">
              Nosotros
            </a>
          </li>

          <li>
            <a href="#contacto" className="hover:text-yellow-400 transition">
              Contacto
            </a>
          </li>
        </ul>

        {/* BOTON MOBILE */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col items-center gap-8 py-10 text-xl">
            <li>
              <a
                href="#inicio"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Inicio
              </a>
            </li>

            <li>
              <a
                href="#servicios"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Servicios
              </a>
            </li>

            <li>
              <a
                href="#flota"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Nosotros
              </a>
            </li>

            <li>
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
