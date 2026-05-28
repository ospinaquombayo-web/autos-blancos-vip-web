import { useState } from "react";

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const manejarLogin = (e) => {
    e.preventDefault();

    if (usuario === "admin" && password === "vipwhite123") {
      onLogin(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">
          Login Administrador
        </h1>

        <form onSubmit={manejarLogin} className="space-y-6">
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white"
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 rounded-xl transition duration-300"
          >
            Ingresar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;
