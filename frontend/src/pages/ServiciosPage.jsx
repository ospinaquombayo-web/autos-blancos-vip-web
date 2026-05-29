import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Servicios from "../components/Servicios";
import WhatsAppButton from "../components/WhatsAppButton";

function ServiciosPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      {/* MENÚ SUPERIOR PRIVADO */}
      <Navbar />

      {/* SECCIÓN EXCLUSIVA DE SERVICIOS */}
      <main className="flex-grow pt-20">
        <div className="bg-gradient-to-b from-gray-900 to-black py-12 text-center">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest text-sm mb-2">
            Soluciones Corporativas y Privadas
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Nuestros Servicios Especiales
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 px-6 text-base md:text-lg">
            Ofrecemos cobertura local en Ibagué y traslados a nivel nacional con
            altos estándares de cumplimiento, confort y seguridad legal.
          </p>
        </div>

        {/* Reutilizamos tu componente visual responsivo de servicios */}
        <Servicios />
      </main>

      {/* PIE DE PÁGINA Y CONTACTO */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default ServiciosPage;
