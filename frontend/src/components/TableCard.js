import { useParams, useNavigate } from 'react-router-dom'

const TableCard = ({ tables, setTables, paid, setPaid }) => {

    const navigate = useNavigate();
    const { number } = useParams();
    let table;

    if (tables) {
        table = tables.find(t => t.number == number);
    }

    let totalSum = 0;

    if (table) {
        table.orders.map(o => totalSum += o.count * o.price)
    }

    const payHandler = () => {
        setPaid(true);
        let newState = tables.map(t => t.number !== number ? t : table);
        setTables(newState);
    }

    const closeHandler = () => {
        table.orders = [];
        let newState = tables.map(t => t.number !== number ? t : table);
        setTables(newState);
        navigate('/tables')
    }

    const tabHandler = () => {
        navigate('/tables')
    }


    return (

        <div className='table-card'>
            {table ?
                <>
                    <section className={!paid ? 'orders-sect' : 'orders-sect-paid'}>
                        <div className="tb-head">
                            <div className='tb-title'>МАСА</div>
                            {paid && <button className='btn-green'>ПЛАТЕНА</button>}
                            <div className='tb-num'>{table.number}</div>
                        </div>

                        {
                            table.orders && table.orders.map(o => <div className='tb-orders'>
                                <div className='ord-name'>{o.name}</div>
                                <div className='ord-count'>{o.count}</div>
                                <div className='ord-price'><strong className='ord-x'>x</strong> {o.price.toFixed(2)}</div>
                                <div className='ord-total'>{(o.count * o.price).toFixed(2)} <span className='lv'>лв.</span></div>
                            </div>)
                        }
                        <br />
                        <div className='tb-foot'>СУМА ЗА ПЛАЩАНЕ</div>
                        <div className='tb-total'>{totalSum.toFixed(2)} лв.</div>
                        <div className="btn-cont">
                            <button className='btn-tab' onClick={tabHandler}>МАСИ</button>
                            {!paid
                                ? <button className={table.orders.length > 0 ? 'btn-paid' : 'btn-dis'} onClick={payHandler}>ПЛАЩАНЕ</button>
                                : <button className='btn-close' onClick={closeHandler}>ЗАТВОРИ</button>
                            }
                        </div>
                    </section>


                    {/* <section className='tb-food-btn'>Food</section>
                    <section className='tb-drinks-btn'>Drinks</section>
                    <section className='tb-type-btn'>Type</section>
                    <section className='tb-items'>Items</section> */}
                </>
                :
                <div className='error'>No such table !</div>
            }
        </div>
    )
}

export default TableCard;