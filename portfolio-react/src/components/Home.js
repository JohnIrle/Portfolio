import React from "react";
import "../resources/img/JohnIrle.jpg";

function Home(props) {
  return (
    <section id="home" className="home">
      <div className="text-vcenter">
        <div className="lead">
          <img
            className="profile-image"
            src="../resources/img/JohnIrle.jpg"
            alt="John Irle"
          />
          <h1>John Irle</h1>
          <h2>Front-end Web Developer</h2>
          <hr />
          <div className="social">
            <ul className="inline">
              <li>
                <a href="https://twitter.com/irlejohn">
                  <i className="fa fa-lg fa-twitter" />
                </a>
              </li>
              <li>
                <a href="http://github.com/JohnIrle">
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
      </div>
    </section>
  );
}

export default Home;
