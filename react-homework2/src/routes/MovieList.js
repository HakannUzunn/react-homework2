import React, { useState, useEffect } from 'react';
import '../index.css';
const MovieList = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [category]);

  const fetchMovies = async () => {
    try {
      // You can modify the URL or API request based on your requirements
      const response = await fetch(`http://www.omdbapi.com/?apikey=dd3e5989&s=${category}`);
      const data = await response.json();

      if (data && data.Search) {
        setMovies(data.Search);
      } else {
        console.error('No movie data found in the response:', data);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div>
      <h1>{category} Movies</h1>

      {/* Movies Grid */}
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-item">
            <img src={movie.Poster} alt={movie.Title} />
            <p>
              {movie.Title} ({movie.Year})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;