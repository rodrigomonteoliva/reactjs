import React from 'react';
import ItemCount from '../ItemCount';

const ItemDetail = ({item}) => {
    return (
        <>
        <div id="compra">
        <h1 className="articulo-seleccionado">Artículo Seleccionado</h1>
         <div>
            <img src={item.image} alt="" />
            <p>{item.titulo}</p>
            <p>{item.precio} €</p> 
       </div> 

       <ItemCount stock={8} /* stock={0} */ initial={1}  onAdd={(cantidad) => {console.log(cantidad)}}/>
       </div>
        </>     
    );
};

export default ItemDetail
