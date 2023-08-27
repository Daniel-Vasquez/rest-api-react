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
  const [creading, setCreading] = useState(false);

  useEffect(() => {
    fetch('https://rest-api-ytw2-dev.fl0.io/movies')
      .then((res) => res.json())
      .then((moviesData) => setMovies(moviesData))
      .catch(error => console.error('Error al cargar las películas:', error));
  }, []);

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  const newPoster = setRandomImage();

  const handleCreate = async (e) => {
    e.preventDefault();
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

  if (isLoaded) return <Loading />

  return (
    <div className="container">
      <div className='container-button'>
        <button
          className={`container-button__button ${creading ? 'button-color' : ''}`}
          onClick={() => setCreading(!creading)}
        >
          {!creading ? 'Create a movie' : 'Close form'}
        </button>
      </div>
      <div className='container-form'>
        <div className={`container-form__form ${creading ? 'container-form' : ''}`}>
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
          <div className='container-form-show-card'>
            <Movie
              movie={{
                title: title ? title : '',
                year: year ? year : 1985,
                poster: newPoster,
                director: director ? director : '',
                duration: duration ? duration : 0,
                rate: rate ? rate : 0,
                genre : genre ? genre : 'Action'
              }}
            />
          </div>
        </div>
      </div>

      <h1 className="container-title">Movie catalog</h1>
      <main className="main">
        {movies.length === 0 ? (
          <h1 className="container-title-no-movies">No movies</h1>
        ) : (
          <section className="main-movies">
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
          </section>
        )}
      </main>
    </div>
  );
};

export default App;
