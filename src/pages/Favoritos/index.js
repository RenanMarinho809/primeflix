import { useFavorites } from "../../hooks/useFavorites";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_IMAGE_URL } from "../../utils/constants";
import "./favoritos.css";

function Favoritos() {
  const { favorites, removeFavorite } = useFavorites();

  const handleExcluirFilme = (id) => {
    removeFavorite(id);
    toast.success("Filme removido dos favoritos!");
  };

  return (
    <div className="meus-filmes">
      <h1>⭐ Meus Favoritos</h1>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <span>Você não possui nenhum filme salvo 😔</span>
          <Link to="/" className="back-link">Voltar para a Home</Link>
        </div>
      ) : (
        <ul className="favorites-list">
          {favorites.map((item) => (
            <li key={item.id} className="favorite-item">
              <img
                src={`${BASE_IMAGE_URL}/${item.poster_path}`}
                alt={item.title}
                className="favorite-poster"
              />
              <div className="favorite-info">
                <h3>{item.title}</h3>
                <div className="favorite-actions">
                  <Link to={`/filme/${item.id}`} className="details-btn">
                    Ver Detalhes
                  </Link>
                  <button
                    onClick={() => handleExcluirFilme(item.id)}
                    className="delete-btn"
                  >
                    Remover
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoritos;
