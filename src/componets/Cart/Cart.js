import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'
import { db } from '../../services/firebase'
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import Swal from 'sweetalert2'




function Cart() {
  const { cart, quitarLego, clearCart,totalAPagar, user } = useContext(CartContext) 
  const newOrder = () => {     
    const order = {
          user,
          productos: cart,
          total: totalAPagar()
    }

    const idsCart = cart.map(lego => lego.id)
    const sinStock = []
    const batch = writeBatch(db)

    const collectionRef = collection(db, 'productos')
    getDocs(query(collectionRef,where(documentId(), 'in', idsCart)))
      .then(res => {
        res.docs.forEach(doc => { 
          const dataDoc = doc.data()
          const cantidad = cart.find(lego => lego.id === doc.id)?.cantidad
                
          if(dataDoc.stock >= cantidad) {
              batch.update(doc.ref, { stock: dataDoc.stock - cantidad }) 
          } else {
              sinStock.push({ ...dataDoc})
          }
        })
    }).then(() => {
        if(sinStock.length === 0) {
            const collectionRef = collection(db,'ordenes')
            addDoc(collectionRef, order).then (({id}) => {
              if(order) {
                Swal.fire({
                  title: `Genial  ${user.nombre}!!`,
                  text: `¡Tu orden se realizo con exito!, con el id: ${id}`,
                  icon: 'success',
                  confirmButtonText: 'OK!!'
                })
              }
            }).finally(() => {
                batch.commit()
                clearCart()
            }) 
            } else {
                Swal.fire({
                  title: `${user.nombre}!!`,
                  text: `Algunos productos de tu carrito no tienen stock`,
                  icon: 'error',
                  confirmButtonText: 'OK!!'
                })
              }
      })
  }
  
  if(cart.length === 0){
    return(
      <div className="cart-vacio">
        <h2 className="text-cart-vacio">¡Ups...! Tu carrito esta vacio...</h2>
        <Link to={`/`} className='to-inicio'>Volver al Catálogo</Link>
      </div>
    )
  } else {
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
                { user.nombre !== ''
                  ? <button onClick={ newOrder } className='btn-new-order'>Generar Orden</button>     
                  : <Link to={'/Login'} className='link-to-login'>Login</Link> }
              </div>
          </section>
        </div>
      )
  }
}

export default Cart