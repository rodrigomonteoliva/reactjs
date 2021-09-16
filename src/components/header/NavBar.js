import React from 'react';
import { Link } from 'react-router-dom';
import CartWitdget from "./CartWitdget";


const NavBar = () => {
    return (
        <header>
            <div id="main-header">

              <h1>Proyecto Final</h1>
              <h2>Rodrigo Monteoliva</h2>

              <nav>
                <ul>
                <Link to="/" className="li">Tienda</Link>
                <Link to="/categoria" className="li">Vinilos</Link>
                <Link to="/CD" className="li">CD</Link> 
                <Link to="/nosotros" className="li">Nosotros</Link>
                <CartWitdget />
                </ul>
            </nav>

            </div>
          
        </header>            
    )
}

export default NavBar
