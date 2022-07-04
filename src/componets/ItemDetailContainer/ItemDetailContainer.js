import { getDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
//import getProductDetail  from "../../Utils/GetProductDetail";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import RingLoader from "react-spinners/RingLoader";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()     
    const { productoId } = useParams()
    const [loading, setLoading] = useState(true)
   
     useEffect(() => {
        setLoading(true)
        getDoc(doc(db, 'productos', productoId)).then(response => {
            const product = { id: response.id, ...response.data() }
            setProducto(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [productoId])

    if(loading) {
        return ( 
            <div className="loading">
                <RingLoader color={ '#ffcf00' } loading={ loading } size={ 80 } />
            </div>
    )}
        
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