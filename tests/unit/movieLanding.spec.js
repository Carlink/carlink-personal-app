import MovieItem from "@/components/MovieCatalog/MovieItem.vue";
import Vue from "vue";
import Vuetify from "vuetify";
Vue.config.productionTip = false;
Vue.use(Vuetify);
import { createLocalVue, mount } from "@vue/test-utils";

const MOCK_MOVIE = {
  adult: false,
  backdrop_path: "/gG9fTyDL03fiKnOpf2tr01sncnt.jpg",
  genre_ids: [28, 878, 14],
  id: 526896,
  original_language: "en",
  original_title: "Morbius",
  overview:
    "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
  popularity: 12854.042,
  poster_path: "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
  release_date: "2022-03-30",
  title: "Morbius",
  video: false,
  vote_average: 6.4,
  vote_count: 1091,
};

describe("Movie Catalog - Movie Component", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  /**
   * This test verifies that the received movie data is an object
   */
  it("Movie is of 'object' type", () => {
    const wrapper = mount(MovieItem, {
      localVue,
      vuetify,
      propsData: { movie: MOCK_MOVIE },
    });
    expect(typeof wrapper.vm.movie).toBe("object");
  });

  /**
   * This test verifies that the received object have the complete Movie Schema properties
   */
  it("Movie object has a valid schema", () => {
    const expectedKeys = [
      "adult",
      "backdrop_path",
      "genre_ids",
      "id",
      "original_language",
      "original_title",
      "overview",
      "popularity",
      "poster_path",
      "release_date",
      "title",
      "video",
      "vote_average",
      "vote_count",
    ];
    const wrapper = mount(MovieItem, {
      localVue,
      vuetify,
      propsData: { movie: MOCK_MOVIE },
    });
    expect(Object.keys(wrapper.vm.movie)).toEqual(
      expect.arrayContaining(expectedKeys)
    );
  });

  /**
   * This test verifies that the movie title is rendered in the DOM and has the right data
   */
  it("If Movie Item component load correctly, it must have a valid #movie-title", () => {
    const wrapper = mount(MovieItem, {
      localVue,
      vuetify,
      propsData: { movie: MOCK_MOVIE },
    });
    const title = wrapper.find("#movie-title");
    expect(title.html()).toContain(MOCK_MOVIE.title);
  });

  /**
   * This test verifies that the movie overview is rendered in the DOM and has the right data
   */
  it("If Movie Item component load correctly, it must have a valid #movie-overview", () => {
    const wrapper = mount(MovieItem, {
      localVue,
      vuetify,
      propsData: { movie: MOCK_MOVIE },
    });
    const title = wrapper.find("#movie-overview");
    expect(title.html()).toContain(MOCK_MOVIE.overview);
  });
});
