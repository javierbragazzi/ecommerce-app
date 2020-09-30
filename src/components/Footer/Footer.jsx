  
  import React from 'react';

  import "./Footer.css";
  
  function Footer(){
  
    return <>
 
                <footer className="main-footer">
                <div className="empty-container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h5>Proyecto e-commerce. Curso React JS - Coderhouse</h5>
                            </div>                                
                        </div>
                        <hr className="hr"/>
                        <div className="row">
                            <p className="col-sm">
                                &copy;{new Date().getFullYear()} Javier Bragazzi | All rights reserved
                            </p>
                        </div>
                    </div>
                    </div>
                </footer>
       </>
  }
  
  export default Footer;

