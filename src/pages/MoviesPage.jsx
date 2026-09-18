import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';

const POPULAR_GENRES = [
  'All',
  'Drama',
  'Action',
  'Crime',
  'Science-Fiction',
  'Comedy',
  'Thriller',
  'Romance',
  'Horror',
  'Mystery'
];

export default function MoviesPage({
  movies = [],
  isLoading = false,
  isSearching = false,
  searchQuery = '',
  onSearchChange,
  onClearSearch,
  onSelectMovie
}) {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const filteredMovies = useMemo(() => {
    let list = [...movies];

    if (selectedGenre !== 'All') {
      list = list.filter((m) =>
        m.genres && m.genres.some((g) => g.toLowerCase() === selectedGenre.toLowerCase())
      );
    }

    if (sortBy === 'rating-desc') {
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'year-desc') {
      list.sort((a, b) => {
        const yearA = parseInt(a.year, 10) || 0;
        const yearB = parseInt(b.year, 10) || 0;
        return yearB - yearA;
      });
    } else if (sortBy === 'title-asc') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }

    return list;
  }, [movies, selectedGenre, sortBy]);

  return (
    <div className="movies-page">
      <div className="search-section">
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800 }}>
            Explore Movie Database
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '0.3rem' }}>
            Search TV shows and movies directly via the TVMaze API catalog
          </p>
        </div>

        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          onClear={onClearSearch}
          isLoading={isSearching}
        />

        <div className="genre-filter-wrapper" role="tablist" aria-label="Filter by genre">
          {POPULAR_GENRES.map((genre) => (
            <button
              key={genre}
              type="button"
              className={`genre-pill ${selectedGenre === genre ? 'active' : ''}`}
              onClick={() => setSelectedGenre(genre)}
              role="tab"
              aria-selected={selectedGenre === genre}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="results-info">
          <div>
            <span>Showing </span>
            <strong className="results-count">{filteredMovies.length}</strong>
            <span> titles</span>
            {searchQuery && <span> for &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>}
            {selectedGenre !== 'All' && <span> in <strong>{selectedGenre}</strong></span>}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <label htmlFor="sort-select" style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Sort by:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="default" style={{ background: '#0e1422' }}>Featured / Default</option>
              <option value="rating-desc" style={{ background: '#0e1422' }}>Highest Rating ⭐</option>
              <option value="year-desc" style={{ background: '#0e1422' }}>Latest Release 📅</option>
              <option value="title-asc" style={{ background: '#0e1422' }}>Title (A-Z)</option>
            </select>
          </div>
        </div>

        <MovieGrid
          movies={filteredMovies}
          isLoading={isLoading}
          onSelectMovie={onSelectMovie}
          searchQuery={searchQuery}
          onResetSearch={() => {
            onClearSearch();
            setSelectedGenre('All');
            setSortBy('default');
          }}
        />
      </div>
    </div>
  );
}
