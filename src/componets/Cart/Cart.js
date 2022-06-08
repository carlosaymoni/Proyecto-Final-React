import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './Cart.css'

function Cart() {
  const {cart, removeItem} = useContext(CartContext)

  
  return (
    <div>
        <h2 className='cart-title'>Tu Carrito</h2>
         <section className='cart-lego'>
          { cart.map(lego => {
            return(
              <div key={lego.id}>
              <p>Lego: {lego.nombre}</p>
              <p>Cantidad: {lego.cantidad}</p>
              <p>Precio: $ {lego.precio}</p>
              <button onClick={() => removeItem(lego.id)} className='btn-quitar-lego'>Quitar Lego</button>  
              </div>
            )
          })}
        </section>
    </div>
  )
}

export default Cart