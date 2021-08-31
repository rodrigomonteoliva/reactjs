import React from "react";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContiner";
import ItemList from "./ItemList";


const ItemListContainer = () => {
 
    return (
        <>
        <h1 className="cabecera">Tienda</h1>
        <ItemList />
        <ItemCount stock={8} /* stock={0} */ initial={1}  onAdd={(cantidad) => {console.log(cantidad)}}/>
        </>
    );
}

export default ItemListContainer;