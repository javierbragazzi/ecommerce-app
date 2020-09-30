import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import React, {Component} from 'react';
import logo from '../logo.svg';


class NavBarCustom extends Component {
    render() {
        return (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">  
                            <img
                                alt=""
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Ecommerce
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#tecnologia">Tecnología</Nav.Link>
                            <Nav.Link href="#hogar">Hogar</Nav.Link>
                            <NavDropdown title="TV, Audio y Video" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#tvaudiovideo/3.1">TV</NavDropdown.Item>
                                <NavDropdown.Item href="#tvaudiovideo/3.2">Audio</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#tvaudiovideo/3.3">Video</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Mi cuenta</Nav.Link>
           
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
    
        );
    }
}

export default NavBarCustom;