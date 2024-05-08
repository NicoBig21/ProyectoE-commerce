import React, { useContext } from 'react';
import { PokemonContext } from '../../context/PokemonContext';

export default function Carrito() {
  const { carrito } = useContext(PokemonContext);

  return (
    <div className="container">
      <h2>Carrito de compras</h2>
      <div className="row">
        {carrito.map(pokemon => ( 
          <div key={pokemon.id} className="col-md-6">
            <div className="border border-primary rounded container-carrito">
            <img className="carrito-img" src={pokemon.sprites.other.dream_world.front_default} alt={`Pokemon ${pokemon?.name}`} />
              <div className="text-150">
                <h3 className="mb-3">{pokemon.name}</h3>
                <p>${pokemon.price}</p>
                <a href="#" className="btn btn-primary me-3">Comprar</a>
                <a href="#" className="btn btn-secondary">Vaciar del carrito</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
