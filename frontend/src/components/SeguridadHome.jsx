import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaFileContract, FaCertificate } from "react-icons/fa";

function SeguridadHome() {
  const garantias = [
    {
      icono: <FaMapMarkerAlt className="text-3xl text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" />,
      titulo: "Rastreo Satelital GPS 24/7",
      desc: "Cada vehículo de la flota está enlazado a nuestra central de despacho, permitiendo monitoreo y asistencia en tiempo real mediante mapas satelitales permanentes.",
    },
    {
      icono: <FaFileContract className="text-3xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]" />,
      titulo: "Seguros Contractuales al Día",
      desc: "Tranquilidad legal absoluta con pólizas de responsabilidad civil contractual y extracontractual plenamente vigentes, respaldando cada trayecto a nivel nacional.",
    },
    {
      icono: <FaCertificate className="text-3xl text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]" />,
      titulo: "Certificación de Ley SGSST",
      desc: "Operamos bajo el cumplimiento estricto de la Resolución 0312 de 2019 de seguridad vial y salud ocupacional, avalando procesos de operación corporativa transparentes.",
    },
  ];

  return (
    <section className="relative px-8 py-24 bg-gradient-to-br from-emerald-950 via-slate-950 to-emerald-950 text-white overflow-hidden">
      
      {/* 🔮 RED DE CONECTIVIDAD DE FONDO */}
      <div className="absolute top-[50%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent hidden md:block z-0"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* TÍTULO CON REVELADO EN ESCALA */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Garantías de Cumplimiento</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1 tracking-tight">Confianza y Legalidad Vial</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* DISTRIBUCIÓN HORIZONTAL ANIMADA EN BLOQUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {garantias.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Círculo del ícono flotante */}
              <div className="mb-6 p-4 bg-white/5 rounded-full border border-white/10 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-300 group-hover:scale-110 shadow-lg">
                {item.icono}
              </div>
              <h3 className="text-base font-black text-white uppercase tracking-wide mb-3 group-hover:text-emerald-400 transition-colors duration-300">{item.titulo}</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-justify font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SeguridadHome;
