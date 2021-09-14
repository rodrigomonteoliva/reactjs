import { createContext, useState } from "react";

export const contexto = createContext()

const {Provider} = contexto

const CustomProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarProducto = (producto) => {
        console.log(producto)

        

        if(isInCart(producto.id)){

        }else{
        setCarrito([...carrito, producto])
        }
    } 
    const eliminarProducto = (id) => {
        const nuevo_estado_carrito = carrito.filter(producto => producto.id != id)
        setCarrito(nuevo_estado_carrito)
    }

    const clear = () => {
        setCarrito([])
    }
    const isInCart = (id) => {
        return carrito.find(producto => producto.id === id)
    }


    const contexto = {
        carrito,
        agregarProducto
    }
    return (
        <Provider value={contexto}>
        {children}
        </Provider>
    )

}
export default CustomProvider





