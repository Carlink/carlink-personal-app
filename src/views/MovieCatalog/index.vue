<template>
  <div>
    <v-app-bar absolute color="white" height="70" class="pr-4">
      <v-toolbar-title>Carliink Movies</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-badge color="red" :content="String(cart.length)">
            <v-icon v-bind="attrs" v-on="on">mdi-cart</v-icon>
          </v-badge>
        </template>

        <v-card>
          <v-list>
            <v-list-item v-for="movie in cart" :key="movie.id">
              <v-list-item-title>{{ movie.title }}</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              v-if="cart.length > 0"
              color="primary"
              text
              @click="resetCart"
            >
              RESET CART
            </v-btn>
            <div v-else>ADD SOMETING TO YOUR CART</div>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>
    <router-view style="padding-top: 80px"></router-view>
  </div>
</template>

<script>
import lockr from "lockr";
export default {
  data() {
    return {
      menu: false,
    };
  },
  mounted() {
    this.$store.commit("setTheme", {
      backgroundColor: "grey darken-4",
      buttonsColor: "white",
      topBarColor: "grey darken-4",
    });
    if (lockr.get("cart")) {
      this.$store.dispatch("movies/restoreCart", lockr.get("cart"));
    }
  },
  computed: {
    cart() {
      return this.$store.state.movies.cart;
    },
  },
  methods: {
    resetCart() {
      this.$store.dispatch("movies/resetCart");
    },
  },
};
</script>
