import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { NamedAPIResource, Pokedex } from "pokeapi-js-wrapper"

const P = new Pokedex();

type TPokemonContext = {
    pokemons: any[];
    loading: Boolean;
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
    const [pokemons, setPokemons] = useState<any[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);

    // Functions
    async function loadPokemons() {
        try {
            setLoading(true);

            const response = await P.getPokemonsList({
                offset: page * limit,
                limit,
            });

            setPokemons(response.results);

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
    }, [page, limit]);

    return <PokemonContext.Provider value={{
        loading,
        pokemons,
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
