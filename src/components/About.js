import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <section id="about">
      <Container>
        <h2>About</h2>
        <p className="lead">
          I'm a Computer Science Graduate Student and Freelance web developer.

          My interests include web development, cyber security and machine learning.
        </p>

        <p className="lead">
          My focus is on JavaScript(React, Express, Node, MongoDB), and Python.
        </p>

        <p className="lead">Want to work together? I would love to hear from you.
        </p>
      </Container>
    </section>
  );
}

export default About;