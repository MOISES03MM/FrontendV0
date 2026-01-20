import React from "react";

const Carta = ({ titulo, cantidad, logo, color }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 h-32 flex flex-col justify-center gap-3 shadow-sm">
      <div className="flex justify-between items-start">
        <p className="text-sm font-semibold text-gray-800">{titulo}</p>
        <div className={`${color} opacity-80`}>
          {logo}
        </div>
      </div>
      <div>
        <p className={`text-2xl font-bold ${color}`}>
          {cantidad}
        </p>
      </div>
    </div>
  );
};

export default Carta;
