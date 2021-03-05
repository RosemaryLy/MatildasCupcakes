import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "./link"

export function Footer(props) {
  return (
    <Container class="text-center">
      <br/><br/><br/>
      <br/><br/><br/>
      <p style={{textAlign:"center"}}>Built by <Link href="https://github.com/RosemaryLy/">Rosemary Ly</Link> with ♥</p>
    </Container>
  )
}
