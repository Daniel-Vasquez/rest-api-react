import styleModalDelete from './index.module.css'
import shredderIcon from '../../assets/shredder.png'

export const ModalDelete = ({ title, onDelete, onClosed }) => {
  return (
    <div className={styleModalDelete['overlay-delete']}>
      <div className={styleModalDelete['modal-delete']}>
        <p className={styleModalDelete['modal-delete__text']}>
          Sure you want to delete the movie <strong>{title}</strong>?
        </p>
        <img
          className={styleModalDelete['modal-delete__img']}
          src={shredderIcon}
          alt="shredder"
        />
        <div className={styleModalDelete['modal-delete-options']}>
          <button
            className={styleModalDelete['modal-delete-options__buttons']}
            onClick={onDelete}
          >
            YES
          </button>
          <button
            className={styleModalDelete['modal-delete-options__buttons']}
            onClick={onClosed}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  )
}
