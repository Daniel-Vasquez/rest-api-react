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
  handleChange,
  handleClick
}) => {
  return (
    <form className={styleForm.form}>
      <div name='title'>
        <label className={styleForm["form-label"]}>
          Título:
        </label>
        <input
          className={styleForm["form-input"]}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>

      <div name='year'>
        <label className={styleForm["form-label"]}>
          Año:
        </label>
        <input
          className={styleForm["form-input"]}
          type="number"
          value={year}
          min={1985}
          max={2024}
          onChange={(e) => setYear(parseInt(e.target.value))}
          required
        />
        <span className={styleForm["form-label__span"]}>
          *Mínimo del 1985 hasta el 2024.
        </span>
      </div>

      <div name='duration'>
        <label className={styleForm["form-label"]}>
          Duración:
        </label>
        <input
          className={styleForm["form-input"]}
          type="number"
          value={duration}
          min={0}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          required
        />
        <span className={styleForm["form-label__span"]}>
          *En minutos, ejemplo: 90, 120, 180, etc.
        </span>
      </div>

      <div name='rate'>
        <label className={styleForm["form-label"]}>
          Calificación:
        </label>
        <input
          className={styleForm["form-input"]}
          type="number"
          value={rate}
          min={0}
          max={10}
          onChange={(e) => setRate(parseInt(e.target.value))}
        />
      </div>

      <div name='genre'>
        <label className={styleForm["form-label"]}>
          Género:
        </label>
        <select className={styleForm["form-select"]} defaultValue="" onChange={handleChange}>
          <option value="Action">Acción</option>
          <option value="Adventure">Aventura</option>
          <option value="Comedy">Comedia</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasía</option>
          <option value="Horror">Terror</option>
          <option value="Biography">Biografía</option>
          <option value="Crime">Crimen</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Ciencia Ficción</option>
        </select>
      </div>

      <span name='poster' className={styleForm["form-label__span"]}>
        *El poster se genera automáticamente.
      </span>
      
      <button
        className={styleForm["form-button"]}
        type='button'
        onClick={handleClick}
        disabled={!title || !year || !director || !duration || !genre}
      >
        Crear
      </button>
    </form>
  )
}
