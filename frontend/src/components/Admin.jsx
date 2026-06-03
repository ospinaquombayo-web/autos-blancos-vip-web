import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [cotizaciones, setCotizaciones] = useState([]);

  const totalCotizaciones = cotizaciones.length;

  const serviciosData = [
    {
      nombre: "Empresarial",
      cantidad: cotizaciones.filter((item) => item.servicio === "Empresarial")
        .length,
    },

    {
      nombre: "Escolar",
      cantidad: cotizaciones.filter((item) => item.servicio === "Escolar")
        .length,
    },

    {
      nombre: "Turístico",
      cantidad: cotizaciones.filter((item) => item.servicio === "Turístico")
        .length,
    },
  ];

  useEffect(() => {
    const obtenerCotizaciones = () => {
      axios
        .get("https://autos-blancos-vip-web.onrender.com/cotizaciones")
        .then((res) => {
          setCotizaciones(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    // Carga inicial
    obtenerCotizaciones();

    // Actualización automática cada 5 segundos
    const intervalo = setInterval(() => {
      obtenerCotizaciones();
    }, 2000);

    // Limpiar intervalo al salir de la página
    return () => clearInterval(intervalo);
  }, []);

  const eliminarCotizacion = (id) => {
    axios
      .delete(`https://autos-blancos-vip-web.onrender.com/cotizaciones${id}`)
      .then(() => {
        setCotizaciones(cotizaciones.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const exportarExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(cotizaciones);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook, worksheet, "Cotizaciones");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(data, "cotizaciones_vipwhite.xlsx");
  };

  return (
    <section className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10 text-center">
        Panel Administrador
      </h1>
      <div className="flex justify-center mb-8">
        <button
          onClick={exportarExcel}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-2xl font-bold transition duration-300"
        >
          Exportar Excel
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
          <h2 className="text-2xl mb-2">Total Cotizaciones</h2>

          <p className="text-5xl font-bold text-yellow-400">
            {totalCotizaciones}
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
          <h2 className="text-2xl mb-2">Servicios Empresariales</h2>

          <p className="text-5xl font-bold text-yellow-400">
            {serviciosData.find((s) => s.nombre === "Empresarial").cantidad}
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-3xl border border-gray-800">
          <h2 className="text-2xl mb-2">Servicios Turísticos</h2>

          <p className="text-5xl font-bold text-yellow-400">
            {serviciosData.find((s) => s.nombre === "Turístico").cantidad}
          </p>
        </div>
      </div>

      <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 mb-10">
        <h2 className="text-3xl font-bold mb-6">Estadísticas de Servicios</h2>

        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={serviciosData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="nombre" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="cantidad" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead className="bg-yellow-400 text-black">
            <tr>
              <th className="p-4">Nombre</th>
              <th className="p-4">Teléfono</th>
              <th className="p-4">Correo</th>
              <th className="p-4">Servicio</th>
              <th className="p-4">Origen</th>
              <th className="p-4">Destino</th>
              <th className="p-4">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {cotizaciones.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-800 text-center"
              >
                <td className="p-4">{item.nombre}</td>
                <td className="p-4">{item.telefono}</td>
                <td className="p-4">{item.correo}</td>
                <td className="p-4">{item.servicio}</td>
                <td className="p-4">{item.origen}</td>
                <td className="p-4">{item.destino}</td>
                <td className="p-4">
                  <button
                    onClick={() => eliminarCotizacion(item.id)}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition duration-300"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Admin;
