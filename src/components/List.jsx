import { useEffect, useState } from "react";
import Card from "./Card";
import getComponentsByProduct from "../componentes_pc/helpers/getComponentsByProduct";
import PokemonsService from "../services/local/pokemons.service";
import { componentes } from "../componentes_pc/data/componentes";

export default function List ({ producto }) {
    const listaComponentes = getComponentsByProduct(componentes, producto) ?? componentes;
    
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        ( async () => {
            try {
                const pokemons = await PokemonsService.getAll()
                setPokemons (pokemons)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])

    console.log(pokemons)
    
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {listaComponentes.map(componente => (
                <Card
                    key={componente.id} // Agrega la prop 'key' con el id único del componente
                    id={componente.id}
                    nombre={componente.Nombre}
                    imagen={componente.imagen}
                    gama={componente.Gama}
                    precio={componente.Precio}
                />
            ))}
        </div>
    );
};
