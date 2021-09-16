import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <>
            <div className="tienda">
            <h2 className="titulo">{producto.titulo}</h2><img src={producto.image} />
             <Link to={`/item/${producto.id}`} className="ver-mas">Ver Mas</Link>
            </div>
        </>
    )
}

export default Item
