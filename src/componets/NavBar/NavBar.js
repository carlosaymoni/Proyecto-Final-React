import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {
    const { cart } = useCartContext();
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
            <div className={cart.length === 0 ? "cart-hidden":"cart-block"}>
                <CartWidget />
            </div>
        </nav>
    )
} 

export default NavBar