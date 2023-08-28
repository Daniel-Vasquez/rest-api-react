import { useState } from 'react';
import shredderIcon from '../assets/shredder.png';
import styleModule from './styles/Modal.module.css';

export const Modal = ({ movie, onClose, onEdit }) => {
  const [updatedMovie, setUpdatedMovie] = useState({ ...movie });
  const { id, title, director, year, genre, rate, duration } = updatedMovie;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'year' || name === 'duration' || name === 'rate') {
      setUpdatedMovie((prevMovie) => ({
        ...prevMovie,
        [name]: parseInt(value),
      }));
      return;
    }

    if (name === 'genre') {
      setUpdatedMovie((prevMovie) => ({
        ...prevMovie,
        [name]: value.split(','),
      }));
      return;
    }

    setUpdatedMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    onEdit(updatedMovie);
  };

  return (
    <div className={styleModule.overlay}>
      <div className={styleModule.modal}>
        <button className={styleModule['modal-close']} onClick={onClose}>
          <div className={styleModule['modal-right-arrow']}></div>
          <div className={styleModule['modal-left-arrow']}></div>
          <label className={styleModule['modal-close-btn']}>close</label>
        </button>

        <h2 className={styleModule['modal-title']}>
          {id
            ? 'Edit movie'
            : (
              <>
                Are you sure you want to delete the movie {" "}
                <strong className={styleModule['modal-title__strong']}>
                  {title}
                </strong>
                ?
              </>
            )
          }
        </h2>
        <form className={styleModule.form} onSubmit={handleEdit}>
          {id
            ? (
              <>
                <label className={styleModule['modal-form__label']}>
                  Title:
                </label>
                <input
                  className={styleModule['modal-input']}
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                  required
                />

                <label className={styleModule['modal-form__label']}>
                  Director:
                </label>
                <input
                  className={styleModule['modal-input']}
                  type="text"
                  name="director"
                  value={director}
                  onChange={handleInputChange}
                  required
                />

                <label className={styleModule['modal-form__label']}>
                  Year:
                </label>
                <input
                  className={styleModule['modal-input']}
                  type="number"
                  name="year"
                  value={year ? year : ""}
                  min={1900}
                  max={2024}
                  onChange={handleInputChange}
                  required
                />

                <label className={styleModule['modal-form__label']}>
                  Duration:
                </label>
                <input
                  className={styleModule['modal-input']}
                  type="number"
                  name="duration"
                  value={duration ? duration : ""}
                  min={0}
                  onChange={handleInputChange}
                  required
                />

                <label className={styleModule['modal-form__label']}>
                  Rate:
                </label>
                <input
                  className={styleModule['modal-input']}
                  type="number"
                  name="rate"
                  value={rate ? rate : ""}
                  onChange={handleInputChange}
                  min={0}
                  max={10}
                  required
                />

                <div name='genre'>
                  <label className={styleModule['modal-form__label']}>
                    Genre:
                  </label>
                  <select
                    className={styleModule["form-select"]}
                    name="genre"
                    onChange={handleInputChange}
                    defaultValue={Array.isArray(genre) ? genre[0] : genre}
                    required
                  >
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horror">Horror</option>
                    <option value="Biography">Biography</option>
                    <option value="Crime">Crime</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                  </select>
                </div>
              </>
            ) : (
              <>
                <img
                  className={styleModule['modal-shredder']}
                  src={shredderIcon}
                  alt='icon sure'
                />
              </>
            )
          }

          <div className={styleModule['modal-buttons-options']}>
            <button
              type="submit"
              className={styleModule['modal-button']}
            >
              {id ? 'SAVE' : 'YES'}
            </button>
            <button
              type="button"
              className={styleModule['modal-button__close']}
              onClick={onClose}
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};