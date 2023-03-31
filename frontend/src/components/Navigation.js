import { Link, useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navigation = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const logoutHandler = () => {
        logout();
        navigate('/');
    }

    return (
        <header className="header">
            <h1 className="deli"><Link className='links' to='/'>Deli</Link></h1>
            <ul className="nav">
                {user && <Link className='links' to='/tables'>
                    <li className="nav__item">Tables</li>
                </Link>}
                <Link className='links' to='/items'>
                    <li className="nav__item">Items</li>
                </Link>
            </ul>


            {user && (<div className="nav__auth">
                <span className='nav__auth__email'>{user.email}</span>
                <button className="nav__item-auth" onClick={logoutHandler}>Logout</button>
            </div>)}

            {!user && (<div className="nav__auth">
                <Link className='links' to='/login'><li className="nav__item-auth">Login</li></Link>
                <Link className='links' to='/signup'><li className="nav__item-auth">Sign Up</li></Link>
            </div>)}

        </header>
    )
}

export default Navigation;