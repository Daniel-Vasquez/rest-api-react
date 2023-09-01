const imageUrls = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJz-00RZVuRl1n0KZXUVh9ZN1uxpQOrul6sHkDorpuOYnUt-KrVNtTzkrZY-BaEZzmLk&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQL11HCWh1jBJNDG3UURCeGSPOTCf-OKK3F6Npjew6PDB2ALwFrO72jezAeZTBlrWs8w&usqp=CAU",
  "https://img.freepik.com/vector-premium/poster-minimalista-abstracto-impresion-arte-montana-boho_9850-3164.jpg?w=360",
  "https://e0.pxfuel.com/wallpapers/634/215/desktop-wallpaper-landscape-mountains-retro-color-minimal-poster-style-illustration-minimal-brown-thumbnail.jpg",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR8bqXUHc16pBnXHLvgYAVkGE89CaHHcODCwQa6XNPGKhkkLsBh",
];

export const setRandomImage = () => {
  const getRandomIndex = (max) => Math.floor(Math.random() * max)

  return imageUrls[getRandomIndex(imageUrls.length)]
};

export function sortByYearDescending(movies, setMovies, setIsLoading) {
  const moviesDescending = [...movies];

  setIsLoading(true);

  const filterTimeout = setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  moviesDescending.sort((a, b) => b.year - a.year);
  setMovies(moviesDescending);

  return () => clearTimeout(filterTimeout);
}

export function sortByYearAscending(movies, setMovies, setIsLoading) {
  const moviesAscending = [...movies];

  setIsLoading(true);

  const filterTimeout = setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  moviesAscending.sort((a, b) => a.year - b.year);
  setMovies(moviesAscending);

  return () => clearTimeout(filterTimeout);
}

export function sortByTitle(movies, setMovies, setIsLoading) {
  const moviesTitle = [...movies];

  setIsLoading(true);

  const filterTimeout = setTimeout(() => {
    setIsLoading(false);
  }, 1000);
  
  moviesTitle.sort((a, b) => a.title.localeCompare(b.title));
  setMovies(moviesTitle);

  return () => clearTimeout(filterTimeout);
}
