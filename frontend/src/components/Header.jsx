import React from "react"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {

    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand><h3 style={{ display: "inline" }}>Shop</h3><b>ify</b></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav className="ms-auto">
                                <LinkContainer to="/cart"><Nav.Link ><i className="fas fa-shopping-cart" style={{ paddingRight: 5 }}></i>{' '} Cart</Nav.Link></LinkContainer>
                                <LinkContainer to="/signin"><Nav.Link><i className="fas fa-sign-in-alt" style={{ paddingRight: 5 }}></i>{' '} Signin</Nav.Link></LinkContainer>
                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    );
};

export default Header;
