import Vue from "vue";
import Vuex from "vuex";
import pokemon from "./modules/pokemon";
import movies from "./modules/movies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: {
      backgroundColor: "white",
      buttonsColor: "primary",
      topBarColor: "white",
    },
  },
  mutations: {
    setTheme(state, theme) {
      Object.assign(state.theme, theme);
    },
  },
  actions: {},
  modules: {
    pokemon,
    movies,
  },
});
