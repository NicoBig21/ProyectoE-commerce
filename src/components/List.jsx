import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Card from "./Card";


export default function List () {
   
    const {allPokemons} = useContext(PokemonContext)

    return (
        <>
            <div className="card-list-pokemon container">
                {allPokemons.map(pokemon => (
                    <Card pokemon={pokemon} key={pokemon.id} />
                    ))}
            </div>
        </>
    );
};
