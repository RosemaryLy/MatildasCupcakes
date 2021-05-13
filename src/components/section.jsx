import React from "react"
import { Col, Container, Row, Card} from "react-bootstrap"
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
        <a href="/selection">
          <Card.Img src={vanillacupcake} width="500" height="500" />
          <Card.ImgOverlay>
          </Card.ImgOverlay>
          </a>
          </Card>
        </Col>
        <Col md={3}>
        <Card className="text-center">
        <a href="/selection">
          <Card.Img src={unicorncupcake} width="500" height="500" />
          <Card.ImgOverlay>
          </Card.ImgOverlay>
          </a>
          </Card>
          </Col>
      
      
       <Col md={3}>
       <Card>
       <a href="/selection">
          <Card.Img src={chocolatecupcake} width="500" height="500" />
          <Card.ImgOverlay>
          </Card.ImgOverlay>
        </a>
          </Card>
          </Col>
       <Col md={3}>
       <Card>
       <a href="/selection">
          <Card.Img src={strawberrycupcake} width="500" height="500"/>
          <Card.ImgOverlay>
          </Card.ImgOverlay>
          </a>
          </Card>
          </Col>
      
      </Row>
     
    </Container>
    )
}
