import React, { useEffect, useState } from "react";
import CustomFetch from "../../Utils/CustomFetch";
import productos from "../../Utils/Productos";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        CustomFetch(2000, productos)
        .then(resultado => setItems(resultado))  
    },[items]);

    return (
        <div>
            <h2 className="h2">Catalogo de productos</h2>
            <div className="cards">
            <ItemList productos={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;