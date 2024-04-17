import { useContext } from "react"
import { PokemonContext } from "../../context/PokemonContext"
import { useLocation } from "react-router-dom"


export default function SearchPage() {
    const location = useLocation()
    console.log(location)

    const {globalPokemons} = useContext(PokemonContext)

    const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state))

    console.log(filteredPokemons);
  return (
    <h1>SearchPage</h1>
  )
}
