import React, { Component } from "react";
import Item from './Item'


class ItemList extends Component {
    state = {
         itemList: [
            { titulo: 'Cancer bats', precio: 20, tipo: 'Vinilo', image: 'https://krm-cdn.s3.amazonaws.com/images/eu/3/3/6/33690_400x400.jpg'},
            { titulo: 'Every Time I Die', precio: 21, tipo: 'Vinilo', image: 'https://res.cloudinary.com/epitaph/image/upload/c_fill,f_auto,h_600,q_auto,w_600/v1/epitaph/merch/Radical-BlackVinyl'},
            { titulo: 'Knocked Loose', precio: 23, tipo: 'Vinilo', image: 'https://cdn.shopify.com/s/files/1/2244/7843/products/KNOCKEDLOOSE-ADifferentShadeOfBlue-LP-1_2000x.jpg?v=1604308693'},
            { titulo: 'Comeback Kid', precio: 20, tipo: 'Vinilo', image: 'https://merchbar.imgix.net/product/vinylized/upc/30/803847103015.jpg?w=1280&h=1280&quality=60&auto=compress%252Cformat'},
        ],
    };
    render() {

    return (
        <div>
            {
            this.state.itemList.map((item, i) => {
          return (
                    <>
                    <Item 
                    key={i} 
                    item={item}/>
                    </>
                    )
                })
            }  
        </div>
    )
}
}

export default ItemList


