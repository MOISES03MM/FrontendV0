import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CBuscar from "../components/CBuscar";

const Buscar = () => {
  const [datos, setDatos] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(datos)
    if (datos !== null) {
      navigate("/informacion", { state: { ticket: datos } });
    }
  }, [datos, navigate]);

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen">
      <CBuscar setDatos={setDatos} />
    </div>
  );
};

export default Buscar;
