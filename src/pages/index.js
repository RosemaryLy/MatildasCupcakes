import React from "react"
import { Container, Button, Jumbotron } from "react-bootstrap"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Container fluid>
      <Jumbotron fluid>
        <h1>Hello, world!</h1>
        <video src="../assets/cucpakecute.mp4" muted loop autoPlay></video>
        <p>
          <Button variant="primary">Sample Button</Button>
        </p>
      </Jumbotron>
    </Container>
  </Layout>
)
