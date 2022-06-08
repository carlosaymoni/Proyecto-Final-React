import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'



function Item ({ id, img, nombre, category }) {
  return (
    <div className="card" key={id}>
      <div className="card-img">
        <img src={ img } alt="imagen del producto"/>
      </div>
      <div className="card-body">
        <h4 className="card-title">{ nombre }</h4>
        <p className="card-span">{ category }</p>
        <Link to={`/detail/${id}`}>Ver Mas...</Link>
      </div>
    </div>
  )
}

export default Item

