import React from 'react'
import CartWitdget from "./CartWitdget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <div id="main-header">
                <Link to="/">
                <h1>Proyecto Final</h1>
                <h2>Rodrigo Monteoliva</h2>
                </Link>
            <nav>
                <ul>
                <Link to="/productos" className="li">Tienda</Link>
                <Link to="/productos/Vinilos" className="li">Vinilos</Link>
                <Link to="/link/3" className="li">CD's</Link>
                <Link to="/link/4" className="li">Contacto</Link>
                <CartWitdget />
                </ul>
            </nav>
            </div>
        </header>            
    )
}

export default NavBar
