import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Carta from "../components/Carta";
import Filtro from "../components/Filtro";
import Tickets from "../components/Tickets";
import CrearTicket from "../components/CrearTicket";
import { getTickets, crear } from "../service/ticketService";
import { Ticket, AlertCircle, Clock, CheckCircle2 } from "lucide-react";

const Sistema = () => {
  const [visible, setVisible] = useState(false);
  const [tikets, setTikets] = useState([]);
  const [criterios, setCriterios] = useState({
    texto: "",
    estado: "todos",
    prioridad: "todos",
  });

  const handleVisible = (e) => {
    if (e) e.preventDefault();
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await getTickets();
        setTikets(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error al cargar tickets:", error);
      }
    };
    cargarDatos();
  }, []);

  const manejarFiltrado = (nuevosCriterios) => {
    setCriterios(nuevosCriterios);
  };

  const ticketsFiltrados = tikets.filter((t) => {
    const coincideTexto =
      t.titulo.toLowerCase().includes(criterios.texto.toLowerCase()) ||
      String(t.id).toLowerCase().includes(criterios.texto.toLowerCase());

    const coincideEstado =
      criterios.estado === "todos" || t.estado === criterios.estado;
    const coincidePrioridad =
      criterios.prioridad === "todos" || t.prioridad === criterios.prioridad;

    return coincideTexto && coincideEstado && coincidePrioridad;
  });

  const handleAgregarTiket = async (nuevoTicket) => {
    try {
      const nuevo = { ...nuevoTicket, estado: "ABIERTO" };
      const ticketCreado = await crear(nuevo);
      setTikets((prev) => [...prev, ticketCreado]);
      setVisible(false);
    } catch (error) {
      console.error("Error al agregar ticket:", error);
    }
  };

  
   const estado = {
    total: tikets.length,
    abierto: tikets.filter((t) => t.estado === "ABIERTO").length,
    proceso: tikets.filter((t) => t.estado === "EN_proceso").length,
    cerrado: tikets.filter((t) => t.estado === "Cerrado").length,
  };
 

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 pb-10">
      <header className="w-full flex justify-center ">
        <div className="w-11/12 lg:w-8/12">
          <Navbar abrir={handleVisible} />
        </div>
      </header>

      <main className="w-11/12 lg:w-8/12 flex flex-col items-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-6">
  <Carta 
    titulo="Total Tickets" 
    cantidad={estado.total}
    logo={<Ticket size={20} />} 
    color="text-black" 
  />
  <Carta 
    titulo="Abiertos" 
    cantidad={estado.abierto}
    logo={<AlertCircle size={20} />} 
    color="text-red-600" 
  />
  <Carta 
    titulo="En Progreso" 
    cantidad={estado.proceso}
    logo={<Clock size={20} />} 
    color="text-yellow-600" 
  />
  <Carta 
    titulo="Cerrados" 
    cantidad={estado.cerrado}
    logo={<CheckCircle2 size={20} />} 
    color="text-green-600" 
  />
</div>

<div className="w-full mt-6">
  <div className="bg-[#f3f4f6] inline-flex p-1 rounded-xl border border-gray-100">
    <button className="bg-white px-6 py-2 rounded-lg shadow-sm font-semibold text-[#0f172a] text-sm transition-all">
      Lista de Tickets
    </button>
    <button className="px-6 py-2 rounded-lg font-semibold text-[#64748b] text-sm hover:text-[#0f172a] transition-all">
      Dashboard
    </button>
  </div>
</div>

        <div className="mt-8 w-full">
          <Filtro onFiltrar={manejarFiltrado} />
        </div>

        
        <div className="mt-8 w-full bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
  {/* Cabecera del contenedor */}
  <div className="px-8 py-6 border-b border-gray-100">
    <h5 className="text-2xl font-bold text-gray-900">
      Tickets ({ticketsFiltrados.length})
    </h5>
  </div>

  
  <div className="p-8 overflow-x-auto">
    <div className="min-w-[1000px]">
    
      <div className="grid grid-cols-[100px_2fr_1.5fr_1fr_1.2fr_1.2fr_1.2fr_120px] gap-4 mb-3 text-gray-500 font-medium text-sm pr-10">
        <p>ID</p>
        <p>Título</p>
        <p>Cliente</p>
        <p className="text-center">Prioridad</p>
        <p className="text-center">Estado</p>
        <p>Asignado</p>
        <p>Fecha</p>
        <p className="text-center">Acciones</p>
        
      </div>
      <hr  className="text-gray-200"/> 

      
      <div className="flex flex-col   max-h-[220px] custom-scrollbar overflow-y-auto">
        {ticketsFiltrados.length > 0 ? (
          ticketsFiltrados.map((tiket) => (
            <Tickets key={tiket.id} {...tiket} accion="Ver Detalles" />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-gray-400 font-medium">
              No se encontraron tickets con estos filtros.
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
</div>
      </main>

      {visible && (
  <div className="fixed inset-0 bg-black/80  flex justify-center items-center z-50 p-4">
    
    <div className="w-full max-w-[750px]"> 
      <CrearTicket cerrar={handleVisible} setdatos={handleAgregarTiket} />
    </div>
  </div>
)}
    </div>
  );
};

export default Sistema;
