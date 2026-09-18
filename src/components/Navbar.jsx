import React from 'react';

export default function Navbar({ currentPage, onNavigate }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div
          className="navbar-brand"
          onClick={() => onNavigate('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onNavigate('home')}
          aria-label="MovieExplorer Home"
        >
          <span className="navbar-brand-icon">🎬</span>
          <span>
            Movie<span className="navbar-brand-highlight">Explorer</span>
          </span>
        </div>

        <nav className="navbar-nav" aria-label="Main Navigation">
          <button
            className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
            type="button"
          >
            Home
          </button>
          <button
            className={`nav-link ${currentPage === 'movies' ? 'active' : ''}`}
            onClick={() => onNavigate('movies')}
            type="button"
          >
            Movies
          </button>

          <button
            className="nav-btn-cta"
            onClick={() => onNavigate('movies')}
            type="button"
          >
            <span>Explore Movies</span>
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
        </nav>
      </div>
    </header>
  );
}
