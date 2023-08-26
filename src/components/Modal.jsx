import { useState } from 'react';
import styleModule from './styles/Modal.module.css';

export const EditModal = ({ movie, onClose, onEdit }) => {
  const [updatedMovie, setUpdatedMovie] = useState({ ...movie });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'year' || name === 'duration' || name === 'rate') {
      setUpdatedMovie((prevMovie) => ({
        ...prevMovie,
        [name]: parseInt(value),
      }));
      return;
    }

    setUpdatedMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    onEdit(updatedMovie);
  };

  return (
    <div className={styleModule.overlay}>
      <div className={styleModule.modal}>
        <button className={styleModule['modal-close']} onClick={onClose}>
          ❌
        </button>
        <h2 className={styleModule['modal-title']}>Editar Película</h2>
        <form>
          <input
            className={styleModule['modal-input']}
            type="text"
            name="title"
            value={updatedMovie.title}
            onChange={handleInputChange}
          />
          <input
            className={styleModule['modal-input']}
            type="text"
            name="director"
            value={updatedMovie.director}
            onChange={handleInputChange}
          />
          <input
            className={styleModule['modal-input']}
            type="number"
            name="year"
            value={updatedMovie.year}
            onChange={handleInputChange}
          />
          <input
            className={styleModule['modal-input']}
            type="number"
            name="duration"
            value={updatedMovie.duration}
            onChange={handleInputChange}
          />
          <input
            className={styleModule['modal-input']}
            type="number"
            name="rate"
            value={updatedMovie.rate}
            onChange={handleInputChange}
          />

        </form>
        <div className={styleModule['modal-buttons-options']}>
          <button className={styleModule['modal-button']} onClick={handleEdit}>Guardar Cambios</button>
          <button className={styleModule['modal-button']} onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};