import React from 'react';
import {Alert} from 'react-bootstrap';
import { render } from '@testing-library/react';


function Saludo(props) {
        return (
            <>
                <Alert variant="primary">
                    <Alert.Heading>{props.title}</Alert.Heading>
                    <p>
                        {props.greetings}
                    </p>
                </Alert>       
            </>    
        );
    
  }
  
  export default Saludo;