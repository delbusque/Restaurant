import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom'

import ItemsContext from '../contexts/ItemsContext.js';

import TableCard from './TableCard.js';
import FamilyButton from './FamilyButton.js';
import ItemLine from './ItemLine.js';
import TypeButton from './TypeButton.js';

const TableView = ({ tables, setTables }) => {

    const [drinkIsActive, setDrinkIsActive] = useState(true);
    const [foodIsActive, setFoodIsActive] = useState(false);
    const [typeIsActive, setTypeIsActive] = useState(false);

    const [byType, setByType] = useState('');

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

    const addItemHandler = (item) => {
        console.log(table);

        if (table.orders.find(o => o.name !== item.name)) {
            item.count = 1;
        } else {
            item.count++;
        }
        table.opened = true;

        table.orders.push(item);

        let newState = tables.map(t => t.number !== number ? t : table);
        setTables(newState);
    }

    return (
        <>
            < div className='table-card' >
                {
                    table ?
                        <>

                            <TableCard table={table} setTables={setTables} tables={tables} />

                            <section className='family-sect'>
                                {families.length > 0 &&
                                    families.sort((a, b) => a.localeCompare(b)).map(f => <FamilyButton family={f} key={f} setDrinkIsActive={setDrinkIsActive} setFoodIsActive={setFoodIsActive}
                                        setTypeIsActive={setTypeIsActive} />)}
                            </section>

                            {drinkIsActive && <section className='type-sect'>
                                {drinkTypes.length > 0 && drinkTypes.map(t => <TypeButton key={t} type={t}
                                    drinkIsActive={drinkIsActive} setTypeIsActive={setTypeIsActive}
                                    setByType={setByType} />)}
                            </section>}

                            {foodIsActive && <section className='type-sect'>
                                {foodTypes.length > 0 && foodTypes.map(t => <TypeButton key={t} type={t}
                                    setTypeIsActive={setTypeIsActive} setByType={setByType} />)}

                            </section>}

                            {(!typeIsActive && drinkIsActive) &&
                                <section className='items-sect'>
                                    {
                                        items && items.map(i => i.family == 'drinks' && <ItemLine key={i._id} item={i}
                                            addItemHandler={addItemHandler} />)
                                    }
                                </section>}

                            {(!typeIsActive && foodIsActive) &&
                                <section className='items-sect'>
                                    {
                                        items && items.map(i => i.family == 'food' && <ItemLine key={i._id} item={i}
                                            addItemHandler={addItemHandler} />)
                                    }
                                </section>}
                            {typeIsActive &&
                                <section className='items-sect'>
                                    {
                                        items && items.map(i => i.type == byType && <ItemLine key={i._id} item={i}
                                            addItemHandler={addItemHandler} />)
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