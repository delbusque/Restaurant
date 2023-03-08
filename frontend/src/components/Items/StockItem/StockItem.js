import styles from './StockItem.module.css'

const StockItem = ({ item, addItemHandler }) => {
    return (
        <div className={styles['stock-item']} onClick={() => addItemHandler(item)}>
            <div className={styles['stock-item__name']}>{item.name}</div>

            <div className={styles['stock-item__quantity']}>{item.quantity.toFixed(3)}
                <span className={styles['stock-item__quantityType']}>{item.quantityType}</span>
            </div>

            <div className={styles['stock-item__price']}>{item.price.toFixed(2)}<span className='lv'> лв.</span></div>
        </div>
    )
}

export default StockItem;