import React from "react";
import Confetti from "react-dom-confetti";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { confetti: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {}

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ confetti: true });
    const data = new FormData(e.target);

    // fetch("../mailer.php", {
    //   method: "post",
    //   body: data
    // });

    console.log(data);
  }

  render() {
    const config = {
      angle: 90,
      spread: 223,
      startVelocity: 45,
      elementCount: 75,
      decay: 0.9
    };

    return (
      <form id="ajax-contact" onSubmit={this.handleSubmit}>
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
              <Confetti active={this.state.confetti} config={config} />
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
