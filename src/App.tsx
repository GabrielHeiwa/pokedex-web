import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { usePokemon } from "./context/pokemon.context"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./components/ui/sheet";

const SIDEBAR_MENU = [
  {
    title: "Pokemons",
    description: "Listagem de todos os pokemons"
  },
  {
    title: "Itens",
    description: "Listagem de todos os itens"
  }
]


function App() {
  // States
  const [showSidebar, setShowSidebar] = useState(false);

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


      <div className="w-screen min-h-screen max-h-screen bg-purple-400 grid grid-cols-10 grid-rows-1 relative">
        <div
          onClick={() => setShowSidebar(curr => !curr)}
          className="absolute top-0 left-0 translate-x-1/2 translate-y-1/2 cursor-pointer"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Sheet open={showSidebar}>
            {/* <SheetTrigger>Open</SheetTrigger */}
            <SheetContent side={"left"} className="lg:w-[400px] w-screen">
              <SheetHeader>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  {
                    SIDEBAR_MENU.map((item, index) => {

                      // TODO: Change de key for a uuic or cuid
                      return <div className="cursor-pointer group hover:bg-slate-50 transition-all" key={index}>
                        <p className="text-lg text-slate-600">{item.title}</p>
                        <p className="text-md text-slate-500">{item.description}</p>
                      </div>
                    })
                  }
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>


      </div>
    </>
  )
}

export default App
