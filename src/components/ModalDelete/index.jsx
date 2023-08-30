import styleModalDelete from './index.module.css'

export const ModalDelete = ({ title, poster, onDelete, onClosed }) => {
  return (
    <div className={styleModalDelete['overlay-delete']}>
      <div className={styleModalDelete['modal-delete']}>
        <p className={styleModalDelete['modal-delete__text']}>
          Sure you want to delete the movie <strong>{title}</strong>?
        </p>
        <img
          className={styleModalDelete['modal-delete__img']}
          src={poster}
          alt="shredder"
        />
        <div className={styleModalDelete['modal-delete-options']}>
          <button
            className={styleModalDelete['modal-delete-options__button']}
            onClick={onDelete}
          >
            YES
          </button>
          <button
            className={styleModalDelete['modal-delete-options__button']}
            onClick={onClosed}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  )
}
