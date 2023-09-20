import styles from './ChefOrder.module.css'
import { useQuery } from 'react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ChefOrder = ({ waiting, refetch, orders }) => {

    const createdAt = new Date(Date.parse(waiting.createdAt));
    let dateNow = new Date(Date.now());
    let duration = dateNow.getTime() - createdAt.getTime()
    let time = Math.round(duration / 1000 / 60);

    const updateWaitingStatus = (clicked) => axios.post('/chef/update-waiting-status', { _id: clicked._id }).then(() => refetch())

    useQuery('update-waiting-status', updateWaitingStatus, { enabled: false })

    const [count, setCount] = useState(0)

    useEffect(() => {
        orders?.forEach(o => {
            o.name === waiting.name && setCount(old => old + 1)
        })
    }, [])

    return (
        <>
            <div className={styles['order-cont']}>
                <div className={styles['order-info']}>
                    <div className={styles['order-table']}>{waiting.tableNum}</div>
                    <div className={styles['order-time']}>{time} min</div>
                    <div>{waiting.quantity.toFixed(3)} {waiting.quantityType}</div>


                    <div>
                        <div className={styles['order-name']}>{waiting.name} <div className={styles['order-count']}>{count}</div></div>
                        <div className={styles['order-ingr']}>tomato, cucumber, onion, pepper, cheese</div>
                    </div>

                </div>
                <button className={styles['order-ready']} onClick={() => updateWaitingStatus(waiting)}>ГОТОВА</button>
            </div>
            {/*             
            <div className={styles['order-cont']}>
                <div className={styles['order-info']}>
                    <div className={styles['order-type']}>D</div>
                    <div className={styles['order-time']}>5 min</div>
                    <div>500 гр</div>

                    <div>
                        <div className={styles['order-name']}>ШОПСКА САЛАТА</div>
                        <div className={styles['order-ingr']}>tomato, cucumber, onion, pepper, cheese</div>
                    </div>
                </div>
                <button className={styles['order-ready']}>ГОТОВА</button>
            </div>

            <div className={styles['order-cont-1']}>
                <div className={styles['order-info']}>
                    <div className={styles['order-type']}>1</div>
                    <div className={styles['order-time']}>3 min</div>
                    <div>450 гр</div>

                    <div>
                        <div className={styles['order-name']}>ПЪРЖЕНИ КАРТОФИ - СИРЕНЕ</div>
                        <div className={styles['order-ingr']}>картофи, сирене</div>
                    </div>
                </div>
                <button className={styles['order-ready-1']}>ГОТОВА</button>
            </div> */}

        </>
    )
}

export default ChefOrder