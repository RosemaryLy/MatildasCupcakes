import React from "react"
import { Col, Container, Row, Image} from "react-bootstrap"
import vanillacupcake from '../assets/vanillacupcake.jpg'
import strawberrycupcake from '../assets/strawberrycupcake.jpg'

export default function Section(){
    return (
      <Container fluid>
      <Row>
        <Col>
        <div className="text-center">
          <Image src={vanillacupcake} roundedCircle width="500" height="500" />
          </div>
        </Col>
        <Col style={{backgroundColor:'pink'}}>
          2 of 2</Col>
      </Row>
      <Row>
        <Col style={{backgroundColor:'gold'}}>
          1 of 3</Col>
        <Col>
        <div className="text-center">
          <Image src={strawberrycupcake} roundedCircle width="500" height="500"/>
          </div>
        </Col>
      </Row>
    </Container>
    )
}
