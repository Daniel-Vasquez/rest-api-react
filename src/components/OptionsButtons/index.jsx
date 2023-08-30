import styleOptionsButton from './index.module.css'

export const OptionsButtons = ({
  handleClick,
  actionFunction,
  movies,
  setMovies,
  disabled,
  setFilteredResults,
  buttonText
}) => {
  const { optionsButtons } = styleOptionsButton

  const handleButtonClick = () => {
    handleClick(actionFunction, movies, setMovies, setFilteredResults);
  };


  return (
    <button
      className={optionsButtons}
      onClick={handleButtonClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  )
}
