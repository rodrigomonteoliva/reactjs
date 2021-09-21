import React,{ useContext } from 'react';
import ItemCount from './ItemCount';
import { contexto } from '../../context/contexto';


const ItemDetail = ({producto}) => {

    const {agregarProducto} = useContext(contexto)

    const onAdd = (cantidad) => {
        const producto_formateado = {...producto, cantidad}
        agregarProducto(producto_formateado)
}

    return (
        <div className="detalle-producto">
             <h2>{producto.title}  €{producto.price}</h2>
             <img className="imagenDetalle" src={producto.image} />
             <ItemCount stock={8} /* stock={0} */ initial={1}  onAdd={onAdd} />
        </div>     
    );
};

export default ItemDetail
