import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { FaGraduationCap, FaBuilding, FaMapMarkedAlt, FaShieldAlt, FaClock, FaCheckCircle, FaBus } from 'react-icons/fa';

// Importación de las imágenes reales de tu carpeta assets
import escolarImg from '../assets/empresarial.jpg';
import empresarialImg from '../assets/busetones.png'; 
import turisticoImg from '../assets/turistico.jpg'; 

const DATA_SERVICIOS = {
  empresarial: {
    id: 'empresarial',
    titulo: "Transporte Empresarial Corporativo",
    subtitulo: "Eficiencia, estatus y puntualidad matemática para tu organización",
    descripcion: "Optimizamos la productividad de tu empresa en el Tolima mediante soluciones logísticas de transporte de personal. Diseñamos rutas corporativas inteligentes y personalizadas que eliminan los retrasos por tráfico y garantizan que tus colaboradores y altos ejecutivos viajen en un entorno VIP premium.",
    imagen: empresarialImg,
    clasesColor: {
      texto: "text-blue-500",
      badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      glow: "shadow-blue-500/10",
      subrayado: "bg-blue-600"
    },
    caracteristicas: [
      { titulo: "Operación Continua 24/7", desc: "Cobertura total diseñada milimétricamente para empresas con turnos rotativos o nocturnos." },
      { titulo: "Monitoreo Satelital", desc: "Seguimiento GPS en tiempo real con reportes de velocidad y tiempos de llegada directos a RRHH." },
      { titulo: "Conductores Certificados", desc: "Personal calificado con uniformes corporativos y capacitados en manejo defensivo y atención VIP." }
    ],
    flotaSugerida: "Camionetas 4x4 de alta gama, Microbuses y Buses Ejecutivos."
  },
  escolar: {
    id: 'escolar',
    titulo: "Rutas de Transporte Escolar",
    subtitulo: "Seguridad normada y tranquilidad absoluta para las familias",
    descripcion: "Operamos bajo la rigurosidad del Decreto 348 del Ministerio de Transporte, garantizando entornos escolares totalmente seguros en melgar. No solo transportamos estudiantes; coordinamos una logística de acompañamiento constante para que cada trayecto sea sinónimo de puntualidad y cuidado extremo.",
    imagen: escolarImg,
    clasesColor: {
      texto: "text-cyan-400",
      badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      glow: "shadow-cyan-500/10",
      subrayado: "bg-cyan-400"
    },
    caracteristicas: [
      { titulo: "Acompañamiento Calificado", desc: "Monitora escolar obligatoria certificada en primeros auxilios y manejo de rutas infantiles." },
      { titulo: "Control Digital", desc: "Registro estricto de ingreso y salida de los estudiantes de la unidad de transporte." },
      { titulo: "Cumplimiento de Ley", desc: "Vehículos con colorimetría legal, salidas de emergencia operativas y pólizas de máxima cobertura." }
    ],
    flotaSugerida: "Vans Ejecutivas (16 Pasajeros) y Microbuses modernos."
  },
  turistico: {
    id: 'turistico',
    titulo: "Turismo, Excursiones y Eventos",
    subtitulo: "Viajes especiales a nivel nacional con el máximo confort VIP",
    descripcion: "Conectamos melgar con cualquier destino turístico de Colombia. Nos encargamos de toda la ingeniería de transporte terrestre para excursiones, viajes familiares, eventos corporativos o traslados de delegaciones, garantizando flexibilidad de itinerario y la tranquilidad de viajar con conductores expertos.",
    imagen: turisticoImg,
    clasesColor: {
      texto: "text-emerald-500",
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      glow: "shadow-emerald-500/10",
      subrayado: "bg-emerald-500"
    },
    caracteristicas: [
      { titulo: "Planillas Únicas de Viaje", desc: "Emisión inmediata del FUEC electrónico obligatorio para circular legalmente por todo el país." },
      { titulo: "Máximo Confort a Bordo", desc: "Unidades equipadas con aire acondicionado de alta potencia y silletería reclinable VIP." },
      { titulo: "Amplia Capacidad de Carga", desc: "Bodegas de equipaje de gran volumen ideales para maletas pesadas o implementos de eventos." }
    ],
    flotaSugerida: "Buses VIP de gran capacidad (32 a 40 Pasajeros) y Busetas Metalizadas."
  }
};
const ServiciosPage = () => {
  // Estado para controlar cuál pestaña de servicio está activa
  const [tabActiva, setTabActiva] = useState('empresarial');
  const location = useLocation();

  // Escucha si el usuario viene de otra página apuntando a un servicio específico
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && DATA_SERVICIOS[hash]) {
      setTabActiva(hash);
      
      // Esperamos un milisegundo a que cargue la pestaña y movemos la vista exactamente al menú
      setTimeout(() => {
        const elementoMenu = document.getElementById('contenedor-pestanas');
        if (elementoMenu) {
          elementoMenu.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  const servicio = DATA_SERVICIOS[tabActiva];

  return (
    <div className="bg-white min-h-screen">
      {/* 🟢 ESPACIADOR MATEMÁTICO COMPACTO */}
      <div className="h-14 bg-white w-full border-b border-zinc-100" />

      {/* HERO DE BIENVENIDA */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/30 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse [animation-delay:2s]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center space-y-4">
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs block">
            Servicio Especial de Transporte Terrestre Automotor
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Nuestras Líneas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400">De Operación</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Selecciona la categoría de transporte que tu empresa, institución o familia requiere para desglosar todas las ventajas técnicas y legales.
          </p>
        </div>
      </section>

      {/* 🔵 MENÚ DE PESTAÑAS CON ID DE ENFOQUE (Agregamos id="contenedor-pestanas") */}
      <section id="contenedor-pestanas" className="bg-zinc-50 border-b border-zinc-200 shadow-sm relative z-20 scroll-mt-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-around items-center py-4">
            
            {/* PESTAÑA EMPRESARIAL */}
            <button
              onClick={() => setTabActiva('empresarial')}
              className={`flex flex-col sm:flex-row items-center gap-2 py-3 px-5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300 relative ${
                tabActiva === 'empresarial' ? 'text-blue-600 bg-white shadow-md shadow-slate-200/60' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <FaBuilding className="text-lg" />
              <span>Empresarial</span>
              {tabActiva === 'empresarial' && (
                <motion.div layoutId="lineaActiva" className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>

            {/* PESTAÑA ESCOLAR */}
            <button
              onClick={() => setTabActiva('escolar')}
              className={`flex flex-col sm:flex-row items-center gap-2 py-3 px-5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300 relative ${
                tabActiva === 'escolar' ? 'text-cyan-500 bg-white shadow-md shadow-slate-200/60' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <FaGraduationCap className="text-lg" />
              <span>Escolar</span>
              {tabActiva === 'escolar' && (
                <motion.div layoutId="lineaActiva" className="absolute bottom-0 left-4 right-4 h-0.5 bg-cyan-400 rounded-full" />
              )}
            </button>

            {/* PESTAÑA TURÍSTICA */}
            <button
              onClick={() => setTabActiva('turistico')}
              className={`flex flex-col sm:flex-row items-center gap-2 py-3 px-5 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300 relative ${
                tabActiva === 'turistico' ? 'text-emerald-500 bg-white shadow-md shadow-slate-200/60' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <FaMapMarkedAlt className="text-lg" />
              <span>Turismo</span>
              {tabActiva === 'turistico' && (
                <motion.div layoutId="lineaActiva" className="absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-500 rounded-full" />
              )}
            </button>

          </div>
        </div>
      </section>


      {/* 🟡 DESGLOSE DINÁMICO DE CONTENIDO CON ANIMACIÓN */}
      <main className="max-w-6xl mx-auto px-6 py-16 sm:py-24 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={tabActiva}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16"
          >
            {/* Bloque Imagen y Flota */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${servicio.clasesColor.glow} transition-shadow duration-500`}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent z-10" />
                <img 
                  src={servicio.imagen} 
                  alt={servicio.titulo} 
                  className="w-full h-[320px] sm:h-[420px] object-cover"
                />
                <div className={`absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border backdrop-blur-md ${servicio.clasesColor.badge}`}>
                  Línea VIP Certificada
                </div>
              </div>

              {/* Tarjeta de Flota Recomendada */}
              <div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-white shadow-sm ${servicio.clasesColor.texto}`}>
                  <FaBus className="text-xl" />
                </div>
                <div>
                  <h4 className="font-black text-xs uppercase text-slate-400 tracking-wider">Vehículos Recomendados:</h4>
                  <p className="text-slate-800 font-bold text-sm">{servicio.flotaSugerida}</p>
                </div>
              </div>
            </div>

            {/* Bloque Información de Servicio */}
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-slate-900 tracking-tight">
                  {servicio.titulo}
                </h2>
                <p className={`text-sm sm:text-base font-bold italic ${servicio.clasesColor.texto}`}>
                  {servicio.subtitulo}
                </p>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-justify font-medium">
                {servicio.descripcion}
              </p>

              {/* Atributos y Características Técnicas */}
              <div className="space-y-4 pt-2">
                <h3 className="text-slate-900 font-black text-xs uppercase tracking-widest border-b border-zinc-100 pb-2">
                  Atributos Logísticos y de Seguridad:
                </h3>
                <div className="space-y-4">
                  {servicio.caracteristicas.map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <FaCheckCircle className={`text-lg shrink-0 mt-0.5 ${servicio.clasesColor.texto}`} />
                      <div className="text-left">
                        <h4 className="font-extrabold text-sm text-slate-800 uppercase tracking-wide">{item.titulo}</h4>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed text-justify font-medium mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón de Enlace Interactivo al Formulario Global */}
              <div className="pt-4">
                <Link
                  to="/cotizar"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-xl shadow-slate-950/10 transition-all duration-150 transform hover:-translate-y-0.5"
                >
                  Iniciar Cotización en Línea &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* BANNER INFORMATIVO LEGAL DE CIERRE */}
      <section className="bg-slate-950 text-white py-12 px-6 border-t border-white/5 relative overflow-hidden z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex gap-4 items-center text-left max-w-xl">
            <div className="p-4 bg-white/5 rounded-2xl text-emerald-400 border border-white/10 text-2xl shrink-0 shadow-lg">
              <FaShieldAlt />
            </div>
            <div>
              <h3 className="font-black text-sm sm:text-base uppercase tracking-wide text-white">Garantía Operativa de Respaldo Legal</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium mt-1">
                Todas nuestras líneas operan blindadas al 100% con pólizas de Responsabilidad Civil Contractual y Extracontractual vigentes exigidas por la Superintendencia de Transporte de Colombia.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
            <FaClock className="text-cyan-400 text-lg" />
            <div className="text-left">
              <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">Soporte Operativo</span>
              <span className="text-xs font-black text-white uppercase">Monitoreo 24 Horas</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;
