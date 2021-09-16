import React from 'react';
import Item from './Item';


const ItemList = ({productos}) => {
    return (
        <ul>
        {productos.map(item => {
            return <Item producto = {item} />
        })}
        </ul>
    )
}

export default ItemList
