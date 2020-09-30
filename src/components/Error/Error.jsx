import React from "react";
import {Link} from 'react-router-dom';
import './Error.css';



function Error() {
                    return (
                        <>
                            
                            <div id="notfound">
                                <div className="notfound">
                                    <div className="notfound-404">
                                        <div/>
                                        <h1>404</h1>
                                    </div>
                                    <h2>Página no encontrada</h2>
                                    <br/>
                        
                                    <Link to="/" className="btn btn-outline-success btn-sm"  >Voler al inicio</Link>
                                </div>
                            </div>
                    
                        </>
                    );
}

export default Error;
