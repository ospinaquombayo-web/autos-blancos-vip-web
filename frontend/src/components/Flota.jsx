import van from "../assets/van.jpg";
import bus from "../assets/bus.jpg";
import microbus from "../assets/microbus.jpg";

import { motion } from "framer-motion";

function Flota() {
  return (
    <section id="flota" className="px-8 py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-bold text-center mb-20">
            Nuestra Flota
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* VAN */}
            <div className="bg-black rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition duration-300 hover:scale-105">
              <img
                src={van}
                alt="Van ejecutiva"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4">Vans Ejecutivas</h4>

                <p className="text-gray-300">
                  Vehículos cómodos ideales para transporte empresarial y grupos
                  pequeños.
                </p>

                <div className="mt-6 text-yellow-400 font-semibold">
                  Capacidad: 10 - 15 pasajeros
                </div>
              </div>
            </div>

            {/* MICROBUS */}
            <div className="bg-black rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition duration-300 hover:scale-105">
              <img
                src={microbus}
                alt="Microbus"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4">Microbuses</h4>

                <p className="text-gray-300">
                  Perfectos para recorridos escolares y turísticos.
                </p>

                <div className="mt-6 text-yellow-400 font-semibold">
                  Capacidad: 20 - 30 pasajeros
                </div>
              </div>
            </div>

            {/* BUS */}
            <div className="bg-black rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition duration-300 hover:scale-105">
              <img
                src={bus}
                alt="Bus turístico"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h4 className="text-2xl font-bold mb-4">Buses</h4>

                <p className="text-gray-300">
                  Transporte de gran capacidad para turismo y empresas.
                </p>

                <div className="mt-6 text-yellow-400 font-semibold">
                  Capacidad: 40+ pasajeros
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Flota;
