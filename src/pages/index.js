import React from "react"
import { Container, Button, Jumbotron } from "react-bootstrap"
import Layout from "../components/layout"
import cupcakeCut from "../assets/cupcakecut.mp4"
import {Navigation} from "../components/navbar"

export default () => (
  <Layout>
     <Navigation/>
    <Container fluid>
      <Jumbotron>
        <video id="video-background" muted loop autoPlay>
          <source src={cupcakeCut} type="video/mp4" />
        </video>
        <p>
          <Button variant="primary">Sample Button</Button>
        </p>
      </Jumbotron>
     
    </Container>
  </Layout>
)
