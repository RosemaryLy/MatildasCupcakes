import React from "react"
import { Col, Container, Row, Card, Button} from "react-bootstrap"
import vanillacupcake from '../assets/vanillacupcake.jpg'
import strawberrycupcake from '../assets/strawberrycupcake.jpg'
import unicorncupcake from '../assets/unicorncupcake.jpg'
import chocolatecupcake from '../assets/weddingchocolate.jpg'

export default function FeaturedSection(){
    return (
      <Container fluid className="mt-2">
        <h3> Featured Cupcakes</h3>
      
      <Row>
        <Col md={3}>
        <Card>
       
          <Card.Img src={vanillacupcake} width="500" height="500" />
          <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
            <Card.Text>
              Testing this out
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Button variant="primary">See More</Button>
          </Card.ImgOverlay>
        
          </Card>
        </Col>
        <Col md={3}>
        <Card>
          <Card.Img src={unicorncupcake} width="500" height="500" />
          <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
            <Card.Text>
              Testing this out
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Button variant="primary">See More</Button>
          </Card.ImgOverlay>
          </Card>
          </Col>
      
      
       <Col md={3}>
       <Card>
          <Card.Img src={chocolatecupcake} width="500" height="500" />
          <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
            <Card.Text>
              Testing this out
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Button variant="primary">See More</Button>
          </Card.ImgOverlay>
          </Card>
          </Col>
       <Col md={3}>
       <Card>
          <Card.Img src={strawberrycupcake} width="500" height="500"/>
          <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
            <Card.Text>
              Testing this out
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Button variant="primary">See More</Button>
          </Card.ImgOverlay>
          </Card>
          </Col>
      
      </Row>
     
    </Container>
    )
}
