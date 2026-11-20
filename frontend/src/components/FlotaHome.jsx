import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUsers, FaSnowflake, FaSuitcase } from "react-icons/fa";

function FlotaHome() {
  const vehiculos = [
    {
      tipo: "Camionetas (SUV 4x4)",
      capacidad: "4 - 7 Pasajeros",
      desc: "Vehículos ejecutivos de gama alta con chofer profesional. Ideales para misiones diplomáticas, traslados VIP corporativos y juntas directivas.",
      air: "Climatización Bi-Zona",
      bag: "Espacio de Equipaje Confortable",
      targetId: "camionetas",
      glow: "hover:border-blue-500/50 hover:shadow-blue-500/10"
    },
    {
      tipo: "Vans o Microbuses",
      capacidad: "12 - 19 Pasajeros",
      desc: "Unidades perfectas para rutas empresariales diarias, transporte escolar de instituciones selectas y traslados cómodos de grupos de turismo local.",
      air: "Aire Acondicionado Central",
      bag: "Sillas Reclinables Ergonómicas",
      targetId: "vans",
      glow: "hover:border-cyan-500/50 hover:shadow-cyan-500/10"
    },
    {
      tipo: "Busetones o Buses",
      capacidad: "27 - 40 Pasajeros",
      desc: "Máxima capacidad operativa con amplios maleteros y sistemas de suspensión avanzados, diseñados para recorridos largos de turismo nacional y transporte escolar masivo.",
      air: "Climatización de Alta Potencia",
      bag: "Bodegas de Gran Capacidad",
      targetId: "buses",
      glow: "hover:border-emerald-500/50 hover:shadow-emerald-500/10"
    },
  ];

  return (
    <section className="px-8 py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TÍTULO */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Capacidad y Confort Real</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1 tracking-tight">Nuestro Parque Automotor</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* CONTENEDOR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehiculos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col text-left items-start shadow-xl transition-all duration-300 group cursor-pointer ${item.glow}`}
            >
              <div className="flex items-center gap-1.5 text-xs font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md uppercase tracking-wider mb-4 border border-emerald-500/20">
                <FaUsers /> {item.capacidad}
              </div>
              <h3 className="text-lg font-black text-white uppercase tracking-wide mb-2 group-hover:text-emerald-400 transition-colors duration-300">{item.tipo}</h3>
              <p className="text-slate-300 text-sm leading-relaxed text-justify mb-5 font-medium">{item.desc}</p>
              
              {/* FICHA TÉCNICA (SIN WIFI) */}
              <div className="w-full space-y-2 border-t border-white/5 pt-4 mb-6 text-xs text-slate-400 font-bold">
                <span className="flex items-center gap-2"><FaSnowflake className="text-blue-400" /> {item.air}</span>
                <span className="flex items-center gap-2"><FaSuitcase className="text-emerald-400" /> {item.bag}</span>
              </div>

              {/* Enlace dinámico con el nuevo ID corregido */}
              <Link 
                to={`/flota#${item.targetId}`} 
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-500 hover:to-blue-500 text-white font-bold text-center py-3 rounded-xl text-xs w-full transition-all duration-300 shadow-md shadow-emerald-600/10"
              >
                Consultar Especificaciones
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FlotaHome;
