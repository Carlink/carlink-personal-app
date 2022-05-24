import mutations from "./mutations";
import actions from "./actions";

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
};
