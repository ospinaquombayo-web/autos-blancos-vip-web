import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaBuilding } from "react-icons/fa";
import fotoOficina from "../assets/oficina.jpg";

function Contacto() {
  return (
    <section id="contacto" className="px-6 sm:px-8 py-24 bg-gradient-to-br from-slate-100 via-white to-blue-50/70 text-slate-900 relative overflow-hidden">
      {/* 🔮 REFLEJOS DE LUZ DETRÁS DEL CRISTAL (EFECTO ESPEJO) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-blue-500/20 blur-[90px]"></div>
        <div className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-cyan-400/20 blur-[100px]"></div>
        <div className="absolute top-[45%] left-[45%] w-64 h-64 rounded-full bg-emerald-400/15 blur-[90px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* ENCABEZADO VIP */}
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-bold uppercase tracking-widest text-xs block mb-2">
              Canales Oficiales de Atención
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
              Contáctanos
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* COLUMNA IZQUIERDA: PANEL CRISTAL ESPEJO CON DATOS */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(31,38,135,0.08)] rounded-3xl p-6 sm:p-10 flex flex-col justify-between space-y-8 text-left">
              <div>
                <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  AUTOS BLANCOS{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500">
                    VIP WHITE
                  </span>{" "}
                  S.A.S
                </h4>
                <p className="text-slate-600 text-sm sm:text-base mt-3 font-medium leading-relaxed text-justify">
                  Visítanos en nuestra sede administrativa o comunícate directamente con nuestro equipo logístico para coordinar tus rutas empresariales, escolares y turísticas.
                </p>
              </div>

              {/* TARJETAS INTERNAS TRANSLÚCIDAS */}
              <div className="space-y-4">
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white hover:border-emerald-400/60 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Línea Directa WhatsApp
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-800 group-hover:text-emerald-600 transition-colors">
                      +57 321 233 4935
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:autosblancos.rs.2025@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white hover:border-blue-400/60 shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-3.5 rounded-xl bg-blue-600/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Correo Corporativo
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors truncate block">
                      autosblancos.rs.2025@gmail.com
                    </span>
                  </div>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-sm">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-600 shrink-0">
                      <FaMapMarkerAlt className="text-lg" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Sede Principal
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-800">
                        Calle 7 # 11-04 • Melgar, Tolima
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white shadow-sm">
                    <div className="p-3 rounded-xl bg-slate-900/5 text-slate-700 shrink-0">
                      <FaClock className="text-lg" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                        Disponibilidad
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-800">
                        Atención 24/7
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* COLUMNA DERECHA: FOTO DE LA OFICINA + MAPA CON DIRECCIÓN EXACTA */}
            <div className="flex flex-col gap-6">
              
              {/* TARJETA DE FOTO DE LA OFICINA */}
              <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(31,38,135,0.08)] rounded-3xl p-4 overflow-hidden group">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-900">
                  <img
                    src={fotoOficina}
                    alt="Sede Administrativa Autos Blancos VIP White S.A.S"
                    className="w-full h-full object-cover object-[center_70%] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                    <div className="p-2.5 rounded-xl bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 text-cyan-300 shrink-0">
                      <FaBuilding className="text-base" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300 block">
                        Nuestras Instalaciones
                      </span>
                      <span className="text-sm font-extrabold tracking-wide">
                        Calle 7 # 11-04 • Melgar, Tolima
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            {/* TARJETA DEL MAPA EXACTO */}
              <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(31,38,135,0.08)] rounded-3xl p-4 flex-1 min-h-[260px]">
                <div className="w-full h-full min-h-[240px] rounded-2xl overflow-hidden border border-white">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.69166361433255!2d-74.62880619374502!3d4.2072397945297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3edfae1f489305%3A0x3d764cea4c61fee1!2sCl.%207d%20%23%2011-4%2C%20Melgar%2C%20Tolima!5e0!3m2!1ses-419!2sco!4v1795135113755!5m2!1ses-419!2sco"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Mapa Sede Autos Blancos VIP White S.A.S"
                    className="w-full h-full min-h-[240px]"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contacto;
