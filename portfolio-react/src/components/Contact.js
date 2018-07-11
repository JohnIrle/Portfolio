import React from "react";

function Contact(props) {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
            <h2>Contact me</h2>
            <p className="lead">Send me an Email</p>

            <div id="form-messages" />
          </div>
        </div>
        <form id="ajax-contact" method="post" action="mailer.php">
          <div className="form-group">
            <div className="row">
              <div className="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 ">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3 ">
                <label htmlFor="email">Email:</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-xs-12 col-sm-12 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
                <label htmlFor="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  required
                />
                <button className="btn btn-default form-control" type="submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>

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
