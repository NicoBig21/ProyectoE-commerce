import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../view/hooks/UseForm";


export const PokemonProvider = ({children}) => {
  
    const [allPokemons, setallPokemons] = useState([])
    const [globalPokemons, setGlobalPokemons] = useState([])
    const [offset, setOffset] = useState(0);
    const [carrito, setCarrito] = useState([]);
    
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

    const assignDefaultImage = (data) => {
        if (
          !data.sprites ||
          !data.sprites.other ||
          !data.sprites.other.dream_world ||
          !data.sprites.other.dream_world.front_default
        ) {
          // Si la imagen no está disponible, asigna una imagen predeterminada
          data.sprites = {
            other: {
              dream_world: {
                front_default: "../../assets/pokemon-misterioso.jpg", // Inserta la URL de tu imagen por defecto aquí
              },
            },
          };
        }
        return data;
      };

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
      
        // Verificar y asignar la imagen por defecto
        return assignDefaultImage(data);
      };

      

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
            const filteredResult = globalPokemons.filter((pokemon) =>
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

    const agregarAlCarrito = async (pokemonId) => {
        console.log("Agregando Pokémon al carrito. ID:", pokemonId);
        
        // Verificar si el pokemon ya está en el carrito
        const pokemonExistente = carrito.find(item => item.id === pokemonId);
        
        // Si el pokemon ya está en el carrito, aumentar la cantidad
        if (pokemonExistente) {
            const nuevoCarrito = carrito.map(item => {
                if (item.id === pokemonId) {
                    return {
                        ...item,
                        cantidad: item.cantidad + 1 // Aumentar la cantidad
                    };
                }
                return item;
            });
            console.log("Pokémon ya existe en el carrito. Actualizando cantidad.");
            setCarrito(nuevoCarrito);
        } else {
            try {
                // Llamar a la función getPokemonByID para obtener el Pokémon completo
                const nuevoPokemon = await getPokemonByID(pokemonId);
                console.log("Nuevo Pokémon obtenido:", nuevoPokemon);
        
                // Asignar precio al nuevo Pokémon
                const precio = localStorage.getItem(`pokemon_${pokemonId}_price`);
                if (precio) {
                    nuevoPokemon.price = parseInt(precio);
                }
        
                // Guardar el ID en el localStorage
                const carritoIds = JSON.parse(localStorage.getItem('carritoIds')) || [];
                carritoIds.push(pokemonId);
                localStorage.setItem('carritoIds', JSON.stringify(carritoIds));
        
                // Agregar el nuevo Pokémon al carrito con cantidad 1
                console.log("Agregando nuevo Pokémon al carrito:", nuevoPokemon);
                setCarrito([...carrito, { ...nuevoPokemon, cantidad: 1 }]);
            } catch (error) {
                console.error("Error al agregar el Pokémon al carrito:", error);
            }
        }
    };
    
    useEffect(() => {
        const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        setCarrito(storedCarrito);
    }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const vaciarCarrito = () => {
        setCarrito([]);
        localStorage.removeItem('carrito'); // Eliminar el carrito del localStorage
    };

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
                filteredPokemons, 
                agregarAlCarrito,
                carrito,
                vaciarCarrito
            }}>
            {children}
        </PokemonContext.Provider>

    );
    
}