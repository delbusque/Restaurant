import styles from './Order.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Order = ({ o, addItemHandler, deleteItemHandler, table }) => {

    const { name, quantity, count } = o
    const [sent, setSent] = useState(0)
    const [waiting, setWaiting] = useState(count - sent)

    const addOrders = () => {
        console.log('post');
        return axios.post('/chef/add-orders', { name, quantity, count: waiting, table })
    }

    const toChefHandler = () => {
        setSent(old => old + waiting)
        setWaiting(0)
        addOrders()
        console.log(table);
    }

    useEffect(() => {
        setWaiting(count - sent)
    }, [count, sent])


    return (
        <div className={styles['tb-orders']}>
            <div className={styles['ord-name']}>{o.name}</div>
            <button className={styles['button-53']} onClick={() => deleteItemHandler(o)}>-</button>
            <button className={styles['button-53-green']} onClick={() => addItemHandler(o)}>+</button>
            <div className={styles['ord-count']}>
                <span className={styles['ord-counter']}>{o.count} </span> x {o.price.toFixed(2)}
            </div>

            {o.family === 'food' && <button className={styles['button-53-blue']} onClick={toChefHandler}> {sent} / {count}</button>}

            <div className={styles['ord-total']}>{(o.count * o.price).toFixed(2)}
                <span className={styles['lv']}>lv.</span>
            </div>
        </div>
    )
}

export default Order;