import productos from "./Productos"

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === categoryId))
        },1000)
    })
}