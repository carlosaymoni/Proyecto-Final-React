import React from 'react'
import './Item.css'

function Item ({img,id,precio,nombre}) {
  return (
    <div className="card" key={ id }>
    <div className="card-img">
      <img src={ img } alt="imagen del producto"/>
      </div>
        <div className="card-body">
          <h5 className="card-title">{ nombre }</h5>
          <p className="card-text">$ { precio }</p>
      </div>
    </div>
  )
}

export default Item