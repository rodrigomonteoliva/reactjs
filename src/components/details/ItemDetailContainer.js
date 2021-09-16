import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = (props) => {

    const [item, setItem] = useState(0);

    const {id} = useParams();
       
    const getItem = () => {
        fetch('https://mocki.io/v1/d35f2c6e-1774-4a30-a943-f949246c7ddb')
        .then(response => response.json())
        .then(response => {
        let itemSeleccionado = response.filter((p) => {
             return (
                 p.id === parseInt(id))
                })
        setItem(...itemSeleccionado)
    })
    }
    useEffect(() => {
       getItem() 
       
    });
    return (
        <>
        <ItemDetail item={item}/>
        
       </>
    )
    
};

export default ItemDetailContainer
