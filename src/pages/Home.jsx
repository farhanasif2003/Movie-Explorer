import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-small-title">
              WELCOME TO MOVIE EXPLORER
            </p>

            <h1>
              Discover Your Next
              <br />
              Favorite Show
            </h1>

            <p className="hero-description">
              Explore thousands of movies and TV shows,
              discover new stories, and find something
              amazing to watch.
            </p>

            <Link to="/movies" className="hero-button">
              Explore Now →
            </Link>
          </div>
        </div>
      </div>

      <section className="home-features">
        <div className="feature">
          <div className="feature-icon">🎬</div>
          <h3>Discover Movies</h3>
          <p>
            Browse a large collection of movies and
            television shows.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">🔍</div>
          <h3>Search Easily</h3>
          <p>
            Search for your favorite movies and shows
            by title.
          </p>
        </div>

        <div className="feature">
          <div className="feature-icon">⭐</div>
          <h3>View Details</h3>
          <p>
            Check ratings, genres, release dates and
            descriptions.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Home;