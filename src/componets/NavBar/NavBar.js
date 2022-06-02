import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navBar" >
            <Link to='/'> 
                <h1 className="logo" >LEGO</h1>
            </Link> 
            <div>
                <Link to='/' className='btn-nav'>INICIO</Link>
                <Link to='/category/Star Wars' className='btn-nav'>STAR WARS</Link>
                <Link to='/category/Marvel' className='btn-nav'>MARVEL</Link>
            </div>
            <CartWidget />
        </nav>
    )
} 

export default NavBar