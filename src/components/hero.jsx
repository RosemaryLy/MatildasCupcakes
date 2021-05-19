import React from "react"
import { Container, Jumbotron,Button } from "react-bootstrap"
import cupcakeCut from "../assets/cupcakecut.mp4"

export default function Hero() {
  return (
    <Container fluid >
      <h3> A little taste of heaven </h3>
      <Jumbotron fluid>
        <video className="img-fluid" autoPlay muted loop>
          <source src={cupcakeCut} type="video/mp4" />
        </video>  
       <div class="container">

           <div className="hero-text">
     <h2> Always a delight and the perfect amount of decanance</h2>
     </div>
     <Button><a href="/MatildasCupcakes/selection">See our Selection </a></Button>
     </div>    
      </Jumbotron>
      
    </Container>
  )
}
