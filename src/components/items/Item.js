
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <>
            <div className="tienda">
            <Link to={"/productos/detail/" + producto.id}><h2 className="titulo">{producto.titulo}</h2><img src={producto.image}/></Link>
            </div>
        </>
    )
}

export default Item
