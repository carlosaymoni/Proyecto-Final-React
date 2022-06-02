import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProductDetail  from "../../Utils/GetProductDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [producto, setItems] = useState()
    const { productoId } = useParams()
     console.log(productoId); 
    
     useEffect(() => {
        getProductDetail(productoId).then(resultado => {
            setItems(resultado)
        })  
    }, [productoId])
        
    return (
        <div>
            <h2 className="h2">LEGO Destacado</h2>
            <div className="cards-detail">
                <ItemDetail {...producto}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;