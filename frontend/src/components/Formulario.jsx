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
      const response = await fetch("http://localhost:3000/cotizacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
    <section className="px-8 py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-16">
          Solicitar Cotización
        </h3>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl"
            required
          />

          <input
            type="text"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl"
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={formData.correo}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl"
            required
          />

          <select
            name="servicio"
            value={formData.servicio}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl"
            required
          >
            <option value="">Seleccione servicio</option>
            <option>Empresarial</option>
            <option>Escolar</option>
            <option>Turístico</option>
          </select>

          <input
            type="text"
            name="origen"
            placeholder="Origen"
            value={formData.origen}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl"
          />

          <input
            type="text"
            name="destino"
            placeholder="Destino"
            value={formData.destino}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl"
          />

          <input
            type="date"
            name="fecha_servicio"
            value={formData.fecha_servicio}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl"
          />

          <input
            type="number"
            name="pasajeros"
            placeholder="Número de pasajeros"
            value={formData.pasajeros}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl"
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje adicional"
            value={formData.mensaje}
            onChange={handleChange}
            className="bg-gray-900 p-4 rounded-xl md:col-span-2"
            rows="5"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl md:col-span-2"
          >
            Enviar Cotización
          </button>
        </form>
      </div>
    </section>
  );
}

export default Formulario;
