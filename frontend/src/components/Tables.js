import { Link } from 'react-router-dom';


const Tables = ({ tables }) => {

    return (
        <section className="tables-cont">
            {tables && tables.map(t => (
                <Link to={t.number} className="links" key={t._id}>
                    <div className="table-btn" >
                        <p className="table-btn-text">{t.number}</p>
                    </div>
                </Link>
            ))
            }
            {/* {!tables && <p className="error">No connection with database !</p>} */}
        </section >
    )
}

export default Tables;