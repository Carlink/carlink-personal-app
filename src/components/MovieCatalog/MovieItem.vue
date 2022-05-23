<template>
  <div>
    <v-card
      @click="$router.push({ name: 'MoviesMovie', params: { id: movie.id } })"
    >
      <v-img height="500" :src="image"></v-img>

      <v-card-title style="display: block" class="text-truncate">{{
        movie.title
      }}</v-card-title>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="computedRate"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">
            {{ computedRate }} ({{ movie.vote_count }})
          </div>
        </v-row>

        <div class="my-4 text-subtitle-1">$ {{ generatePrice() }}.00 USD</div>

        <div class="three-lines">
          {{ movie.overview }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text>
          ADD TO CART
          <v-icon right>mdi-cart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    image() {
      return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    },
    computedRate() {
      return this.movie.vote_average / 2;
    },
  },
  methods: {
    generatePrice() {
      return Math.floor(this.movie.vote_average);
    },
  },
};
</script>

<style scoped>
.three-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: normal;
}
</style>
