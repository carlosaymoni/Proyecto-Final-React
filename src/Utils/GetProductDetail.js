import  productos  from "./Productos";

const getProductDetail = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(pdetail => pdetail.id === id))
        }, 4000)
    })
}

export default getProductDetail