import React from "react"
import { Col, Container, Row, Image} from "react-bootstrap"
import vanillacupcake from '../assets/vanillacupcake.jpg'
import strawberrycupcake from '../assets/strawberrycupcake.jpg'

export default function Section(){
    return (
      <Container fluid>
      <Row>
        <Col >
        <div className="text-center">
          <Image src={vanillacupcake} roundedCircle width="500" height="500" />
          </div>
        </Col>
        <Col className="align-items-center" style={{backgroundColor:'pink'}}>
      
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          
          </Col>
      </Row>
      <Row>
        <Col style={{backgroundColor:'gold'}}>
        <div className="text-center">
          1 of 3
          </div>
          </Col>
        <Col>
        <div className="text-center">
          <Image src={strawberrycupcake} roundedCircle width="500" height="500"/>
          </div>
        </Col>
      </Row>
    </Container>
    )
}
