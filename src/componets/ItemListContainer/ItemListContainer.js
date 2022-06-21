import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase";
//import CustomFetch from "../../Utils/CustomFetch";
//import { getProductsByCategory } from "../../Utils/GetProductByCategory";
//import productos from "../../Utils/Productos";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import RingLoader from "react-spinners/RingLoader";


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'productos'),where('categoria', '==', categoryId))
            : collection(db, 'productos')

        getDocs(collectionRef).then(response => {
            const producs = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setItems(producs)
        }).finally(() => {
            setLoading(false)
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

    if(loading) {
        return ( 
            <div className="loading">
                <RingLoader color={ '#ffcf00' } loading={ loading } size={ 80 } />
            </div>
    )}

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