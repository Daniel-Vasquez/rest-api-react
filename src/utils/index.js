const imageUrls = [
  "https://cdn.pixabay.com/photo/2022/07/17/06/30/sunrise-7326601_640.jpg",
  "https://e0.pxfuel.com/wallpapers/634/215/desktop-wallpaper-landscape-mountains-retro-color-minimal-poster-style-illustration-minimal-brown-thumbnail.jpg",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8bqXUHc16pBnXHLvgYAVkGE89CaHHcODCwQa6XNPGKhkkLsBh",
  "https://i.pinimg.com/736x/ee/0c/c2/ee0cc2ff8a9836ccb1982b37f4507e3e--hipster-iphone-wallpapers-iphone-backgrounds.jpg",
  "https://www.enwallpaper.com/wp-content/uploads/e7ed0e08529337cafd68c5ffb83cc865.jpg",
];

const getRandomIndex = (max) => Math.floor(Math.random() * max);

export const setRandomImage = () => imageUrls[getRandomIndex(imageUrls.length)];

export function sortByYearDescending(movies, setMovies, setFilterMovies) {
  const moviesDescending = [...movies];

  setFilterMovies(true);

  const filterTimeout = setTimeout(() => {
    setFilterMovies(false);
  }, 1000);

  moviesDescending.sort((a, b) => b.year - a.year);
  setMovies(moviesDescending);

  return () => clearTimeout(filterTimeout);
}

export function sortByYearAscending(movies, setMovies, setFilterMovies) {
  const moviesAscending = [...movies];

  setFilterMovies(true);

  const filterTimeout = setTimeout(() => {
    setFilterMovies(false);
  }, 1000);

  moviesAscending.sort((a, b) => a.year - b.year);
  setMovies(moviesAscending);

  return () => clearTimeout(filterTimeout);
}

export function sortByTitle(movies, setMovies, setFilterMovies) {
  const moviesTitle = [...movies];

  setFilterMovies(true);

  const filterTimeout = setTimeout(() => {
    setFilterMovies(false);
  }, 1000);
  
  moviesTitle.sort((a, b) => a.title.localeCompare(b.title));
  setMovies(moviesTitle);

  return () => clearTimeout(filterTimeout);
}
