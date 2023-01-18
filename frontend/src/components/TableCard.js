import { useParams } from 'react-router-dom'

const TableCard = ({ tables }) => {
    const { number } = useParams();
    let table;

    if (tables) {
        table = tables.find(t => t.number == number);
        console.log(table);
    }

    return (
        <div className='table-card'>
            <section className='orders-sect'>
                <div className='tb-num'>{table.number}</div>
                <div className='tb-status'>{!table.opened ? 'CLOSE TABLE' : 'free'}</div>
                {table.orders && table.orders.map(o => <div className='tb-orders'>
                    <span>{o.name}</span>
                    <span>{o.price}</span>
                </div>)}
            </section>



            <section className='tb-food-btn'>Food</section>
            <section className='tb-drinks-btn'>Drinks</section>
            <section className='tb-type-btn'>Type</section>
            <section className='tb-items'>Items</section>
        </div>
    )
}

export default TableCard;