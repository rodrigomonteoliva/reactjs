import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import ItemListContainer from './components/items/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/details/ItemDetailContainer';


function App() {
  return (
    <>
    <Route path='/' component={ NavBar } />
    <Route path='/' component={ ItemListContainer } />
    <Route path='/categoria/:id' component={ ItemListContainer } exact/>
    <Route path='/item/:id' component={ ItemDetailContainer } />


    </>

  );
}

export default App;
