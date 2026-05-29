import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between px-8 py-5">
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-400 uppercase tracking-wider"
        >
          VIP WHITE
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-lg text-white font-medium">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/servicios" className="hover:text-yellow-400 transition">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/flota" className="hover:text-yellow-400 transition">
              Flota
            </Link>
          </li>
          <li>
            <Link to="/cotizar" className="hover:text-yellow-400 transition">
              Cotizar
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-yellow-400 transition">
              Contacto
            </Link>
          </li>
        </ul>

        {/* BOTON MOBILE */}
        <button
          className="md:hidden text-2xl text-white hover:text-yellow-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes className="text-yellow-400" /> : <FaBars />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-black/95 z-50">
          <ul className="flex flex-col items-center justify-center h-full gap-10 text-xl text-white font-medium">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition py-2 block"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/servicios"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition py-2 block"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="/flota"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition py-2 block"
              >
                Flota
              </Link>
            </li>
            <li>
              <Link
                to="/cotizar"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition py-2 block"
              >
                Cotizar
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition py-2 block"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
