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
            return assignPrice(data)
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
      }, [offset])
      

    // Llamar todos los pokemones
    const  getGlobalPokemons = async(limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json();
        
        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return assignPrice(data)
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


    // Asignar Precio al pokemon 
    const assignPrice = (data) => {
    const pokemonId = data.id; // Suponiendo que el ID del Pokémon es único y constante
    
    // Calculamos el precio basado en el ID del Pokémon y el patrón requerido
    let price;
    if (pokemonId % 3 === 1) {
        // Para el primer Pokémon de cada grupo de 3
        price = 3500;
    } else if (pokemonId % 3 === 2) {
        // Para el segundo Pokémon de cada grupo de 3
        price = 6000;
    } else {
        // Para el tercer Pokémon de cada grupo de 3
        price = 10000;
    }

    // Almacenamos el precio en el localStorage
    localStorage.setItem(`pokemon_${pokemonId}_price`, price.toString());

    // Asignamos el precio al Pokémon
    data.price = price;

    return data;
    }

    useEffect(() => {
        getGlobalPokemons()
    }, [])

    //BTN CARGAR MAS
    const onClickLoadMore = () => {
        setOffset(offset + 50)
    }

    //FILTER FUNCTION + STATE
    const [typeSelected, setTypeSelected] = useState({
        grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
    })

    const [filteredPokemons, setfilteredPokemons] = useState([])
    
    const handleCheckbox = e => {

        setTypeSelected({
            ...typeSelected,
            [e.target.name]: e.target.checked
        })

        if(e.target.checked){
            const filteredResult = globalPokemons.filter(pokemon =>
                pokemon.types
                    .map(type => type.type.name)
                    .includes(e.target.name)
            );
            setfilteredPokemons([...filteredPokemons, ...filteredResult ])
        } else {
            const filteredResult = filteredPokemons.filter(pokemon =>
                !pokemon.types
                    .map(type => type.type.name)
                    .includes(e.target.name)
            );
            setfilteredPokemons([...filteredResult])
        }
    }

    return(
        <PokemonContext.Provider 
            value={{
                valueSearch,
                onInputChange,
                onResetForm,
                allPokemons,
                globalPokemons,
                getPokemonByID,
                onClickLoadMore,
                active, // Asegúrate de incluir active en el valor del contexto
                setActive, // Asegúrate de incluir setActive en el valor del contexto
                handleCheckbox,
                filteredPokemons
            }}>
            {children}
        </PokemonContext.Provider>

    );
    
}
