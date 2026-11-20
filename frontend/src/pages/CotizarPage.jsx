import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import WhatsAppButton from "../components/WhatsAppButton";
import { motion } from "framer-motion";
import { FaClock, FaSatellite } from "react-icons/fa";

function CotizarPage() {
  return (
    <div className="bg-white text-slate-900 min-h-screen flex flex-col justify-between pt-14">
      <Navbar />
      
      <main className="flex-grow">
        
        {/* 🟢 BANNER DE TRANSICIÓN PREMIUM ELECTRÓNICO (CORREGIDO Y RENOVADO) */}
        <div className="relative bg-slate-950 text-white py-16 text-center overflow-hidden border-b border-white/5">
          {/* Luces de neón del logo de fondo */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-[-30%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[-30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse [animation-delay:2.5s]"></div>
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center space-y-4">
            
            {/* Badge de velocidad operativa */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest"
            >
              <FaClock className="animate-spin [animation-duration:10s]" />
              <span>Garantía de Respuesta Técnica: &lt; 2 Horas</span>
            </motion.div>

            {/* Título Estilizado en una sola línea */}
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white"
            >
              Terminal de Despacho <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">En Línea</span>
            </motion.h1>

            {/* Subtexto descriptivo de alta gama */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium"
            >
              Ingrese los detalles de su itinerario corporativo, escolar o turístico para procesar de forma automatizada su pase de abordar especial.
            </motion.p>
          </div>

          {/* Línea divisoria decorativa digital */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>

        {/* 🚗 FORMULARIO CON PASE DE ABORDAR DENTRO DEL FLUJO BLANCO LIMPIO */}
        <div className="bg-white">
          <Formulario />
        </div>

      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default CotizarPage;
