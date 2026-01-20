import React from "react";
import { Link } from "react-router-dom";
// Importar iconos de lucide-react
import { Search, Plus } from "lucide-react";

const Navbar = ({ abrir }) => {
  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between w-full py-6">
      
      <div className="mb-4 md:mb-0">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Sistema de Tickets
        </h1>
        <p className="text-gray-500 text-xl mt-1">
          Gestiona y da seguimiento a todos los tickets de soporte
        </p>
      </div>

      
      <div className="flex items-center gap-3">
        <Link to="/buscar">
          <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-400 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            <Search size={18} className="text-gray-500" />
            <span>Buscar Ticket</span>
          </button>
        </Link>
        
        <button 
          className="flex items-center gap-2 px-5 py-2.5 bg-[#111111] text-white rounded-lg font-medium hover:bg-black transition-colors "
          onClick={abrir}
        >
          <Plus size={18} />
          <span>Nuevo Ticket</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;