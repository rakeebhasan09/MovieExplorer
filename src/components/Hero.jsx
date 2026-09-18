import React from 'react';

export default function Hero({ onExplore }) {
  return (
    <section className="hero">
      <div className="hero-backdrop-glow" />
      <div className="hero-content">
        <div className="hero-badge">
          <span>✨ Discover Cinematic Wonders</span>
        </div>

        <h1 className="hero-title">
          DISCOVER <span className="hero-title-highlight">MOVIES & SHOWS</span>
        </h1>

        <p className="hero-description">
          Explore and discover your favorite movies from around the world.
          Get ratings, release dates, storylines, and in-depth details at your fingertips.
        </p>

        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={onExplore}
            type="button"
          >
            <span>Explore Now</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </button>

          <button
            className="btn-secondary"
            onClick={onExplore}
            type="button"
          >
            <span>Search Catalog</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">5,000+</span>
            <span className="stat-label">Titles Listed</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">100%</span>
            <span className="stat-label">Free & Live</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">HD</span>
            <span className="stat-label">Full Details</span>
          </div>
        </div>
      </div>
    </section>
  );
}
