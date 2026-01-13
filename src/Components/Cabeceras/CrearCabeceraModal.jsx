import React, { useState } from "react";
import Modal from "react-modal";
import crud from "../../conexiones/crud";

/* IMPORTANTE (una sola vez en tu app, normalmente en main.jsx o App.jsx)
Modal.setAppElement("#root");
*/

const CrearCabeceraModal = ({ onClose, actualizarCabeceras }) => {
  /* ===============================
     ESTADO DEL FORMULARIO
  =============================== */
  const [form, setForm] = useState({
    local: "",
    nit: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  const getAuthToken = () => localStorage.getItem("token");

  /* ===============================
     HANDLERS
  =============================== */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validarCampos = () => {
    const { local, nit, direccion, telefono, email } = form;
    return local && nit && direccion && telefono && email;
  };

  const handleSubmit = async () => {
    if (!validarCampos()) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setIsSaving(true);
    setError("");

    try {
      const token = getAuthToken();

      await crud.POST(
        "/api/cabecera",
        { ...form },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      actualizarCabeceras();
      onClose();
    } catch (err) {
      setError(
        err.response?.data?.msg ||
          "No se pudo crear la cabecera. Verifica el NIT."
      );
    } finally {
      setIsSaving(false);
    }
  };

  /* ===============================
     RENDER
  =============================== */
  return (
    <Modal
      isOpen
      onRequestClose={onClose}
      className="bg-green-100 rounded-lg p-6 max-w-md w-full mx-auto outline-none"
      overlayClassName="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4"
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
        Crear Cabecera
      </h2>

      {/* FORMULARIO */}
      <div className="space-y-3">
        {["local", "nit", "direccion", "telefono", "email"].map((field) => (
          <div key={field}>
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {field}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded-md text-gray-800 focus:ring-2 focus:ring-lime-500"
              disabled={isSaving}
            />
          </div>
        ))}
      </div>

      {/* ERROR */}
      {error && (
        <p className="text-red-600 text-sm mt-3 text-center">{error}</p>
      )}

      {/* ACCIONES */}
      <div className="flex flex-col sm:flex-row justify-end gap-2 mt-6">
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
          onClick={onClose}
          disabled={isSaving}
        >
          Cancelar
        </button>

        <button
          className={`px-4 py-2 rounded-lg text-white ${
            isSaving
              ? "bg-green-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
          onClick={handleSubmit}
          disabled={isSaving}
        >
          {isSaving ? "Guardando..." : "Guardar"}
        </button>
      </div>
    </Modal>
  );
};

export default CrearCabeceraModal;
