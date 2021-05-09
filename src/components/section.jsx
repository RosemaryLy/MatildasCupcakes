import React from "react"
import { Col, Container, Row, Card, Button} from "react-bootstrap"
import vanillacupcake from '../assets/vanillacupcake.jpg'
import strawberrycupcake from '../assets/strawberrycupcake.jpg'
import unicorncupcake from '../assets/unicorncupcake.jpg'
import chocolatecupcake from '../assets/weddingchocolate.jpg'

export default function Section(){
    return (
      <Container fluid>
      <Row>
        <Col>
        <Card>
          <Card.Img src={vanillacupcake} width="500" height="500" />
          <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
            <Card.Text>
              Testing this out
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
        <Card>
          <Card.Img src={unicorncupcake} width="500" height="500" />
          <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
            <Card.Text>
              Testing this out
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.ImgOverlay>
          </Card>
          </Col>
      </Row>
      <div class="mt-2">
      <Row>
       <Col>
       <Card>
          <Card.Img src={chocolatecupcake} width="500" height="500" />
          <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
            <Card.Text>
              Testing this out
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.ImgOverlay>
          </Card>
          </Col>
        <Col>
       <Card>
          <Card.Img src={strawberrycupcake} width="500" height="500"/>
          <Card.ImgOverlay>
          <Card.Title>Card title</Card.Title>
            <Card.Text>
              Testing this out
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      </div>
    </Container>
    )
}
