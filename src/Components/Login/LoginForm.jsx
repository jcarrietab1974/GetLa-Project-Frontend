import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import FondoLogin from "../../assets/ImagenLogin.jpg";
import logo from "../../assets/LOGOS-GREEN-ENERGY.png";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de login:", formData);
    // aquí luego rediriges a otra pantalla (react-router, etc.)
  };

  return (
    // 👉 FONDO SOLO EN ESTA PANTALLA
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${FondoLogin})` }}
    >
      {/* CARD DEL LOGIN */}
      <div
        className="
        relative flex flex-col items-center gap-1
        rounded-[30px] border-8 border-red-700/60 bg-zinc-100/50
        p-10
        shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35),inset_-5px_-5px_15px_rgba(255,255,255,0.1),inset_5px_5px_15px_rgba(0,0,0,0.35)]
        "
      >
        {/* Logo GET Latin American */}
        <div className="flex justify-center mb-4">
          <div className="max-w-[200px] w-full">
            <img
              src={logo}
              alt="GET Latin American"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <h2 className="text-black text-center text-lg font-bold tracking-widest">
            Ingresa aquí
          </h2>

          {/* Nombres y Apellidos */}
          <div className="relative w-82">
            <input
              type="text"
              name="fullName"
              autoComplete="off"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder=" "
              className="
              peer w-full rounded-full border border-black/10
              bg-red-400/70 px-12 py-3 text-sm font-bold text-black
              outline-none
              shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35)]
              transition
              focus:border-red-600
              focus:bg-red-400/80      /* 👈 mantiene el fondo rojo al hacer foco */
              "
            />

            <span
              className="
              pointer-events-none absolute left-12
              -top-1.5 text-[10px] font-bold tracking-[0.05em] text-black
              bg-red-300/80 px-2 rounded-lg
              transition-all

              /* Cuando está vacío: baja y se hace un poco más grande */
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-[12px]
              peer-placeholder-shown:bg-transparent
              peer-placeholder-shown:px-0
              peer-placeholder-shown:rounded-none

              /* Cuando tiene foco: mantenemos posición arriba pero cambiamos color si quieres */
              peer-focus:text-black
              "
            >
              Ingrese su Usuario
            </span>

            <span
              className="
              absolute left-3 top-3 flex items-center justify-center
              border-r border-red-700 pr-2 text-red-900
              text-xl
              "
            >
              <FaUser />
            </span>
          </div>

          {/* Contraseña */}
          <div className="relative w-82">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder=" "
              className="
              peer w-full rounded-full border border-black/10
              bg-red-400/70 px-12 py-3 text-sm font-light text-black
              outline-none
              shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35)]
              transition
              focus:border-red-600
            "
            />
            <span
              className="
              pointer-events-none absolute left-12
              -top-1.5 text-[10px] font-bold tracking-[0.05em] text-black
              bg-red-300/80 px-2 rounded-lg
              transition-all

              /* Cuando está vacío: baja y se hace un poco más grande */
              peer-placeholder-shown:top-3
              peer-placeholder-shown:text-[12px]
              peer-placeholder-shown:bg-transparent
              peer-placeholder-shown:px-0
              peer-placeholder-shown:rounded-none

              /* Cuando tiene foco: mantenemos posición arriba pero cambiamos color si quieres */
              peer-focus:text-black
            "
            >
              Ingrese su Contraseña
            </span>

            <span
              className="
              absolute left-3 top-3 flex items-center justify-center
              border-r border-red-700 pr-2 text-red-900
              text-xl
            "
            >
              <FaLock />
            </span>
          </div>

          {/* Botón */}
          <div className="w-72">
            <button
              type="submit"
              className="
              w-full rounded-full bg-red-400
              py-2 text-sm font-bold text-black
              shadow-[-5px_-5px_15px_rgba(255,255,255,0.1),5px_5px_15px_rgba(0,0,0,0.35),inset_-5px_-5px_15px_rgba(255,255,255,0.1),inset_5px_5px_15px_rgba(0,0,0,0.35)]
              transition hover:brightness-110
            "
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
