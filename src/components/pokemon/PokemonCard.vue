<template>
  <v-hover v-slot="{ hover }">
    <v-card class="pokemon-card">
      <!-- {{ completePokemon.id }}
    {{ completePokemon.name }}
    {{ completePokemon.sprites.other["official-artwork"].front_default }}
    {{ completePokemon.types }} -->
      <v-img
        ref="image"
        :src="imageSrc"
        class="white--text align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
        height="400px"
      >
        <v-card-title>
          <v-expand-transition>
            <div
              v-if="hover"
              class="d-flex flex-column transition-fast-in-fast-out primary v-card--reveal text-h2 white--text pa-4"
              style="height: 100%"
            >
              <div
                v-for="item in completePokemon.stats"
                :key="item.stat.name"
                style="width: 100%"
                class="mb-2 px-5"
              >
                <div class="caption white--text">
                  {{ item.stat.name }}
                </div>
                <v-progress-linear
                  color="white"
                  height="10"
                  :value="(item.base_stat / 255) * 100"
                  style="width: 100%"
                ></v-progress-linear>
              </div>
            </div>
          </v-expand-transition>
          <div v-if="!hover" class="font-weight-bold text-capitalize" dark>
            {{ `#${completePokemon.id} - ${completePokemon.name}` }}
          </div>
        </v-card-title>
      </v-img>

      <v-card-actions>
        <div class="d-flex">
          <v-chip
            v-for="type in completePokemon.types"
            :key="type.type.name"
            class="mr-1 font-weight-bold"
            :color="types[type.type.name]"
            dark
          >
            {{ type.type.name }}
          </v-chip>
        </div>
        <v-spacer></v-spacer>

        <!-- <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn> -->
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import TYPES from "@/data/pokemon-data-types.js";

export default {
  data() {
    return {
      loading: true,
      completePokemon: {},
      types: TYPES,
    };
  },
  props: {
    pokemon: {
      required: true,
      type: Object,
    },
  },
  computed: {
    imageSrc() {
      if (Object.keys(this.completePokemon).length === 0) return "";
      console.log(
        "image",
        this.completePokemon.sprites.other["official-artwork"].front_default
      );
      const url =
        this.completePokemon.sprites.other["official-artwork"].front_default;

      return url;
    },
  },
  async mounted() {
    this.completePokemon = await this.$store.dispatch(
      "pokemon/getPokemonByName",
      this.pokemon.name
    );
  },
};
</script>

<style lang="scss" scoped>
.pokemon-card {
  height: 450px;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  left: 0;
}
.blur {
  backdrop-filter: blur(30px);
}
</style>
