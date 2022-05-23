// The Movie Data Base Endpoints

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org";
const API_VERSION = process.env.VUE_APP_TMDB_VERSION;
const API_KEY_V3 = process.env.VUE_APP_TMDB_API_KEY_V3;
const API_KEY_V4 = process.env.VUE_APP_TMDB_API_KEY_V4;
const USED_KEY = API_VERSION === "4" ? API_KEY_V4 : API_KEY_V3;

axios.defaults.params = { api_key: USED_KEY };

const getPopularMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/${API_VERSION}/movie/popular`);
  return data;
};

const getTopRatedMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/${API_VERSION}/movie/top_rated`
  );
  return data;
};

const getLatestMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/${API_VERSION}/movie/latest`);
  return data;
};

const getDiscoverMoviesByGenre = async (genre, page) => {
  const { data } = await axios.get(
    `${BASE_URL}/${API_VERSION}/discover/movie`,
    {
      params: {
        with_genres: genre,
        page: page,
      },
    }
  );
  return data;
};

const getMovieByID = async (movie_id) => {
  const { data } = await axios.get(
    `${BASE_URL}/${API_VERSION}/movie/${movie_id}`
  );
  return data;
};

const getGenresMovieList = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/${API_VERSION}/genre/movie/list`
  );
  return data;
};

export {
  getPopularMovies,
  getMovieByID,
  getGenresMovieList,
  getTopRatedMovies,
  getLatestMovies,
  getDiscoverMoviesByGenre,
};
