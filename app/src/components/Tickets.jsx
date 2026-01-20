import React from 'react';
import { AlertCircle, Clock, CheckCircle2 } from "lucide-react";

const Tickets = ({ id, titulo, cliente, prioridad, estado, asignado, fecha, accion }) => {
  
  const getPrioridadStyles = (p) => {
    const power = p.toLowerCase();
    if (power === 'alta') return 'bg-red-500 text-white';
    if (power === 'media') return 'bg-black text-white';
    return 'bg-gray-100 text-gray-700';
  };


  const getEstadoStyles = (e) => {
    const status = e.toLowerCase();
    if (status === 'abierto') return {
      css: 'bg-red-500 text-white',
      icon: <AlertCircle size={14} className="mr-1" />
    };
    if (status === 'en progreso') return {
      css: 'bg-yellow-500 text-white',
      icon: <Clock size={14} className="mr-1" />
    };
    return { 
      css: 'bg-gray-100 text-gray-700 border border-gray-200',
      icon: <CheckCircle2 size={14} className="mr-1" />
    };
  };

  const estadoInfo = getEstadoStyles(estado);

  return (
    <div className='grid grid-cols-[100px_2fr_1.5fr_1fr_1.2fr_1.2fr_1.2fr_120px] gap-4 py-5 border-b border-gray-200 items-center text-sm text-gray-700 hover:bg-gray-50/50 transition-colors pr-10'>
      
     
      <p className='text-blue-600 font-semibold'>{id}</p>
      
      
      <p className=' font-stretch-50% text-[16px] text-gray-900'>{titulo}</p>
      <p className='text-black font-stretch-50% text-[16px]'>{cliente}</p>
      
      
      <div className="flex justify-center">
        <span className={`px-5 py-2 rounded-full text-[10px]  font-bold uppercase tracking-wider ${getPrioridadStyles(prioridad)}`}>
          {prioridad}
        </span>
      </div>

      
      <div className="flex justify-center">
        <span className={`flex items-center px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider ${estadoInfo.css}`}>
          {estadoInfo.icon}
          {estado}
        </span>
      </div>

      <p className='text-black font-stretch-50% text-[16px]'>{asignado}</p>
      <p className='text-black font-stretch-50% text-[16px]'>{fecha}</p>
      
      
      <div className="flex justify-center">
        <button className='px-3 py-1.5 border border-gray-200 rounded-lg text-md font-semibold text-black hover:bg-gray-50  transition-all'>
          {accion}
        </button>
      </div>
    </div>
  );
};

export default Tickets;