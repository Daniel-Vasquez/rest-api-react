import styleLoading from './styles/Loading.module.css'

export const Loading = () => {
  const { container, loader, text } = styleLoading
  return (
    <div className={container}>
      <span className={loader}>
        <h2 className={text}>Cargando...</h2>
      </span>
    </div>
  )
}
