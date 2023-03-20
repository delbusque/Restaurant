import styles from './StockItemModal.module.css';

const StockItemModal = ({ item, setOpenModal }) => {

    return (
        <div className={styles['modal-background']} >
            <button className={styles['modal-close']} onClick={() => setOpenModal(false)}> X </button>
            <div className={styles['modal-container']} >
                <div className={styles['modal-body']}>
                    <h1 className={styles['modal-title']}>
                        Do you really want to delete {item.name} ?
                    </h1>
                    <p className={styles['modal-text']}>
                        You can proceed with {item.name} deletion or cancel it !
                    </p>
                </div>
                <div className={styles['modal-buttons']}>
                    <button onClick={() => setOpenModal(false)}>Cancel</button>
                    <button>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default StockItemModal;