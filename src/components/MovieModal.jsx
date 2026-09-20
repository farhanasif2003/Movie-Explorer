function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  const image =
    movie.image?.original ||
    movie.image?.medium ||
    "https://via.placeholder.com/600x400?text=No+Image";

  const rating = movie.rating?.average
    ? movie.rating.average
    : "N/A";

  const releaseDate = movie.premiered || "Not available";

  const genres =
    movie.genres && movie.genres.length > 0
      ? movie.genres.join(", ")
      : "Not available";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description available.";

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <img
          src={image}
          alt={movie.name}
          className="modal-image"
        />

        <div className="modal-content">
          <h2>{movie.name}</h2>

          <div className="modal-meta">
            <span>⭐ Rating: {rating}</span>
            <span>📅 Release: {releaseDate}</span>
          </div>

          <p>
            <strong>Genre:</strong> {genres}
          </p>

          <h3>Overview</h3>

          <p className="summary">
            {summary}
          </p>

          {movie.network?.name && (
            <p>
              <strong>Network:</strong> {movie.network.name}
            </p>
          )}

          <button
            className="close-button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;