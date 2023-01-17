import { useState, useEffect } from "react";
import TableButton from "./TableButton.js";

const Tables = () => {

    const [tables, setTables] = useState(null);

    useEffect(() => {
        async function fetchTables() {
            try {
                let responce = await fetch('/tables');
                let json = await responce.json();
                if (responce.ok) {
                    setTables(json);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchTables();
    }, [])


    return (
        <section className="tables-cont">
            {tables && tables.map(t => (
                <div className="table-btn" key={t._id}>
                    <TableButton table={t} />
                </div>
            ))}
            {!tables && <p className="error">No connection with database !</p>}
        </section>
    )
}

export default Tables;