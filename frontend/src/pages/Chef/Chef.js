import styles from './Chef.module.css'
import ChefOrder from '../../components/Chef/ChefOrder';
import ReadyOrder from '../../components/Chef/ReadyOrder';
import { useFetchOrders } from '../../hooks/useFetchOrders.js';

const Chef = () => {

    const { isLoading, data, isError, error, refetch } = useFetchOrders()

    return (
        <div className={styles["chef-orders"]}>
            <div className={styles["ready"]}>
                {data?.map(order => !order.waiting && <ReadyOrder key={order._id} waiting={order} refetch={refetch} />)}
            </div>
            <div className={styles["waiting"]}>
                {data?.map(order => order.waiting && <ChefOrder key={order._id} waiting={order} refetch={refetch} />)}
            </div>
        </div>
    )
}

export default Chef;