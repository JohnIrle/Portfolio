import React from "react";

class ContactForm extends React.Component {
  render() {
    return (
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
    );
  }
}

export default ContactForm;
