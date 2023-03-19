import styles from './StockItem.module.css'

const StockItem = ({ item }) => {

    const deleteHandler = async () => {
        console.log(item._id);
        const responce = await fetch('/items/' + item._id, {
            method: 'DELETE',
        });

        const result = await responce.json();
        console.log(result);

    }

    return (
        <div className={styles['stock-item']}>
            <div className={styles['stock-item__name']}>{item.name}</div>
            <div className={styles['stock-item__quantity']}>{item.quantity.toFixed(3)}
                <span className={styles['stock-item__quantityType']}>{item.quantityType}</span>
            </div>
            <div className={styles['stock-item__price']}>{item.price.toFixed(2)}
                <span className='lv'> лв.</span></div>

            <button className={styles['stock-item__edit']}>
                <i className="fa-solid fa-marker marker"></i>
            </button>
            <button className={styles['stock-item__delete']} onClick={deleteHandler}>
                <i className="fa-solid fa-trash-arrow-up trash"></i>
            </button>

        </div>
    )
}

export default StockItem;