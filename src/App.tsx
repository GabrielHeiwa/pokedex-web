import { usePokemon } from "./context/pokemon.context"


function App() {
  const { pokemons } = usePokemon();

  return (
    <>
      <h1>Pokemon List</h1>
      <div></div>
      <pre>
        {JSON.stringify(pokemons, null, 2)}
      </pre>
    </>
  )
}

export default App
