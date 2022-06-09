import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'

function Cart() {
  const {cart, quitarLego, clearCart,totalAPagar} = useContext(CartContext)
  
  if(cart.length === 0){
    return(
      <div className="cart-vacio">
        <h2 className="text-cart-vacio">¡Ups...! Tu carrito esta vacio...</h2>
        <Link to={`/`} className='to-inicio'>Volver al Catálogo</Link>
      </div>
    )}
    else{
    return (
        <div>
          <section className='cart-lego'>
            <h2 className='cart-title'>Tu Carrito</h2>
              <button onClick={ clearCart } className='btn-quitar-lego'>Limpiar Carrito</button>
              <h5 className='total'>Total: ${totalAPagar()}</h5>
              { cart.map(lego => {
                return(
                  <div key={lego.id} className='cart-info' >
                    <p>Cantidad: {lego.cantidad}</p>
                    <p>Lego: {lego.nombre}</p>
                    <p>Precio: $ {lego.precio}</p>
                    <p>Subtotal: $ {lego.cantidad * lego.precio}</p>  
                    <div>
                      <button onClick={() => quitarLego(lego.id)} className='btn-quitar-lego'>Quitar Lego</button>  
                    </div> 
                  </div>
                )
              })}
          </section>
        </div>
      )
    }
}

export default Cart