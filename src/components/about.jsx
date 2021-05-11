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
              <Card.Title>
                  <h3>About Us</h3>
              </Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

              </Card.Text>
           </Col>
        </Row>
        </Card> 
      </Container>

    )
}
