import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { movieAPI } from "../services/api";

export function useMovieDetails(id) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    const loadMovie = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await movieAPI.getMovieDetails(id);
        setMovie(response.data);
      } catch (err) {
        setError("Filme não encontrado");
        navigate("/", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id, navigate]);

  return {
    movie,
    loading,
    error,
  };
}
