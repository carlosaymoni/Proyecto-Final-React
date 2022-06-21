import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import { db } from '../../services/firebase'
import { addDoc, collection } from 'firebase/firestore'



function Cart() {
  const {cart, quitarLego, clearCart,totalAPagar} = useContext(CartContext)
  
   const newOrder = () => {  
     const order = {
         buyer: {
          nombre: 'Carlos',
          email: 'Carlos@email.com',
          telefono: '123456', 
        },
          productos: cart,
          total: totalAPagar()
      }
       const collectionRef = collection(db,'Ordenes')
       addDoc(collectionRef, order).then (({id}) => {
       console.log(`Orden creada con el id: ${id}`);
       console.log(order);
    })

  }

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
            <div className='head-cart'>
              <h2 className='cart-title'>Tu Carrito</h2>
              <p className='total'>Total: ${totalAPagar()}</p>
            </div>
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
              <div className='btn-end-cart'>
                <button onClick={ clearCart } className='clear-cart'>Limpiar Carrito</button>
                <button onClick={ newOrder } className='btn-new-order'>Generar Orden</button> 
              </div>
          </section>
        </div>
      )
    }
}

export default Cart