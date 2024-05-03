import React, { useState, useEffect, useContext } from 'react';
import Navigation from '../../components/Navigation';
import { Filter, List } from "../../components";
import Loader from "../../components/Loader";
import { PokemonContext } from '../../context/PokemonContext';

export default function Pokemons() {
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar si el loader debe mostrarse al cargar la página

    const {onClickLoadMore, active, setActive} = useContext(PokemonContext)

    useEffect(() => {
        // Simula una carga de datos (aquí puedes agregar tu lógica real de carga de datos)
        const loadData = () => {
            // Simulando una carga de datos con un tiempo de espera de 2 segundos
            setTimeout(() => {
                setIsLoading(false); // Una vez que los datos se han cargado, establece isLoading en falso para ocultar el loader
            }, 1000);
        };

        // Llama a la función para cargar los datos cuando el componente se monte
        loadData();
    }, []); // El array vacío [] asegura que este efecto se ejecute solo una vez, equivalente a componentDidMount en las clases

    return (
        <>
            <Navigation />
            <div className="container-filter">
                <div className="icon-filter" onClick={() => setActive(!active)}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='icon'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                        />
                    </svg>
                    <span>Filtrar</span>
                </div>
            </div>
            {isLoading ? <Loader /> : ( // Si isLoading es true, muestra el loader, de lo contrario, muestra la lista de pokemons y el filtro
                <>
                    <List />
                    <Filter/>
                    <div className="container-btn-load-more container">
                        <button className='btn-load-more' onClick={onClickLoadMore}>
                            Cargar mas
                        </button>
                    </div>
                </>
            )}
        </>
    )
}
