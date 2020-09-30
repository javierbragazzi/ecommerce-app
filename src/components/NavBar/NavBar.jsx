import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo.svg';

import CartIcon from '../CartIcon/CartIcon';

function NavBar (){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">  
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Tecno World
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/notebooks/cat-notebooks">Notebooks</Nav.Link>
                    <Nav.Link as={Link} to="/monitores/cat-monitores">Monitores</Nav.Link>
                    <Nav.Link as={Link} to="/monitores/cat-tablets">Tablets</Nav.Link>     
                </Nav>
                <Nav.Link as={Link} to="/cart">
                    <CartIcon/>
                </Nav.Link>            
                <Nav>                    
                    <Nav.Link as={Link} to="/miCuenta">Mi cuenta</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}

export default NavBar;