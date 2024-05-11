import Store from '../../assets/pokemon-store.webp';

export default function PokemonStoreSection() {

    const scrollToFirstPokemon = () => {
      const firstPokemonSection = document.getElementById('first-pokemon');
      firstPokemonSection.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <section className="pokemon-store-section">
        <div className="pokemon-store-content">
          <h1 className="pokemon-store-title">¡Bienvenidos a PokemonStore!</h1>
          <p className="pokemon-store-description">
            ¡Explora nuestro universo Pokémon! Encuentra productos exclusivos, colecciona
            tus Pokémon favoritos y únete a una comunidad apasionada de entrenadores.
          </p>
          <button onClick={scrollToFirstPokemon} className="pokemon-store-button">
            ¡Comienza tu aventura!
          </button>
        </div>
        <div className="pokemon-store-image-container">
          <img
            src={Store} 
            alt="Imagen de PokemonStore"
            className="pokemon-store-image"
          />
        </div>
      </section>
    );
  }
  