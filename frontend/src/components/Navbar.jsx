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
          className="md:hidden text-2xl text-white hover:text-yellow-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes className="text-yellow-400" /> : <FaBars />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-black/95 z-50 animate-fade-in">
          {/* 👆 CAMBIO: Ahora es 'fixed', flota sobre la página y ocupa el alto restante del celular */}
          <ul className="flex flex-col items-center justify-center h-full gap-10 text-xl text-white font-medium">
            {/* 👆 CAMBIO: Agregamos 'text-white' para que las letras sean 100% blancas y legibles */}
            <li>
              <a
                href="#inicio"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 text-white transition block py-2"
              >
                Inicio
              </a>
            </li>

            <li>
              <a
                href="#servicios"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 text-white transition block py-2"
              >
                Servicios
              </a>
            </li>

            <li>
              <a
                href="#flota"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 text-white transition block py-2"
              >
                Nosotros
              </a>
            </li>

            <li>
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 text-white transition block py-2"
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
