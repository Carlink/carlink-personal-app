import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state: {
    cart: [],
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
