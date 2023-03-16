import { useState } from "react";
import styles from './AddItemForm.module.css'
import { useContext } from "react";
import ItemsContext from "../../../contexts/ItemsContext";

const AddItemForm = () => {

    const { items, setItems } = useContext(ItemsContext);

    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState(null);

    const typeHandler = (e) => {
        setType(e.target.value);
    }

    const addNewStockItemHandler = async (e) => {
        e.preventDefault();
        const newItem = { name, family, price, type, quantity };

        if (name && family && type && price && quantity) {
            const response = await fetch('/items/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newItem)
            })

            const result = await response.json();

            if (!response.ok) {
                setError(result.error)
            }
            if (response.ok) {
                setItems(oldState => [...oldState, result]);
                window.localStorage.setItem('items', JSON.stringify(items));
                setError(null)
                setName('')
                setFamily('')
                setType('')
                setPrice('')
                setQuantity('')
            }
        }
    }

    return (
        <form id={styles['msform']} onSubmit={addNewStockItemHandler}>
            <fieldset>
                <h2 className={styles['fs-title']}>Add new item</h2>
                {/* <h3 className="fs-subtitle">We will never sell it</h3> */}
                <input type="text" name="name" placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <select id={styles['select-family']}
                    onChange={(e) => {
                        setFamily(e.target.value)
                        setType('');
                    }}>
                    <option selected disabled>Choose here :</option>
                    <option value='drinks'>Drinks</option>
                    <option value='food'>Food</option>
                </select>

                {family === 'drinks' &&
                    <select id={styles['select-type']} onChange={(e) => typeHandler(e)}>
                        <option selected disabled hidden>Choose from drinks :</option>
                        <option value='beer'>Beer</option>
                        <option value='vodka'>Vodka</option>
                        <option value='wine'>Wine</option>
                    </select>}

                {family === 'food' &&
                    <select id={styles['select-type']} onChange={(e) => typeHandler(e)}>
                        <option selected disabled hidden>Choose from food :</option>
                        <option value='salad'>Salad</option>
                        <option value='grill'>Grill</option>
                    </select>}

                <input type="text" name="price" placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
                <input type="text" name="quantity" placeholder="Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}

                />

                <input
                    type="button"
                    className={styles['action-button']}
                    defaultValue="Previous"
                />
                <input
                    type="submit"
                    className={styles['action-button']}
                    defaultValue="Previous"
                />

            </fieldset>
        </form>
    )
}

export default AddItemForm;