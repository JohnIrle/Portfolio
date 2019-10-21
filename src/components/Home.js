import React from 'react';
import JohnIrle from "../resources/img/blazer.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin, faStackOverflow, faFreeCodeCamp, faGit } from '@fortawesome/free-brands-svg-icons';

function Home(props) {
  return (
    <section id="home" classNameName="home">
      <div className="text-vcenter">
        <div className="lead">
          <img className="profile-image" src={JohnIrle} alt="John Irle" />
          <h1>John Irle</h1>
          <h2>Front-end Web Developer</h2>
          <hr />
          <div className="social">
            <ul className="inline">
              <li><a href="https://twitter.com/irlejohn"><FontAwesomeIcon icon={faTwitter} size="2x" color="gray" /></a></li>
              <li><a href="http://github.com/JohnIrle"><FontAwesomeIcon icon={faGithub} size="2x" color="gray" /></a></li>
              <li><a href="https://www.linkedin.com/in/johnirle"><FontAwesomeIcon icon={faLinkedin} size="2x" color="gray" /></a></li>
              <li><a href="http://stackoverflow.com/users/4778613/doudeman"><FontAwesomeIcon icon={faStackOverflow} size="2x" color="gray" /></a></li>
              <li><a href="https://www.freecodecamp.com/johnirle"><FontAwesomeIcon icon={faFreeCodeCamp} size="2x" color="gray" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Home;