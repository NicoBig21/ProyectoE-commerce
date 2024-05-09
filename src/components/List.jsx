import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Card from "./Card";

export default function List() {
    const { allPokemons, filteredPokemons } = useContext(PokemonContext);

    return (
        <div className="container card-list-pokemon">
            {filteredPokemons.length ? (
                filteredPokemons.map(pokemon => (
                    <Card pokemon={pokemon} key={pokemon.id} />
                ))
            ) : (
                allPokemons.map(pokemon => (
                    <Card pokemon={pokemon} key={pokemon.id} />
                ))
            )}
        </div>
    );
};
