import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../view/hooks/UseForm";


export const PokemonProvider = ({children}) => {
  
    const [allPokemons, setallPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])
    const [offset, setOffset] = useState(0);

    //Utilizar CustomHook - useForm
    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: ''
    })
    
    //estados para la aplicacion simple
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)

    // llamar 50 pokemones a la API

    const getAllPokemons = async(limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)

        setallPokemons([
            ...allPokemons,
            ...results
        ]);
        setLoading(false)

    }

    useEffect(() => {
        getAllPokemons()
      }, [])
      

    // Llamar todos los pokemones
    const  getGlobalPokemons = async(limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json();
        
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)

        setGlobalPokemons(results)
        setLoading(false)
    }

    //llamar a un pokemon por ID
    const getPokemonByID = async(id) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json()
        return data;
    }

    useEffect(() => {
        getGlobalPokemons()
    }, [])
    

    return(
        <PokemonContext.Provider 
            value={{
                valueSearch,
                onInputChange,
                onResetForm,
                allPokemons,
                globalPokemons,
                getPokemonByID
            }}>
            {children}
        </PokemonContext.Provider>
    );
    
}
