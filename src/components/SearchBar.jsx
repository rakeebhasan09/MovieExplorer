import React from 'react';

export default function SearchBar({
  value,
  onChange,
  onClear,
  isLoading,
  placeholder = 'Search for a movie or show by title...'
}) {
  return (
    <div className="search-bar-wrapper">
      <div className="search-input-container">
        <span className="search-icon" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>

        <input
          type="text"
          className="search-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label="Search movies"
          autoComplete="off"
        />

        {isLoading ? (
          <div className="search-spinner" aria-label="Loading search results" />
        ) : value ? (
          <button
            type="button"
            className="search-clear-btn"
            onClick={onClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        ) : null}
      </div>
    </div>
  );
}
