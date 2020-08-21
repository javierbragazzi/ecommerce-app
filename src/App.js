import React from "react";
import './App.css';

import NavBar from './components/NavBar/NavBar';
import Home from "./container/Home/Home";

function App() {
  return (
    <>
      <NavBar/>
      <Home title='¡Hola!' greetings='Bienvenido nuevamente :)'/>
     
    </>
  );
}

export default App;
