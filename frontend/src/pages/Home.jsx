import Navbar from "../components/Navbar";
import Formulario from "../components/Formulario";
import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Flota from "../components/Flota";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Flota />
      <Formulario />
      <Contacto />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default Home;
