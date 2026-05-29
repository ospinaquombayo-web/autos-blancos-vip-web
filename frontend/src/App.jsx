import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import ServiciosPage from "./pages/ServiciosPage";
import FlotaPage from "./pages/FlotaPage";
import CotizarPage from "./pages/CotizarPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
    <BrowserRouter>
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
