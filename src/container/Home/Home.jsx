import React from 'react';

import NavBar from '../../components/NavBar/NavBar';
import Saludo from '../../components/Saludo/Saludo';

function Home() {
    return (
        <>
            <NavBar/>
            <Saludo title='¡Hola!' greetings='Que bueno tenerte aquí de nuevo :)' isShown='true' />
        </>
    );
  }

  export default Home;