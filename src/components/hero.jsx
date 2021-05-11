import React from "react"
import { Container, Card} from "react-bootstrap"
import cupcakeCut from "../assets/cupcakecut.mp4"

export default function Hero(){
    return (
        <Container fluid >
        <Card>
        
    <video className="img-fluid" autoPlay muted loop>
    <source src={cupcakeCut} type="video/mp4"/>
    </video>
              <Card.ImgOverlay>
              <Card.Title><h3> A little taste of heaven </h3></Card.Title>
                <Card.Text>
                  Testing this out
                </Card.Text>
                
              </Card.ImgOverlay>
              
              
              </Card>
              </Container>
    )
}
