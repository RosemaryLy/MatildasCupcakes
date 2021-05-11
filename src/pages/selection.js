import React from "react"
import { Container, Card, CardColumns} from "react-bootstrap"
import Layout from "../components/layout"
import {Navigation} from "../components/navbar"
import choco from '../assets/weddingchocolate.jpg'
import unicorn from '../assets/unicorncupcake.jpg'
import strawberry from '../assets/strawberrycupcake.jpg'
import vanilla from '../assets/vanillacupcake.jpg'

export default () => (
  <Layout>
     <Navigation/>
    <Container fluid >
    <CardColumns>

  <Card>
    <Card.Img variant="top" src={choco} />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={unicorn} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  
  <Card className="text-center">
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img src={strawberry} />
  </Card>
  
  <Card>
  <Card.Img variant="top" src={vanilla} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>
    </Container>
    
  </Layout>
)