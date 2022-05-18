import { useState } from "react";
import Button  from "../Button/Button";

const ItemCount = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return ( 
        <div className="contador">
        <Button handleClick = { decrement } label='-' color='red' width='50px' height='50px' borderRadius='50%'/>
        <p className="p-count"> {count} </p> 
        <Button handleClick = { increment } label='+' color='green' width='50px' height='50px' borderRadius='50%'/>
        </div>
    )

}

export default ItemCount