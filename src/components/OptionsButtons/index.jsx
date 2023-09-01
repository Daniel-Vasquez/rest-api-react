import styleOptionsButton from './index.module.css'

export const OptionsButtons = ({
  action,
  movies,
  setMovies,
  disabled,
  setIsLoading,
  children
}) => {
  const handleButtonClick = () => {
    action(movies, setMovies, setIsLoading);
  };

  return (
    <button
      className={styleOptionsButton["options-buttons"]}
      onClick={handleButtonClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
