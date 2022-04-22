import axios from "axios";
import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";
import './styles.scss';




const Detalles = () =>{

    const {buscar, setResult} =useContext(MyContext);


    return(
        <>
        <div>Detalles</div>
        <div>{buscar}</div>
        

        </>
    )
}

export default Detalles;