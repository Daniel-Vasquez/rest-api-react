import { useState } from 'react';
import { FormMovie } from './FormMovie';
import { ModalDelete } from './ModalDelete/index.jsx';
import styleModule from './styles/Modal.module.css';

export const Modal = ({ movie, onClose, onClick }) => {
  const [updatedMovie, setUpdatedMovie] = useState({ ...movie });

  const { id: movieExists, title, poster } = updatedMovie;

  const handleEdit = (e) => {
    e.preventDefault();
    onClick(updatedMovie);
  };

  return (
    <div className={styleModule.overlay}>
      <div className={styleModule.modal}>
        {movieExists && (
          <>
            <button className={styleModule['modal-close']} onClick={onClose}>
              <div className={styleModule['modal-right-arrow']}></div>
              <div className={styleModule['modal-left-arrow']}></div>
              <label className={styleModule['modal-close-btn']}>close</label>
            </button>

            <h2 className={styleModule['modal-title']}>
              Edit movie
            </h2>

            <FormMovie
              movie={updatedMovie}
              setMovieData={setUpdatedMovie}
              handleSubmit={handleEdit}
            />
          </>
        )}

        {!movieExists && (
          <ModalDelete
            title={title}
            poster={poster}
            onClosed={onClose}
            onDelete={onClick}
          />
        )}
      </div>
    </div>

  );
};