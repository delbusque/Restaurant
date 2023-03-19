import styles from './StockItem.module.css'

const StockItem = ({ item, addItemHandler }) => {
    return (
        <div className={styles['stock-item']}>
            <div className={styles['stock-item__name']}>{item.name}</div>
            <div className={styles['stock-item__quantity']}>{item.quantity.toFixed(3)}
                <span className={styles['stock-item__quantityType']}>{item.quantityType}</span>
            </div>
            <div className={styles['stock-item__price']}>{item.price.toFixed(2)}
                <span className='lv'> лв.</span></div>

            <button className={styles['stock-item__edit']}><i class="fa-solid fa-marker marker"></i></button>
            <button className={styles['stock-item__delete']}><i class="fa-solid fa-trash-arrow-up trash"></i></button>
            {/* <button className={styles['button-53-green']} role="button" >Edit</button> */}
            {/* <button className={styles['button-53']} role="button" >Del</i></button> */}

        </div>
    )
}

export default StockItem;