import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
//import CustomFetch from "../../Utils/CustomFetch";
//import { getProductsByCategory } from "../../Utils/GetProductByCategory";
//import productos from "../../Utils/Productos";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams()

    useEffect(() => {
        
        const collectionRef = categoryId
            ? query(collection(db, 'productos'),where('categoria', '==', categoryId))
            : collection(db, 'productos')

        getDocs(collectionRef).then(response => {
            const producs = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setItems(producs)
        })

        // if (!categoryId){
        //     CustomFetch(2000, productos)
        //     .then(resultado => setItems(resultado))  
        // }else {
        //     getProductsByCategory(categoryId).then(response => {
        //         setItems(response)
        //     })
        // }
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