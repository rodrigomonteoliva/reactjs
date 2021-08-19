import React from 'react'
import CartWidget from "./CartWidget"

const NavBar = () =>  {   
   
    return (
        <>
        <header id="main-header">
            <h1>Desafío clase 5</h1>
            <h2>Rodrigo Monteoliva</h2>
            <nav>
                <ul>
                <li><a href="https://www.coderhouse.es/">Main</a></li>
                <li><a href="https://www.coderhouse.es/">Nosotros</a></li>
                <li><a href="https://www.coderhouse.es/">Tienda</a></li>
                <li><a href="https://www.coderhouse.es/">Contacto</a></li>
                <CartWidget />
                </ul>
            </nav>  
        </header>
        </>
    )
}
    
export default NavBar