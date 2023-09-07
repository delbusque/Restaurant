import styles from './Chef.module.css'

const Chef = () => {
    return (
        <div className={styles["chef-orders"]}>
            <div>Ready Chef Orders</div>
            <div className={styles["waiting"]}>Waiting Chef Orders</div>
        </div>
    )
}

export default Chef;