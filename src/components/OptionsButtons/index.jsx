import styleOptionsButton from './index.module.css'

export const OptionsButtons = ({
  onClick,
  actionFunction,
  movies,
  setMovies,
  filteredResults,
  setFilteredResults,
  buttonText
}) => {
  const { optionsButtons } = styleOptionsButton

  const handleButtonClick = () => {
    onClick(actionFunction, movies, setMovies, setFilteredResults);
  };


  return (
    <button
      className={optionsButtons}
      onClick={handleButtonClick}
      disabled={filteredResults}
    >
      {buttonText}
    </button>
  )
}
