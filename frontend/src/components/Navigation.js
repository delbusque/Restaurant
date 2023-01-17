import { Link, useLocation } from 'react-router-dom';


const Navigation = () => {

    const location = useLocation();

    return (
        <header className="header">
            <h1 className="deli"><Link className='links' to='/'>Deli</Link></h1>
            <ul role="list" className="nav">
                <li className={location.pathname === '/tables' ? "nav__item-on" : "nav__item"}>
                    <Link className='links' to='/tables'>Tables</Link>
                </li>
                <li className="nav__item">Items</li>
            </ul>
            <ul role="list" className="nav">
                <li className="nav__item-auth">Login</li>
                <li className="nav__item-auth">Register</li>
            </ul>
        </header>
    )
}

export default Navigation;