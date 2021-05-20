import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function MyNav() {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/" style={{ fontFamily: "Teko, sans-serif" }}>GoogleBooks Reading List</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/search">Search</Nav.Link>
                    <Nav.Link as={Link} to="/saved">Saved</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNav;