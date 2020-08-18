import React from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Saludo from '../../components/Saludo/Saludo';
import CardDeckCustom from '../../components/CardDeckCustom/CardDeckCustom';

function Home() {
    return (
        <>
            <NavBar/>
            <CardDeckCustom/>
        </>
    );
  }

  export default Home;