import React, { useState } from 'react';
import axios from 'axios';
import { Button, Container, Form, Row, Col } from "react-bootstrap"

import SocialIcons from "./SocialIcons";

const Contact = (props) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    mailSent: false,
    error: null
  })

  const {
    name,
    email,
    message,
    mailSent,
    error
  } = formData;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("mailer.php", formData)
      setFormData({
        mailSent: result.data.sent,
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      setFormData({ error: error.message })
    }
  }

  return (
    <section id="contact">
      <Container>
        <Row>
          <Col className="text-center">
            <h2>Contact me</h2>
            <p className="lead">Send me an Email</p>

            <div>
              {mailSent &&
                <div>Thank you for contacting me.</div>
              }
            </div>
            <div>
              {error &&
                <div>{error}</div>
              }
            </div>
          </Col>

        </Row>
        <Form id="ajax-contact" method="post" action="mailer.php">
          <Form.Group>

            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" id="name" name="name" required
              value={name}
              onChange={e => setFormData({ name: e.target.value })}
            />


            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" id="email" name="email" required
              value={email}
              onChange={e => setFormData({ email: e.target.value })}
            />


            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" id="message" name="message" required
              value={message}
              onChange={e => setFormData({ message: e.target.value })}
            />
            <Button variant="secondary" type="submit" onClick={e => handleFormSubmit(e)}>Send</Button>

          </Form.Group>
        </Form>

        <hr />

        <p className="lead">Or contact me on these sites.</p>

        <SocialIcons />
      </Container>
    </section>

  )
}

export default Contact;
