
import {Spinner, Button} from 'react-bootstrap';
import React from 'react';

function SpinnerCustom (){
    return (
                <>
                <Button variant="primary" style={{margin: '250px 10px 10px 10px'}} disabled >
                    <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    /> {' '}
                    Loading...
                </Button>
                </>
    );

}

export default SpinnerCustom;

