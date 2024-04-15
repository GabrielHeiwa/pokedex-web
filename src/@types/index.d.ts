declare module "pokeapi-js-wrapper" {
    export class Pokedex {
        getPokemonByName(name: string | number | string[] | number[]): Promise<Pokemon | Pokemon[]>;
    }
}