import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import GetForm from "./GetForm";

function PokemonList(props) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemon(1, 10); 
  }, []);

  const fetchPokemon = async (index) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`);
      if (!response.ok) throw new Error(`Error fetching Pokémon ID ${index}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null; 
    }
  };

  const getPokemon = async (from, to) => {
    const pkmnArray = [];
    for (let i = from; i <= to; i++) {
      const pokemon = await fetchPokemon(i);
      if (pokemon) pkmnArray.push(pokemon);
    }
    setPokemons(pkmnArray);
  };

  const pokemonCards = pokemons.map((pokemon) => (
    <PokemonCard
      key={pokemon.id}
      pokemon={pokemon}
      selectedPokemon={props.selectPokemon}
    />
  ));

  return (
    <>
      <GetForm getPokemons={getPokemon} />
      <ul className="pokemon-list">{pokemonCards}</ul>
    </>
  );
}

export default PokemonList;
