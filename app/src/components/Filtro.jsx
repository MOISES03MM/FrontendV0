import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const Filtro = ({ onFiltrar }) => {
  const [filtros, setFiltros] = useState({
    texto: "",
    estado: "todos",
    prioridad: "todos",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nuevosFiltros = {
      ...filtros,
      [name]: value,
    };
    setFiltros(nuevosFiltros);
    onFiltrar(nuevosFiltros);
  };

  return (
    <section className="w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Filtros</h3>
      </div>

      <div className="flex flex-row items-center gap-3">

        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            name="texto"
            value={filtros.texto} 
            onChange={handleChange}
            placeholder="Buscar tickets..."
            className="block w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-lg outline-none text-gray-600 placeholder-gray-400 focus:border-gray-300 transition-all"
          />
        </div>


        <div className="relative min-w-[180px]">
          <select
            name="estado"
            value={filtros.estado}
            onChange={handleChange}
            className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-2.5 px-4 pr-10 rounded-lg cursor-pointer outline-none focus:border-gray-300 transition-all"
          >
            <option value="todos">Todos los estados</option>
            <option value="ABIERTO">Abierto</option>
            <option value="EN_proceso">En progreso</option>
            <option value="Cerrado">Cerrado</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>


        <div className="relative min-w-[200px] group">
          <select
            name="prioridad"
            value={filtros.prioridad}
            onChange={handleChange}
            className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2.5 px-4 pr-10 rounded-lg cursor-pointer outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-400 transition-all text-sm font-medium"
          >
            <option value="todos">Todas las prioridades</option>
            <option value="Alta">Alta</option>
            <option value="Media">Media</option>
            <option value="Baja">Baja</option>
          </select>


          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 group-focus-within:rotate-180 transition-transform duration-200">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filtro;