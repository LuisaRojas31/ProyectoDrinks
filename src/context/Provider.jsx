import { useState } from "react"
import { MyContext } from "./Context";

export const Provider = ({children}) =>{
    const [coctelSel, setCoctelSel] = useState("");
    const [buscar, setBuscar] = useState("");
    const [result, setResult] = useState("");

    return (
        <MyContext.Provider
        value={{
            coctelSel,
            setCoctelSel,
            buscar,
            setBuscar,
            setResult, 
            result,
        }}
        >
{children}
        </MyContext.Provider>
    );
};