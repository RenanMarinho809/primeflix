import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import { debounce } from "../../utils/debounce";
import { BASE_IMAGE_URL } from "../../utils/constants";
import Skeleton from "../../components/Skeleton";
import "./home.css";

function Home() {
  const { movies, loading, error, searchMovies } = useMovies();
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = useCallback(
    debounce((query) => searchMovies(query), 500),
    []
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };

  if (error) {
    return (
      <div className="error-container">
        <h2>Ops! Algo deu errado.</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Tentar novamente</button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar filmes..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {loading ? (
        <Skeleton type="card" count={10} />
      ) : (
        <div className="lista-filmes">
          {movies.length === 0 ? (
            <div className="no-results">
              <h2>Nenhum filme encontrado</h2>
              <p>Tente buscar por outro título</p>
            </div>
          ) : (
            movies.map((filme) => (
              <article key={filme.id}>
                <strong>{filme.title}</strong>
                <img
                  src={`${BASE_IMAGE_URL}/${filme.poster_path}`}
                  alt={filme.title}
                />
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
