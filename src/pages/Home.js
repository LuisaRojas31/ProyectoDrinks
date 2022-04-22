import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Prueba from '../components/DrinksList';
import axios from 'axios';
import { MyContext } from '../context/Context';


const Home = () => {
   
   const navigate = useNavigate()

    const {buscar,setBuscar, setResult, result} = useContext(MyContext);


    // axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
    // .then(result=>{
    //     console.log(result)
    // }).catch(console.log)

    // axios.get(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${coctelSel}`)
    // .then(result=>{
    //     console.log(result)
    // }).catch(console.log)

    
        useEffect(()=>{
            const consultapalabra =()=>{
             axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${buscar}`)
             .then(result=>{
                 setResult(result.data)
             }).catch(console.log)
            }
            consultapalabra();
         },[navigate])
        

    const handlesubmit =()=>{
        
        navigate('detalles');
    }


    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setBuscar(event.target.value);
    };

    console.log(result);
    console.log(result.strDrink);

    return (
        <div>
            <section className='encabezado'>
                <div className='encabezado__header'>
                <h1>Bienvenido a: ¡Tómate un trago y sé FELIZ!</h1>  
                </div>
            </section>
            <section className='section'> 
            <form onSubmit={handlesubmit}>
            <input className='section__input'
               placeholder="Buscar"
               value={buscar}
               onChange={onSearchValueChange} />
            </form>
                </section>
               <section className='ingredientes'>
                    <Prueba/>
                    </section>
            </div>
    )
}

export default Home;