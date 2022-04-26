import { useState } from "react";
import { MyContext } from "./Context";

export const Provider = ({ children }) => {
  const [buscar, setBuscar] = useState("");
  const [resultado, setResultado] = useState("");
  const [titulo, setTitulo] = useState("");
  const [id, setId] = useState("");
  const [imagen, setImagen] = useState("");

  return (
    <MyContext.Provider
      value={{
        buscar,
        setBuscar,
        setResultado,
        resultado,
        titulo,
        setTitulo,
        id,
        setId,
        imagen,
        setImagen,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
