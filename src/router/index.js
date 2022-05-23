import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Pokemon from "../views/Pokemon.vue";
import Movies from "../views/MovieCatalog";
import Landing from "../views/MovieCatalog/Landing";
import MoviesCategories from "../views/MovieCatalog/Categories";
import MoviesMovie from "../views/MovieCatalog/Movie";
import MoviesCategoriesLanding from "../views/MovieCatalog/Categories/Landing";
import MoviesCategoriesCategory from "../views/MovieCatalog/Categories/Category";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/pokemon",
    name: "Pokemon",
    component: Pokemon,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
    redirect: { name: "MoviesLanding" },
    children: [
      {
        path: "",
        name: "MoviesLanding",
        component: Landing,
      },
      {
        path: "categories",
        name: "MoviesCategories",
        component: MoviesCategories,
        redirect: { name: "MoviesLanding" },
        children: [
          {
            path: "",
            name: "MoviesCategoriesLanding",
            component: MoviesCategoriesLanding,
          },
          {
            path: "category/:id/:name",
            name: "MoviesCategoriesCategory",
            component: MoviesCategoriesCategory,
          },
        ],
      },
      {
        path: "movie/:id",
        name: "MoviesMovie",
        component: MoviesMovie,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
