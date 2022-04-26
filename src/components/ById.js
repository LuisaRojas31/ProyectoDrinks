import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

export const ById = () => {
  const { id, setResultado } = useContext(MyContext);

  useEffect(() => {
    const instruDos = async () => {
      await axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => {
          setResultado(res.data);
        })
        .catch(console.log);
    };
    instruDos();
  }, [id, setResultado]);

  

  return;
    
};

export default ById;
