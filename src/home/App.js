import React, { useState } from 'react';
import NavBar from '../components/header/NavBar';
import ItemListContainer from '../components/items/ItemListContainer';
import ItemDetailContainer from '../components/details/ItemDetailContainer';
//import ItemCount from '../components/ItemCount';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomProvider from '../context/contexto';

function App() {
  return (
    <BrowserRouter>

    <CustomProvider>

      <NavBar />
      <main>
        <Switch>
            <Route path="/" component= {ItemListContainer} exact />
            <Route path="/categoria/:id" component= {ItemListContainer} />
            <Route path="/item/:id" component= {ItemDetailContainer} />
        </Switch>
      </main>

    </CustomProvider>

     
    </BrowserRouter>

  );
}

export default App;
