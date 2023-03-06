import { useState, useContext } from 'react';

import ItemsContext from '../../contexts/ItemsContext.js';

import FamilyButton from '../Buttons/FamilyButton.js';
import TypeButton from '../Buttons/TypeButton.js';
import ItemLine from '../Tables/ItemLine.js';

import familiesAndTypes from "../../services/familiesAndTypes.js";

const ItemsList = () => {

    const { items } = useContext(ItemsContext);

    const [drinkIsActive, setDrinkIsActive] = useState(true);
    const [foodIsActive, setFoodIsActive] = useState(false);
    const [typeIsActive, setTypeIsActive] = useState(false);

    const [byType, setByType] = useState('');

    const { families, drinkTypes, foodTypes } = familiesAndTypes(items);


    return (
        <>
            <div className='iL-buttons-sect'>
                <section className='iL-family-sect'>
                    {families.length > 0 &&
                        families.sort((a, b) => a.localeCompare(b)).map(f => <FamilyButton family={f} key={f} setDrinkIsActive={setDrinkIsActive} setFoodIsActive={setFoodIsActive}
                            setTypeIsActive={setTypeIsActive} />)}
                </section>

                {drinkIsActive && <section className='iL-type-sect'>
                    {drinkTypes.length > 0 && drinkTypes.map(t => <TypeButton key={t} type={t}
                        drinkIsActive={drinkIsActive} setTypeIsActive={setTypeIsActive}
                        setByType={setByType} />)}
                </section>}

                {foodIsActive && <section className='iL-type-sect'>
                    {foodTypes.length > 0 && foodTypes.map(t => <TypeButton key={t} type={t}
                        setTypeIsActive={setTypeIsActive} setByType={setByType} />)}

                </section>}
            </div>

            <div className='iL-main'>
                {(!typeIsActive && drinkIsActive) &&
                    <section className='iL-items'>
                        {
                            items && items.map(i => i.family === 'drinks' && <ItemLine key={i._id} item={i} />)
                        }
                    </section>}

                {(!typeIsActive && foodIsActive) &&
                    <section className='iL-items'>
                        {
                            items && items.map(i => i.family === 'food' && <ItemLine key={i._id} item={i} />)
                        }
                    </section>}
                {typeIsActive &&
                    <section className='iL-items'>
                        {
                            items && items.map(i => i.type === byType && <ItemLine key={i._id} item={i} />)
                        }
                    </section>}

                <section id='iL-form' className='iL-form'>

                    <form id="msform">
                        <fieldset>
                            <h2 className="fs-title">Personal Details</h2>
                            <h3 className="fs-subtitle">We will never sell it</h3>
                            <input type="text" name="fname" placeholder="First Name" />
                            <input type="text" name="lname" placeholder="Last Name" />
                            <input type="text" name="phone" placeholder="Phone" />
                            <textarea name="address" placeholder="Address" defaultValue={""} />
                            <input
                                type="button"
                                name="previous"
                                className="previous action-button"
                                defaultValue="Previous"
                            />
                            <a
                                href="https://twitter.com/GoktepeAtakan"
                                className="submit action-button"
                                target="_top"
                            >
                                Submit
                            </a>
                        </fieldset>
                    </form>

                </section>
            </div>

        </>
    )
}

export default ItemsList;