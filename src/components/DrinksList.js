import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/Context";
import imagenesUno from "../exports/imagenes";
import imagenesDos from "../exports/imagenes";

import "./styles.scss";

const Prueba = () => {
  const { setById, setImagen, setId } = useContext(MyContext);

  const handleClick = (id, imagen) => {
    setId("");
    setById(id);
    setImagen(imagen);
  };
  return (
    <section>
      <div className="container">
        <div className="slider">
          {imagenesUno[0].map((image) => (
            <div className="item" key={image.id}>
              <Link to={"/espec"}>
                <img
                  onClick={() => handleClick(image.id, image.imageUrl)}
                  src={image.imageUrl}
                  alt={image.title}
                />
                <div className="cajaunoboton">
                  <h4>{image.title}</h4>
                  <button>Descripcion</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="containerdos">
        <div className="sliderdos">
          {imagenesDos[1].map((image) => (
            <div className="itemdos" key={image.id}>
              <Link to={"/espec"}>
                <img
                  onClick={() =>
                    handleClick(image.id, image.imageUrl, image.strDrink)
                  }
                  src={image.imageUrl}
                  alt={image.title}
                />
                <h1>Ingredientes</h1>
                <div className="cajaboton">
                  <h4>{image.title}</h4>
                  <button>Descripcion</button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prueba;
