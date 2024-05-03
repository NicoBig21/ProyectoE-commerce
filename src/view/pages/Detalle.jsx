import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";
import { primerMayuscula } from "../../helpers/helper";

export default function Detalle() {

    const { getPokemonByID } = useContext(PokemonContext);

    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState({});
    const [precio, setPrecio] = useState(0); 

    const { id } = useParams();

    const fetchPokemon = async (id) => {
        const data = await getPokemonByID(id);
        setPokemon(data);
        setLoading(false);

        // Obtener el precio del localStorage
        const storedPrice = localStorage.getItem(`pokemon_${id}_price`);
        if (storedPrice) {
            setPrecio(parseInt(storedPrice));
        }
    }

    useEffect(() => {
        fetchPokemon(id);
    }, [id]); // Asegúrate de incluir 'id' en la lista de dependencias

    const handleComprarAhora = () => {
        // Acciones a realizar cuando se presiona "Comprar ahora"
    }

    const handleSeguirComprando = () => {
        // Acciones a realizar cuando se presiona "Seguir comprando"
    }

    return (
        <main className="main-pokemon">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className='header-main-pokemon'>
                        <span className='number-pokemon'>#{pokemon.id}</span>
                        <div className='container-img-pokemon'>
                            <img
                                src={pokemon.sprites.other.dream_world.front_default}
                                alt={`Pokemon ${pokemon?.name}`}
                            />
                        </div>

                        <div className='container-info-pokemon'>
                            <div className='card-types info-pokemon-type'>
                                {pokemon.types.map(type => (
                                    <span key={type.type.name} className={`${type.type.name}`}>
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                                <span className='pokemon-name'>{primerMayuscula(pokemon.name)}</span>
                                <p className='pokemon-price price'>Precio: ${precio}</p> {/* Mostrar el precio del Pokemon */}
                                <button onClick={handleComprarAhora} className="btn btn-danger btn-lg Comprar">Comprar ahora</button>
                                <button onClick={handleSeguirComprando} className="btn btn-secondary btn-lg Seguir">Seguir comprando</button>
                        </div>
                    </div>

					<div className='container-stats'>
						<h1>Estadísticas</h1>
						<div className='stats'>
							<div className='stat-group'>
								<span>Hp</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[0].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Attack</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[1].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Defense</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[2].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Attack</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[3].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Special Defense</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[4].base_stat}
								</span>
							</div>
							<div className='stat-group'>
								<span>Speed</span>
								<div className='progress-bar'></div>
								<span className='counter-stat'>
									{pokemon.stats[5].base_stat}
								</span>
							</div>
						</div>
					</div>
                </>
            )
        }
    </main>
  )
}
