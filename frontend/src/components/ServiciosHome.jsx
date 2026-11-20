import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBuilding, FaGraduationCap, FaMapMarkedAlt } from "react-icons/fa";

function ServiciosHome() {
  // Aquí agregamos la propiedad "enlace" exacta para que el botón sepa a dónde ir
  const servicios = [
    {
      icono: <FaBuilding className="text-4xl text-blue-500 group-hover:rotate-6 transition-transform duration-300" />,
      titulo: "Transporte Empresarial Corporativo",
      desc: "Soluciones logísticas de puntualidad absoluta para el traslado diario, estratégico o de eventos especiales para los colaboradores y altos ejecutivos de tu empresa.",
      enlace: "/servicios#empresarial" // 👈 Agregado para conectar con la pestaña Empresarial
    },
    {
      icono: <FaGraduationCap className="text-4xl text-cyan-400 group-hover:rotate-6 transition-transform duration-300" />,
      titulo: "Rutas de Transporte Escolar",
      desc: "Operación de rutas escolares seguras con estricto cumplimiento normativo, garantizando un entorno confiable y la total tranquilidad de padres de familia e instituciones.",
      enlace: "/servicios#escolar" // 👈 Agregado para conectar con la pestaña Escolar
    },
    {
      icono: <FaMapMarkedAlt className="text-4xl text-emerald-400 group-hover:rotate-6 transition-transform duration-300" />,
      titulo: "Turismo, Excursiones y Eventos",
      desc: "Viajes ejecutivos y traslados turísticos a nivel nacional con el máximo confort, adaptándonos con flexibilidad completa al itinerario y necesidades de tus planes.",
      enlace: "/servicios#turistico" // 👈 Agregado para conectar con la pestaña Turismo
    },
  ];
  return (
    <section className="relative px-8 py-24 bg-slate-950 text-white overflow-hidden">
      {/* 🔮 DESTELLES DE COLOR INTEGRADOS EN EL FONDO OSCURO */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-blue-600/30 blur-[130px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-emerald-500/20 blur-[130px] animate-pulse [animation-delay:3s]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* TÍTULO DE REVELADO */}
        <motion.div 
          className="text-left mb-20 border-l-4 border-cyan-400 pl-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Nuestras Líneas de Operación</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase mt-1 tracking-tight">Servicios Especializados</h2>
        </motion.div>

        {/* LISTADO INTERCALADO ANIMADO */}
        <div className="space-y-16">
          {servicios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 70, damping: 14, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start gap-8 border-b border-white/5 pb-12 last:border-0 group cursor-pointer"
            >
              {/* Contenedor del ícono que se ilumina con el color del logo */}
              <div className="p-5 bg-white/5 rounded-2xl border border-white/10 shrink-0 shadow-lg group-hover:bg-gradient-to-br group-hover:from-blue-600/20 group-hover:to-cyan-500/20 group-hover:border-cyan-500/30 transition-all duration-300">
                {item.icono}
              </div>
              
              <div className="flex flex-col text-left">
                <h3 className="text-xl font-extrabold text-white uppercase tracking-wide mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.titulo}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify mb-5 font-medium">
                  {item.desc}
                </p>
                
                {/* Enlace dinámico conectado a la propiedad enlace de la Parte 1 */}
                <Link 
                  to={item.enlace} 
                  className="text-cyan-400 font-bold text-xs tracking-wider uppercase hover:text-cyan-300 flex items-center gap-1 group/btn w-fit"
                >
                  Conocer detalles de la línea 
                  <span className="transform group-hover/btn:translate-x-1 transition-transform duration-200">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServiciosHome;
