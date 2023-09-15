import ChefOrder from '../../components/Chef/ChefOrder';
import styles from './Chef.module.css'
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchWaitingOrders = () => axios.get('/chef/get-waiting-orders')

const Chef = () => {

    const { isLoading, data, isError, error } = useQuery('waiting-orders', fetchWaitingOrders)

    return (
        <div className={styles["chef-orders"]}>
            <div>Ready Chef Orders</div>
            <div className={styles["waiting"]}>
                <ChefOrder />
            </div>
        </div>
    )
}

export default Chef;