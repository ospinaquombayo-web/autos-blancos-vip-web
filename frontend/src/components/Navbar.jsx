import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// 🛠️ 1. Importamos la imagen de tu logo corporativo
import logoEmpresa from "../assets/logo.png"; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      {/* 🛠️ Reducimos py-2 para que la barra traslúcida sea delgada y compacta */}
      <div className="flex items-center justify-between px-8 py-2">
        
        {/* 🛠️ CONTENEDOR EQUILIBRADO: BARRA DELGADA, LOGO Y LETRAS GRANDES */}
        <Link to="/" className="flex items-center gap-3 group">
          {/* Ajustamos a h-14: una escala perfecta que no estira la barra superior */}
          <img 
            src={logoEmpresa} 
            alt="Autos Blancos S.A.S Logo" 
            className="h-14 w-auto object-contain transition duration-300 group-hover:scale-105"
          />
          {/* Centrado vertical estricto con leading-tight */}
          <div className="flex flex-col text-left justify-center leading-tight">
            {/* Letras más grandes y legibles sin alterar el alto de la barra */}
            <span className="text-base font-black text-slate-900 tracking-wider uppercase">
              Autos Blancos
            </span>
            <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent tracking-widest uppercase mt-0.5">
              VIP White S.A.S
            </span>
          </div>
        </Link>

        {/* MENU DESKTOP - TEXTO OSCURO PARA ALTA LECTURABILIDAD */}
        <ul className="hidden md:flex gap-8 text-lg text-slate-800 font-semibold">
          <li>
            <Link to="/" className="hover:text-blue-600 transition duration-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/servicios" className="hover:text-blue-600 transition duration-300">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/flota" className="hover:text-blue-600 transition duration-300">
              Flota
            </Link>
          </li>
          <li>
            <Link to="/cotizar" className="hover:text-blue-600 transition duration-300">
              Cotizar
            </Link>
          </li>
          <li>
            <Link to="/contacto" className="hover:text-blue-600 transition duration-300">
              Contacto
            </Link>
          </li>
        </ul>

        {/* BOTON MOBILE */}
        <button
          className="md:hidden text-2xl text-slate-800 hover:text-blue-600 transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes className="text-blue-600" /> : <FaBars />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="fixed top-[69px] left-0 w-full h-[calc(100vh-69px)] bg-white z-50 border-t border-slate-200">
          <ul className="flex flex-col items-center justify-center h-full gap-10 text-xl text-slate-800 font-semibold">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition duration-300 py-2 block">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/servicios" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition duration-300 py-2 block">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/flota" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition duration-300 py-2 block">
                Flota
              </Link>
            </li>
            <li>
              <Link to="/cotizar" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition duration-300 py-2 block">
                Cotizar
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={() => setMenuOpen(false)} className="hover:text-blue-600 transition duration-300 py-2 block">
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
