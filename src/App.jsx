import { useState, useEffect } from 'react';
import classNames from "classnames";
import { FormMovie } from './components/FormMovie';
import { setRandomImage } from './utils';
import { handleDeleteMovie, createMovie, updateMovie } from './methods';
import { Loading } from './components/Loading';
import { Modal } from './components/Modal';
import { sortByYearDescending, sortByYearAscending, sortByTitle } from './utils';
import { LoadingMovies } from './components/LoadingMovies';
import { OptionsButtons } from './components/OptionsButtons';
import Movie from './components/Movie';
import styleMain from './components/styles/main.module.css';
import styleContainer from './components/styles/container.module.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieData, setMovieData] = useState({
    title: '',
    year: '',
    director: '',
    duration: '',
    rate: '',
    genre: 'Action'
  });

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newPoster, _] = useState(setRandomImage());
  const [isFilterApplied, setIsFilterApplied] = useState(false);

  const allMovies = async () => {
    setIsLoaded(true)

    await fetch('https://rest-api-ytw2-dev.fl0.io/movies')
      .then((res) => res.json())
      .then((moviesData) => setMovies(moviesData))
      .catch(error => console.error('Error al cargar las películas:', error));

    setIsLoaded(false)
  }

  useEffect(() => {
    allMovies()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoaded(true);
    await createMovie(movieData, newPoster);
    setIsLoaded(false);

    setMovieData({
      title: '',
      year: '',
      director: '',
      duration: '',
      rate: '',
      genre: 'Action'
    });

    setShowForm(false)
    allMovies()
  }

  const closeEditModal = () => {
    setSelectedMovie(null);
  };

  const deleteMovie = async (id, setMovies) => {
    setIsLoaded(true);
    await handleDeleteMovie(id, setMovies)
    setIsLoaded(false);

    allMovies()
  }

  const handleEdit = async (updatedMovie) => {
    setIsLoaded(true);
    await updateMovie(updatedMovie.id, updatedMovie, setMovies)
    setIsLoaded(false);

    closeEditModal();
  };

  if (isLoaded) {
    return <Loading />
  }

  return (
    <div className="App">
      <div className={styleContainer["container-button"]}>
        <button
          className={classNames(styleContainer["container-button__button"], {
            [styleContainer["button-color"]]: showForm,
          })}
          onClick={() => setShowForm(!showForm)}
        >
          {!showForm ? 'CREATE A MOVIE' : 'CLOSE FORM'}
        </button>
      </div>
      <div className={styleContainer["container-form"]}>
        <div
          className={classNames(styleContainer["container-form__form"], {
            [styleContainer["form-outspread"]]: showForm,
          })}
        >
          <FormMovie
            movie={movieData}
            setMovieData={setMovieData}
            handleSubmit={handleSubmit}
          />
          <div className={styleContainer["container-form-show-card"]}>
            <Movie
              movie={{
                title: movieData.title || 'Movie title',
                director: movieData.director || '',
                year: movieData.year || "",
                poster: newPoster,
                duration: movieData.duration || 0,
                rate: movieData.rate || 0,
                genre: movieData.genre || 'Action'
              }}
            />
          </div>
        </div>
      </div>

      <h1 className={styleContainer["container-title"]}>Movie catalog</h1>

      <main className="main">
        <div className={styleMain["main-opntions"]}>
          <div className={styleMain["main-opntions-text"]}>
            <h3 className={styleMain["main-opntions-text__text"]}>SORT BY:</h3>
          </div>
          <div className={styleMain["main-options-buttons"]}>
            <OptionsButtons
              action={sortByYearAscending}
              movies={movies}
              setMovies={setMovies}
              disabled={isFilterApplied}
              setIsLoading={setIsFilterApplied}
            >
              ASCENDING BY YEAR
            </OptionsButtons>

            <OptionsButtons
              action={sortByYearDescending}
              movies={movies}
              setMovies={setMovies}
              disabled={isFilterApplied}
              setIsLoading={setIsFilterApplied}
            >
              DESCENDING BY YEAR
            </OptionsButtons>

            <OptionsButtons
              action={sortByTitle}
              movies={movies}
              setMovies={setMovies}
              disabled={isFilterApplied}
              setIsLoading={setIsFilterApplied}
            >
              ALPHABET
            </OptionsButtons>
          </div>
        </div>

        {movies.length === 0 && <h1 className={styleContainer["container-title-no-movies"]}>No movies</h1>}

        <section className={styleMain["main-movies"]}>
          {isFilterApplied && <LoadingMovies />}

          {!isFilterApplied && (
            <>
              {movies.map((movie, id) => (
                <Movie
                  key={id}
                  movie={movie}
                  onDelete={() => deleteMovie(movie.id, setMovies)}
                  setSelectedMovie={setSelectedMovie}
                />
              ))}
              {selectedMovie && (
                <Modal
                  movie={selectedMovie}
                  onClose={closeEditModal}
                  onClick={handleEdit}
                />
              )}
            </>
          )
          }
        </section>
      </main>
    </div>
  );
};

export default App;
