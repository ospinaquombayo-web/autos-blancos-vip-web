import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import ServiciosPage from "./pages/ServiciosPage";
import FlotaPage from "./pages/FlotaPage";
import CotizarPage from "./pages/CotizarPage";
import ContactoPage from "./pages/ContactoPage";

// 🛠️ Importamos el componente inteligente de scroll y tu Navbar original
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar"; // 👈 Añadimos tu barra original aquí
function App() {
  return (
    <BrowserRouter>
      {/* 🛠️ Vigila y limpia el scroll en cada cambio de página */}
      <ScrollToTop />
      
      {/* 🟢 Renderiza tu barra original de forma global en todas las rutas */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/flota" element={<FlotaPage />} />
        <Route path="/cotizar" element={<CotizarPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
