import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  // Declaramos tus datos exactos de forma limpia
  const numeroWhatsApp = "573212334935";
  const mensajePredefinido =
    "Hola, estoy interesado en conocer más acerca de los servicios de transporte que ofrece VIP WHITE. Agradezco su información.";

  // JavaScript se encarga de convertir los espacios, comas y tildes al formato web perfecto
  const enlaceCompleto = `https://wa.me{numeroWhatsApp}?text=${encodeURIComponent(mensajePredefinido)}`;

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* IMAGEN FONDO */}
      <img
        src={hero}
        alt="VIP WHITE"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* CAPA OSCURA */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight uppercase">
          El Estándar <span className="text-yellow-400">Premium</span>{" "}
          <br className="hidden sm:inline" />
          en Transporte Privado
        </h2>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-6 max-w-3xl leading-relaxed font-light">
          En{" "}
          <span className="text-white font-semibold">
            AUTOS BLANCOS VIP WHITE S.A.S
          </span>{" "}
          movemos a tus colaboradores, estudiantes y turistas con la máxima
          puntualidad, confort y seguridad. Flota ejecutiva de última generación
          y conductores certificados a tu servicio.
        </p>

        {/* BOTONES INTERACTIVOS */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 w-full sm:w-auto">
          <Link
            to="/cotizar"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg transition transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow-500/20 text-center"
          >
            Solicitar Cotización
          </Link>

          {/* Aquí usamos la variable optimizada */}
          <a
            href={enlaceCompleto}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/80 text-white hover:bg-white hover:text-black px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg transition transform hover:scale-105 active:scale-95 text-center font-medium"
          >
            Contactar Aliado VIP
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
