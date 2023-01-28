import { useNavigate } from 'react-router-dom'

const TableCard = ({ table, setTables }) => {

    const navigate = useNavigate();

    let totalSum = 0;

    if (table) {
        table.orders.map(o => totalSum += o.price)
    }

    const payHandler = () => {
        table.paid = true;
        setTables(oldState => [...oldState], table);
    }

    const clearHandler = () => {
        table.orders = [];
        table.paid = false;
        table.opened = false;
        setTables(oldState => [...oldState], table);
    }

    const tabHandler = () => {
        navigate('/tables')
    }

    return (
        <section className={!table.paid ? 'orders-sect' : 'orders-sect-paid'}>
            <div className="tb-head">
                <div className='tb-title'>МАСА</div>
                {table.paid && <button className='btn-green'>ПЛАТЕНА</button>}
                <div className='tb-num'>{table.number}</div>
            </div>

            <div className='ord-footer'>
                <div className='tb-foot'>СУМА ЗА ПЛАЩАНЕ</div>
                <div className='tb-total'>{totalSum.toFixed(2)} лв.</div>
                <div className="btn-cont">
                    <button className='btn-tab' onClick={tabHandler}>МАСИ</button>
                    {!table.paid
                        ? <button className={table.orders.length > 0 ? 'btn-paid' : 'btn-dis'} onClick={payHandler}>ПЛАЩАНЕ</button>
                        : <button className='btn-clear' onClick={clearHandler}>ИЗЧИСТИ</button>
                    }
                </div>
            </div>

            {
                table.orders && table.orders.map((o, i) => <div className='tb-orders' key={i}>
                    <div className='ord-name'>{o.name}</div>
                    <div className='ord-total'>{o.price.toFixed(2)} <span className='lv'>лв.</span></div>
                </div>)
            }
            <br />

        </section>
    )
}

export default TableCard;