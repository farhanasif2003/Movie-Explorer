import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAllMovies = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://api.tvmaze.com/shows"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      setMovies(data);
    } catch (err) {
      setError("Something went wrong while loading movies.");
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = async (query) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
          query
        )}`
      );

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();

      const searchResults = data.map((item) => item.show);

      setMovies(searchResults);
    } catch (err) {
      setError("Unable to search movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMovies();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() === "") {
        fetchAllMovies();
      } else {
        searchMovies(search);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <section className="movies-page">
      <div className="movies-header">
        <p className="section-label">EXPLORE</p>

        <h1>Movie & TV Show Explorer</h1>

        <p>
          Search and discover your favorite movies and
          television shows.
        </p>
      </div>

      <div className="search-container">
        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search for a movie..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {search && (
          <button
            className="clear-search"
            onClick={() => setSearch("")}
          >
            ✕
          </button>
        )}
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading movies...</p>
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>{error}</p>

          <button onClick={fetchAllMovies}>
            Try Again
          </button>
        </div>
      )}

      {!loading && !error && movies.length === 0 && (
        <div className="no-results">
          <h2>No movies found</h2>
          <p>Try searching with another title.</p>
        </div>
      )}

      {!loading && !error && movies.length > 0 && (
        <>
          <div className="results-info">
            <p>
              {search
                ? `Search results for "${search}"`
                : "All Movies & Shows"}
            </p>

            <span>
              {movies.length} results
            </span>
          </div>

          <div className="movie-grid">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onDetails={setSelectedMovie}
              />
            ))}
          </div>
        </>
      )}

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />
    </section>
  );
}

export default Movies;