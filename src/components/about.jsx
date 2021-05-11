import React from "react"
import { Col, Container, Row, Image} from "react-bootstrap"
import vanillacupcake from '../assets/vanillacupcake.jpg'
import strawberrycupcake from '../assets/strawberrycupcake.jpg'


export default function About(){
    return (
        <Container fluid>
        <Row>
          <Col md={6}>
            <Image src={vanillacupcake} roundedCircle width="500" height="500" />
          </Col>
          <Col md={6} style={{backgroundColor:'pink'}}>
            2 of 2</Col>
        </Row>
       
      </Container>
    )
}
