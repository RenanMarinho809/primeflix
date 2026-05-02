import { useState, useEffect } from "react";
import { STORAGE_KEY } from "../utils/constants";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const toggleFavorite = (movie) => {
    let updatedFavorites;
    if (isFavorite(movie.id)) {
      updatedFavorites = favorites.filter((m) => m.id !== movie.id);
    } else {
      updatedFavorites = [...favorites, movie];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
    return !isFavorite(movie.id);
  };

  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((m) => m.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    removeFavorite,
  };
}
