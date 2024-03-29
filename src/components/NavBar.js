import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap/';
import logo from '../images/logo.png';


function NavBar() {
    return (
        <div className="Navigation-Bar">
            <Container fluid>
                <Row>
                    <Col>
                        <Navbar
                            className="navbar"
                            expand="lg"
                            bg="light"
                        >
                            {/* NavBar Logo */}
                            <Navbar.Brand className="navbar-item">
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
                                    <Nav.Link className="navbar-item">
                                        <Link to="/about">
                                            About Mia
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link className="navbar-item">

                                        <Link to="/movement">
                                            Movement
                                        </Link>
                                    </Nav.Link>

                                    <Nav.Link className="navbar-item">
                                        <Link to="/massage">
                                            Massage
                                        </Link>
                                    </Nav.Link>

                                    <Nav.Link className="navbar-item">

                                        <Link to="/meditation">
                                            Meditation
                                        </Link>
                                    </Nav.Link>

                                    <Nav.Link className="navbar-item">
                                        <Link to="/pricing">
                                            Pricing
                                        </Link>
                                    </Nav.Link>

                                    <Nav.Link className="navbar-item">
                                        <Link to="/artwork">
                                            Artwork
                                        </Link>
                                    </Nav.Link>

                                    <Nav.Link className="navbar-item" href="#contact">
                                        Contact Us
                                    </Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
            {/* NavBar Theming */}

        </div>
    );
}



export default NavBar;