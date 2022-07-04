import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { getCantidad } = useContext(CartContext)
    const cantidad = getCantidad()

    return (
        <div className='div-carrito'>
            <div className='carrito'>
                <Link to='/cart' className='link-icon-cart'>
                    <FontAwesomeIcon icon={faCartShopping}  className= 'icon-carrito'/>
                </Link>
                <span className='span-cantidad'>
                { cantidad }
                </span>    
            </div>
            <div className='carrito'>
                <Link to='/login' className='link-icon-cart'>
                    <FontAwesomeIcon icon={faUser}  className= 'icon-carrito'/>
                </Link>    
            </div>
        </div>
    )
} 

export default CartWidget;