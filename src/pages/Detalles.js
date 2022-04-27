import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Instrucciones } from "../components/Intrucciones";
import { MyContext } from "../context/Context";
import "./styles.scss";

const Detalles = () => {
  const { resultado, setId, setTitulo, setImagen, setById } =
    useContext(MyContext);

  Instrucciones();

  const handleClick = (id, titulo, imagen) => {
    setById("");
    setId(id);
    setTitulo(titulo);
    setImagen(imagen);
  };

  return (
    <>
      <div className="contenedor__detalles">
        <h1>Detalles</h1>
      </div>
      <section className="container__tarjeta">
        {resultado.drinks &&
          resultado.drinks.map((item) => (
            <Link
              key={item.idDrink}
              to="/espec"
              onClick={() =>
                handleClick(item.idDrink, item.strDrink, item.strDrinkThumb)
              }
            >
              <li className="lista">{item.strDrink}</li>
              <img className="tarjeta" src={`${item.strDrinkThumb}`} alt="" />
            </Link>
          ))}
      </section>
    </>
  );
};

export default Detalles;
