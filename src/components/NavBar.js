import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap/';
import logo from '../images/logo.png';


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
                <Navbar.Brand className = "navbar-item">
                    <Link to="/">
                    <img
                    alt=""
                    src={logo}
                    width="165"
                    height="75"
                    className="d-inline-block align-top"
                    />{' '}
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav justify-content-end">
                    <Nav
                        className="mr-auto"
                    >
                        <Nav.Link className = "navbar-item">
                            <Link to="/about">
                                About Mia
                            </Link>
                        </Nav.Link>
                        <Nav.Link className = "navbar-item">

                            <Link to="/pilates">
                                Pilates
                        </Link>
                        </Nav.Link>

                        <Nav.Link className = "navbar-item">
                            <Link to="/massage">
                                Massage
                        </Link>
                        </Nav.Link>

                        <Nav.Link className = "navbar-item">

                            <Link to="/pricing">
                                Pricing
                        </Link>
                        </Nav.Link>

                        <Nav.Link className = "navbar-item" href ="#contact">
                                Contact Us
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}



export default NavBar;