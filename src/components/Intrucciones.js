import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

export const Instrucciones = () => {
  const { buscar, setResultado } = useContext(MyContext);

  useEffect(() => {
    const instru = async () => {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${buscar}`
        );
        const { data, status } = response;
        if (status === 200) setResultado(data);
      } catch (e) {
        console.log(e);
      }
    };

    instru();
  }, [buscar, setResultado]);

  return;
};

export default Instrucciones;
