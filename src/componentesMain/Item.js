
import React, { Component } from 'react';

class Item extends Component {
    render(){
        const {titulo, image, precio, tipo} = this.props.item;

        return (
            <>
            <article className="article-item" id="article-template">

                        <div className="image-wrap">
                          <a href="#"><img src={image} alt={titulo} /></a>
                        </div>
                        
                        <h2>{titulo}</h2>
                        {/*
                        <span className="date">
                        <h2>{(precio) + " € " + (tipo)} </h2>
                        </span>
                        */}
            </article>
            </>
        )

    }
}

export default Item

