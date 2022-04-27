import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context";
import "./styles.scss";

const Formulario = () => {
  const { buscar, setBuscar, setResultado } = useContext(MyContext);
  const navigate = useNavigate();

  const onSearchValueChange = (event) => {
    setBuscar(event.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    setResultado(buscar);
    navigate("detalles");
  };

  return (
    <form onSubmit={handlesubmit}>
      <input
        className="section__input"
        placeholder="Ingrese producto"
        value={buscar}
        onChange={onSearchValueChange}
      ></input>
    </form>
  );
};

export default Formulario;
