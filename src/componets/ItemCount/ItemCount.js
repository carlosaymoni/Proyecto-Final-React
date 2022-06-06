import { useState } from "react";
import { Link } from "react-router-dom";

import './ItemCount.css';


const ItemCount = ({stock}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    function onAdd () {
        if (count > 0) {
            alert('Agregaste ' + count + ' productos al carrito');
        }
    }

    return ( 
        <div className="contador">
            <div className="botones">
                <button onClick = { decrement }> - </button>
                    <p className="p-count"> {count} </p> 
                <button onClick = { increment }> + </button>
            </div>
            <button className="btn-count" onClick={ onAdd }>Agregar al Carrito</button>
            { count > 0 ? <Link to='/Cart' className="btn-to-cart">Finalizar Compra</Link> : <p className="p-stock">Stock: { stock }</p>}
            
        </div>
    )

}

export default ItemCount