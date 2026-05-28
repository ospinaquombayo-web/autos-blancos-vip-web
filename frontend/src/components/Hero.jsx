import hero from "../assets/hero.jpg";

function Hero() {
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
      <div className="absolute inset-0 bg-black/70"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 px-6">
        <h2 className="text-5xl md:text-7xl font-bold max-w-5xl leading-tight">
          Transporte Empresarial, Escolar y Turístico
        </h2>

        <p className="text-gray-300 text-xl mt-8 max-w-3xl mx-auto">
          Seguridad, comodidad y puntualidad en cada recorrido. Servicio
          profesional para empresas, instituciones educativas y turismo.
        </p>

        <div className="flex flex-col md:flex-row gap-6 mt-10 justify-center">
          <a
            href="#contacto"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-4 rounded-2xl text-lg transition"
          >
            Solicitar Cotización
          </a>

          <a
            href="https://wa.me/573000000000"
            target="_blank"
            className="border border-white hover:bg-white hover:text-black px-10 py-4 rounded-2xl text-lg transition"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
