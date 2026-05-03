import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import { debounce } from "../../utils/debounce";
import { MovieCardSkeleton } from "../../components/Skeleton";
import { BASE_IMAGE_URL } from "../../utils/constants";
import "./home.css";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { movies, loading, error } = useMovies(searchQuery);

  const handleSearch = useMemo(
    () =>
      debounce((query) => {
        setSearchQuery(query);
      }, 500),
    []
  );

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    handleSearch(e.target.value);
  };

  if (error) {
    return (
      <div className="error-state">
        <h2>{error}</h2>
        <p>Tente novamente mais tarde.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar filmes..."
          value={searchInput}
          onChange={handleInputChange}
          className="search-input"
        />
      </div>
      <div className="lista-filmes">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))
        ) : movies.length === 0 ? (
          <div className="empty-state">
            <h2>Nenhum filme encontrado</h2>
            <p>Tente buscar por outro título.</p>
          </div>
        ) : (
          movies.map((filme) => (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`${BASE_IMAGE_URL}/${filme.poster_path}`}
                alt={filme.title}
                loading="lazy"
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
