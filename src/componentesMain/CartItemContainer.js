import React from "react"

const CartItemContainer = () => {

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
        </>
    );
}

export default CartItemContainer;