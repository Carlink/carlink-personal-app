<template>
  <div>
    <v-btn text color="primary" @click="$router.push({ name: 'Projects' })"
      ><v-icon>mdi-chevron-left</v-icon>Return</v-btn
    >
    <div class="d-flex flex-row flex-wrap">
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="pokemon in pokemonList.results"
        :key="pokemon.name"
      >
        <pokemon-card :pokemon="pokemon"></pokemon-card>
      </v-col>
    </div>
    <v-pagination
      v-model="page"
      :length="pages"
      :total-visible="7"
      class="my-3"
      @input="movePage"
    ></v-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PokemonCard from "@/components/pokemon/PokemonCard";

export default {
  components: {
    PokemonCard,
  },
  data() {
    return {
      page: 1,
      perPage: 9,
      pages: 0,
    };
  },
  async mounted() {
    this.$store.commit("setTheme", {
      backgroundColor: "white",
      buttonsColor: "primary",
      topBarColor: "white",
    });
    if (this.$route.query.page) {
      this.page = Number(this.$route.query.page);
    }
    await this.$store.dispatch("pokemon/fetchPokemon", {
      offset: (this.page - 1) * this.perPage,
      limit: this.perPage,
    });
    this.pages = Math.ceil(this.pokemonList.count / this.perPage);
  },
  computed: {
    ...mapState("pokemon", ["pokemonList"]),
  },
  methods: {
    movePage(val) {
      this.$store.dispatch("pokemon/fetchPokemon", {
        offset: (val - 1) * this.perPage,
        limit: this.perPage,
      });
      this.$router.push({ name: "Pokemon", query: { page: val } });
    },
  },
};
</script>
