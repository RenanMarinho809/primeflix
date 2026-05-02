import { useState, useEffect } from "react";
import { movieAPI } from "../services/api";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNowPlaying();
  }, []);

  const loadNowPlaying = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await movieAPI.getNowPlaying();
      setMovies(response.data.results.slice(0, 10));
    } catch (err) {
      setError("Erro ao carregar filmes. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = async (query) => {
    if (!query.trim()) {
      loadNowPlaying();
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const response = await movieAPI.searchMovies(query);
      setMovies(response.data.results);
    } catch (err) {
      setError("Erro ao buscar filmes. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return {
    movies,
    loading,
    error,
    searchMovies,
  };
}
