<template>
  <div>
    <div class="display-1 mb-4" :class="`${textColor}--text`">
      {{ $route.params.name }} Movies
    </div>
    <v-row>
      <v-col cols="3" v-for="movie in movies" :key="movie.id">
        <movie-item :movie="movie"></movie-item>
      </v-col>
    </v-row>
    <v-card v-intersect="infiniteScrolling"></v-card>
  </div>
</template>

<script>
import { getDiscoverMoviesByGenre } from "@/api/MovieCatalog/enpoints.js";
import MovieItem from "@/components/MovieCatalog/MovieItem";

export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      categoryID: "NO CATEGORY ID",
      movies: [],
      page: 1,
    };
  },
  created() {
    if (this.$route.params.id) {
      this.categoryID = this.$route.params.id;
    }
    this.fetchCategoryMovies();
  },
  computed: {
    textColor() {
      return this.$store.state.theme.buttonsColor;
    },
  },
  methods: {
    async fetchCategoryMovies() {
      const movs = await getDiscoverMoviesByGenre(this.categoryID, this.page);
      this.movies = movs.results;
    },
    async infiniteScrolling() {
      if (this.movies.length > 0) {
        this.page++;
        const movs = await getDiscoverMoviesByGenre(this.categoryID, this.page);
        this.movies = [...this.movies, ...movs.results];
      }
    },
  },
};
</script>
