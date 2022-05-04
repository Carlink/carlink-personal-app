<template>
  <div>
    <v-btn text color="primary" @click="$router.back()"
      ><v-icon>mdi-chevron-left</v-icon>Return</v-btn
    >
    <div class="d-flex flex-row flex-wrap">
      <v-col
        cols="4"
        v-for="pokemon in pokemonList.results"
        :key="pokemon.name"
      >
        <pokemon-card :pokemon="pokemon"></pokemon-card>
      </v-col>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PokemonCard from "@/components/pokemon/PokemonCard";

export default {
  components: {
    PokemonCard,
  },
  created() {
    this.$store.dispatch("pokemon/fetchPokemon");
  },
  computed: {
    ...mapState("pokemon", ["pokemonList"]),
  },
};
</script>
