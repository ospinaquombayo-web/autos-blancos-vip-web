import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import WhatsAppButton from "../components/WhatsAppButton";

function CotizarPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-gradient-to-b from-gray-900 to-black py-12 text-center">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest text-sm mb-2">
            Respuestas en menos de 2 horas
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase">
            Tu Cotización Inmediata
          </h2>
        </div>
        <Formulario />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default CotizarPage;
