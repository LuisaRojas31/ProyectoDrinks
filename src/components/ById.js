import axios from "axios";
import { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

export const ById = () => {
  const { id, setResultado } = useContext(MyContext);

  useEffect(() => {
    instru();
  }, []);

  const instru = async () => {
    await axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setResultado(res.data);
      })
      .catch(console.log);
  };

  return (
    <div>
      <h1>Pintar datos</h1>
    </div>
  );
};

export default ById;
