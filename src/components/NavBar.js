import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap/';


function NavBar() {
    return (
        <div className="Navigation-Bar">
            {/* NavBar Theming */}
            <Navbar
                className="navbar"
                expand="lg"
                bg="light"
            >
                {/* NavBar Logo */}
                <Navbar.Brand>
                    <Link to="/">
                        Open Sky Studio
                    </Link>
                    {/* <img
                    alt=""
                    src={}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '} */}

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                    <Nav
                        className="mr-auto"
                    >
                        <Nav.Link>
                            <Link to="/about">
                                About Mia
                            </Link>
                        </Nav.Link>
                        <Nav.Link>

                            <Link to="/services">
                                Pilates
                        </Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/services">
                                Massage
                        </Link>
                        </Nav.Link>

                        <Nav.Link>

                            <Link to="/services">
                                Pricing
                        </Link>
                        </Nav.Link>

                        <Nav.Link>

                            <Link to="/services">
                                Contact Us
                            </Link>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}



export default NavBar;