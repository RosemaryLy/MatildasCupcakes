import React from "react";
import {Container,Navbar, Nav} from "react-bootstrap";

export function Navigation () {
    return (
        <Container>
        <Navbar>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
    </Navbar>
    </Container>
    )
}