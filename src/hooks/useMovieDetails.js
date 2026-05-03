import { useState, useEffect } from "react";
import api from "../services/api";
import { API_KEY } from "../utils/constants";

export function useMovieDetails(movieId) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!movieId) return;

      setLoading(true);
      setError(null);

      try {
        const response = await api.get(`/movie/${movieId}`, {
          params: {
            api_key: API_KEY,
            language: "pt-BR",
          },
        });
        setMovie(response.data);
      } catch (err) {
        setError("Filme não encontrado");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return {
    movie,
    loading,
    error,
  };
}
