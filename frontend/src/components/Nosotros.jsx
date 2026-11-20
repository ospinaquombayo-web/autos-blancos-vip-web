import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
// 📸 Importamos la foto de tu flota real
import fotoFlota from "../assets/nosotros.png"; 

function Nosotros() {
  const ventajas = [
    "Monitoreo Satelital GPS 24/7 en tiempo real",
    "Conductores profesionales con certificación vial",
    "Cumplimiento estricto del SGSST (Resolución 0312)",
    "Flota moderna bajo riguroso mantenimiento preventivo",
  ];

  return (
    // 🎨 bg-white: Volvemos al fondo blanco puro e institucional que le da luz y respiro al diseño
    <section id="nosotros" className="relative px-8 py-24 bg-white overflow-hidden border-b border-zinc-100">
      
      {/* 🔮 Sutil destello azul translúcido de fondo para dar vida sin ensuciar el blanco */}
      <div className="absolute top-1/2 left-[-10%] w-[30vw] h-[30vw] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* COLUMNA IZQUIERDA: CONTENIDO TIPOGRÁFICO EN OSCURO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col text-left items-start"
        >
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2">
            Trayectoria y Seguridad
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase mb-4 tracking-tight">
            Sobre Nosotros
          </h2>
          {/* Línea divisoria con el gradiente oficial de tu marca */}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mb-6 rounded-full"></div>

          <p className="text-zinc-700 text-base md:text-lg leading-relaxed text-justify mb-6 font-medium">
            En <span className="text-slate-900 font-black">AUTOS BLANCOS VIP WHITE S.A.S.</span> nos dedicamos a ofrecer soluciones integrales de movilidad a nivel nacional. Nos especializamos en transporte empresarial, escolar y turístico, garantizando los más altos estándares internacionales de calidad, puntualidad y confort ejecutivo en cada ruta.
          </p>

          {/* LISTA DE PUNTOS CLAVE EN GRIS OSCURO */}
          <ul className="space-y-4 w-full">
            {ventajas.map((item, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-3 text-zinc-700 font-semibold text-sm md:text-base group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* El ícono de check verde resalta de forma muy natural sobre el blanco */}
                <FaCheckCircle className="text-emerald-500 text-xl shrink-0" />
                <span className="group-hover:text-blue-600 transition-colors duration-200">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* COLUMNA DERECHA: FOTO CON SOMBRA ELEGANTE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full h-[40vh] md:h-[52vh] rounded-3xl overflow-hidden shadow-xl border border-zinc-100 relative group"
        >
          <img
            src={fotoFlota}
            alt="Flota Oficial Autos Blancos"
            className="w-full h-full object-cover transform group-hover:scale-[1.02] transition duration-700"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Nosotros;
