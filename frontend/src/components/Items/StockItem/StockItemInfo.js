import styles from './StockItemInfo.module.css'

const StockItemInfo = ({ item, setShowInfo }) => {
    return (
        <div className={styles['msform']}>
            <fieldset>
                <button className={styles['modal-close']} onClick={() => setShowInfo(false)}> x </button>
                <h2 className={styles['details-name']}>{item.name}</h2>
                <div className={styles['details-family']}>{item.family}</div>
                <div className={styles['details-type']}>{item.type}</div>
                <div className={styles['details-quantity']}>{item.quantity.toFixed(3)} {item.quantityType}</div>
                <div className={styles['details-price']}>{item.price.toFixed(2)} lv</div>
            </fieldset>
        </div>
    )
}

export default StockItemInfo;