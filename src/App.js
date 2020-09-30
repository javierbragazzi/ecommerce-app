import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import CartContainer from './container/CartContainer/CartContainer';
import NavBar from './components/NavBar/NavBar';
import Home from "./container/Home/Home";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import {CartProvider} from './context/CartContext';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <div id="page-container">
          <div id="content-wrap">
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
              <Route exact path='/404'>
                <Error />
              </Route>
              <Redirect to="/404" />
            </Switch>
          </div>
            <Footer/>
        </div>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
