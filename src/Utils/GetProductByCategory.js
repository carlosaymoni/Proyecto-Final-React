import productos from "./Productos"

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoria === categoryId))
        },1000)
    })
}