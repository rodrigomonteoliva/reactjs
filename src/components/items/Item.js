
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { contexto } from '../../context/contexto';

const Item = ({producto}) => {

    //const {product, addProduct} = useContext(contexto)

    return (
        <article>
            <div className="tienda">
            <h2 className="titulo">{producto.title}</h2><img src={producto.imageUrl} />
            <Link to={`/item/${producto.categoryId}`} className="ver-mas">Ver Mas</Link>
            {/*<button onClick={() => addProduct()} className="btn-agregar">Agregar Carrito</button>*/}
            </div>
        </article>
    )
}

export default Item
