import axios from "axios";
import { API_KEY } from "../utils/constants";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const movieAPI = {
  getNowPlaying: (page = 1) =>
    api.get("movie/now_playing", {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
        page,
      },
    }),

  getMovieDetails: (id) =>
    api.get(`movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
      },
    }),

  searchMovies: (query) =>
    api.get("search/movie", {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
        query,
      },
    }),
};

export default api;
