import React from "react"
import ItemCount from "./ItemCount";
import ItemList from "./ItemList"

const ItemListContainer = () => {
 
    return (
        <>
        <div>
        <ItemList />
        </div>
        <div>
        <ItemCount stock={8} /* stock={0} */ initial={1}  onAdd={(cantidad) => {console.log(cantidad)}}/>
        </div>
        </>
    );
}

export default ItemListContainer;