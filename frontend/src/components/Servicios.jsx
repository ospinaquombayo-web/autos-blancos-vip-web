import { motion } from "framer-motion";
import empresarial from "../assets/empresarial.jpg";
import escolar from "../assets/escolar.jpg";
import turistico from "../assets/turistico.jpg";

function Servicios() {
  return (
    <section id="servicios" className="px-8 py-24 bg-black">
      <div className="text-center mb-16 md:mb-20">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
          Nuestros Servicios
        </h3>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full shadow-lg shadow-yellow-500/50"></div>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* EMPRESARIAL */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 hover:scale-105 transition duration-300">
          <img
            src={empresarial}
            alt="Transporte Empresarial"
            className="h-64 w-full object-cover"
          />

          <div className="p-8">
            <h4 className="text-2xl font-bold mb-4">Transporte Empresarial</h4>

            <p className="text-gray-300">
              Servicio ejecutivo para empresas con seguridad, puntualidad y
              comodidad.
            </p>
          </div>
        </div>

        {/* ESCOLAR */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 hover:scale-105 transition duration-300">
          <img
            src={escolar}
            alt="Transporte Escolar"
            className="h-64 w-full object-cover"
          />

          <div className="p-8">
            <h4 className="text-2xl font-bold mb-4">Transporte Escolar</h4>

            <p className="text-gray-300">
              Transporte seguro y confiable para estudiantes.
            </p>
          </div>
        </div>

        {/* TURISTICO */}
        <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 hover:scale-105 transition duration-300">
          <img
            src={turistico}
            alt="Transporte Turístico"
            className="h-64 w-full object-cover"
          />

          <div className="p-8">
            <h4 className="text-2xl font-bold mb-4">Transporte Turístico</h4>

            <p className="text-gray-300">
              Viajes cómodos y seguros para recorridos turísticos.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Servicios;
