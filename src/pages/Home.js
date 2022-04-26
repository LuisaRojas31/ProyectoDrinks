import React, { useContext } from "react";
import Prueba from "../components/DrinksList";
import Formulario from "../components/Formulario";
import { Instrucciones } from "../components/Intrucciones";

const Home = () => {
  return (
    <div>
      <div className="encabezado">
        <h1>Bienvenido a: ¡Tómate un trago y sé FELIZ!</h1>
      </div>
      <Formulario />
      <Instrucciones />
      <section className="ingredientes">
        <h1>Bebidas</h1>
        <Prueba />
      </section>
    </div>
  );
};

export default Home;
