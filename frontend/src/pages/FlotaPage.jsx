import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { FaUsers, FaSnowflake, FaSuitcase, FaShieldAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// 📸 IMPORTACIÓN DE TUS FOTOS REALES
import fotoCamioneta1 from "../assets/Camionetas4x4.jpg"; 
import fotoCamioneta2 from "../assets/Parqueadero4x4.jpg"; 
import fotoVan1 from "../assets/microbuss.png";       
import fotoVan2 from "../assets/microbuss2.png";       
import fotoBus1 from "../assets/escolar.jpg";          
import fotoBus2 from "../assets/busess.png";          

// 🛠️ COMPONENTE INTERNO DEL CARRUSEL DE IMÁGENES
function SliderVehiculo({ imagenes }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const anterior = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const siguiente = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  if (!imagenes || imagenes.length === 0) return null;

  return (
    <div className="w-full h-[30vh] md:h-[40vh] rounded-3xl overflow-hidden shadow-lg border border-zinc-100 relative group flex-shrink-0">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={imagenes[currentIndex]}
          alt={`Flota Autos Blancos ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {imagenes.length > 1 && (
        <>
          <button
            onClick={anterior}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-20 cursor-pointer"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={siguiente}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-20 cursor-pointer"
          >
            <FaChevronRight className="text-sm" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {imagenes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index ? "w-6 bg-blue-600" : "w-2 bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
function FlotaPage() {
  const fotosCamionetas = [fotoCamioneta1, fotoCamioneta2];
  const fotosVans = [fotoVan1, fotoVan2];
  const fotosBuses = [fotoBus1, fotoBus2];

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between pt-14">
      <Navbar />
      
      <main className="flex-grow">
        {/* ENCABEZADO DE LA PÁGINA */}
        <div className="bg-gradient-to-b from-zinc-100 to-white py-12 text-center px-4">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Confort y Seguridad</span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase mt-2 tracking-tight">
            Nuestra Flota de Vehículos
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 🚗 SECCIÓN 1: CAMIONETAS SUV 4x4 */}
        <section id="camionetas" className="px-8 bg-white border-b border-zinc-100 py-16 md:py-24 flex items-center overflow-hidden">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs">Línea Ejecutivo Premium</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase mt-1 mb-4">Camionetas</h2>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed text-justify mb-6 font-medium">
                Nuestra gama de camionetas de última generación está diseñada exclusivamente para traslados corporativos de alta gerencia, misiones diplomáticas y comitivas VIP. Con habitáculos insonorizados, acabados premium en cuero y suspensiones inteligentes, garantizamos un entorno óptimo para trabajar o descansar durante el viaje.
              </p>
              <div className="grid grid-cols-2 gap-4 text-[11px] text-zinc-500 font-bold border-t border-zinc-100 pt-4">
                <span className="flex items-center gap-2"><FaUsers className="text-blue-600 text-sm" /> Capacidad: 4 pasajeros</span>
                <span className="flex items-center gap-2"><FaSnowflake className="text-blue-400" /> Climatización Bi-Zona</span>
                <span className="flex items-center gap-2"><FaSuitcase className="text-amber-600" /> Maletero Confortable</span>
                <span className="flex items-center gap-2"><FaShieldAlt className="text-red-500" /> Monitoreo GPS 24/7</span>
              </div>
            </motion.div>
            
            <SliderVehiculo imagenes={fotosCamionetas} />
          </div>
        </section>

        {/* 🚐 SECCIÓN 2: VANS O MICROBUSES */}
        <section id="vans" className="px-8 bg-zinc-50 border-t border-b border-zinc-200/40 py-16 md:py-24 flex items-center overflow-hidden">
          {/* 🛠️ CORRECCIÓN CLAVE: En móvil apila al revés (flex-col-reverse) para que la imagen siempre quede arriba del texto */}
          <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
            
            <SliderVehiculo imagenes={fotosVans} />

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left w-full"
            >
              <span className="text-cyan-600 font-extrabold uppercase tracking-widest text-xs">Versatilidad Operativa</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase mt-1 mb-4">Vans o Microbuses</h2>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed text-justify mb-6 font-medium">
                Nuestras vans y microbuses de servicio especial representan el equilibrio perfecto entre capacidad y agilidad urbana. Son las unidades preferidas para la logística diaria de rutas empresariales, transporte especial escolar y comitivas medianas de turismo regional, cumpliendo estrictamente con los extractores de aire y normativas de seguridad vial.
              </p>
              <div className="grid grid-cols-2 gap-4 text-[11px] text-zinc-500 font-bold border-t border-zinc-200/60 pt-4">
                <span className="flex items-center gap-2"><FaUsers className="text-cyan-500 text-sm" /> Capacidad: 12 - 19 pasajeros</span>
                <span className="flex items-center gap-2"><FaSnowflake className="text-blue-400" /> Aire Acondicionado Central</span>
                <span className="flex items-center gap-2"><FaSuitcase className="text-amber-600" /> Sillas Reclinables Confort</span>
                <span className="flex items-center gap-2"><FaShieldAlt className="text-red-500" /> Control de Velocidad</span>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 🚌 SECCIÓN 3: BUSETONES O BUSES */}
        <section id="buses" className="px-8 bg-white py-16 md:py-24 flex items-center overflow-hidden">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <span className="text-emerald-600 font-extrabold uppercase tracking-widest text-xs">Gran Capacidad VIP</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase mt-1 mb-4">Busetones y Buses</h2>
              <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed text-justify mb-6 font-medium">
                Nuestra flota de buses y busetones metalizados de última generación ofrece el máximo confort para traslados masivos nacionales de turismo o rutas empresariales de gran volumen. Equipados con pantallas de entretenimiento, silletería ergonómica reclinable de felpa, baños a bordo y amplias bodegas inferiores, aseguramos trayectos largos placenteros y totalmente seguros.
              </p>
              <div className="grid grid-cols-2 gap-4 text-[11px] text-zinc-500 font-bold border-t border-zinc-100 pt-4">
                <span className="flex items-center gap-2"><FaUsers className="text-emerald-500 text-sm" /> Capacidad: 24 - 40 pasajeros</span>
                <span className="flex items-center gap-2"><FaSnowflake className="text-blue-400" /> Climatización de Alto Flujo</span>
                <span className="flex items-center gap-2"><FaSuitcase className="text-amber-600" /> Bodegas de Gran Volumen</span>
                <span className="flex items-center gap-2"><FaShieldAlt className="text-red-500" /> Suspensión Neumática</span>
              </div>
            </motion.div>
            
            <SliderVehiculo imagenes={fotosBuses} />
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default FlotaPage;
