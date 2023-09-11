import ChefOrder from '../../components/Chef/ChefOrder';
import styles from './Chef.module.css'

const Chef = () => {
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