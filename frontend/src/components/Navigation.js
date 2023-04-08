import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navigation = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const logoutHandler = () => {
        logout();
        navigate('/login')
    }

    return (
        <header className="header">
            <h1 className="deli"><Link className='links' to='/'>Deli</Link></h1>

            {user &&
                <div className="nav__auth">
                    <Link className='links' to='/tables'>
                        <li className="nav__item">Tables</li>
                    </Link>
                    <Link className='links' to='/staff'><li className="nav__item-auth">Staff</li></Link>
                    <Link className='links' to='/messages'><li className="nav__item-auth">Board</li></Link>
                </div>}

            {user && (<div className="nav__auth">

                <NavLink className='links' to='/my-account'><span className='u-email'>{user.email}</span></NavLink>

                <button className="nav__item-auth" onClick={logoutHandler}>Logout</button>
            </div>)}

            {!user && (<div className="nav__auth">
                <Link className='links' to='/items'>
                    <li className="nav__item">Items</li>
                </Link>
                <Link className='links' to='/login'><li className="nav__item-auth">Login</li></Link>
                <Link className='links' to='/signup'><li className="nav__item-auth">Sign Up</li></Link>
            </div>)}

        </header>
    )
}

export default Navigation;