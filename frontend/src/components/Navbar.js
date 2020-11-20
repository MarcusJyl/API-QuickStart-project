import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavbarShow() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="navbar-brand">
        BANDEN <i className="fab fa-typo3" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/jokes" className="nav-link">
            Jokes
          </Link>
        </Nav>
        <Nav>
          <Link to="/signin">
            <button className="btn btn-primary">Sign In</button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarShow;
