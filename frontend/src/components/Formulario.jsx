import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlaneDeparture, FaUser, FaPhone, FaEnvelope, FaBus, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaPen, FaBarcode } from "react-icons/fa";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    servicio: "",
    origen: "",
    destino: "",
    fecha_servicio: "",
    pasajeros: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

        try {
      const response = await fetch(
        "https://autos-blancos-vip-web.onrender.com/cotizacion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();
      
      alert("¡Reserva Procesada! Su pase de abordar VIP ha sido registrado. Un asesor logístico de Autos Blancos S.A.S. se comunicará con usted de inmediato.");

      setFormData({
        nombre: "",
        telefono: "",
        correo: "",
        servicio: "",
        origen: "",
        destino: "",
        fecha_servicio: "",
        pasajeros: "",
        mensaje: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error al conectar con la terminal de reservas local");
    }
  };
  return (
    <section id="cotizacion" className="px-4 sm:px-8 py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO MINIMALISTA DE ALTA GAMA */}
        <div className="text-left mb-16 border-l-4 border-blue-600 pl-6">
          <span className="text-blue-600 font-extrabold uppercase tracking-widest text-xs block">
            Terminal Especializada de Reservas
          </span>
          <h3 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mt-1">
            Módulo de Cotización 
          </h3>
        </div>

        {/* CONTENEDOR ASIMÉTRICO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: FORMULARIO LIMPIO */}
          <form onSubmit={handleSubmit} className="lg:col-span-5 space-y-5 bg-zinc-50 p-6 sm:p-8 rounded-3xl border border-zinc-100 shadow-sm">
            <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Datos del Cotizante</h4>
            
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" />
              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition text-sm font-semibold"
                required
              />
            </div>

            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" />
              <input
                type="text"
                name="telefono"
                placeholder="Teléfono de contacto"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition text-sm font-semibold"
                required
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" />
              <input
                type="email"
                name="correo"
                placeholder="Correo electrónico"
                value={formData.correo}
                onChange={handleChange}
                className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition text-sm font-semibold"
                required
              />
            </div>

            <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider pt-2 mb-2">Detalles del Itinerario</h4>

            <div className="relative">
              <FaBus className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm z-10" />
              <select
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                className="w-full bg-white pl-11 pr-10 py-3.5 rounded-xl border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition text-sm font-semibold cursor-pointer appearance-none relative"
                required
              >
                <option value="" disabled className="text-gray-400">Seleccione el servicio</option>
                <option value="Empresarial">Corporativo Empresarial</option>
                <option value="Escolar">Ruta Especial Escolar</option>
                <option value="Turístico">Turismo y Viajes Especiales</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400 text-xs">▼</div>
            </div>

            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" />
              <input
                type="text"
                name="origen"
                placeholder="Origen (Ciudad / Dirección)"
                value={formData.origen}
                onChange={handleChange}
                className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition text-sm font-semibold"
                required
              />
            </div>

            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" />
              <input
                type="text"
                name="destino"
                placeholder="Destino (Ciudad / Dirección)"
                value={formData.destino}
                onChange={handleChange}
                className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition text-sm font-semibold"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative flex flex-col">
                <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm z-10 pointer-events-none" />
                <input
                  type="date"
                  name="fecha_servicio"
                  value={formData.fecha_servicio}
                  onChange={handleChange}
                  className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition text-sm font-semibold cursor-pointer h-[50px]"
                  required
                />
              </div>

              <div className="relative">
                <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-sm" />
                <input
                  type="number"
                  name="pasajeros"
                  placeholder="Pasajeros"
                  value={formData.pasajeros}
                  onChange={handleChange}
                  className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition text-sm font-semibold"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <FaPen className="absolute left-4 top-4 text-zinc-400 text-sm" />
              <textarea
                name="mensaje"
                placeholder="Especificaciones adicionales (opcional)..."
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full bg-white pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition text-sm font-semibold resize-none"
                rows="3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl transition duration-300 shadow-lg shadow-slate-950/10 cursor-pointer"
            >
              Emitir Cotizacion
            </button>
          </form>
          {/* COLUMNA DERECHA: EL TICKET DINÁMICO (7 Columnas) */}
          <div className="lg:col-span-7 w-full lg:sticky lg:top-24">
            <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-4 text-left">
              Vista Previa de su Ticket de Cotizacion
            </h4>
            
            {/* ESTRUCTURA DEL TICKET DE VUELO */}
            <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/20 border border-slate-800 flex flex-col md:flex-row relative">
              
              {/* Bloque Principal del Ticket */}
              <div className="flex-1 p-6 sm:p-8 space-y-6 text-left border-b md:border-b-0 md:border-r border-dashed border-slate-700/60 relative">
                
                {/* Cabecera del ticket */}
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Autos Blancos VIP</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">BOARDING PASS • LOG: LOCAL</span>
                </div>

                {/* Ruta Dinámica (Origen ➔ Destino) */}
                <div className="flex items-center justify-between gap-4 py-2">
                  <div className="flex-1">
                    <span className="text-[9px] uppercase font-bold text-slate-500 block tracking-wider">Punto de Salida</span>
                    <span className="text-base sm:text-lg font-black truncate block uppercase tracking-wide text-white">
                      {formData.origen || "---"}
                    </span>
                  </div>
                  <FaPlaneDeparture className="text-xl text-blue-500 shrink-0 transform rotate-45" />
                  <div className="flex-1 text-right">
                    <span className="text-[9px] uppercase font-bold text-slate-500 block tracking-wider">Destino Final</span>
                    <span className="text-base sm:text-lg font-black truncate block uppercase tracking-wide text-cyan-400">
                      {formData.destino || "---"}
                    </span>
                  </div>
                </div>

                {/* 🟢 INFORMACIÓN OPERATIVA EN FILAS SEPARADAS */}
                <div className="space-y-4 pt-3 border-t border-slate-800/60 text-xs">
                  
                  {/* Fila Independiente: Nombre completo del Pasajero */}
                  <div className="w-full overflow-hidden">
                    <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Nombre del Cotizante</span>
                    <span className="font-extrabold uppercase text-white whitespace-nowrap text-sm block tracking-wide">
                      {formData.nombre || "PENDIENTE INGRESO"}
                    </span>
                  </div>

                  {/* Cuadrícula limpia para los demás datos técnicos */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2">
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Línea de Servicio</span>
                      <span className="font-extrabold text-blue-400 uppercase block truncate">
                        {formData.servicio || "SIN SELECCIÓN"}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Fecha de Salida</span>
                      <span className="font-mono font-extrabold text-white block">
                        {formData.fecha_servicio || "AA/MM/DD"}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Terminal de Contacto</span>
                      <span className="font-extrabold text-white block truncate">
                        {formData.telefono || "---"}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Asientos Reservados</span>
                      <span className="font-extrabold text-emerald-400 block">
                        {formData.pasajeros ? `${formData.pasajeros} PASAJEROS` : "0 PASAJEROS"}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Clase de Transporte</span>
                      <span className="font-black text-xs text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 uppercase tracking-widest block">
                        VIP WHITE
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Columna Derecha / El Talón de Control del Ticket */}
              <div className="w-full md:w-[180px] bg-slate-950 p-6 flex flex-col justify-between items-center md:items-start gap-6 relative">
                
                {/* Micro círculos que simulan el troquelado de corte */}
                <div className="hidden md:block absolute -left-[8px] top-4 w-4 h-4 rounded-full bg-white" />
                <div className="hidden md:block absolute -left-[8px] bottom-4 w-4 h-4 rounded-full bg-white" />

                <div className="w-full text-center md:text-left space-y-1">
                  <span className="text-[9px] text-slate-500 block font-bold uppercase tracking-wider">Estatus del Pase</span>
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-black uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wider">
                    {formData.nombre && formData.origen && formData.destino ? "LISTO PARA EMISIÓN" : "COMPLETAR DATOS"}
                  </span>
                </div>

                {/* Código de barras simulado */}
                <div className="w-full space-y-2 flex flex-col items-center">
                  <FaBarcode className="text-4xl sm:text-5xl text-slate-400/80" />
                  <span className="text-[9px] font-mono text-slate-600 block tracking-widest uppercase">
                    {formData.telefono ? `*${formData.telefono}*` : "*AUTOSBLANCOS*"}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Formulario;
