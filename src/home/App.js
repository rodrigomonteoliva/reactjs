import React, { useState } from 'react';
import NavBar from '../components/header/NavBar';
import ItemListContainer from '../components/items/ItemListContainer';
import ItemDetailContainer from '../components/details/ItemDetailContainer';
import ItemCount from '../components/ItemCount';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    <Route path="/" component={NavBar} />
    <Route path="/productos" component={ItemListContainer} />
    <Route path="/productos/detail/:id" component={ItemDetailContainer} />

      {/*<NavBar />

      <Switch>
      <Route path="/" component= {ItemListContainer} exact />
      <Route path="/link/:id" component= {ItemListContainer} />
      <Route path="/item/:id" component= {ItemDetailContainer} />
      </Switch>*/}

      <ItemCount stock={8} /* stock={0} */ initial={1}  onAdd={(cantidad) => {console.log(cantidad)}}/>

    </BrowserRouter>

  );
}

export default App;