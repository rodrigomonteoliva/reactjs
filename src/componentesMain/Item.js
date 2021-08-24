import React, { useEffect, useState } from 'react'

const promiseItems = () => {
    return new Promise((resolve,reject) => {
    setTimeout(
        () =>
        resolve([
            {id:1, vinilo: true, nombre: 'Cancer Bats', precio: 20},
            {id:2, vinilo: true, nombre: 'Comback Kid', precio: 25},
            {id:3, vinilo: true, nombre: 'Every Time I Die', precio: 23},
            {id:4, vinilo: true, nombre: 'Stray From The Path', precio: 22}
        ]),
        3000
    );
});
};

export const Item = () => {
    const [dataItems, setDataItems] = useState([]);

    useEffect(() => {
        promiseItems().then((data) => {
            let listado = data.filter((producto) => producto.vinilo);
            setDataItems(listado);
        });
    }, []);

return (
dataItems.length === 0 ? (
    <h1>Searching...</h1>
) : (
    <ol className="mi-tienda"> 
    {dataItems.map((element) => (
        <li className="listado-items" key={element.id}><a href="#">{element.nombre + " " + element.precio + "€"}</a></li>   
    ))}
    </ol>
)
);
};

