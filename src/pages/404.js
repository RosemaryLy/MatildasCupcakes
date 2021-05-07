import React from "react"
import { Container,Jumbotron } from "react-bootstrap"
import Layout from "../components/layout"
import Section from "../components/section"
import {Navigation} from "../components/navbar"
import notfound from "../assets/notfound.jpg"

export default () => (
  <Layout>
     <Navigation/>
    <Container fluid>
    <h1 style={{textAlign:`center`, color:`pink`}}>Oh crumbs! You're in the wrong place!</h1>
    <Jumbotron style={{ backgroundImage: `url(${notfound})`, backgroundSize: 'cover' }}>
      </Jumbotron>
    </Container>
    <Section/>
  </Layout>
)
