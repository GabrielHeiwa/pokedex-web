import { usePokemon } from "./context/pokemon.context"


function App() {
  // Hooks
  const { pokemons, page, setPage } = usePokemon();

  // Functions
  function handleNextPage() {
    setPage(page + 1);

  }

  function handlePrevPage() {
    if (page === 1) {
      alert("Você já está no inicio");

      return;
    }

    setPage(page - 1);
  }

  return (
    <>
      <h1>Pokemon List</h1>
      <div></div>
      <button onClick={handlePrevPage}>Prev</button>
      <span>Page: {page}</span>
      <button onClick={handleNextPage}>Next</button>
      <pre>
        {JSON.stringify(pokemons, null, 2)}
      </pre>
    </>
  )
}

export default App
