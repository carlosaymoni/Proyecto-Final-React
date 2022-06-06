import  productos  from "./Productos";

const getProductDetail = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(producto => producto.id === id))
        }, 2000)
    })
}

export default getProductDetail