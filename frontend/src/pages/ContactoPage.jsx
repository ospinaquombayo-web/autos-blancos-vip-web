import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";
import WhatsAppButton from "../components/WhatsAppButton";

function ContactoPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow pt-24">
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default ContactoPage;
