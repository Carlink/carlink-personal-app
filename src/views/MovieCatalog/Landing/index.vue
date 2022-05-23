<template>
  <div>
    <div id="movie-genres" class="movie-module">
      <div class="display-1 mb-4" :class="`${textColor}--text`">
        Popular Movie Genres
      </div>
      <v-row>
        <v-col
          v-for="category in categories.genres"
          :key="category.name"
          cols="2"
        >
          <v-card
            class="pa-3 subtitle-2 font-weight-medium"
            @click="
              $router.push({
                name: 'MoviesCategoriesCategory',
                params: { id: category.id, name: category.name },
              })
            "
          >
            {{ category.name }}
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div id="popular-movies" class="movie-module">
      <div class="display-1 mb-4" :class="`${textColor}--text`">
        Popular Movies
      </div>
      <movie-list :movieList="popularMovies"></movie-list>
    </div>
    <div id="top-rated-movies" class="movie-module">
      <div class="display-1 mb-4" :class="`${textColor}--text`">
        Top Rated Movies
      </div>
      <movie-list :movieList="topRatedMovies"></movie-list>
    </div>
  </div>
</template>

<script>
import {
  getPopularMovies,
  getTopRatedMovies,
  getGenresMovieList,
} from "@/api/MovieCatalog/enpoints.js";
import MovieList from "@/components/MovieCatalog/MovieList";

export default {
  components: {
    MovieList,
  },
  data() {
    return {
      categories: {},
      popularMovies: {},
      topRatedMovies: {},
    };
  },
  mounted() {
    this.getMoviesData();
  },
  computed: {
    textColor() {
      return this.$store.state.theme.buttonsColor;
    },
  },
  methods: {
    async getMoviesData() {
      this.categories = await getGenresMovieList();
      this.popularMovies = await getPopularMovies();
      this.topRatedMovies = await getTopRatedMovies();
    },
  },
};
</script>

<style scoped>
.movie-module {
  margin-bottom: 50px;
}
</style>
