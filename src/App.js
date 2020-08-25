import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Cart from './components/Cart/Cart';
import NavBar from './components/NavBar/NavBar';
import Home from "./container/Home/Home";
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <Home title='¡Hola!' greetings='Bienvenido nuevamente :)'/>
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path='/itemDetail/:idItem'>
            <ItemDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
