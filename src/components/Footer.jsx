import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span>🎬</span>
            <span>
              Movie<span className="navbar-brand-highlight">Explorer</span>
            </span>
          </div>

          <div className="footer-links">
            <button
              type="button"
              className="nav-link"
              onClick={() => onNavigate('home')}
            >
              Home
            </button>
            <button
              type="button"
              className="nav-link"
              onClick={() => onNavigate('movies')}
            >
              Movie Directory
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 MovieExplorer. All rights reserved.</p>
          <div className="footer-api-badge">
            <span>Powered by</span>
            <a
              href="https://www.tvmaze.com/api"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}
            >
              TVMaze API
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
