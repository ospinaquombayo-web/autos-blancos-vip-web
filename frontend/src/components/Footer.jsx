// 🛠️ Añadimos FaTiktok para cambiarlo por Twitter
import { FaEnvelope, FaWhatsapp, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import logoMinTic from "../assets/mintic.PNG";
import logoSic from "../assets/sic.PNG";
import logoSuperTransporte from "../assets/supertransporte.PNG";

function Footer() {
  return (
    <footer className="w-full bg-zinc-50 border-t border-zinc-200 pt-16 pb-8 px-8 text-slate-800">
      <div className="max-w-7xl mx-auto">
        
                     {/* 🛠️ BLOQUE SUPERIOR REDISEÑADO: 3 COLUMNAS DISTRIBUIDAS SIMÉTRICAMENTE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-zinc-200 items-center">
          
          {/* COLUMNA 1 (IZQUIERDA): CORREO DE COMUNICACIÓN */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-bold text-sm sm:text-base text-slate-900 tracking-wide uppercase mb-3">
              Correo de comunicación
            </h4>
            <a 
              href="mailto:autosblancos.rs.2025@gmail.com" 
              className="flex items-center gap-2 text-zinc-600 hover:text-blue-600 font-semibold transition duration-300"
            >
              <FaEnvelope className="text-sm text-blue-600 shrink-0" />
              <span>autosblancos.rs.2025@gmail.com</span>
            </a>
          </div>

          {/* COLUMNA 2 (CENTRO): WHATSAPP */}
          <div className="flex flex-col items-center text-center">
            <h4 className="font-bold text-sm sm:text-base text-slate-900 tracking-wide uppercase mb-3">
              WhatsApp
            </h4>
            <a 
              href="https://wa.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-zinc-600 hover:text-emerald-600 font-semibold transition duration-300"
            >
              <FaWhatsapp className="text-base text-emerald-500 shrink-0" />
              <span>321 233 4935</span>
            </a>
          </div>

          {/* COLUMNA 3 (DERECHA): REDES SOCIALES CENTRADAS BAJO EL TÍTULO */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex flex-col items-center text-center">
              <h4 className="font-bold text-sm sm:text-base text-slate-900 tracking-wide uppercase mb-3">
                Síguenos en Redes
              </h4>
              <div className="flex gap-5 text-xl text-zinc-600 items-center justify-center">
                <a 
                  href="https://www.facebook.com/profile.php?id=61585094499234" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:scale-110 transition transform duration-300"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://www.tiktok.com/@autos.blancos.vip?_r=1&_t=ZS-9BY1QvGmLAK" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:scale-110 transition transform duration-300"
                >
                  <FaTiktok />
                </a>
                <a 
                  href="https://www.instagram.com/autosblancos_vipwhitesas01/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 hover:scale-110 transition transform duration-300"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

        </div>

                {/* 🛠️ BLOQUE CENTRAL CON LINKS REALES A LAS ENTIDADES DE VIGILANCIA */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-6 bg-white rounded-2xl shadow-sm border border-zinc-100 max-w-5xl mx-auto my-6 px-6">
          
          {/* LINK SUPERINTENDENCIA DE INDUSTRIA Y COMERCIO (SIC) */}
          <a 
            href="https://sic.gov.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-105 active:scale-95 block shrink-0"
          >
            <img 
              src={logoSic} 
              alt="Superintendencia de Industria y Comercio" 
              className="h-32 md:h-52 w-auto object-contain"
            />
          </a>
          
          {/* LINK MINISTERIO TIC (MinTIC) */}
          <a 
            href="https://mintic.gov.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-105 active:scale-95 block shrink-0"
          >
            <img 
              src={logoMinTic} 
              alt="Vigilado MinTIC Colombia" 
              className="h-24 md:h-36 w-auto object-contain"
            />
          </a>
         
          {/* LINK SUPERINTENDENCIA DE TRANSPORTE (SuperTransporte) */}
          <a 
            href="https://supertransporte.gov.co" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition duration-300 hover:scale-105 active:scale-95 block shrink-0"
          >
            <img 
              src={logoSuperTransporte} 
              alt="Vigilado SuperTransporte" 
              className="h-32 md:h-52 w-auto object-contain"
            />
          </a>

        </div>


        {/* BLOQUE INFERIOR: DERECHOS DE AUTOR */}
        <div className="text-center pt-4 border-t border-zinc-200/60">
          <p className="text-xs font-semibold text-zinc-500 tracking-wider">
            &copy; {new Date().getFullYear()} AUTOS BLANCOS VIP WHITE S.A.S. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
