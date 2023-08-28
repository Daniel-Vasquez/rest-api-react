import { useState } from 'react';
import { Modal } from './Modal';
import './styles/Movie.css'

const Movie = ({ movie, onDelete, setSelectedMovie }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { id, title, year, genre, poster, rate, duration } = movie;

  const openEditModal = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <>
      <article data-id={id} className="movie">
        <div className="video_thumb movie-circle">
          <img className="movie-circle-img" src={poster} alt={title} />
          <div className="play-button"></div>
        </div>
        <div className="overlay"></div>

        <div className="movie-info">
          <p className="movie-info__title">{!title ? "" : title}</p>
          <p className="movie-info__text">{!year ? "" : year}</p>
          <p className="movie-info__text">
            {Array.isArray(genre) ? genre[0] : genre}
          </p>
          <p className="movie-info__text">{!duration ? 0 : duration} min.</p>
          <p className="movie-info__text">⭐ {!rate ? 0 : rate}/10</p>
        </div>

        {id && (
          <div className='movie-buttons'>
            <button
              className="button-48 button-48-color"
              onClick={() => openEditModal(movie)}
            >
              Edit
            </button>

            <button
              className="button-48"
              onClick={() => setOpenDeleteModal(true)}>
              Delete
            </button>
          </div>
        )}
      </article>
      {openDeleteModal &&
        <Modal 
          movie={{ title }}
          onClose={() => setOpenDeleteModal(false)}
          onEdit={() => onDelete(id)}
        />
      }
    </>
  );
};

export default Movie;
