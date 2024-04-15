import { Sidebar } from "./components/sidebar";
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
      {/* <h1>Pokemon List</h1>
      <div></div>
      <button onClick={handlePrevPage}>Prev</button>
      <span>Page: {page}</span>
      <button onClick={handleNextPage}>Next</button>
      <pre>
        {JSON.stringify(pokemons, null, 2)}
      </pre> */}


      <div className="w-screen min-h-screen max-h-screen bg-purple-400 grid grid-cols-10 grid-rows-10 relative">
        <Sidebar />

        {/* Filters, search etc ... */}
        <div className="bg-green-400 col-span-10 row-span-2"></div>

        <div className="bg-red-400 col-span-10 row-span-8">

          <pre>
            {JSON.stringify(pokemons, null, 2)}
          </pre>
        </div>

      </div>
    </>
  )
}

export default App
