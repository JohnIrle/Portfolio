import React from "react";
import JohnIrle from "../resources/img/blazer.jpg";
import SocialIcons from "./SocialIcons";
import { Card } from "react-bootstrap";

function Home(props) {
    return (
        <section id="home" className="home">
            <div
                style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: "14vh",
                }}
            >
                <img className="profile-image" src={JohnIrle} alt="John Irle" />
                <h1 style={{ fontSize: "4.5em", fontWeight: 700 }}>
                    {" "}
                    John Irle
                </h1>
                <h2>Web Development, Programming, and Cyber Security</h2>
                <hr />
                <div
                    style={{
                        width: "12rem",
                        margin: "auto",
                        backgroundColor: "white",
                        borderRadius: "5px",
                    }}
                >
                    <SocialIcons />
                </div>
            </div>
        </section>
    );
}

export default Home;
