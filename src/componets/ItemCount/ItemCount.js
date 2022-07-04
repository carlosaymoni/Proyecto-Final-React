import { useState } from "react";


import './ItemCount.css';


const ItemCount = ({stock, inicial, agregar}) => {
    const [count, setCount] = useState(inicial)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return ( 
        <div className="contador">
            <div className="botones">
                <button onClick = { restar }> - </button>
                    <p className="p-count"> {count} </p> 
                <button onClick = { sumar }> + </button>
            </div>
            { stock === 0 
                ? <span className="error-stock">Lego sin Stock</span>
                :<button className="btn-count" onClick={ ()=> agregar(count) }>Agregar al Carrito</button> }   
        </div>
    )

}

export default ItemCount