import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./plugins/store";
import VuetifyNotify from "vuetify-notify";
import pokemon from "./plugins/pokemon";

Vue.config.productionTip = false;
Vue.use(store);
Vue.use(VuetifyNotify, {
  vuetify,
  options: {
    toast: {
      x: "right",
      y: "top",
      color: "green",
    },
    dialog: {
      width: 400,
    },
  },
});
Vue.use(pokemon);

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
