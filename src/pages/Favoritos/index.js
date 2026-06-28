import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useFavorites } from "../../hooks/useFavorites";
import { BASE_IMAGE_URL } from "../../utils/constants";
import "./favoritos.css";

function Favoritos() {
  const { favorites, removeFavorite } = useFavorites();

  const handleExcluirFilme = (id) => {
    removeFavorite(id);
    toast.success("Filme excluído com sucesso!");
  };

  return (
    <div className="meus-filmes">
      <script src="https://pl30114449.effectivecpmnetwork.com/31/9c/a5/319ca5fabeac591e74fd31fd5ef0b2ba.js"></script>

      <h1>Meus Filmes Favoritos</h1>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <h2>Você não possui nenhum filme salvo 😢</h2>
          <Link to="/" className="back-home">Voltar para Home</Link>
        </div>
      ) : (
        <div className="favorites-list">
          {favorites.map((item) => (
            <div key={item.id} className="favorite-card">
              <img
                src={`${BASE_IMAGE_URL}/${item.poster_path}`}
                alt={item.title}
                className="favorite-poster"
                loading="lazy"
              />
              <div className="favorite-info">
                <h3>{item.title}</h3>
                <div className="favorite-actions">
                  <Link to={`/filme/${item.id}`} className="view-details">Ver Detalhes</Link>
                  <button onClick={() => handleExcluirFilme(item.id)} className="remove-btn">Excluir</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;
