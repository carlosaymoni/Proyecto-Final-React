import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import CartContext from '../../Context/CartContext';

const CartWidget = () => {
    const { getCantidad } = useContext(CartContext)
    const cantidad = getCantidad()

    return (
        <div>
            <FontAwesomeIcon icon={faCartShopping}  className= 'icon-carrito'/>
            { cantidad }
        </div>
    )
} 

export default CartWidget;