import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

import SocialIcons from "./SocialIcons";

const Contact = (props) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        mailSent: false,
        error: null,
    });

    const { name, email, message, mailSent, error } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("mailer.php", formData);
            setFormData({
                ...formData,
                mailSent: result.data.sent,
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setFormData({ ...formData, error: error.message });
        }
    };

    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h2>Contact me</h2>
                        <p className="lead">Send me an Email</p>

                        <div>
                            {mailSent && (
                                <div>Thank you for contacting me.</div>
                            )}
                        </div>
                        <div>{error && <div>{error}</div>}</div>
                    </Col>
                </Row>
                <Form id="ajax-contact" onSubmit={onSubmit}>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={name}
                            onChange={onChange}
                        />

                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={onChange}
                        />

                        <Form.Label>Message:</Form.Label>
                        <Form.Control
                            as="textarea"
                            id="message"
                            name="message"
                            required
                            value={message}
                            onChange={onChange}
                        />
                        <Button variant="secondary" type="submit">
                            Send
                        </Button>
                    </Form.Group>
                </Form>

                <hr />

                <p className="lead">Or contact me on these sites.</p>
                <div style={{ width: "15%" }}>
                    <SocialIcons />
                </div>
            </Container>
        </section>
    );
};

export default Contact;
