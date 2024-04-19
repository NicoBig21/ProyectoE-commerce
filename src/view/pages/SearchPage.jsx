import { useContext } from "react"
import { PokemonContext } from "../../context/PokemonContext"
import { useLocation } from "react-router-dom"
import { Card, Navigation } from "../../components"


export default function SearchPage() {
    const location = useLocation()

    const {globalPokemons} = useContext(PokemonContext)

    const filteredPokemons = globalPokemons.filter(pokemon => pokemon.name.includes(location.state?.toLowerCase()))

  return (
    <>
    <Navigation />
    <div className="container">
      <p className="p-search">
        Se encontraron <span>{filteredPokemons.length}</span> resultados:
      </p>
      <div className="card-list-pokemon container">
          {filteredPokemons.map(pokemon => (
          <Card pokemon={pokemon} key={pokemon.id} />
          ))}
      </div>
    </div>
    </>
  )
}
