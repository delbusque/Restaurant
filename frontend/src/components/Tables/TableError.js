import styles from './TableError.module.css'
import { Link } from 'react-router-dom';

const TableError = () => {
    return (
        <div className="table-error">You are not authorized and must <Link to='/login' className={styles['err-login']}> login</Link> or <Link to='/signup' className={styles['err-signup']}> sign up</Link> to proceed with Tables !</div>
    )
}

export default TableError;