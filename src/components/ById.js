import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

export const ById = () => {
  const { id, setResultado, byId } = useContext(MyContext);

  useEffect(() => {
    const instruDos = async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}${byId}`
      );
      setResultado(response.data);
    };
    instruDos();
  }, [id, setResultado, byId]);

  return;
};

export default ById;
