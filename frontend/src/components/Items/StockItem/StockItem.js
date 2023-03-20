import styles from './StockItem.module.css'
import { useState, useContext } from 'react';
import ItemsContext from '../../../contexts/ItemsContext';
import StockItemModal from './StockItemModal';

const StockItem = ({ item }) => {

    const { items, setItems } = useContext(ItemsContext);
    const [error, setError] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const deleteHandler = async () => {

        const responce = await fetch(`/items/${item._id}`, {
            method: 'DELETE',
        });

        const result = await responce.json();

        if (!responce.ok) {
            setError(result.error)
        }

        if (responce.ok) {
            setItems(state => state.filter(i => i._id !== result._id))
            window.localStorage.setItem('items', JSON.stringify(items));
            setOpenModal(false);
        }
    }

    return (
        <>
            {openModal && <StockItemModal item={item} setOpenModal={setOpenModal} deleteHandler={deleteHandler} />}

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
                <button className={styles['stock-item__delete']} onClick={() => setOpenModal(true)}>
                    <i className="fa-solid fa-trash-arrow-up trash"></i>
                </button>
            </div>

        </>
    )
}

export default StockItem;