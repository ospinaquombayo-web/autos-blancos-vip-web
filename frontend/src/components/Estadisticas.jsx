import { motion } from "framer-motion";

function Estadisticas() {
  const stats = [
    {
      numero: "500+",
      texto: "Clientes Satisfechos",
    },
    {
      numero: "10+",
      texto: "Años de Experiencia",
    },
    {
      numero: "2000+",
      texto: "Servicios Realizados",
    },
    {
      numero: "24/7",
      texto: "Atención Disponible",
    },
  ];

  return (
    <section className="px-8 py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-3xl p-10 text-center hover:border-yellow-400 transition duration-300 hover:scale-105"
            >
              <h3 className="text-5xl font-bold text-yellow-400 mb-4">
                {item.numero}
              </h3>

              <p className="text-gray-300 text-lg">{item.texto}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Estadisticas;
