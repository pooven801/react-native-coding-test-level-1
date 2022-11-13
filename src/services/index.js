const url = "https://pokeapi.co/";

export async function getPokemonList(params) {
    console.log(url + `api/v2/pokemon-species/?offset=${params.offset}&offset=${params.limit}`);
    const response = await fetch(url + `api/v2/pokemon-species/?offset=${params.offset}&limit=${params.limit}`, {
        method: 'GET',
    })
    return response.json();
}
