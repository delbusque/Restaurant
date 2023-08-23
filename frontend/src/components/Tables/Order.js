import styles from './Order.module.css'
import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext.js'


const Order = ({ o, addItemHandler, deleteItemHandler }) => {
    const [sendToChef, setSendToChef] = useState(0);
    const { user } = useAuthContext();

    const toChefHandler = async () => {
        setSendToChef(o.count);

        const response = await fetch('/chef/add-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({ _id: o._id })
        })

        const result = await response.json();

    }

    return (
        <div className={styles['tb-orders']}>
            <div className={styles['ord-name']}>{o.name}</div>
            <button className={styles['button-53']} role="button" onClick={() => deleteItemHandler(o)}>-</button>
            <button className={styles['button-53-green']} role="button" onClick={() => addItemHandler(o)}>+</button>
            <div className={styles['ord-count']}>
                <span className={styles['ord-counter']}>{o.count} </span> x {o.price.toFixed(2)}
            </div>

            {o.family === 'food' && <button className={styles['button-53-blue']} role="button" onClick={toChefHandler}>{sendToChef} / {o.count}</button>}
            <div className={styles['ord-total']}>{(o.count * o.price).toFixed(2)}
                <span className={styles['lv']}>lv.</span>
            </div>
        </div>
    )
}

export default Order;