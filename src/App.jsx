import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --------------------
// Login
// --------------------
import LoginForm from "./Components/Login/LoginForm";

// --------------------
// Admin
// --------------------
import Admin from "./Components/Admin/Admin";

// --------------------
// Usuario
// --------------------
import CrearUsuario from "./Components/Usuario/CrearUsuario";
import ActualizarUsuario from "./Components/Usuario/ActualizarUsuario";

// --------------------
// Paneles por área
// --------------------
import Mantencion from "./Components/Mantencion/AdminMantencion";
import Repuestos from "./Components/Repuestos/AdminRepuestos";
import Dotacion from "./Components/Dotacion/AdminDotacion";
import Limpieza from "./Components/Limpieza/AdminLimpieza";

// --------------------
// Repuestos
// --------------------
import CategoriaRepuesto from "./Components/Repuestos/CategoriaRepuesto";
import ListaRepuestos from "./Components/Repuestos/ListaRepuestos";

// --------------------
// Dotación
// --------------------
import CategoriaDotacion from "./Components/Dotacion/CategoriaDotacion";
import ListaDotacion from "./Components/Dotacion/ListaDotacion";

function App() {
  return (
    <Router>
      <Routes>
        {/* ==================== LOGIN ==================== */}
        <Route path="/" element={<LoginForm />} />

        {/* ==================== PANEL ADMIN ==================== */}
        <Route path="/admin" element={<Admin />} />

        {/* ==================== USUARIOS ==================== */}
        <Route path="/admin/crear-usuario" element={<CrearUsuario />} />
        <Route
          path="/admin/actualizar-usuario/:id"
          element={<ActualizarUsuario />}
        />

        {/* ==================== REPUESTOS ==================== */}
        <Route
          path="/AdminRepuestos/categorias"
          element={<CategoriaRepuesto />}
        />
        <Route
          path="/AdminRepuestos/lista/:categoriaId"
          element={<ListaRepuestos />}
        />

        {/* ==================== DOTACIÓN ==================== */}
        <Route
          path="/AdminDotacion/categorias"
          element={<CategoriaDotacion />}
        />
        <Route
          path="/AdminDotacion/lista/:categoriaId"
          element={<ListaDotacion />}
        />

        {/* ==================== PANELES POR ÁREA ==================== */}
        <Route path="/mantencion" element={<Mantencion />} />
        <Route path="/repuestos" element={<Repuestos />} />
        <Route path="/dotacion" element={<Dotacion />} />
        <Route path="/limpieza" element={<Limpieza />} />
      </Routes>
    </Router>
  );
}

export default App;
