import { useState, useEffect, useCallback } from "react";
import api from "../services/api";
import { API_KEY } from "../utils/constants";

export function useMovies(searchQuery = "") {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      let response;

      if (searchQuery.trim()) {
        response = await api.get("search/movie", {
          params: {
            api_key: API_KEY,
            language: "pt-BR",
            query: searchQuery,
          },
        });
      } else {
        response = await api.get("movie/now_playing", {
          params: {
            api_key: API_KEY,
            language: "pt-BR",
            page: 1,
          },
        });
      }

      setMovies(response.data.results);
    } catch (err) {
      setError("Erro ao carregar filmes");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return {
    movies,
    loading,
    error,
    refetch: fetchMovies,
  };
}
