import { useState } from "react";
import styles from './AddItemForm.module.css'

const AddItemForm = () => {

    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState(undefined)

    const typeHandler = (e) => {
        setType(e.target.value);
    }

    return (
        <form id={styles['msform']}>
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

                <input type="number" name="price" placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input type="number" name="quantity" placeholder="Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                />

                <input
                    type="button"
                    className={styles['action-button']}
                    defaultValue="Previous"
                />
                <a
                    className={styles['action-button']}
                >
                    Submit
                </a>
            </fieldset>
        </form>
    )
}

export default AddItemForm;