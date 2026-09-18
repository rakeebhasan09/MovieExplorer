import React from 'react';
import MovieCard from './MovieCard';

export default function MovieGrid({
  movies = [],
  isLoading = false,
  onSelectMovie,
  searchQuery = '',
  onResetSearch
}) {
  if (isLoading) {
    return (
      <div className="movie-grid" aria-label="Loading movies">
        {Array.from({ length: 8 }).map((_, idx) => (
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
    );
  }

  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">🔍</div>
        <h3 className="empty-state-title">No Movies or Shows Found</h3>
        <p className="empty-state-text">
          {searchQuery
            ? `We couldn't find any results matching "${searchQuery}". Try checking for spelling or searching for a different title.`
            : 'No movies found in this category. Try selecting another genre.'}
        </p>
        {onResetSearch && (
          <button
            type="button"
            className="btn-primary"
            onClick={onResetSearch}
          >
            Clear Filters & Search
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSelect={onSelectMovie}
        />
      ))}
    </div>
  );
}
