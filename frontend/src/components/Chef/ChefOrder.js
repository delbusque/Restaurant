import styles from './ChefOrder.module.css'

const ChefOrder = () => {
    return (
        <>
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
            </div>

        </>
    )
}

export default ChefOrder