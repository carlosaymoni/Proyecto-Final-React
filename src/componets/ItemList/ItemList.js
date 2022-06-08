import React from 'react'
import Item from '../Item/Item'

function ItemList({productos}) {
  return (
        productos.map(prod =>(
          <Item
            id={prod.id}
            key={prod.id}
            nombre={prod.nombre}
            img={prod.img}
            category={prod.categoria}
            precio={prod.precio}
        />
      )
    )
  )
}

export default ItemList