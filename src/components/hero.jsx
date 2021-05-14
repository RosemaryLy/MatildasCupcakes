import React from "react"
import { Container, Card } from "react-bootstrap"
import cupcakeCut from "../assets/cupcakecut.mp4"

export default function Hero() {
  return (
    <Container fluid >
      <a href="/#About">
      <Card>
        <video className="img-fluid" autoPlay muted loop>
          <source src={cupcakeCut} type="video/mp4" />
        </video>
     
        <Card.ImgOverlay>
          <Card.Title><h3> A little taste of heaven </h3></Card.Title>
         <Card.Body fluid>
           <br></br>
           <div className="hero-text">
     <h2> Always a delight and the perfect amount of decanance</h2>
     </div>
         </Card.Body>
        </Card.ImgOverlay>      
      </Card>
      </a>
    </Container>
  )
}
