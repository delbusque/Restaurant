import { useState } from "react";
import styles from './AddItemForm.module.css'
import { useContext } from "react";
import ItemsContext from "../../../contexts/ItemsContext";

const AddItemForm = ({ setDrinkIsActive, setFoodIsActive }) => {

    const { items, setItems } = useContext(ItemsContext);

    const [inputName, setInputName] = useState('');
    const [family, setFamily] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([]);

    const typeHandler = (e) => {
        setType(e.target.value);
    }

    const addNewStockItemHandler = async (e) => {
        e.preventDefault();
        let name = inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();

        const newItem = { name, family, price, type, quantity }

        const response = await fetch('/items/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })

        const result = await response.json();

        if (!response.ok && result.emptyFields) {
            setError(result.error);
            setEmptyFields(result.emptyFields);
        }
        if (!response.ok && result.error.includes('duplicate key')) {
            setError(`${name} is already in stock !`);
            setEmptyFields(['name']);
        }

        if (response.ok) {
            setItems(oldState => [...oldState, result]);
            window.localStorage.setItem('items', JSON.stringify(items));
            setError(null);
            setInputName('');
            setFamily('');
            setType('');
            setPrice('');
            setQuantity('');
            setEmptyFields([]);
            if (newItem.family === 'drinks') {
                setDrinkIsActive(true);
                setFoodIsActive(false);
            } else if (newItem.family === 'food') {
                setDrinkIsActive(false);
                setFoodIsActive(true);
            }
        }
    }

    return (
        <>

            <form className={styles['msform']} onSubmit={addNewStockItemHandler}>
                <fieldset>
                    <h2 className={styles['fs-title']}>Add new item</h2>
                    {/* <h3 className="fs-subtitle">We will never sell it</h3> */}
                    <input className={emptyFields.includes('name') ? styles['input-error'] : ''}
                        type="text" name="name" placeholder="Name"
                        onChange={(e) => setInputName(e.target.value)}
                        value={inputName}
                    />

                    <select
                        className={emptyFields.includes('family') ? styles['input-error'] : ''}
                        onChange={(e) => {
                            setFamily(e.target.value)
                            setType('');
                        }}>
                        <option selected disabled>Choose here :</option>
                        <option value='drinks'>Drinks</option>
                        <option value='food'>Food</option>
                    </select>

                    {family === 'drinks' &&
                        <select onChange={(e) => typeHandler(e)}
                            className={emptyFields.includes('type') ? styles['input-error'] : ''}>
                            <option selected disabled>Choose from drinks :</option>
                            <option value='beer'>Beer</option>
                            <option value='vodka'>Vodka</option>
                            <option value='wine'>Wine</option>
                            <option value='whiskey'>Whiskey</option>
                            <option value='gin'>Gin</option>
                            <option value='mastika'>Mastika</option>
                            <option value='rum'>Rum</option>
                            <option value='juice'>Juice</option>
                            <option value='fresh'>Fresh</option>
                            <option value='water'>Water</option>
                            <option value='other'>Other</option>
                            <option value='juice1'>Juice1</option>
                            <option value='fresh2'>Fresh2</option>
                            <option value='water3'>Water3</option>
                            <option value='other4'>Other4</option>
                        </select>}

                    {family === 'food' &&
                        <select onChange={(e) => typeHandler(e)}
                            className={emptyFields.includes('type') ? styles['input-error'] : ''}>
                            <option selected disabled>Choose from food :</option>
                            <option value='salad'>Salad</option>
                            <option value='grill'>Grill</option>
                        </select>}

                    <input type="number" name="price" placeholder="Price"
                        className={emptyFields.includes('price') ? styles['input-error'] : ''}
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                    <input type="number" name="quantity" placeholder="Quantity"
                        className={emptyFields.includes('quantity') ? styles['input-error'] : ''}
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}

                    />
                    <input
                        type="submit"
                        className={styles['action-button']}
                        defaultValue="Previous"
                    />


                </fieldset>
            </form>
            {error && <div className={styles['error']}>{error}</div>}

        </>
    )
}

export default AddItemForm;