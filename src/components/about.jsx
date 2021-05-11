import React from "react"
import { Col, Container, Row, Card} from "react-bootstrap"
import vanillacupcake from '../assets/vanillacupcake.jpg'



export default function About(){
    return (
        <Container fluid>
            <Card className="mt-2">
        <Row className="no-gutters">
          <Col md={4}>
          <Card.Img src={vanillacupcake} roundedCircle width="500" height="500" />
          </Col>
          <Col md={8} style={{backgroundColor:'pink'}}>
            2 of 2</Col>
        </Row>
        </Card> 
      </Container>

    )
}
