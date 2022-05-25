import React from 'react'
import Item from '../Item/Item'

function ItemList({productos}) {
  return (
        productos.map(prod =>(
            <Item
                key={prod.id}
                nombre={prod.nombre}
                img={prod.img}
                precio={prod.precio}
             />
        )
    )
  )
}

export default ItemList