import styleForm from './styles/Form.module.css'

export const Form = ({
  title,
  setTitle,
  year,
  setYear,
  director,
  setDirector,
  duration,
  setDuration,
  rate,
  setRate,
  genre,
  setGenre,
  handleSubmit
}) => {
  const handleChangeForm = (value, useState) => {
    useState(value)
  }
  return (
    <form className={styleForm.form} onSubmit={handleSubmit}>
      <div name='title'>
        <label className={styleForm["form-label"]}>
          Title:
        </label>
        <input
          className={styleForm["form-input"]}
          type="text"
          value={title}
          onChange={(e) => handleChangeForm(e.target.value, setTitle)}
          required
        />
      </div>

      <div name='director'>
        <label className={styleForm["form-label"]}>
          Director:
        </label>
        <input
          className={styleForm["form-input"]}
          type="text"
          value={director}
          onChange={(e) => handleChangeForm(e.target.value, setDirector)}
          required
        />
      </div>

      <div name='year'>
        <label className={styleForm["form-label"]}>
          Year:
        </label>
        <input
          className={styleForm["form-input"]}
          type="number"
          value={year ? year : ""}
          min={1900}
          max={2024}
          onChange={(e) => handleChangeForm(parseInt(e.target.value), setYear)}
          required
        />
      </div>

      <div name='duration'>
        <label className={styleForm["form-label"]}>
          Duration:
        </label>
        <input
          className={styleForm["form-input"]}
          type="number"
          value={duration ? duration : ""}
          min={0}
          onChange={(e) => handleChangeForm(parseInt(e.target.value), setDuration)}
          required
        />
        <span className={styleForm["form-label__span"]}>
          *In minutes, example: <strong>90, 120, 180,</strong> etc.
        </span>
      </div>

      <div name='rate'>
        <label className={styleForm["form-label"]}>
          Rate:
        </label>
        <input
          className={styleForm["form-input"]}
          type="number"
          value={rate ? rate : ""}
          min={0}
          max={10}
          onChange={(e) => handleChangeForm(parseInt(e.target.value), setRate)}
        />
      </div>

      <div name='genre'>
        <label className={styleForm["form-label"]}>
          Genre:
        </label>
        <select
          className={styleForm["form-select"]}
          // defaultValue=""
          defaultValue={Array.isArray(genre) ? genre[0] : genre}
          onChange={(e) => handleChangeForm(e.target.value, setGenre)}
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

      <span name='poster' className={styleForm["form-label__span"]}>
        *The <strong>poster</strong> is generated automatically.
      </span>

      <button
        className={styleForm["form-button"]}
        type='submit'
      >
        Create
      </button>
    </form>
  )
}
