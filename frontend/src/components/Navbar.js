import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import "./Navbar.css";

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

    // <>
    //   <nav className="navbar">
    //     <div className="navbar-container">
    //       <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
    //         BANDEN
    //         <i className="fab fa-typo3" />
    //       </Link>
    //       <div className="menu-icon" onClick={handleClick}>
    //         <i className={click ? "fas fa-times" : "fas fa-bars"} />
    //       </div>
    //       <ul className={click ? "nav-menu active" : "nav-menu"}>
    //         <LinkMaker text="Home" path="" />
    //         <LinkMaker text="Services" path="services" />
    //         <LinkMaker text="Products" path="products" />
    //         <li>
    //           <Link
    //             to="/signin"
    //             className="nav-links-mobile"
    //             onClick={closeMobileMenu}
    //           >
    //             SING IN
    //           </Link>
    //         </li>
    //       </ul>

    //       {button && (
    //         <Link to="signin" className="btn-mobile">
    //           <Button buttonStyle="btn--outline" link="/signin">
    //             SING IN
    //           </Button>
    //         </Link>
    //       )}
    //     </div>
    //   </nav>
    // </>
  );
}
export default NavbarShow;
