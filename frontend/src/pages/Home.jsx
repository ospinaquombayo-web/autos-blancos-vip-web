import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Estadisticas from "../components/Estadisticas";
import ServiciosHome from "../components/ServiciosHome"; // 🛠️ Importado
import FlotaHome from "../components/FlotaHome";       // 🛠️ Importado
import Nosotros from "../components/Nosotros";
import SeguridadHome from "../components/SeguridadHome"; // 🛠️ Importado
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function Home() {
  return (
    <>
      <Hero />
      <Estadisticas />
      <ServiciosHome />  {/* 🛠️ Agregado */}
      <FlotaHome />      {/* 🛠️ Agregado */}
      <Nosotros />
      <SeguridadHome />  {/* 🛠️ Agregado */}
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;

