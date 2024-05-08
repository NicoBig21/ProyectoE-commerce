import React, { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

export default function Carrito() {
    const { carrito, vaciarCarrito } = useContext(PokemonContext);

    const handleVaciarCarrito = () => {
        vaciarCarrito();
    };

    return (
        <div className="container">
            <h2>Carrito de compras</h2>
            <div className="row">
                {carrito.map(pokemon => ( 
                    <div key={pokemon.id} className="col-md-6">
                    <div className="border rounded container-carrito pokemon-border"> {/* Agrega la clase pokemon-border aquí */}
                      <img className="carrito-img" src={pokemon.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemon?.name}`} />
                      <div className="container-text-carrito">
                        <h3 className="mb-3">{pokemon.name}</h3>
                        <p>${pokemon.price}</p>
                        <a href="#" className="btn btn-primary me-3">Comprar</a>
                      </div>
                    </div>
                  </div>
                ))}
                  <div className="container-btn-load-more container">
                      <button onClick={handleVaciarCarrito} className='btn-load-more'>
                        Vaciar el carrito
                      </button>
                  </div>
            </div>
        </div>
    );
}
