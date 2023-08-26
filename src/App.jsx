import { useState, useEffect } from 'react';
import { Form } from './components/Form';
import { setRandomImage } from './utils';
import { handleDeleteMovie, addMovie, updateMovie } from './methods';
import { Loading } from './components/Loading';
import { EditModal } from './components/Modal';
import Movie from './components/Movie';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [duration, setDuration] = useState('');
  const [rate, setRate] = useState('');
  const [genre, setGenre] = useState('Action');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('https://rest-api-ytw2-dev.fl0.io/movies')
      .then((res) => res.json())
      .then((moviesData) => setMovies(moviesData))
      .catch(error => console.error('Error al cargar las películas:', error));
  }, []);

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  const handleCreate = async () => {
    const newPoster = setRandomImage();
    setIsLoaded(true);
    await addMovie(title, newPoster, year, director, duration, genre.split(','));

    setTitle('');
    setYear('');
    setDirector('');
    setDuration('');
    setRate('');
    setGenre('');
    setIsLoaded(false);

    window.location.reload();
  }
  
  const closeEditModal = () => {
    setSelectedMovie(null);
  };

  const handleEdit = async (updatedMovie) => {
    setIsLoaded(true);

    await updateMovie(updatedMovie.id, updatedMovie, setMovies)

    setIsLoaded(false);

    closeEditModal();
  };

  if (isLoaded) return <Loading/>
  
  return (
    <div className="container">
      <h1 className="container-title">Crea una película</h1>
      <Form
        title={title}
        setTitle={setTitle}
        year={year}
        setYear={setYear}
        director={director}
        setDirector={setDirector}
        duration={duration}
        setDuration={setDuration}
        rate={rate}
        setRate={setRate}
        genre={genre}
        setGenre={setGenre}
        handleChange={handleChange}
        handleClick={handleCreate}
      />

      <h1 className="container-title">Catálogo de películas</h1>
      <main className="main">
        {movies.length === 0 ? (
          <h1>Sin películas</h1>
        ) : (
          <>
            {movies.map((movie, id) => (
              <Movie
                key={id}
                movie={movie}
                onDelete={() => handleDeleteMovie(movie.id, setMovies)}
                setSelectedMovie={setSelectedMovie}
              />
            ))}
            {selectedMovie && (
              <EditModal movie={selectedMovie} onClose={closeEditModal} onEdit={handleEdit} />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
