import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { getCantidad } = useContext(CartContext)
    const cantidad = getCantidad()

    return (
        <div className='div-carrito'>
            <Link to='/cart' className='link-icon-cart'>
            <FontAwesomeIcon icon={faCartShopping}  className= 'icon-carrito'/>
            </Link>
            { cantidad }
        </div>
    )
} 

export default CartWidget;