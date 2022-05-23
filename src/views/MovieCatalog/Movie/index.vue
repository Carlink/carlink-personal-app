<template>
  <div>
    <v-card class="pa-3">
      <v-row class="display-1 font-weight-bold mb-4" no-gutters>
        <div>{{ movie.title }} ({{ movie.release_date }})</div>
        <v-spacer></v-spacer>
        <v-btn color="deep-purple lighten-2" text @click="addToCart()">
          ADD TO CART (${{ generatePrice() }}.00 USD)
          <v-icon right>mdi-cart</v-icon>
        </v-btn>
      </v-row>
      <v-row align="start">
        <v-col cols="3"
          ><img :src="image()" style="width: 100%" :alt="movie.title"
        /></v-col>
        <v-col cols="9">
          <v-row align="center" no-gutters class="mb-4">
            <v-rating
              :value="computedRate()"
              color="amber"
              dense
              half-increments
              readonly
              size="25"
            ></v-rating>
            <div class="grey--text ms-4">
              {{ computedRate() }} ({{ movie.vote_count }})
            </div>
          </v-row>
          <div class="font-weight-black title">Overview</div>
          <div>{{ movie.overview }}</div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { getMovieByID } from "@/api/MovieCatalog/enpoints.js";

export default {
  data() {
    return {
      movieID: "NO MOVIE ID",
      movie: {},
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.movieID = this.$route.params.id;
    }
    this.getMovieData();
  },
  methods: {
    async getMovieData() {
      this.movie = await getMovieByID(this.movieID);
    },
    image() {
      return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    },
    generatePrice() {
      return Math.floor(this.movie.vote_average);
    },
    computedRate() {
      return this.movie.vote_average / 2;
    },
    async addToCart() {
      const wasAddedToCart = await this.$store.dispatch(
        "movies/addToCart",
        this.movie
      );

      if (wasAddedToCart) {
        let options = {
          x: "right",
          y: "top",
          color: "green",
        };
        this.$notify.toast(`${this.movie.title} added to cart`, options);
      } else {
        let options = {
          x: "right",
          y: "top",
          color: "red",
        };
        this.$notify.toast(`This movie is already in cart`, options);
      }
    },
  },
};
</script>
