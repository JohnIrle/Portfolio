import React from "react";
import {Link } from "react-router-dom";
import webb from "../resources/img/webb.png";

const FourOhFour = () => {
    return (
        <div style={{paddingTop: "4rem", backgroundImage: `url(${webb})`, backgroundRepeat: "repeat", height: "90vh"}}>
            <div className="container mt-5" >
                <div className="jumbotron text-center">
                    <h1>This page does not exist.</h1>
                    <p>Go back to the content?</p> 
                    <Link to="/"><button type="button" className="btn btn-dark mr-1">Portfolio</button></Link>
                    <Link to="/blog"><button type="button" className="btn btn-dark">Blog</button></Link>
                </div>
            </div>
        </div>
    )
}

export default FourOhFour;
