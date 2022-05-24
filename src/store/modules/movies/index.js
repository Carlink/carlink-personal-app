import mutations from "./mutations";
import actions from "./actions";

export default {
  namespaced: true,
  state: {
    cart: [],
  },
  mutations: mutations,
  actions: actions,
};
