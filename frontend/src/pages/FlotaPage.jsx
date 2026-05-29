import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Flota from "../components/Flota";
import WhatsAppButton from "../components/WhatsAppButton";

function FlotaPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-gradient-to-b from-gray-900 to-black py-12 text-center">
          <p className="text-yellow-400 font-semibold uppercase tracking-widest text-sm mb-2">
            Nuestros Vehículos Ejecutivos
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase">
            Flota VIP WHITE
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 px-6">
            Vehículos modernos, equipados con aire acondicionado, monitoreo GPS
            y todas las pólizas legales exigidas.
          </p>
        </div>
        <Flota />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default FlotaPage;
