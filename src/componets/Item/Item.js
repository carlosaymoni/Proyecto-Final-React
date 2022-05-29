import React from 'react'
import './Item.css'



function Item ({img,id,precio,nombre,category}) {
  return (
    <div className="card" key={ id }>
      <div className="card-img">
        <img src={ img } alt="imagen del producto"/>
      </div>
      <div className="card-body">
        <h4 className="card-title">{ nombre }</h4>
        <span className="card-span">{ category }</span>
        <p className="card-text">$ { precio }</p>
      </div>
    </div>
  )
}

export default Item