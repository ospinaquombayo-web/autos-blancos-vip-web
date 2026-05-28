import { motion } from "framer-motion";

function Contacto() {
  return (
    <section id="contacto" className="px-8 py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-bold text-center mb-20">Contáctanos</h3>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* INFORMACION */}
            <div>
              <h4 className="text-3xl font-bold mb-10">
                AUTOS BLANCOS VIP WHITE S.A.S
              </h4>

              <div className="space-y-6 text-xl text-gray-300">
                <div>
                  📞{" "}
                  <a href="tel:+573000000000" className="hover:text-yellow-400">
                    +57 300 000 0000
                  </a>
                </div>

                <div>
                  ✉{" "}
                  <a
                    href="mailto:contacto@vipwhite.com"
                    className="hover:text-yellow-400"
                  >
                    contacto@vipwhite.com
                  </a>
                </div>

                <div>📍 Ibagué - Tolima, Colombia</div>

                <div>🕒 Atención 24/7</div>
              </div>
            </div>

            {/* MAPA */}
            <div className="rounded-3xl overflow-hidden border border-gray-800">
              <iframe
                src="https://www.google.com/maps?q=Ibague+Tolima&output=embed"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contacto;
