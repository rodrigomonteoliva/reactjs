import React, { useEffect, useState } from 'react';
import LayoutPagina from '../LayoutPagina';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect(() => {
        setTimeout(() => {
            setProducto({titulo: "CancerBats", precio: 20, descripcion: "qkhasdjf[ou33", image: "https://krm-cdn.s3.amazonaws.com/images/eu/3/3/6/33690_400x400.jpg"})
        }, 2000)
    }, [])

    return (
        <LayoutPagina title="Detalle del Producto">
            <ItemDetail producto={producto} />
        </LayoutPagina>
    );
}

export default ItemDetailContainer
