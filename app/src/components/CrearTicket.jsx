import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";

const CrearTicket = ({ cerrar, setdatos }) => {
  const [nuevoTicket, setNuevoTicket] = useState({
    titulo: '',
    cliente: '',
    descripcion: '',
    prioridad: '',
    asignado: '',
    fecha: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoTicket((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoTicket.titulo || !nuevoTicket.cliente || !nuevoTicket.descripcion || !nuevoTicket.asignado) {
      alert("Por favor, llena todos los campos");
      return;
    }
    setdatos(nuevoTicket);
  };

  return (
    <section className="w-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden font-sans">
      
      {/* Cabecera - Más compacta */}
      <div className="px-8 pt-6 pb-2 relative">
        <button 
          onClick={cerrar} 
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-900 transition-colors"
        >
          <X size={20} strokeWidth={2.5} />
        </button>
        <h4 className="text-xl font-bold text-gray-900">Crear Nuevo Ticket</h4>
        <p className="text-gray-500 text-sm mt-0.5">
          Completa la información para crear un nuevo ticket de soporte
        </p>
      </div>

      {/* Formulario - Gap reducido */}
      <form onSubmit={handleSubmit} className="px-8 py-4 grid grid-cols-2 gap-x-6 gap-y-4">
        {/* Titulo */}
        <div className="col-span-1 flex flex-col gap-1.5">
          <label className="text-[13px] font-bold text-gray-900">Título</label>
          <input
            type="text"
            name="titulo"
            value={nuevoTicket.titulo}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 h-10 px-4 rounded-lg focus:border-black outline-none transition-all text-gray-800 text-sm"
          />
        </div>

        {/* Cliente */}
        <div className="col-span-1 flex flex-col gap-1.5">
          <label className="text-[13px] font-bold text-gray-900">Cliente</label>
          <input
            type="text"
            name="cliente"
            value={nuevoTicket.cliente}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 h-10 px-4 rounded-lg focus:border-black outline-none transition-all text-gray-800 text-sm"
          />
        </div>

        {/* Descripcion - Altura reducida */}
        <div className="col-span-2 flex flex-col gap-1.5">
          <label className="text-[13px] font-bold text-gray-900">Descripción</label>
          <textarea
            name="descripcion"
            value={nuevoTicket.descripcion}
            onChange={handleChange}
            className="w-full h-24 border-2 border-gray-200 p-3 rounded-lg focus:border-black outline-none transition-all resize-none text-gray-800 text-sm"
          ></textarea>
        </div>

        {/* Prioridad */}
        <div className="col-span-1 flex flex-col gap-1.5">
          <label className="text-[13px] font-bold text-gray-900">Prioridad</label>
          <div className="relative">
            <select
              name="prioridad"
              value={nuevoTicket.prioridad}
              onChange={handleChange}
              className="w-full appearance-none border-2 border-gray-200 h-10 px-4 rounded-lg focus:border-black outline-none bg-white text-gray-700 text-sm"
            >
              <option value="" disabled>Seleccionar prioridad</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Asignado */}
        <div className="col-span-1 flex flex-col gap-1.5 ">
          <label className="text-[13px] font-bold text-gray-900">Asignado a</label>
          <input
            type="text"
            name="asignado"
            value={nuevoTicket.asignado}
            onChange={handleChange}
            className="w-full border-2 border-gray-200 h-10 px-4 rounded-lg focus:border-black outline-none transition-all text-gray-800 text-sm"
          />
        </div>
      </form>

      {/* Acciones - Más compacto */}
      <div className="px-8 pb-6 pt-2 flex justify-end gap-3">
        <button 
          type="button"
          onClick={cerrar} 
          className="px-6 py-2 rounded-lg border-2 border-gray-50 font-bold text-gray-600 hover:bg-gray-50 transition-all text-sm"
        >
          Cancelar
        </button>
        <button 
          onClick={handleSubmit}
          className="px-6 py-2 rounded-lg bg-[#111827] text-white font-bold hover:bg-black transition-all shadow-md text-sm"
        >
          Crear Ticket
        </button>
      </div>
    </section>
  );
};

export default CrearTicket;