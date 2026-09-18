import React, { useState } from 'react';

export default function MovieCard({ movie, onSelect }) {
  const [imageError, setImageError] = useState(false);

  const formattedRating = movie.rating ? movie.rating.toFixed(1) : 'N/A';
  const displayYear = movie.year && movie.year !== 'N/A' ? movie.year : 'TBA';

  return (
    <article className="movie-card" aria-label={movie.title}>
      <div className="movie-poster-container">
        {movie.poster && !imageError ? (
          <img
            src={movie.poster}
            alt={`${movie.title} poster`}
            className="movie-poster"
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="movie-poster-placeholder">
            <span className="movie-poster-placeholder-icon">🎬</span>
            <span>{movie.title}</span>
          </div>
        )}

        <div className="movie-rating-badge" title={`Rating: ${formattedRating}`}>
          <span>⭐</span>
          <span>{formattedRating}</span>
        </div>
      </div>

      <div className="movie-card-body">
        <h3 className="movie-card-title" title={movie.title}>
          {movie.title}
        </h3>

        <div className="movie-card-meta">
          <span>📅 {displayYear}</span>
          {movie.network && (
            <>
              <span className="movie-meta-dot">•</span>
              <span>{movie.network}</span>
            </>
          )}
        </div>

        <div className="movie-genres-tags">
          {movie.genres.slice(0, 3).map((genre) => (
            <span key={genre} className="genre-tag">
              {genre}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="btn-details"
          onClick={() => onSelect(movie)}
          aria-label={`See details for ${movie.title}`}
        >
          <span>See Details</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
}
