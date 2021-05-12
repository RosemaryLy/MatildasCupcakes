import React from "react"
import { Container, Row, Col, } from "react-bootstrap"
import { Link } from "./link"
import logo from "../assets/logotransparent.png"

export function Footer() {
  return (
    <Container fluid className="mt-2">
<Row >
  <Col md={6} style={{backgroundColor:'pink'}}>
  <img src={logo} alt='logo' height="150" width="150" />
  <a href="https://twitter.com"><i className="fab fa-twitter"aria-label="Twitter Link"></i></a>
     <a href="https://facebook.com"><i className="fab fa-facebook"aria-label="Facebook Link"></i></a>
     <a href="https://instagram.com"><i className="fab fa-instagram"aria-label="Instagram Link"> </i></a>
  <a href="https://tiktok.com"><i className="fab fa-tiktok"aria-label="TikTok Link"></i></a>
    </Col>

    <Col md={6} style={{backgroundColor:'pink'}}>
      <p>Phone: 111-111-1111</p>
      <p>Email: info@matildascupcakes.ca</p>
      <p>Store Hours: Monday - Sunday 9:00AM - 7:30PM</p>
    </Col>
    </Row >
    <Row>
      <Col className="text-center">
      <p> Built by <Link href="https://github.com/RosemaryLy/MatildasCupcakes">Rosemary Ly</Link> with ♥</p>
      </Col>
    </Row>
    </Container>
  )
}
