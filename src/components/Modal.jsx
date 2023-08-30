import { useState } from 'react';
import { Form } from '../components/Form/';
import { ModalDelete } from './ModalDelete/index.jsx';
import styleModule from './styles/Modal.module.css';

export const Modal = ({ movie, onClose, onClick }) => {
  const [updatedMovie, setUpdatedMovie] = useState({ ...movie });

  const { id, title, director, year, genre, rate, duration } = updatedMovie;

  const handleEdit = (e) => {
    e.preventDefault();
    onClick(updatedMovie);
  };

  return (
    <div className={styleModule.overlay}>
      <div className={styleModule.modal}>
        {id
          ? (
            <>
              <button className={styleModule['modal-close']} onClick={onClose}>
                <div className={styleModule['modal-right-arrow']}></div>
                <div className={styleModule['modal-left-arrow']}></div>
                <label className={styleModule['modal-close-btn']}>close</label>
              </button>

              <h2 className={styleModule['modal-title']}>
                Edit movie
              </h2>

              <Form
                movie={updatedMovie}
                setMovieData={setUpdatedMovie}
                handleSubmit={handleEdit}
              />
            </>
          ) : (
            <div>
              <ModalDelete
                title={title}
                onClosed={onClose}
                onDelete={onClick}
              />
            </div>
          )
        }
      </div>
    </div>

  );
};