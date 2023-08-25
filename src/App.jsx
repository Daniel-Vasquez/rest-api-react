import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';
import './App.css';

const App = () => {
  // State para almacenar las películas
  const [movies, setMovies] = useState([]);

  // useEffec para cargar las películas
  useEffect(() => {
    fetch('https://rest-api-ytw2-dev.fl0.io/movies')
      .then((res) => res.json())
      .then((moviesData) => setMovies(moviesData))
      .catch(error => console.error('Error al cargar las películas:', error));

  }, []);

  // DELETE: Función para eliminar una película
  const handleDeleteMovie = async (id) => {
    try {
      await fetch(`https://rest-api-ytw2-dev.fl0.io/movies/${id}`, {
        method: 'DELETE'
      });

      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error('Error al eliminar la película:', error);
    }
  };

  return (
    <div className="container">
      {/* Your movie list JSX here */}
      <h1 className="container-title">Catálogo de películas</h1>
      <main className="main">
        {movies.length === 0 ? (
          <h1>Sin películas</h1>
        ) : (
          movies.map(({ id, title, genre, poster, year }) => (
            <Movie
              key={id}
              id={id}
              title={title}
              genre={genre}
              poster={poster}
              year={year}
              onDelete={handleDeleteMovie}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default App;
