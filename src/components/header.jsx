import React from "react"
import { Container, Row, Col} from "react-bootstrap"

// Social Media Header
export function Header(props) {
  return (
    <Container fluid>
      <Row>
        <Col sm={4}>
      <a href="https://twitter.com"><i className="fab fa-twitter"aria-label="Twitter Link"></i></a>
     <a href="https://facebook.com"><i className="fab fa-facebook"aria-label="Facebook Link"></i></a>
     <a href="https://instagram.com"><i className="fab fa-instagram"aria-label="Instagram Link"> </i></a>
  <a href="https://tiktok.com"><i className="fab fa-tiktok"aria-label="TikTok Link"></i></a>
  </Col>
  <Col sm={8}></Col>
  </Row>
    </Container>

  )
}
