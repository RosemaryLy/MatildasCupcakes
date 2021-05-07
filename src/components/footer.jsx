import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "./link"

export function Footer(props) {
  return (
    <Container className="text-center">
    
      <p> Built by <Link href="https://github.com/RosemaryLy/MatildasCupcakes">Rosemary Ly</Link> with ♥</p>
    </Container>
  )
}
