import styles from './StockItemInfo.module.css'

const StockItemInfo = ({ item, setShowInfo }) => {
    return (
        <div className={styles['msform']}>
            <fieldset>
                <button className={styles['modal-close']} onClick={() => setShowInfo(false)}> X </button>
                <h2 className={styles['fs-title']}>{item.name}</h2>

            </fieldset>
        </div>
    )

}

export default StockItemInfo;