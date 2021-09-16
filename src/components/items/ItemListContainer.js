import React, { useEffect, useState } from 'react';
//import ItemList from './ItemList';
//import Item from './Item';
import { Link, useParams } from 'react-router-dom';




const ItemListContainer = (props) => {

    const [producto, setProducto] = useState(0)

    const { id } = useParams() 

    const getProductos = () => {
        fetch('https://mocki.io/v1/d35f2c6e-1774-4a30-a943-f949246c7ddb')
        .then(response => response.json())
        .then(response => {

            let productos
            if(id) {
                productos = response.filter((p) => p.id === id)
            }else {
                productos = response
            }
            setProducto(productos)
        })
    }

    useEffect(() => {
        getProductos()

    }, [id])
       
    return(
        
        producto === 0 ? <div>Cargando...</div> : 
       <div>
            <p>{id}</p>
        {producto.map(item => {
        return (
        <div>
            <h1>{item.titulo}</h1>
             <Link to={`/item/${item.id}`}><img src={item.image} alt="" /></Link>
        </div>
             
        )   
        })}
        </div>
         
                     
    )
    }
    

export default ItemListContainer
