import React from "react"
import { Container, Card } from "react-bootstrap"
import Layout from "../components/layout"
import {Navigation} from "../components/navbar"
import faq from "../assets/faq.jpg"

export default () => (
  <Layout>
     <Navigation/>
    <Container fluid >
      <Card> 
      <Card.Img src={faq} alt="Cupcake background" />
      <Card.ImgOverlay>
    <details open>
  <summary>Are you cupcakes peanut free?</summary>
  <p>Our cupcakes do not contain peanuts however they may be in contact with them.
  </p>
</details>

<details>
  <summary>Do you do catering/events?</summary>
<p>Yes, we do! Contact us for special pricing and more information</p>
  
</details>

<details>
  <summary>Do you do custom cupcakes?</summary>
 Yes, we do! Please contact us and we can work together to create your special cupcake!
</details>

<details>
  <summary>Do you deliver?</summary>
  <p>At this time, we do not offer delivery unless it is for special event/catering request</p>
  <p>However, we are always happy to serve you at our store!</p>
</details>

<details>
  <summary>Question</summary>
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</details>

<details>
  <summary>Question</summary>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</details>



</Card.ImgOverlay>
</Card>
    </Container>
    
  </Layout>
)