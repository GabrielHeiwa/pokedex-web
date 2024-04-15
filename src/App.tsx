import { useState } from "react"
import { ListAllPokemons } from "./lib/pokemon-api";

function App() {
  const [pokemonsList, setPokemonList] = useState<any[]>([]);

  ListAllPokemons({ limit: 20, page: 1 })
    .then((pokemonList) => setPokemonList(pokemonList.results));

  return (
    <>
      <h1>Pokemon List</h1>
      <pre>
        {JSON.stringify(pokemonsList, null, 2)}
      </pre>
    </>
  )
}

export default App
