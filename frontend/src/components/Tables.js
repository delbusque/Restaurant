import { Link } from 'react-router-dom';

const Tables = ({ tables }) => {

    return (
        <section className="tables-cont">
            {tables && tables.map(t => (
                <Link to={t.number} className="links" key={t._id}>
                    {t.paid && <div className={t.opened ? "table-btn-opened" : "table-btn"} >
                        <p className="table-btn-text">{t.number}</p>
                    </div>}
                    {!t.paid && <div className={t.opened ? "table-btn-unpaid" : "table-btn"} >
                        <p className="table-btn-text">{t.number}</p>
                    </div>}

                </Link>
            ))
            }
        </section >
    )
}

export default Tables;