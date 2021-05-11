import React from "react"
import { Container, Card } from "react-bootstrap"
import Layout from "../components/layout"
import Section from "../components/section"
import cupcakeCut from "../assets/cupcakecut.mp4"
import {Navigation} from "../components/navbar"
import About from "../components/about"

export default () => (
  <Layout>
     <Navigation/>
    <Container fluid >
    <Card>
    <div class="card">
<video class="img-fluid" autoplay muted loop>
<source src={cupcakeCut} type="video/mp4"/>
</video>
          <Card.ImgOverlay>
          <Card.Title><h3> A little taste of heaven </h3></Card.Title>
            <Card.Text>
              Testing this out
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
            
          </Card.ImgOverlay>
          
          </div>
          </Card>
    </Container>
    <Section/>
    <About/>
  </Layout>
)
