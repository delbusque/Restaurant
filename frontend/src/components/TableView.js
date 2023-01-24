import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom'

import ItemsContext from '../contexts/ItemsContext.js';

import TableCard from './TableCard.js';
import FamilyButton from './FamilyButton.js';
import ItemLine from './ItemLine.js';

const TableView = ({ tables, setTables }) => {

    const [drinkIsActive, setDrinkIsActive] = useState(true);
    const [foodIsActive, setFoodIsActive] = useState(false);

    const { items } = useContext(ItemsContext);
    const { number } = useParams();

    let table;

    if (tables) {
        table = tables.find(t => t.number == number);
    }

    let famSet = new Set();
    let drinksSet = new Set();
    let foodSet = new Set();

    items && items.map(i => {
        famSet.add(i.family);

        i.family === 'drinks' && drinksSet.add(i.type);
        i.family === 'food' && foodSet.add(i.type);
    });

    let families = [...famSet];
    let drinkTypes = [...drinksSet];
    let foodTypes = [...foodSet];

    const familyHandler = (e) => {
        if (e.target.name === 'drinks') {
            setDrinkIsActive(true);
            setFoodIsActive(false);
        } else if (e.target.name === 'food') {
            setFoodIsActive(true);
            setDrinkIsActive(false);
        }
    }

    return (
        <>
            < div className='table-card' >
                {
                    table ?
                        <>
                            <TableCard table={table} setTables={setTables} tables={tables} />

                            <section className='family-sect' onClick={(e) => familyHandler(e)}>
                                {families.length > 0 &&
                                    families.sort((a, b) => a.localeCompare(b)).map(f => <FamilyButton family={f} key={f}
                                        drinkIsActive={drinkIsActive} foodIsActive={foodIsActive} />)}
                            </section>

                            {drinkIsActive && <section className='type-sect'>
                                {drinkTypes.length > 0 && drinkTypes.map(d => <button className='type-btn-drinks' key={d}>{d}</button>)}
                            </section>}

                            {foodIsActive && <section className='type-sect'>
                                {foodTypes.length > 0 && foodTypes.map(d => <button className='type-btn-food' key={d}>{d}</button>)}

                            </section>}

                            {drinkIsActive &&
                                <section className='items-sect'>
                                    {
                                        items && items.map(i => i.family == 'drinks' && <ItemLine key={i._id} item={i} />)
                                    }
                                </section>}

                            {foodIsActive &&
                                <section className='items-sect'>
                                    {
                                        items && items.map(i => i.family == 'food' && <ItemLine key={i._id} item={i} />)
                                    }
                                </section>}

                        </>
                        :
                        <div className='error'>No such table !</div>
                }
            </div >
        </>

    )
}

export default TableView;