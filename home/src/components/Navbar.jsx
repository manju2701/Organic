import Button from 'react-bootstrap/Button';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-navbar">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
                        alt="Organic Logo"
                        className="logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-between">
                    <Nav className="d-flex align-items-center">
                        <Button variant="link" as={Link} to="/categories" className="text-decoration-none button-link me-3">
                            <FontAwesomeIcon icon={faBars} size="lg" /> Categories
                        </Button>
                    </Nav>

                    <div className="d-flex justify-content-center flex-grow-1 position-relative">
                        <Form className="d-flex w-50 position-relative">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 pe-5 search-input"
                                aria-label="Search"
                            />
                            <span className="position-absolute end-0 top-50 translate-middle-y pe-3">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </Form>
                    </div>

                    <div className="d-flex align-items-center">
                        <Nav.Link as={Link} to="/about" className="text-decoration-none">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="text-decoration-none ms-3">Contact</Nav.Link>
                        <Button variant="link" as={Link} to="/login" className="text-decoration-none button-link ms-3">
                            <FontAwesomeIcon icon={faUser} size="lg" /> Login
                        </Button>
                        <Button variant="link" as={Link} to="/signup" className="text-decoration-none button-link ms-3">
                            <FontAwesomeIcon icon={faUser} size="lg" /> Signup
                        </Button>
                        <Button variant="link" as={Link} to="/cart" className="text-decoration-none button-link ms-3">
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" /> Cart
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
