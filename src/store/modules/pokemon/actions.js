const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

const fetchPokemon = async ({ commit }, { offset, limit }) => {
  console.log("FETCHING POKEMON");
  const interval = {
    offset: offset,
    limit: limit,
  };
  const response = await P.getPokemonsList(interval);
  commit("setPokemonList", response);
};

const getPokemonByName = async (_, pokemon) => {
  const resp = await P.getPokemonByName(pokemon);
  return resp;
};

export default { fetchPokemon, getPokemonByName };
