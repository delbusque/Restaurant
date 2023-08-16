import styles from './Order.module.css'

const Order = ({ o, key, addItemHandler, deleteItemHandler }) => {
    return (
        <div className={styles['tb-orders']} key={key}>
            <div className={styles['ord-name']}>{o.name}</div>
            <button className={styles['button-53']} role="button" onClick={() => deleteItemHandler(o)}>-</button>
            <button className={styles['button-53-green']} role="button" onClick={() => addItemHandler(o)}>+</button>
            <div className={styles['ord-count']}><span className={styles['ord-counter']}>{o.count} </span> x {o.price.toFixed(2)}</div>
            <div className={styles['ord-total']}>{(o.count * o.price).toFixed(2)} <span className={styles['lv']}>lv.</span></div>
        </div>
    )
}

export default Order;