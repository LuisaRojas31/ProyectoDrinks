import React from "react";
import imagenesUno from "../exports/imagenes";
import imagenesDos from "../exports/imagenes";

import "./styles.scss";

const Prueba = () => {
    
   
    return(
        <section>
        <div className="container">
            <div className="slider">
            {imagenesUno[0].map(image => (
               <div className="item"> 
               <img src={image.imageUrl} 
               alt={image.title}/>
               <h1>Bebidas</h1>
               <div>
                   <h4>{image.title}</h4>
                   <button>Descripcion</button>
               </div>
               </div>
            ))} 
            </div>
            <h3 className="subtitulo">Ingredientes</h3>
            </div>
            <div className="sliderdos">
            {imagenesDos[1].map(image => (
               <div className="item"> 
               <img src={image.imageUrl} 
               alt={image.title}/>
               <h1>Ingredientes</h1>
               <div>
                   <h4>{image.title}</h4>
                   <button>Descripcion</button>
               </div>
               </div>
            ))}
            </div>
            </section>
    )
}

export default Prueba;