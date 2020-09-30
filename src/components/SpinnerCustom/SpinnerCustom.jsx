
import {Spinner, Button} from 'react-bootstrap';
import React from 'react';

import './SpinnerCustom.css';

function SpinnerCustom (){
    return (
                <>

                    <div className="container-spinner">
                        <div className="child-spinner">
                            <Spinner style={{width:"80px", height:"80px"}}
                                    as="span"
                                    animation="grow"
                                    size="xl"
                                    role="status"
                                    aria-hidden="true"
                                    variant="dark"
                             />  
                        </div>
                    </div>

                </>
    );

}

export default SpinnerCustom;

