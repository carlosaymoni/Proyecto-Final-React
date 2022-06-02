import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomFetch from "../../Utils/CustomFetch";
import { getProductsByCategory } from "../../Utils/GetProductByCategory";
import productos from "../../Utils/Productos";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams()

    useEffect(() => {
        if (!categoryId){
            CustomFetch(2000, productos)
            .then(resultado => setItems(resultado))  
        }else {
            getProductsByCategory(categoryId).then(response => {
                setItems(response)
            })
        }
    },[categoryId]);

    return (
        <div>
            <h2 className="h2">LEGO Star Wars & Marvel</h2>
            <div className="cards">
            <ItemList productos={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;