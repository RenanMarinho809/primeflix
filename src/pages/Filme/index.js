import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMovieDetails } from "../../hooks/useMovieDetails";
import { useFavorites } from "../../hooks/useFavorites";
import { MovieDetailsSkeleton } from "../../components/Skeleton";
import { BASE_IMAGE_URL } from "../../utils/constants";
import "./filme-info.css";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movie, loading, error } = useMovieDetails(id);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleToggleFavorite = () => {
    if (!movie) return;

    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
      toast.success("Filme removido dos favoritos!");
    } else {
      const added = addFavorite(movie);
      if (added) {
        toast.success("Filme salvo com sucesso!");
      } else {
        toast.info("Você já possui esse filme salvo!");
      }
    }
  };

  if (loading) {
    return <MovieDetailsSkeleton />;
  }

  if (error || !movie) {
    navigate("/", { replace: true });
    return null;
  }

  return (
    <div className="filme-info">
      <h1>{movie.title}</h1>
      <img
        src={`${BASE_IMAGE_URL}/${movie.backdrop_path}`}
        alt={movie.title}
        loading="lazy"
      />

      <h3>Sinopse</h3>
      <span>{movie.overview}</span>

      <strong>Avaliação: {movie.vote_average.toFixed(1)} / 10</strong>

      <div className="area-buttons">
        <button onClick={handleToggleFavorite}>
          {isFavorite(movie.id) ? "⭐ Remover dos Favoritos" : "⭐ Salvar"}
        </button>
        <button>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://youtube.com/results?search_query=${encodeURIComponent(movie.title)} Trailer`}
          >
            Trailer
          </a>
        </button>
            

      </div>
    </div>
  );
}

export default Filme;
