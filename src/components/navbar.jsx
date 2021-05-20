import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import logo from '../assets/MatildasCupcakes.png'

export function Navigation () {
    return (
       
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/MatildasCupcakes/"><img className="center-block" src={logo} alt="logo for Matilda's Cupcake" height="300" width="300"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
        <Nav.Link href="/MatildasCupcakes/#About">About Us</Nav.Link>
        <Nav.Link href="/MatildasCupcakes/selection">Our Selection</Nav.Link>
        
        <Nav.Link href="/MatildasCupcakes/FAQ">FAQ</Nav.Link>
        <Nav.Link href="/MatildasCupcakes/#Contact">Contact</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
   
   
    )
}

