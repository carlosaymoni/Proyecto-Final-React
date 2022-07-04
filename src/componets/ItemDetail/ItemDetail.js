import CartContext from './../../Context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2';

function ItemDetail ({img,id,precio,nombre,detail,stock}) {
    const {addToCart,} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(0)
    
    const handleOnAdd = (cantidad) => {
      setCantidad(cantidad)
      addToCart({ id, img, nombre, precio, cantidad })
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Agregando al carrito'
      })
  }

    return (
      <div className='detail'>
        <div className="card-detail" key={ id }>
          <div className="card-img-detail">
            <img src={ img } alt="imagen del producto" className='img-detail'/>
          </div>
          <div className="card-body-detail">
            <h3 className="card-title-detail">{ nombre }</h3>
            <p className="detail-text">{ detail }</p>
            <p className="detail-precio">$ { precio }</p>
            { cantidad > 0 
                ? <Link to='/Cart' className='btn-to-cart'>Ver Carrito</Link>
                : <ItemCount stock={stock} inicial={1} agregar={ handleOnAdd }/> }
          </div>
        </div>
      </div>
    )
  }
export default ItemDetail


