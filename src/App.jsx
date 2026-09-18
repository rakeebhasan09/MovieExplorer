import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieModal from './components/MovieModal';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import { fetchAllShows, searchShows } from './services/api';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#/movies' ? 'movies' : 'home';
  });

  const [allShows, setAllShows] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedMovie, setSelectedMovie] = useState(null);

  const debounceTimerRef = useRef(null);

  useEffect(() => {
    const handleHashChange = () => {
      const page = window.location.hash === '#/movies' ? 'movies' : 'home';
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'movies' ? '#/movies' : '#/';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let isMounted = true;

    async function loadInitialData() {
      setIsLoading(true);
      try {
        const shows = await fetchAllShows();
        if (isMounted) {
          setAllShows(shows);
          setDisplayedMovies(shows);
        }
      } catch (err) {
        console.error('Error fetching shows:', err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadInitialData();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSearchChange = (query) => {
    setSearchQuery(query);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (!query.trim()) {
      setIsSearching(false);
      setDisplayedMovies(allShows);
      return;
    }

    setIsSearching(true);
    debounceTimerRef.current = setTimeout(async () => {
      try {
        const results = await searchShows(query);
        setDisplayedMovies(results);
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setIsSearching(false);
      }
    }, 400);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setDisplayedMovies(allShows);
    setIsSearching(false);
  };

  return (
    <div className="app-container">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      <main className="main-content">
        {currentPage === 'home' ? (
          <HomePage
            movies={allShows}
            isLoading={isLoading}
            onNavigate={navigateTo}
            onSelectMovie={(movie) => setSelectedMovie(movie)}
          />
        ) : (
          <MoviesPage
            movies={displayedMovies}
            isLoading={isLoading}
            isSearching={isSearching}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onClearSearch={handleClearSearch}
            onSelectMovie={(movie) => setSelectedMovie(movie)}
          />
        )}
      </main>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      <Footer onNavigate={navigateTo} />
    </div>
  );
}
