import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Login
import LoginForm from "./Components/Login/LoginForm";

// Admin
import Admin from "./Components/Admin/Admin";

// Usuario
import CrearUsuario from "./Components/Usuario/CrearUsuario";
import ActualizarUsuario from "./Components/Usuario/ActualizarUsuario";

// Paneles por área
import Mantencion from "./Components/Mantencion/Mantencion";
import Repuestos from "./Components/Repuestos/Repuestos";
import Dotacion from "./Components/Dotacion/Dotacion";
import Limpieza from "./Components/Limpieza/Limpieza";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginForm />} />

        {/* Panel Admin */}
        <Route path="/admin" element={<Admin />} />

        {/* Usuario */}
        <Route path="/admin/crear-usuario" element={<CrearUsuario />} />
        <Route
          path="/admin/actualizar-usuario/:id"
          element={<ActualizarUsuario />}
        />

        {/* Paneles por área */}
        <Route path="/mantencion" element={<Mantencion />} />
        <Route path="/repuestos" element={<Repuestos />} />
        <Route path="/dotacion" element={<Dotacion />} />
        <Route path="/limpieza" element={<Limpieza />} />
      </Routes>
    </Router>
  );
}

export default App;
