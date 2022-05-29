import React from 'react'
import './ItemDetail.css'

function ItemDetail ({img,id,precio,nombre,detail}) {
    return (
      <div className="card-detail" key={ id }>
        <div className="card-img-detail">
          <img src={ img } alt="imagen del producto" className='img-detail'/>
        </div>
        <div className="card-body-detail">
          <h3 className="card-title-detail">{ nombre }</h3>
          <p className="detail">{ detail }</p>
          <p className="card-text-detail">$ { precio }</p>
        </div>
      </div>
    )
  }
export default ItemDetail


