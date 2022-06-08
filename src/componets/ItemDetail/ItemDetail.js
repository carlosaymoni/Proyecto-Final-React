import CartContext from './../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext, useState } from 'react';
import {Link} from 'react-router-dom'

function ItemDetail ({img,id,precio,nombre,detail,stock}) {
    const {addToCart} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0)
    
    const handleOnAdd = (cantidad) => {
      console.log('agregue al carrito')
      console.log(cantidad)
      setCantidad(cantidad)
      addToCart({ id, nombre, precio, cantidad })
  }

    return (
      <div className="card-detail" key={ id }>
        <div className="card-img-detail">
          <img src={ img } alt="imagen del producto" className='img-detail'/>
        </div>
        <div className="card-body-detail">
          <h3 className="card-title-detail">{ nombre }</h3>
          <p className="detail-text">{ detail }</p>
          <p className="detail-precio">$ { precio }</p>
          { cantidad > 0 
              ? <Link to='/cart' className='btn-to-cart'>Ir al Carrito</Link>
              : <ItemCount stock={stock} inicial={1} agregar={ handleOnAdd }/> }
        </div>
      </div>
    )
  }
export default ItemDetail


