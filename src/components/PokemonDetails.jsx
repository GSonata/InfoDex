import './styles/PokemonDetails.css';

function PokemonDetails(props) {
  const { pokemon } = props;
  const pokemonTypes = pokemon.types.map((typeInfo) => typeInfo.type.name.toUpperCase()).join(" / ");

  return (
    <div className="pokedex-container">
      <section className="pokedex">
        <div className="pokedex-left">
          <h2>Pokedex Entry:</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="pokedex-right">
          <h2 className="pokemon-name">{pokemon.name}</h2>
          <h3>HP: {pokemon.stats[0].base_stat}</h3>
          <h3>Types: {pokemonTypes}</h3>
        </div>
      </section>
    </div>
  );
}

export default PokemonDetails;
