import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { useParams } from "react-router-dom";
import { Loader } from "../../components";
import { primerMayuscula } from "../../helpers/helper";

export default function Detalle() {
    const { getPokemonByID } = useContext(PokemonContext);
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [pokemon, setPokemon] = useState({});
    const [precio, setPrecio] = useState(0);

    const fetchPokemon = async (id) => {
        const data = await getPokemonByID(id);
        setPokemon(data);
        setLoading(false);

        const storedPrice = localStorage.getItem(`pokemon_${id}_price`);
        if (storedPrice) {
            setPrecio(parseInt(storedPrice));
        }
    };

    useEffect(() => {
        fetchPokemon(id);
    }, [id]);

    const handleComprarAhora = () => {
        // Acciones a realizar cuando se presiona "Comprar ahora"
    };

    const handleSeguirComprando = () => {
        // Acciones a realizar cuando se presiona "Seguir comprando"
    };

    return (
        <main className="main-pokemon container">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="header-main-pokemon">
                        <span className="number-pokemon">#{pokemon.id}</span>
                        <div className="container-img-pokemon">
                            <img
                                src={pokemon.sprites.other.dream_world.front_default}
                                alt={`Pokemon ${pokemon?.name}`}
                            />
                        </div>

                        <div className="container-info-pokemon">
                            <div className="card-types info-pokemon-type">
                                {pokemon.types.map((type) => (
                                    <span key={type.type.name} className={`${type.type.name}`}>
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                            <span className="pokemon-name">{primerMayuscula(pokemon.name)}</span>
                            <p className="pokemon-price price">Precio: ${precio}</p>
                            <button onClick={handleComprarAhora} className="btn btn-danger btn-lg Comprar">
                                Comprar ahora
                            </button>
                            <button onClick={handleSeguirComprando} className="btn btn-secondary btn-lg Seguir">
                                Seguir comprando
                            </button>
                        </div>
                    </div>

                    <div className="container-stats">
                        <h1>Estadísticas</h1>
                        <div className="stats">
                            {pokemon.stats.map((stat, index) => (
                                <div key={index} className="stat-group">
                                    <span>{stat.stat.name}</span>
                                    <div className="progress-bar"></div>
                                    <span className="counter-stat">{stat.base_stat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}
