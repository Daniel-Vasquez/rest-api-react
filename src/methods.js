// Delete movie
export const handleDeleteMovie = async (id, setMovies) => {
  try {
    await fetch(`https://rest-api-ytw2-dev.fl0.io/movies/${id}`, {
      method: 'DELETE'
    });

    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  } catch (error) {
    console.error('Error al eliminar la película:', error);
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
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then(newMovie => {
      console.log('Nueva película agregada:', newMovie);
    })
    .catch(err => {
      console.error('Error al agregar la película:', err);
    });
}