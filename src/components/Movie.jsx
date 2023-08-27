import './styles/Movie.css'

const Movie = ({ movie, onDelete, setSelectedMovie }) => {
  const { id, title, year, genre, poster, rate, duration } = movie;

  const openEditModal = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <article data-id={id} className="card">
      <div className="video_thumb circle">
        <img className="circle-img" src={poster} alt={title} />
        <div className="play-button"></div>
      </div>
      <div className="overlay"></div>

      <div className="card-info">
        <p className="card-info__title">{!title ? "" : title}</p>
        <p className="card-info__text">{!year ? 0 : year}</p>
        <p className="card-info__text"></p>
        <p className="card-info__text">{Array.isArray(genre) ? genre[0] : genre}</p>
        <p className="card-info__text">{!duration ? 0 : duration} min.</p>
        <p className="card-info__text">⭐ {!rate ? 0 : rate}/10</p>
      </div>

      {id && (
        <div className='card-buttons'>
          <button className="button-48 button-48-color" onClick={() => openEditModal(movie)}>
            Edit
          </button>

          <button className="button-48" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      )}
    </article>
  );
};

export default Movie;
