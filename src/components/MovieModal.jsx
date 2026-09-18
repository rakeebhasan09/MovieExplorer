import React, { useEffect } from 'react';

export default function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [movie, onClose]);

  if (!movie) return null;

  const formattedRating = movie.rating ? movie.rating.toFixed(1) : 'N/A';
  const displayImage = movie.backdrop || movie.poster;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-movie-title"
    >
      <div className="modal-container">
        <button
          type="button"
          className="modal-close-icon-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="modal-backdrop-wrap">
          {displayImage ? (
            <img
              src={displayImage}
              alt={`${movie.title} backdrop`}
              className="modal-backdrop-img"
            />
          ) : (
            <div className="movie-poster-placeholder">
              <span className="movie-poster-placeholder-icon">🎬</span>
            </div>
          )}
          <div className="modal-backdrop-gradient" />
        </div>

        <div className="modal-content-body">
          <div className="modal-header-row">
            {movie.poster && (
              <img
                src={movie.poster}
                alt={`${movie.title} poster`}
                className="modal-mini-poster"
              />
            )}

            <div className="modal-header-info">
              <h2 id="modal-movie-title" className="modal-title">
                {movie.title}
              </h2>

              <div className="modal-meta-chips">
                <span className="modal-chip rating">
                  ⭐ {formattedRating} / 10
                </span>
                <span className="modal-chip">
                  📅 {movie.releaseDate || movie.year}
                </span>
                {movie.runtime && (
                  <span className="modal-chip">
                    ⏱️ {movie.runtime} min
                  </span>
                )}
                {movie.status && (
                  <span className="modal-chip">
                    📡 {movie.status}
                  </span>
                )}
              </div>

              <div className="modal-genres">
                {movie.genres.map((g) => (
                  <span key={g} className="genre-tag">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-section">
            <h4 className="modal-section-title">
              <span>📖</span> Synopsis / Overview
            </h4>
            <p className="modal-overview">{movie.summary}</p>
          </div>

          <div className="modal-details-grid">
            <div className="modal-detail-item">
              <span className="modal-detail-label">Language</span>
              <span className="modal-detail-val">{movie.language || 'English'}</span>
            </div>
            <div className="modal-detail-item">
              <span className="modal-detail-label">Network / Streamer</span>
              <span className="modal-detail-val">{movie.network || 'Worldwide'}</span>
            </div>
            <div className="modal-detail-item">
              <span className="modal-detail-label">Premiered</span>
              <span className="modal-detail-val">{movie.releaseDate || 'N/A'}</span>
            </div>
            <div className="modal-detail-item">
              <span className="modal-detail-label">Status</span>
              <span className="modal-detail-val">{movie.status || 'Active'}</span>
            </div>
          </div>

          <div className="modal-actions">
            <button
              type="button"
              className="modal-close-btn"
              onClick={onClose}
            >
              <span>✕</span> Close
            </button>

            {movie.officialSite && (
              <a
                href={movie.officialSite}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-site-btn"
              >
                <span>Visit Official Site</span>
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
