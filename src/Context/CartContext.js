import { useState, createContext,useContext } from "react";

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        } else {
            const newCart = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        cantidad: productToAdd.cantidad
                    }
                    return newProduct
                } else {
                   return prod 
                }
            })
            setCart(newCart)
        }
    }
    
    const getCantidad = () => {
        let accu = 0
        cart.forEach(lego => {
          accu += lego.cantidad
        })
        return accu
    }

    const totalAPagar = () => {
        let total = 0
        cart.forEach(lego => {
            total += lego.cantidad * lego.precio
        })
         return total
    }

    const isInCart = id => cart.some(lego => lego.id === id)
    
    const quitarLego = (id) => setCart(cart.filter(item => item.id !== id));

    const clearCart = () => setCart([]);

    return(
        <CartContext.Provider value={{ cart, addToCart, getCantidad, quitarLego, totalAPagar, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext