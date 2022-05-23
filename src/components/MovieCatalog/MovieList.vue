<template>
  <div>
    <hooper :settings="hooperSettings" style="height: max-content">
      <slide v-for="movie in movies" :key="movie.id" class="pa-2">
        <movie-item :movie="movie"></movie-item>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </div>
</template>

<script>
// Node Dependencies
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
// Components
import MovieItem from "@/components/MovieCatalog/MovieItem";

export default {
  components: {
    MovieItem,
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        wheelControl: false,
        keysControl: false,
        breakpoints: {
          600: {
            itemsToSlide: 1,
            itemsToShow: 2.5,
          },
          960: {
            itemsToSlide: 2.5,
            itemsToShow: 3.5,
          },
          1264: {
            itemsToSlide: 2.5,
            itemsToShow: 3.5,
          },
        },
      },
    };
  },
  props: {
    movieList: {
      required: true,
      type: Object,
    },
  },
  computed: {
    movies() {
      return this.movieList?.results;
    },
    page() {
      return this.movieList?.page;
    },
  },
};
</script>
