// Simple Data-fetching
// Visit this github for more detail
// https://github.com/trinhvinhtruong96/react-suspense

import * as React from 'react'
import { fetchPokemon, PokemonDataView } from '../pokemon'

let pokemon
let pokemonPromise = fetchPokemon('pikachu').then(p => (pokemon = p))

function PokemonInfo() {
  if (!pokemon) {
    throw pokemonPromise
    // React will catch this, find the closest "Suspense" component
    // and "suspend" everything from there down from rendering until the
    // promise resolves.
    // 🚨 THIS "API" IS LIKELY TO CHANGE
  }
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
        <React.Suspense fallback={<div>Loading Pokemon...</div>}>
          <PokemonInfo />
        </React.Suspense>
      </div>
    </div>
  )
}

export default App
