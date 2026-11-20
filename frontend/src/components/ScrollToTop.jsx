import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. Si la URL NO tiene un ancla (#), sube al tope de la página normalmente
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // 2. Si trae un ancla, espera un milisegundo a que cargue el diseño y viaja a la sección
      setTimeout(() => {
        const elemento = document.getElementById(hash.replace("#", ""));
        if (elemento) {
          elemento.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
