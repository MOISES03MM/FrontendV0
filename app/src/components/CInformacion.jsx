import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaEdit,
  FaRegCommentDots,
  FaUser,
  FaBuilding,
  FaCalendarAlt,

} from "react-icons/fa";

const CInformacion = ({ ticket, idBuscado }) => {
//const data = Array.isArray(ticket) ? ticket[0] : null;

  useEffect(() => {
    console.log("Datos procesados:", ticket);
  }, [ticket]);
  if (!ticket) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start pt-20 p-6 font-sans">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-12 max-w-2xl w-full text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ticket no encontrado
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            El ticket  no existe.
          </p>

          <div className="flex justify-center">
            <Link
              to="/buscar"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 transition-all font-bold text-gray-700"
            >
              <FaArrowLeft className="text-sm" /> Volver a la lista
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-10 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-all font-semibold text-sm"
            >
              <FaArrowLeft /> Volver
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Ticket {ticket.id}
              </h1>
              <p className="text-gray-500">{ticket.titulo}</p>
            </div>
          </div>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Información del Ticket</h2>
              <p className="text-gray-400 text-sm font-semibold uppercase mb-2">
                Descripción
              </p>
              <p className="leading-relaxed text-gray-700">
                {ticket.descripcion}
              </p>
            </div>

            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-6 text-xl font-bold">
                <FaRegCommentDots className="text-gray-400" />
                <h2>Actividad y Comentarios</h2>
              </div>

              <div className="space-y-6 border-l-2 border-gray-100 ml-2 pl-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold text-sm">{ticket.asignado}</span>
                    <span className="text-gray-400 text-xs">{ticket.fecha}</span>
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    Ticket identificado y registrado en el sistema.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <p className="font-bold mb-3 text-sm">Agregar comentario</p>
                <textarea
                  placeholder="Escribe tu comentario aquí..."
                  className="w-full h-24 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-100 resize-none"
                ></textarea>
                <button className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-lg font-bold hover:bg-gray-600 transition-colors">
                  Agregar Comentario
                </button>
              </div>
            </div>
          </div>

         
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold mb-5">Estado y Prioridad</h2>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600 font-medium">Estado</span>
                <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>{" "}
                  {ticket.estado}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">Prioridad</span>
                <span className="bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {ticket.prioridad}
                </span>
              </div>
            </div>

           
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold mb-6">Información Adicional</h2>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <FaBuilding className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold uppercase">
                      Cliente
                    </p>
                    <p className="text-sm font-medium text-gray-800">
                      {ticket.cliente}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <FaUser className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold uppercase">
                      Asignado a
                    </p>
                    <p className="text-sm font-medium text-gray-800">
                      {ticket.asignado}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <FaCalendarAlt className="text-gray-400 mt-1" />
                  <div>
                    <p className="text-[11px] text-gray-500 font-bold uppercase">
                      Fecha de Creación
                    </p>
                    <p className="text-sm font-medium text-gray-800">
                      {ticket.fecha}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CInformacion;
