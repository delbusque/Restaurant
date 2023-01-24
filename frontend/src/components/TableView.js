import { useContext } from 'react';
import { useParams } from 'react-router-dom'

import ItemsContext from '../contexts/ItemsContext.js';

import TableCard from './TableCard.js';

const TableView = ({ tables, setTables }) => {

    const { items } = useContext(ItemsContext);

    const { number } = useParams();
    let table;

    if (tables) {
        table = tables.find(t => t.number == number);
    }

    let famSet = new Set();

    items && items.map(i => famSet.add(i.family));
    let families = [...famSet]

    return (
        <>
            < div className='table-card' >
                {
                    table ?
                        <>
                            < TableCard table={table} setTables={setTables} tables={tables} />

                            <section className='family-sections'>
                                {families.length > 0 &&
                                    families.map(f => <button className='family-btn' key={f}>{f.toUpperCase()}</button>)}
                                {/* <button className='family-btn'>FOOD</button>
                                    <button className='family-btn'>DRINKS</button> */}
                            </section>

                            {/* <section className='type-section'>
                        <button className='type-btn'>SALADS</button>
                        <button className='type-btn'>GRILL</button>
                        <button className='type-btn'>SOUPS</button>
                        <button className='type-btn'>HOT DRINKS</button>
                        <button className='type-btn'>BEER</button>
                        <button className='type-btn'>RAKIA</button>
                        <button className='type-btn'>VODKA</button>
                        <button className='type-btn'>WHISKEY</button>

                    </section>
                    <section className='items-section'>
                        {
                            table.orders && table.orders.map(o => <div className='tb-orders'>
                                <div className='ord-name'>{o.name}</div>
                                <div className='ord-count'>{o.count}</div>
                            </div>)
                        }
                    </section> */}
                        </>
                        :
                        <div className='error'>No such table !</div>
                }
            </div >
        </>

    )
}

export default TableView;