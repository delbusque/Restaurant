import styles from './StockItemEdit.module.css'
import { useState, useContext, useEffect } from 'react';
import ItemsContext from '../../../contexts/ItemsContext';
import { useAuthContext } from "../../../hooks/useAuthContext";


const StockItemEdit = ({ item, setEditInfo, setDrinkIsActive, setFoodIsActive }) => {
    const { items, setItems } = useContext(ItemsContext);
    const { user } = useAuthContext();

    const [inputName, setInputName] = useState('');
    const [family, setFamily] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);
    const [negZero, setNegZero] = useState([]);
    const [error, setError] = useState(null);

    const typeHandler = (e) => {
        setType(e.target.value);
    }

    useEffect(() => {
        setInputName(item.name);
        setPrice(item.price);
        setQuantity(item.quantity);
    }, [item])

    const editItemHandler = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You are not authorized to add menu items !');
            return;
        }

        let name = inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();
        let quantityType;

        if (family === 'drinks') {
            quantityType = quantity < 1 ? 'ml' : 'l';
        } else if (family === 'food') {
            quantityType = quantity < 1 ? 'gr' : 'kg';
        }

        const editedItem = { name, family, price, type, quantity, quantityType, _id: item._id }

        const response = await fetch(`/items/edit/${item._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(editedItem)
        })

        const result = await response.json();

        if (!response.ok && result.emptyFields) {
            setError(result.error);
            setEmptyFields(result.emptyFields);
        }

        if (!response.ok) {
            setError(result.error);
            setNegZero(result.negZero);
        }

        if (response.ok) {

            let oldItems = items.filter(i => i._id !== result._id);
            oldItems.push(result);

            window.localStorage.setItem('items', JSON.stringify(oldItems));
            setItems(JSON.parse(window.localStorage.getItem('items')));

            setError(null);
            setInputName('');
            setFamily('');
            setType('');
            setPrice('');
            setQuantity('');
            setEmptyFields([]);
            setNegZero([]);
            if (editedItem.family === 'drinks') {
                setDrinkIsActive(true);
                setFoodIsActive(false);
            } else if (editedItem.family === 'food') {
                setDrinkIsActive(false);
                setFoodIsActive(true);
            }
        }
    }

    // useEffect(() => {

    // }, [])


    return (
        <>
            <form className={styles['msform']} onSubmit={editItemHandler}>
                <fieldset>
                    <button className={styles['modal-close']} onClick={() => setEditInfo(false)}> x </button>
                    <h2 className={styles['fs-title']}>{item.name}</h2>

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
                        </select>}

                    {family === 'food' &&
                        <select onChange={(e) => typeHandler(e)}
                            className={emptyFields.includes('type') ? styles['input-error'] : ''}>
                            <option selected disabled>Choose from food :</option>
                            <option value='salad'>Salad</option>
                            <option value='grill'>Grill</option>
                            <option value='burgers'>Burgers</option>
                            <option value='pizza'>Pizza</option>
                        </select>}

                    <input type="number" name="price" placeholder="Price"
                        className={(emptyFields.includes('price') || negZero.includes('price')) ? styles['input-error'] : ''}
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                    <input type="number" name="quantity" placeholder="Quantity"
                        className={(emptyFields.includes('quantity') || negZero.includes('quantity')) ? styles['input-error'] : ''}
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                    />

                    <button className={styles['action-button']}>Edit</button>

                </fieldset>
            </form>
            {error && <div className={styles['error']}>{error}</div>}

        </>
    )
}

export default StockItemEdit;