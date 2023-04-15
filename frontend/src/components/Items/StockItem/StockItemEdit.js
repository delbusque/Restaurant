import styles from './StockItemEdit.module.css'
import { useState } from 'react';

const StockItemEdit = ({ item }) => {

    const [error, setError] = useState(null);
    return (
        <>

            <form className={styles['msform']}>
                <fieldset>
                    <h2 className={styles['fs-title']}>Edit item</h2>
                    {/* <input className={emptyFields.includes('name') ? styles['input-error'] : ''}
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

                    <input
                        type="submit"
                        className={styles['action-button']}
                        defaultValue="Previous"
                    /> */}


                </fieldset>
            </form>
            {error && <div className={styles['error']}>{error}</div>}

        </>
    )
}

export default StockItemEdit;