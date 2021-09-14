import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import LayoutPagina from '../LayoutPagina';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {id} = useParams()

    useEffect(() => {

        setTimeout(() => {
            setProductos([
            { id: "1", titulo: "Cancer Bats", precio: "20", tipo: "Vinilo", image: "https://krm-cdn.s3.amazonaws.com/images/eu/3/3/6/33690_400x400.jpg"},
            { id: "2", titulo: "Every Time I Die", precio: "21", tipo: "Vinilo", image: "https://res.cloudinary.com/epitaph/image/upload/c_fill,f_auto,h_600,q_auto,w_600/v1/epitaph/merch/Radical-BlackVinyl"},
            { id: "3", titulo: "Knocked Loose", precio: "23", tipo: "Vinilo", image: "https://cdn.shopify.com/s/files/1/2244/7843/products/KNOCKEDLOOSE-ADifferentShadeOfBlue-LP-1_2000x.jpg?v=1604308693"},
            { id: "4", titulo: "Comeback Kid", precio: "20", tipo: "Vinilo", image: "https://merchbar.imgix.net/product/vinylized/upc/30/803847103015.jpg?w=1280&h=1280&quality=60&auto=compress%252Cformat"},
            ])
            console.log(productos)
        },2000)
    }, [id])

    return (
        <LayoutPagina titulo="Lista de Productos">
            <ItemList productos = {productos}/>
        </LayoutPagina>
    )
}

export default ItemListContainer