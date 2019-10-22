import React from 'react';
import { Card } from "react-bootstrap";
import JohnIrle from "../resources/img/blazer.jpg";
import SocialIcons from "./SocialIcons";

function Home(props) {
  return (
    <section id="home" classNameName="home">
      <div className="text-vcenter">
        <div className="lead">
          <Card style={{ width: '18rem' }}>
            <img className="profile-image" src={JohnIrle} alt="John Irle" />
            <h1>John Irle</h1>
            <h2>Front-end Web Developer</h2>
            <hr />

            <SocialIcons />
          </Card>
        </div>
      </div>
    </section >
  )
}

export default Home;