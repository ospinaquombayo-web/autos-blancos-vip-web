import { motion } from "framer-motion";

function Testimonios() {
  const testimonios = [
    {
      nombre: "Carlos Ramírez",
      comentario:
        "Excelente servicio empresarial. Muy puntuales y vehículos cómodos.",
    },
    {
      nombre: "María González",
      comentario: "El transporte escolar brinda mucha seguridad y confianza.",
    },
    {
      nombre: "Andrés López",
      comentario:
        "Muy buena atención y excelente experiencia en nuestro viaje turístico.",
    },
  ];

  return (
    <section className="px-8 py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-bold text-center mb-20">
            Lo Que Dicen Nuestros Clientes
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonios.map((item, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-yellow-400 transition duration-300 hover:scale-105"
              >
                <p className="text-gray-300 text-lg leading-8">
                  "{item.comentario}"
                </p>

                <div className="mt-8 text-yellow-400 font-bold text-xl">
                  {item.nombre}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonios;
