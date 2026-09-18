import React from 'react';
import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';

export default function HomePage({
  movies = [],
  isLoading = false,
  onNavigate,
  onSelectMovie
}) {
  const featuredMovies = [...movies]
    .filter((m) => m.rating !== null)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 4);

  return (
    <div className="home-page">
      <Hero onExplore={() => onNavigate('movies')} />

      <section className="featured-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">
              <span>🔥</span> Featured & Top Rated
            </h2>
            <p className="section-subtitle">
              Critically acclaimed and fan-favorite titles you cannot miss
            </p>
          </div>

          <button
            type="button"
            className="section-view-all"
            onClick={() => onNavigate('movies')}
          >
            <span>Browse All Movies</span>
            <svg
              width="16"
              height="16"
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

        {isLoading ? (
          <div className="movie-grid">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="skeleton-card">
                <div className="skeleton-poster" />
                <div className="skeleton-body">
                  <div className="skeleton-line" />
                  <div className="skeleton-line short" />
                  <div className="skeleton-line btn" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="movie-grid">
            {featuredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelect={onSelectMovie}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
