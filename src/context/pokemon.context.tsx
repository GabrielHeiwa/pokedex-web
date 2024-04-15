import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Pokedex, Pokemon } from "pokeapi-js-wrapper"

const P = new Pokedex();

type TPokemonContext = {
    pokemons: any[];
    loading: Boolean;
    page: number;
    setLimit: (limit: number) => void;
    setPage: (page: number) => void;
};

const DEFAULT_LIMIT = 20,
    DEFAULT_PAGE = 1;

const PokemonContext = createContext({} as TPokemonContext);

export function PokemonProvider({ children }: { children: ReactNode }) {
    // States
    const [page, setPage] = useState(DEFAULT_PAGE);
    const [limit, setLimit] = useState(DEFAULT_LIMIT);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);

    // Functions
    async function loadPokemons() {
        try {
            setLoading(true);

            const pokemonList = await P.getPokemonsList({
                offset: page * limit,
                limit,
            });

            const listOfPokemonName = pokemonList.results.map(pokemon => pokemon.name);

            // DISCLAIMER: Althoug we can send a list of word the return type of function
            // 'getPokemonByName' does not match with the type of param send.
            const pokemonsDetails = await P.getPokemonByName(listOfPokemonName);
            for (const pokemonDetail of pokemonsDetails) {

            }
            console.log('what that pokemon', Array.isArray(pokemonsDetails))

            setPokemons();

        } catch (error: any) {
            console.error(error);
            // TODO: Change alert to react-toastify
            alert("Houve um erro ao carregar os pokemons");
        } finally {
            setLoading(false);
        }
    }

    // UseEffects
    useEffect(() => {
        if (!pokemons.length) {
            loadPokemons();
        }

        return () => {
            setLimit(DEFAULT_LIMIT);
            setPage(DEFAULT_PAGE);
            setPokemons([]);
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadPokemons();
    }, [page, limit])

    return <PokemonContext.Provider value={{
        loading,
        pokemons,
        page,
        setLimit,
        setPage
    }}>
        {children}
    </PokemonContext.Provider>
};

export function usePokemon() {
    const context = useContext(PokemonContext);

    return {
        ...context,
    }
}
