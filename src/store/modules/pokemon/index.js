import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state: {
    pokemonList: [
      {
        name: "Pikachu",
      },
    ],
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
