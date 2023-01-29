import { Link } from 'react-router-dom';


const Navigation = () => {

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
                <Link className='links'><li className="nav__item-auth">Login</li></Link>
                <Link className='links'><li className="nav__item-auth">Register</li></Link>
            </ul>
        </header>
    )
}

export default Navigation;