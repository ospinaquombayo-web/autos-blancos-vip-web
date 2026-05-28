import { useState } from "react";
import Login from "../components/Login";
import Admin from "../components/Admin";

function AdminPage() {
  const [logueado, setLogueado] = useState(false);

  return <>{logueado ? <Admin /> : <Login onLogin={setLogueado} />}</>;
}

export default AdminPage;
