function MovieCard({ movie, onDetails }) {
  const image =
    movie.image?.medium ||
    "https://via.placeholder.com/210x295?text=No+Image";

  const year = movie.premiered
    ? movie.premiered.substring(0, 4)
    : "N/A";

  const rating = movie.rating?.average
    ? movie.rating.average
    : "N/A";

  return (
    <div className="movie-card">
      <div className="movie-image-container">
        <img
          src={image}
          alt={movie.name}
          className="movie-image"
        />
      </div>

      <div className="movie-card-content">
        <h3>{movie.name}</h3>

        <div className="movie-info">
          <span>⭐ {rating}</span>
          <span>📅 {year}</span>
        </div>

        <button
          className="details-button"
          onClick={() => onDetails(movie)}
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;