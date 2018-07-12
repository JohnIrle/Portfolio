import React from "react";
import ContactForm from "./ContactForm";

function Contact(props) {
  return (
    <section id="contact">
      <div className="container">
        <ContactForm />
        <hr />

        <p className="lead">Or contact me on these sites.</p>

        <div className="social">
          <ul>
            <li>
              <a href="https://twitter.com/irlejohn">
                <i className="fa fa-lg fa-twitter" />
              </a>
            </li>
            <li>
              <a href="http://github.com/doudeman">
                <i className="fa fa-lg fa-github" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/johnirle">
                <i className="fa fa-lg fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="http://stackoverflow.com/users/4778613/doudeman">
                <i className="fa fa-lg fa-stack-overflow" />
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.com/johnirle">
                <i className="fa fa-lg fa-free-code-camp" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
