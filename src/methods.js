// Delete movie
export const handleDeleteMovie = async (id, setMovies) => {
  try {
    await fetch(`https://rest-api-ytw2-dev.fl0.io/movies/${id}`, {
      method: 'DELETE'
    });

    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  } catch (error) {
    console.error('Error deleting movie:', error);
  }
};

// Create movie
export async function addMovie(title, poster, year, director, duration, genre) {
  const data = {
    title: title,
    poster: poster,
    year: year,
    director: director,
    duration: duration,
    genre: genre,
  };

  await fetch(`https://rest-api-ytw2-dev.fl0.io/movies`, {
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
  try {
    const response = await fetch(`https://rest-api-ytw2-dev.fl0.io/movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
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
