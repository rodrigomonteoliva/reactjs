import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({});

    const {id} = useParams

    const getProducto = () => {
        fetch({producto})
        .then(response => response.json())
        .then(response => {
        let productoSeleccionado = response.filter((p) => {return (p.tipo === parseInt(id))})
        setProducto(...productoSeleccionado)
    })
    }
    useEffect(() => {
        getProducto()
    })

    return (
       <div>
       {/*<ItemDetail producto={producto} />*/}
       <img width="100px" src="producto.image" alt="" />

       </div>     
    );
};

export default ItemDetailContainer
