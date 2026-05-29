import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Estadisticas from "../components/Estadisticas";
import Nosotros from "../components/Nosotros";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/BotonWhatsApp";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Estadisticas />
      <Nosotros />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;
