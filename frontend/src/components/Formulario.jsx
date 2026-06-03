import { useState } from "react";

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
      // 🚀 Ahora apuntamos directamente a tu servidor en vivo en internet
      const response = await fetch(
        " https://autos-blancos-vip-web.onrender.com/cotizacion",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.text();
      alert(data);

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
      alert("Error al enviar");
    }
  };

  return (
    <section id="cotizacion" className="px-4 sm:px-8 py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            Solicitar Cotización
          </h3>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 rounded-full shadow-lg shadow-yellow-500/50"></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl text-white outline-none border border-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition"
            required
          />

          <input
            type="text"
            name="telefono"
            placeholder="Teléfono de contacto"
            value={formData.telefono}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl text-white outline-none border border-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition"
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formData.correo}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl text-white outline-none border border-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition"
            required
          />

          <select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl text-white outline-none border border-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition appearance-none"
            required
          >
            <option value="" disabled className="text-gray-500">
              Seleccione el tipo de servicio
            </option>
            <option value="Empresarial">Empresarial</option>
            <option value="Escolar">Escolar</option>
            <option value="Turístico">Turístico</option>
          </select>

          <input
            type="text"
            name="origen"
            placeholder="Lugar de origen (Ciudad / Dirección)"
            value={formData.origen}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl text-white outline-none border border-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition"
          />

          <input
            type="text"
            name="destino"
            placeholder="Lugar de destino (Ciudad / Dirección)"
            value={formData.destino}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl text-white outline-none border border-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition"
          />

          <div className="relative flex flex-col">
            <span className="text-xs text-gray-500 absolute top-1 left-4">
              Fecha del servicio
            </span>
            <input
              type="date"
              name="fecha_servicio"
              value={formData.fecha_servicio}
              onChange={handleChange}
              className="bg-gray-900 pt-6 pb-2 px-4 rounded-xl text-white outline-none border border-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition h-full"
            />
          </div>

          <input
            type="number"
            name="pasajeros"
            placeholder="Número de pasajeros"
            value={formData.pasajeros}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl text-white outline-none border border-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition"
          />

          <textarea
            name="mensaje"
            placeholder="Detalles o especificaciones adicionales (opcional)..."
            value={formData.mensaje}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl text-white outline-none border border-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition grid-cols-1 md:col-span-2"
            rows="4"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl grid-cols-1 md:col-span-2 transition duration-300 hover:scale-[1.01] active:scale-[0.99]"
          >
            Enviar Cotización
          </button>
        </form>
      </div>
    </section>
  );
}

export default Formulario;
