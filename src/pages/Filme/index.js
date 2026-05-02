import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useFavorites } from "../../hooks/useFavorites";
import { BASE_IMAGE_URL } from "../../utils/constants";
import Skeleton from "../../components/Skeleton";
import "./filme-info.css";

function Filme() {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetails(id);
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleToggleFavorite = () => {
    const wasAdded = toggleFavorite(movie);
    if (wasAdded) {
      toast.success("Filme adicionado aos favoritos!");
    } else {
      toast.info("Filme removido dos favoritos!");
    }
  };

  if (error) {
    return (
      <div className="error-container">
        <h2>Ops! Filme não encontrado</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return <Skeleton type="detail" />;
  }

  return (
    <div className="filme-info">
      <h1>{movie.title}</h1>
      <img
        src={`${BASE_IMAGE_URL}/${movie.backdrop_path}`}
        alt={movie.title}
      />

      <h3>Sinopse</h3>
      <span>{movie.overview}</span>

      <strong>Avaliação: {movie.vote_average.toFixed(1)} / 10</strong>

      <div className="area-buttons">
        <button
          onClick={handleToggleFavorite}
          className={isFavorite(movie.id) ? "favorited" : ""}
        >
          {isFavorite(movie.id) ? "⭐ Remover dos Favoritos" : "⭐ Salvar nos Favoritos"}
        </button>
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://youtube.com/results?search_query=${encodeURIComponent(movie.title)} Trailer`}
          >
            🎬 Ver Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
