import React from "react"
import ItemCount from "./ItemCount";
const ItemListContainer = () => {

    const items= {
        tipo: 'Vinilos',
        vinilos: ['Disco-1', 'Disco-2', 'Disco-3', 'Disco-4'],
        precio : 25
    }
    return (
        <>
        <div >
        <h1>{items.tipo}</h1>
       
        <ol className="mi-tienda">
            {
                items.vinilos.map((vinilos,i) => {
                    
                    return (
                        <li className="listado-items" key={i}>
                            {vinilos + " " + 'Precio: '+ items.precio + '€'}
                        </li>
                    )
                })
            }  
        </ol>
        </div>
        <ItemCount stock={8} /* stock={0} */ initial={1}  onAdd={(cantidad) => {console.log(cantidad)}}/>
        </>
    );
}

export default ItemListContainer;