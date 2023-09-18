import ChefOrder from '../../components/Chef/ChefOrder';
import styles from './Chef.module.css'
import { useFetchOrders } from '../../hooks/useFetchOrders.js';

const Chef = () => {

    const { isLoading, data, isError, error } = useFetchOrders()

    return (
        <div className={styles["chef-orders"]}>
            <div className={styles["ready"]}>
                Ready Chef Orders
            </div>
            <div className={styles["waiting"]}>
                {data?.map(order => order.waiting && <ChefOrder key={order._id} waiting={order} />)}
            </div>
        </div>
    )
}

export default Chef;