import React from "react";
import Confetti from "react-dom-confetti";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      confetti: false,
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ confetti: true });

    fetch("http://johnirle.com/mailer.php", {
      method: "POST",
      body: new FormData(e.target)
    })
      .then(response => {
        console.log(response);
      })
      .then(
        this.setState({
          name: "",
          email: "",
          message: ""
        })
      );
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
                value={this.state.name}
                required
                onChange={this.handleChange}
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
                value={this.state.email}
                required
                onChange={this.handleChange}
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
                value={this.state.message}
                required
                onChange={this.handleChange}
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
