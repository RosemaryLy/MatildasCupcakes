import React from "react"
import { Col, Container, Row} from "react-bootstrap"
import logo from '../assets/MatildasCupcakes.png'

export function Header(props) {
  return (
    <Container>
   <Row>
     <Col sm></Col>
     <Col sm>
  <img className="center-block" src={logo} alt="logo for Matilda's Cupcake"></img>
  </Col>
  <Col sm></Col>
    </Row>
    </Container>

  )
}
