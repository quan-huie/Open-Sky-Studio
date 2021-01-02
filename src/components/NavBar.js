import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap/';


function NavBar() {
    return (
        <div className = "Navigation-Bar">
        {/* NavBar Theming */}
        <Navbar
        className = "navbar"
        expand="lg"
        bg="light"
        >
            {/* NavBar Logo */}
            <Navbar.Brand href="#home">
                {/* <img
                    alt=""
                    src={}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '} */}
                    Open Sky Studio
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            <Nav
            className="mr-auto"
            >
                <Link to="/about">
                    <Nav.Link>About Mia</Nav.Link>
                </Link>
                <Link to="/services">
                    <Nav.Link>Services</Nav.Link>
                </Link>
                <Link to="/services">
                    <Nav.Link>Pricing</Nav.Link>
                </Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
);
}



export default NavBar;