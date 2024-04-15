import { Pokedex } from "pokeapi-js-wrapper"

const P = new Pokedex();


interface IListAllPokemonsProps {
    limit: number;
    page: number;
}

export async function ListAllPokemons(props: IListAllPokemonsProps) {
    const {  limit, page } = props;

    const response = await P.getPokemonsList({
        limit,
        offset: page * limit
    });

    return {
        ...response
    };
}