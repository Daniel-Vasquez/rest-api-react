import { getEnvValue } from "./utils";
const ENDPOINT = getEnvValue('ENDPOINT') || 'https://rest-api-ytw2-dev.fl0.io';

// Delete movie
export const deleteMovie = async (id, setMovies) => {
  try {
    await fetch(`${ENDPOINT}/movies/${id}`, {
      method: 'DELETE'
    });

    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  } catch (error) {
    console.error('Error deleting movie:', error);
  }
};

// Create movie
export async function createMovie(movieData, poster) {
  const { title, year, director, duration, rate, genre } = movieData;
  
  const data = {
    title: title,
    director: director,
    year: year,
    poster: poster,
    duration: duration,
    rate: rate,
    genre: genre.split(','),
  };

  await fetch(`${ENDPOINT}/movies`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('The request was not successful');
      }
      return response.json();
    })
    .then(newMovie => {
      console.log('New movie added:', newMovie);
    })
    .catch(err => {
      console.error('Error adding movie:', err);
    });
}

// Update movie
export async function updateMovie(id, updatedData, setMovies) {
  const { title, year, director, poster, duration, rate, genre } = updatedData;

  const data = {
    title: title,
    director: director,
    year: year,
    poster: poster,
    duration: duration,
    rate: rate,
    genre: typeof genre === 'string' ? genre.split(',') : genre,
  };

  try {
    const response = await fetch(`${ENDPOINT}/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('The update request was not successful');
    }

    const updatedMovie = await response.json();
    setMovies((prevMovies) =>
      prevMovies.map((movie) => (movie.id === id ? updatedMovie : movie))
    );

    console.log('Updated movie:', updatedMovie);
  } catch (error) {
    console.error('Error updating movie:', error);
  }
}
