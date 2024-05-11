import React, { useContext} from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Link } from "react-router-dom";
import PokemonStoreSection from "../../components/PokemonStoreSection";

export default function Home() {
  const { allPokemons } = useContext(PokemonContext);

  // Buscar Bulbasaur (ID: 1) en la lista de Pokémon
  const bulbasaur = allPokemons.find(pokemon => pokemon.id === 1);

  // Buscar Charmander (ID: 4) en la lista de Pokémon
  const charmander = allPokemons.find(pokemon => pokemon.id === 4);

  // Buscar Squirtle (ID: 7) en la lista de Pokémon
  const squirtle = allPokemons.find(pokemon => pokemon.id === 7);

  return (
    <>

      <PokemonStoreSection/>
        
      <section id="first-pokemon" className="first-pokemon">
        <div className="container">
          <h2>Elige a tu primer Pokémon</h2>
          <hr />
          <div className="container-first-pokemon">
            {/* Carta para Bulbasaur */}
            <div className="card-first-pokemon">
              {bulbasaur && (
                <>
                  <div className="img-first-pokemon">
                    <img
                      src={bulbasaur.sprites.other.dream_world.front_default}
                      alt={`Pokemon ${bulbasaur.name}`}
                      className="pokemon-image"
                    />
                  </div>
                  <div className="content-first-pokemon bulbasaur">
                    <h3>{bulbasaur.name}</h3>
                    <p>
                      Bulbasaur es un Pokémon tipo planta. Es muy compañero,
                      amigable y poderoso cuando quiere. Siempre está dispuesto a
                      ayudar a sus amigos y nunca te dejará en apuros.
                    </p>
                    <Link to={`/pokemon/${bulbasaur.id}`} className="btn btn-danger btn-space">
                      Comprar Ahora
                    </Link>
                  </div>
                </>
              )}
            </div>
            {/* Carta para Charmander */}
            <div className="card-first-pokemon">
              {charmander && (
                <>
                  <div className="img-first-pokemon">
                    <img
                      src={charmander.sprites.other.dream_world.front_default}
                      alt={`Pokemon ${charmander.name}`}
                      className="pokemon-image charmander-img"
                    />
                  </div>
                  <div className="content-first-pokemon">
                    <h3>{charmander.name}</h3>
                    <p>
                      Charmander es un Pokémon tipo fuego. Es valiente y leal,
                      pero también puede ser un poco testarudo. Su cola arde con
                      una llama que indica su estado de ánimo.
                    </p>
                    <Link to={`/pokemon/${charmander.id}`} className="btn btn-danger btn-space">
                      Comprar Ahora
                    </Link>
                  </div>
                </>
              )}
            </div>
            {/* Carta para Squirtle */}
            <div className="card-first-pokemon">
              {squirtle && (
                <>
                  <div className="img-first-pokemon">
                    <img
                      src={squirtle.sprites.other.dream_world.front_default}
                      alt={`Pokemon ${squirtle.name}`}
                      className="pokemon-image"
                    />
                  </div>
                  <div className="content-first-pokemon squirtle-img">
                    <h3>{squirtle.name}</h3>
                    <p>
                      Squirtle es un Pokémon tipo agua. Es amigable y juguetón,
                      pero también puede ser decidido y valiente cuando la
                      situación lo requiere. Su caparazón le ofrece protección
                      contra los ataques enemigos.
                    </p>
                    <Link to={`/pokemon/${squirtle.id}`} className="btn btn-danger">
                      Comprar Ahora
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link to="/pokemon" className="btn btn-secondary btn-lg">Elegir otro Pokémon</Link>
          </div>
        </div>
      </section>

      <section className="coaches">
        <div className="container">
          <h2>Mejores Entrenadores Pokémon</h2>
          <hr />
          <div className="container-coaches">
            <figure className="card-coaches">
              <img src="../../../assets/lionel-1.jpg" alt="Lionel" className="card-coaches-img"/>
              <figcaption>
                <h3>Lionel</h3>
                <p>Lionel es un experimentado entrenador Pokémon que ha viajado por todas las regiones.</p>
              </figcaption>
            </figure>
            <figure className="card-coaches">
              <img src="../../../assets/cynthia-2.jpg" alt="Cynthia" className="card-coaches-img"/>
              <figcaption>
                <h3>Cynthia</h3>
                <p>Cynthia es la campeona de la Liga Pokémon de la región de Sinnoh y es conocida por su equipo diverso y poderoso.</p>
              </figcaption>
            </figure>
            <figure className="card-coaches">
              <img src="../../../assets/steven-3.jpg" alt="Steven" className="card-coaches-img"/>
              <figcaption>
                <h3>Steven</h3>
                <p>Steven es un maestro en el entrenamiento de Pokémon de tipo Acero y es el campeón de la región de Hoenn.</p>
              </figcaption>
            </figure>
            <figure className="card-coaches">
              <img src="../../../assets/lance-4.jpg" alt="Lance" className="card-coaches-img"/>
              <figcaption>
                <h3>Lance</h3>
                <p>Lance es un experto en el entrenamiento de Pokémon de tipo Dragón y es el campeón de la Liga Pokémon de la región de Johto.</p>
              </figcaption>
            </figure>
            <figure className="card-coaches">
              <img src="../../../assets/diantha-5.jpg" alt="Diantha" className="card-coaches-img"/>
              <figcaption>
                <h3>Diantha</h3>
                <p>Diantha es una famosa actriz de cine y también la campeona de la Liga Pokémon de la región de Kalos.</p>
              </figcaption>
            </figure>
            <figure className="card-coaches">
              <img src="../../../assets/alain-6.jpg" alt="Alain" className="card-coaches-img"/>
              <figcaption>
                <h3>Alain</h3>
                <p>Alain es un entrenador poderoso que ha viajado en busca de fuertes oponentes y desafíos.</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      </>
  );
}

