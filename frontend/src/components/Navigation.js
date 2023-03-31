import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

const Navigation = () => {
    const { logout } = useLogout();
    const logoutHandler = () => {
        logout();
    }

    return (
        <header className="header">
            <h1 className="deli"><Link className='links' to='/'>Deli</Link></h1>
            <ul className="nav">
                <Link className='links' to='/tables'>
                    <li className="nav__item">Tables</li>
                    {/* <li className={location.pathname === '/tables' ? "nav__item-on" : "nav__item"}>Tables</li> */}
                </Link>
                <Link className='links' to='/items'>
                    <li className="nav__item">Items</li>
                </Link>
            </ul>

            <ul className="nav">
                <div className="nav__auth">
                    <button className="nav__item-auth" onClick={logoutHandler}>Logout</button>
                </div>

                <div className="nav__auth">
                    <Link className='links' to='/login'><li className="nav__item-auth">Login</li></Link>
                    <Link className='links' to='/signup'><li className="nav__item-auth">Sign Up</li></Link>
                </div>
            </ul>
        </header>
    )
}

export default Navigation;