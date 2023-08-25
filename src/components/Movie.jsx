import './styles/Movie.css'

const Movie = ({ id, title, genre, poster, year, onDelete }) => {
  return (
    <article data-id={id} className="card">
      <div className="video_thumb circle">
        <img className="circle-img" src={poster} alt={title} />
        <div className="play-button"></div>
      </div>
      <div className="overlay"></div>

      <div className="card-info">
        <p className="card-info__title">{title}</p>
        <p className="card-info__text">{year}</p>
        <p>{genre[0]}</p>
      </div>

      <button className="button-48" onClick={() => onDelete(id)}>
        Eliminar
      </button>
    </article>
  );
};

export default Movie;
