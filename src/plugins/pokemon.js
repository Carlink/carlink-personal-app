const Pokedex = require("pokeapi-js-wrapper");
const pokemon = new Pokedex.Pokedex();

export default {
  install(Vue) {
    Vue.prototype.$pokemon = pokemon;
  },
};
