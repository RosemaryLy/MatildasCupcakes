import React from "react"
import { Container,Jumbotron } from "react-bootstrap"
import Layout from "../components/layout"
import Section from "../components/section"
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
      </Jumbotron>
    </Container>
    <Section/>
  </Layout>
)
