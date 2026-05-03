import { useState, useEffect } from "react";
import { STORAGE_KEY } from "../utils/constants";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const saveFavorites = (newFavorites) => {
    setFavorites(newFavorites);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
  };

  const addFavorite = (movie) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === movie.id);
    if (isAlreadyFavorite) return false;

    const newFavorites = [...favorites, movie];
    saveFavorites(newFavorites);
    return true;
  };

  const removeFavorite = (movieId) => {
    const newFavorites = favorites.filter((fav) => fav.id !== movieId);
    saveFavorites(newFavorites);
  };

  const isFavorite = (movieId) => {
    return favorites.some((fav) => fav.id === movieId);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
}
