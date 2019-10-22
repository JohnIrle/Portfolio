import React from 'react';
import { Button, Container, Form, Row, Col } from "react-bootstrap"

import SocialIcons from "./SocialIcons";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <Container>
          <Row>
            <Col className="text-center">
              <h2>Contact me</h2>
              <p className="lead">Send me an Email</p>

              <div id="form-messages"></div>
            </Col>

          </Row>
          <Form id="ajax-contact" method="post" action="mailer.php">
            <Form.Group>

              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" id="name" name="name" required />


              <Form.Label for="email">Email:</Form.Label>
              <Form.Control type="email" id="email" name="email" required />


              <Form.Label for="message">Message:</Form.Label>
              <Form.Control as="textarea" id="message" name="message" required />
              <Button variant="secondary" type="submit">Send</Button>

            </Form.Group>
          </Form>

          <hr />

          <p className="lead">Or contact me on these sites.</p>

          <SocialIcons />
        </Container>
      </section>

    )
  }
}

export default Contact;