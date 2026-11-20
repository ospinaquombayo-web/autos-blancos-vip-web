import hero from "../assets/escolar.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="inicio"
      // 🛠️ LA SOLUCIÓN: Agregamos mb-[-2px] (margen inferior negativo) y relative z-10
      // Esto hace que el bloque del Hero pise físicamente la sección de abajo por 2 pixeles, sepultando la línea para siempre.
      className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-zinc-50 mb-[-2px] z-10"
    >
      {/* IMAGEN DE FONDO A PANTALLA COMPLETA */}
      <img
        src={hero}
        alt="VIP WHITE"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* CAPA DE PRECISIÓN: Degradado continuo sin cortes bruscos */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent via-80% to-zinc-50 to-100%"></div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-20 px-6 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* TÍTULO PRINCIPAL EN BLANCO IMPACTANTE */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight tracking-tight uppercase drop-shadow-md">
          El Estándar <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Premium</span>{" "}
          <br className="hidden sm:inline" />
          en Transporte Especial
        </h2>

        {/* SUBTÍTULO EN GRIS CLARO PARA LEERSE PERFECTO */}
        <p className="text-slate-200 text-base sm:text-lg md:text-xl mt-6 max-w-3xl leading-relaxed font-medium drop-shadow">
          En{" "}
          <span className="text-white font-bold">
            AUTOS BLANCOS VIP WHITE S.A.S
          </span>{" "}
          movemos a tus colaboradores, estudiantes y turistas con la máxima
          puntualidad, confort y seguridad. Flota ejecutiva de última generación
          y conductores certificados a tu servicio.
        </p>

        {/* BOTONES LLAMATIVOS CON LOS COLORES DEL LOGO */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 w-full sm:w-auto">
          {/* Botón Azul VIP */}
          <Link
            to="/cotizar"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg transition transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25 text-center"
          >
            Solicitar Cotización
          </Link>

         {/* Botón Verde Esmeralda */}
          <a
            href="https://wa.me"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 sm:px-10 py-4 rounded-2xl text-base sm:text-lg transition transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-600/25 text-center"
          >
            Contactar Aliado VIP
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
