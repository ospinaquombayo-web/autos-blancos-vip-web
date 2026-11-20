import { motion } from "framer-motion";
import { FaRocket, FaEye, FaShieldAlt } from "react-icons/fa";

function Estadisticas() {
  const pilares = [
    {
      icono: <FaRocket className="text-3xl text-blue-600" />,
      titulo: "Nuestra Misión",
      descripcion: "Garantizar un servicio de transporte de excelencia, puntual y seguro a nivel nacional, respaldado por vehículos con tecnología de punta y un equipo humano altamente capacitado, operando bajo principios de honestidad, protección ambiental y bienestar integral.",
      borderColor: "hover:border-blue-500/50",
      glowBg: "bg-blue-500/10 text-blue-600"
    },
    {
      icono: <FaEye className="text-3xl text-cyan-500" />,
      titulo: "Nuestra Visión",
      descripcion: "Consolidarnos para el año 2030 como la empresa líder en transporte especial de pasajeros, reconocida por nuestra ética y cumplimiento, garantizando la máxima comodidad mediante un parque automotor moderno y altos estándares internacionales (ISO 9001 / ISO 45001).",
      borderColor: "hover:border-cyan-500/50",
      glowBg: "bg-cyan-500/10 text-cyan-600"
    },
    {
      icono: <FaShieldAlt className="text-3xl text-emerald-500" />,
      titulo: "Nuestro Compromiso",
      descripcion: "Ofrecer total tranquilidad en cada viaje mediante el estricto cumplimiento normativo (Resolución 0312 de 2019), conductores certificados, bajos índices de accidentalidad y un fuerte compromiso con el uso sostenible de los recursos naturales.",
      borderColor: "hover:border-emerald-500/50",
      glowBg: "bg-emerald-500/10 text-emerald-600"
    },
  ];

  return (
    // 🎨 bg-zinc-50/80: Cambiamos el fondo de atrás por un tono ceniza/arena que descansa la vista y hace resaltar las tarjetas blancas
    <section className="relative px-8 py-24 bg-zinc-50/80 overflow-hidden">
      
      {/* 🔮 ONDAS DE COLOR ABSTRACTAS (Destellos dinámicos que quitan lo plano al fondo) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-500/5 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-[-10%] w-[35vw] h-[35vw] rounded-full bg-emerald-500/5 blur-[100px] animate-pulse [animation-delay:3s]"></div>
        
        {/* 🛠️ Línea de circuito tecnológico de fondo que une los pilares */}
        <div className="absolute top-[52%] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-emerald-500/20 hidden md:block"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 uppercase tracking-wider">
            Pilares Corporativos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-500 mx-auto mt-4 rounded-full shadow-sm"></div>
        </div>

        {/* TARJETAS CON CONTRASTE SUAVE */}
        <div className="grid md:grid-cols-3 gap-8">
          {pilares.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              // 🎨 Las tarjetas blancas ahora brillan con un borde sutil al pasar el mouse
              className={`bg-white border border-zinc-200/60 rounded-3xl p-8 shadow-sm transition-all duration-300 flex flex-col items-center group cursor-pointer ${item.borderColor}`}
            >
              {/* ÍCONO ENMARCADO CON CÍRCULOS DE COLOR INTENSO */}
              <div className={`mb-6 p-4 rounded-full ${item.glowBg} border border-zinc-100 shadow-inner group-hover:scale-110 transition duration-300 flex justify-center items-center`}>
                {item.icono}
              </div>

              {/* TÍTULO EN NEGRO CORPORATIVO */}
              <h3 className="text-xl font-bold text-slate-800 mb-4 uppercase tracking-wide text-center group-hover:text-blue-600 transition-colors duration-200">
                {item.titulo}
              </h3>

              {/* DESCRIPCIÓN JUSTIFICADA ALINEADA PERFECTAMENTE */}
              <p className="text-zinc-600 text-sm md:text-base leading-relaxed font-normal text-justify w-full">
                {item.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Estadisticas;
