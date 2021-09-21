import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import LayoutPagina from '../LayoutPagina';
import { firestore } from '../firebase';


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        
        const db = firestore

        const collection = firestore.collection("productos")

        const query = collection.get()

        query.then((snapshot) => {

                const docs = snapshot.docs

                const productos = []

                docs.forEach((doc) => {
                    
                    const docSnapshot = doc
                    const productos_con_id = {...docSnapshot.data(), id:docSnapshot.id}
                    productos.push(productos_con_id)
                })

                setProductos(productos)

            })
             .catch((error) => {
                console.log(error)
            })

       /* setTimeout(() => {
            setProductos([
            { categoryId: "1", title: "Cancer Bats", price: "20", desciption: "Vinilo", stock: "4", image: "https://krm-cdn.s3.amazonaws.com/images/eu/3/3/6/33690_400x400.jpg"},
            { CategoryId: "2", title: "Every Time I Die", price: "21", description: "Vinilo", stock: "4", image: "https://res.cloudinary.com/epitaph/image/upload/c_fill,f_auto,h_600,q_auto,w_600/v1/epitaph/merch/Radical-BlackVinyl"},
            { categoryId: "3", title: "Knocked Loose", price: "23", description: "Vinilo", stock: "4", image: "https://cdn.shopify.com/s/files/1/2244/7843/products/KNOCKEDLOOSE-ADifferentShadeOfBlue-LP-1_2000x.jpg?v=1604308693"},
            { categoryId: "4", title: "Comeback Kid", price: "20", description: "Vinilo", stock: "4", image: "https://merchbar.imgix.net/product/vinylized/upc/30/803847103015.jpg?w=1280&h=1280&quality=60&auto=compress%252Cformat"},
            ])
            console.log(productos)
        },2000) */
    }, [categoryId])

    return (
        <LayoutPagina titulo="Lista de Productos">
            <ItemList productos = {productos}/>
        </LayoutPagina>
    )
}

export default ItemListContainer