import React, { useEffect, useState } from "react";
import getProductDetail  from "../../Utils/GetProductDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [producto, setItems] = useState();

    useEffect(() => {
        getProductDetail('4').then(resultado => {setItems(resultado)})  
        },[])

    return (
        <div>
            <div className="cards-detail">
                <h2 className="h2">LEGO Destacado</h2>
                <ItemDetail {...producto}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;