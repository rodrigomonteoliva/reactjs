import React, {useState} from 'react';

const ItemCount = ({stock,initial,onAdd}) => {

    const [contador, setContador] = useState(initial);

    const aumentarContador = () => {
        if (contador < stock){
        setContador(contador + 1);
        }
    }
    const disminuirContador = () => {
        if(contador > 1){
        setContador(contador - 1);      
    } 
} 
    const agregarCarrito = () => {
        if(stock > 0){
            onAdd(contador)
        }
    }
    return (
        <>
        <div className="cajaPedido">
        <section className="container">
        <button className="disminuir" onClick={disminuirContador}>-</button> 
        <p className="contador"> {contador}</p> 
        <button className="aumentar" onClick={aumentarContador}>+</button>
        </section>
        <button className="añadirPedido" disabled={stock>0 ? false:true} onClick={agregarCarrito}>Añadir pedido</button>
        </div>
        </>
    )
}
export default ItemCount

