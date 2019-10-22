import React from 'react';
import Axios from 'axios';
import { Button, Container, Form, Row, Col } from "react-bootstrap"

import SocialIcons from "./SocialIcons";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      mailSent: false,
      error: null
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    Axios({
      method: 'post',
      url: './mailer.php',
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent,
          name: '',
          email: '',
          message: ''
        })
      })
      .catch(error => this.setState({ error: error.message }))
  }

  render() {
    return (
      <section id="contact">
        <Container>
          <Row>
            <Col className="text-center">
              <h2>Contact me</h2>
              <p className="lead">Send me an Email</p>

              <div>
                {this.state.mailSent &&
                  <div>Thank you for contacting me.</div>
                }
              </div>
              <div>
                {this.state.error &&
                  <div>{this.state.error}</div>
                }
              </div>
            </Col>

          </Row>
          <Form id="ajax-contact" method="post" action="mailer.php">
            <Form.Group>

              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" id="name" name="name" required
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />


              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" id="email" name="email" required
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />


              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" id="message" name="message" required
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
              />
              <Button variant="secondary" type="submit" onClick={e => this.handleFormSubmit(e)}>Send</Button>

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