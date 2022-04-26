import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ById from "../components/ById";
import { MyContext } from "../context/Context";

const Especificaciones = () => {
  const { titulo, imagen, resultado } = useContext(MyContext);

  const navigate = useNavigate();

  ById();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="contenedor__especi">
        <h1>Especificaciones</h1>
      </div>

      <section className="especi">
        <h1>{titulo} </h1>
        <img src={imagen} alt=""/>
        {resultado.drinks &&
          resultado.drinks.map((item) => (
            <div
              key={item.idDrink}
              to="/espec"
              // className="container__tarjeta"
              // onClick={()=> handleClick(item.idDrink, item.strDrink,item.strDrinkThumb  ) }
            >
              <p>{item.strInstructions}</p>
              <li>{item.strIngredient1}</li>
              <li>{item.strIngredient2}</li>
              <li>{item.strIngredient3}</li>
              <button onClick={handleClick}> Regresar</button>
            </div>
          ))}
      </section>
    </>
  );
};

export default Especificaciones;
