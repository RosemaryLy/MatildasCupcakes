import React from "react"
import { Container, Card, CardColumns} from "react-bootstrap"
import Layout from "../components/layout"
import {Navigation} from "../components/navbar"
import choco from '../assets/weddingchocolate.jpg'
import unicorn from '../assets/unicorncupcake.jpg'
import strawberry from '../assets/strawberrycupcake.jpg'
import vanilla from '../assets/vanillacupcake.jpg'
import ferror from '../assets/ferrorrocher.jpg'
import oreo from '../assets/oreo.jpg'
import carrot from '../assets/carrot.jpg'

export default () => (
  <Layout>
     <Navigation/>
    <Container fluid >
    <CardColumns>

  <Card>
    <Card.Img variant="top" src={choco} />
    
  </Card>

  <Card>
    <Card.Img variant="top" src={unicorn} />
  
    
  </Card>
  
  <Card className="text-center">
    <Card.Img src={carrot}/>
  </Card>
  <Card>
    <Card.Img src={strawberry} />
  </Card>

  <Card>
    <Card.Img src={ferror} />
  </Card>
  
  <Card>
  <Card.Img variant="top" src={vanilla} />
  </Card>
  <Card>
    <Card.Img src={oreo} />
  </Card>
</CardColumns>
    </Container>
    
  </Layout>
)