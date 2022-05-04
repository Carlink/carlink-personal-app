const Pokedex = require("pokeapi-js-wrapper");
const P = new Pokedex.Pokedex();

const fetchPokemon = async ({ commit }) => {
  console.log("FETCHING POKEMON");
  const interval = {
    offset: 0,
    limit: 9,
  };
  const response = await P.getPokemonsList(interval);
  commit("setPokemonList", response);
};

const getPokemonByName = async (_, pokemon) => {
  const resp = await P.getPokemonByName(pokemon);
  return resp;
};

export default { fetchPokemon, getPokemonByName };
