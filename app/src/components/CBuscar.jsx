import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import { obtenerPorCodigo } from "../service/ticketService";

const CBuscar = ({ setDatos }) => {
  const [codigo, setCodigo] = useState("");

  const handleChange = (e) => {
    setCodigo(e.target.value);
  };

  const handleObtener = async () => {
    if (!codigo || !codigo.trim()) {
      alert("Por favor, ingresa un código");
      return;
    }
    const respuesta = await obtenerPorCodigo(codigo);
    setDatos(respuesta);
  };

  return (
    <div className="min-h-screen w-full border-4 bg-[#f9fafb] p-10 flex flex-col items-center font-sans">

      <div className="flex items-center gap-6 mb-8 w-full max-w-[500px]  ">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg  hover:bg-gray-50 transition-colors font-semibold text-black text-sm"
        >
          <FaArrowLeft className="text-[10px]" /> Volver
        </Link>
        <div>
          <h4 className="text-[28px] font-bold text-gray-900 leading-tight">Buscar Ticket</h4>
          <p className="text-gray-500 text-[18px]">Ingresa el código del ticket</p>
        </div>
      </div>


      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-10 w-full max-w-[500px]">
        <div className="flex items-center gap-3 mb-8">
          <FaSearch className="text-gray-900 text-xl" />
          <p className="text-[22px] font-bold text-gray-900">
            Búsqueda por Código
          </p>
        </div>

        <div className="space-y-4">
          <label className="block text-gray-900 font-bold text-[15px]">
            Código del Ticket
          </label>
          <input
            type="text"
            placeholder="Ej: 1"
            onChange={handleChange}
            className="w-full p-3.5 border border-gray-200 rounded-lg bg-white text-center text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-100 transition-all"
          />
          <p className="text-gray-400 text-center text-[13px]">
            Formato: Número (ejemplo: 1, 2, 3, 4)
          </p>

          <button
            onClick={handleObtener}
            className="w-full bg-[#8a8a8a] hover:bg-[#757575] text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all mt-6 shadow-sm"
          >
            <FaSearch className="text-sm" /> Buscar Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default CBuscar;