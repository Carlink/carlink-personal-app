import Vue from "vue";
import Vuex from "vuex";
import pokemon from "./modules/pokemon";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    something: "hey",
  },
  mutations: {},
  actions: {},
  modules: {
    pokemon,
  },
});
