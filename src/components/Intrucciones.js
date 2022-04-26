import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

export const Instrucciones = () => {
  const { buscar, setResultado } = useContext(MyContext);

  useEffect(() => {
    instru();
  }, []);

  const instru = async () => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${buscar}`)
      .then((res) => {
        setResultado(res.data);
      })
      .catch(console.log);
  };

  return;
};

export default Instrucciones;
