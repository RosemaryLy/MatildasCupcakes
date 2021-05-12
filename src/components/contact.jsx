import React from "react"
import { Col, Container, Row, Form, Button} from "react-bootstrap"


export default function Contact(){
    return (
        <Container fluid className="mt-2">
           
            <div id="Contact" >
            <h3> Contact Us</h3>
        <Row >
          <Col md={8}>
          <Form>
          <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
    </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control type="textarea" placeholder="Enter your message here" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
          </Col>
          <Col md={4} >
          <iframe title="Map of location" 
          className="embed-responsive-item"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.2168712896787!2d-79.71489258469245!3d43.581198879123825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b41b969bf45a3%3A0x623f521ca2b229e!2s1%20Main%20St%2C%20Mississauga%2C%20ON%20L5M%201X4!5e0!3m2!1sen!2sca!4v1620800523518!5m2!1sen!2sca" 
         width="100%"
          height="300" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"></iframe>
           </Col>
        </Row>
        </div>
      </Container>

    )
}
