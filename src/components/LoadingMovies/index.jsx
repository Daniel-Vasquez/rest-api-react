import styleLoading from './index.module.css'

export const LoadingMovies = () => {
  const { containerLoader, loader } = styleLoading

  return (
    <div className={containerLoader}>
      <span className={loader}></span>
    </div>
  )
}
