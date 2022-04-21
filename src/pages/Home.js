import React, { useState } from 'react';
import Prueba from '../components/DrinksList';


const Home = () => {
    const[buscar, setBuscar] = useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setBuscar(event.target.value);
    };

    return (
        <div>
            <section className='encabezado'>
                <div className='encabezado__header'>
                <h1>Bienvenido a: ¡Tómate un trago y sé FELIZ!</h1>  
                </div>
            </section>
            <section className='section'>      
            <input className='section__input'
               placeholder="Buscar"
               value={buscar}
               onChange={onSearchValueChange} />
               <h3>Principales Bebidas</h3>
                </section>
               <section className='ingredientes'>
                    <Prueba/>
                    </section>
            </div>
    )
}

export default Home;