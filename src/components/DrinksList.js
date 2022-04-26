import React from "react";
import imagenesUno from "../exports/imagenes";
import imagenesDos from "../exports/imagenes";

import "./styles.scss";

const Prueba = () => {
  return (
    <section>
      <div className="container">
        <div className="slider">
          {imagenesUno[0].map((image) => (
            <div className="item">
              <img src={image.imageUrl} alt={image.title} />
              <div className="cajaunoboton">
                <h4>{image.title}</h4>
                <button>Descripcion</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="containerdos">
        <div className="sliderdos">
          {imagenesDos[1].map((image) => (
            <div className="itemdos">
              <img src={image.imageUrl} alt={image.title} />
              <h1>Ingredientes</h1>
              <div className="cajaboton">
                <h4>{image.title}</h4>
                <button>Descripcion</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prueba;
