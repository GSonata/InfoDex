import { useEffect,useState } from "react"
import './styles/PokemonCard.css'

function PokemonCard(props) {
    
    const { pokemon, selectedPokemon } = props;
    const pokemonTypes = pokemon.types.map((typeInfo) => typeInfo.type.name.toUpperCase()).join(" / ");


  return (
    pokemon ? (
    <li className="pokemon-card" onClick={() => selectedPokemon(pokemon)}>
        
        <h2 className="pokemon-name">#{pokemon.id} - {pokemon.forms[0].name}</h2>
        <img 
            src={pokemon.sprites.front_default} 
            alt={`${pokemon.forms[0].name} front image`}
            className="pokemon-img" />
    </li>
  ) : (
    <h2>Loading...</h2>
  )
  )
}

export default PokemonCard

