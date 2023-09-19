import styles from './ReadyOrder.module.css'
import { useQuery } from 'react-query';
import axios from 'axios';

const ReadyOrder = ({ ready, refetch }) => {

    const createdAt = new Date(Date.parse(ready.createdAt));
    let dateNow = new Date(Date.now());
    let duration = dateNow.getTime() - createdAt.getTime()
    let time = Math.round(duration / 1000 / 60);

    const deleteReadyOrder = (clicked) => {
        axios.post('/chef/delete-ready-order', { _id: clicked._id }).then(() => refetch())
    }

    useQuery('delete-ready-order', deleteReadyOrder, { enabled: false })

    return (
        <>
            <div className={styles['order-cont']}>
                <div className={styles['order-info']}>
                    <div className={styles['order-table']}>{ready.tableNum}</div>
                    <div className={styles['order-time']}>{time} min</div>
                    <div>
                        <div className={styles['order-name']}>{ready.name}</div>
                    </div>
                </div>
                <button className={styles['order-ready']} onClick={() => deleteReadyOrder(ready)}>ИЗТРИВАНЕ</button>
            </div>
        </>
    )
}

export default ReadyOrder