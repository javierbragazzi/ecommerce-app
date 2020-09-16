import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import CartContainer from './container/CartContainer/CartContainer';
import NavBar from './components/NavBar/NavBar';
import Home from "./container/Home/Home";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import {CartProvider} from './context/CartContext';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/cart'>
              <CartContainer />
            </Route>
            <Route path='/itemDetail/:idItem'>
              <ItemDetail />
            </Route>
            <Route exact path='/notebooks/:categoryId'>
              <Home />
            </Route>
            <Route exact path='/monitores/:categoryId'>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
