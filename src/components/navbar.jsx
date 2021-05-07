import React from "react";
import {Container,Navbar, Nav} from "react-bootstrap";
import logo from '../assets/MatildasCupcakes.png'

export function Navigation () {
    return (
        
        <Navbar>
            <Container>
        <Nav.Link href="#home">About Us</Nav.Link>
        <Nav.Link href="#home">Our Selection</Nav.Link>
        <Nav.Link href="/"><img className="center-block" src={logo} alt="logo for Matilda's Cupcake">
            </img>
        </Nav.Link>
        <Nav.Link href="#link">FAQ</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        </Container>
    </Navbar>
   
    )
}