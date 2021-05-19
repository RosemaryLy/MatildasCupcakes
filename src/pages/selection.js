import React from "react"
import { Container, Card, CardColumns} from "react-bootstrap"
import Layout from "../components/layout"
import {Navigation} from "../components/navbar"
import {dummyProducts} from "../mock/data"


export default () => (
  <Layout>
     <Navigation/>
    <Container fluid >
    <CardColumns>

    {
  dummyProducts.map(product => (
      <Card key={product.id} >
        <Card.Img variant="top" src={product.photo} />
        <Card.Body>
        <Card.Title><h3>{product.name}</h3></Card.Title>  
        <Card.Subtitle>${product.price} for an order of 6 |  ${product.ind} each</Card.Subtitle>
        </Card.Body>
        </Card>
  ))
}

</CardColumns>
    </Container>
    
  </Layout>
)

