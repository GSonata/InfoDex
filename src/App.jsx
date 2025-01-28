import './App.css'
import PokemonList from './components/PokemonList'
import PokemonDetails from './components/PokemonDetails'
import { useState } from 'react'
import PokemonLogo from './assets/pokemonlogo.png'

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(null)

  return (
    <>
      <img src={PokemonLogo} alt="" />

      {selectedPokemon && (
          <PokemonDetails pokemon={selectedPokemon} />
      )}
      <PokemonList selectPokemon={setSelectedPokemon} />
    </>
  )
}

export default App
