import React, { useState } from "react";
import axios from "axios";
import {  Container, Row, Col } from "react-bootstrap";

import SocialIcons from "./SocialIcons";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        mailSent: false,
        error: null,
    });

    const { name, email, message, mailSent, error } = formData;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.currentTarget;
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
                <form id="ajax-contact" onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            className="form-control"                           
                            id="name"
                            name="name"
                            required
                            value={name}
                            onChange={onChange}
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            className="form-control"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={onChange}
                        />

                        <label htmlFor="message">Message:</label>
                        <input
                            type="textarea"
                            className="form-control"
                            id="message"
                            name="message"
                            required
                            value={message}
                            onChange={onChange}
                        />
                        <button className="btn btn-secondary" type="submit">
                            Send
                        </button>
                    </div>
                </form>

                <hr />

                <p className="lead">Or contact me on these sites.</p>
                <div style={{ width: "15%", marginLeft: "2rem" }}>
                    <SocialIcons />
                </div>
            </Container>
        </section>
    );
};

export default Contact;
