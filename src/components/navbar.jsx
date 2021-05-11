import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import logo from '../assets/MatildasCupcakes.png'

export function Navigation () {
    return (
       
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/"><img className="center-block" src={logo} alt="logo for Matilda's Cupcake" height="300" width="300"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
        <Nav.Link href="/#About">About Us</Nav.Link>
        <Nav.Link href="/selection">Our Selection</Nav.Link>
        
        <Nav.Link href="#link">FAQ</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
   
   
    )
}

