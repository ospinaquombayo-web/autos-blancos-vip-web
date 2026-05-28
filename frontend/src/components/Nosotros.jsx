import { motion } from "framer-motion";
function Nosotros() {
  return (
    <section id="nosotros" className="bg-gray-950 px-8 py-24">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-bold mb-10">Sobre Nosotros</h3>

        <p className="text-gray-300 text-xl leading-9">
          En AUTOS BLANCOS VIP WHITE S.A.S ofrecemos servicios de transporte
          empresarial, escolar y turístico con altos estándares de seguridad y
          calidad.
        </p>
      </motion.div>
    </section>
  );
}

export default Nosotros;
