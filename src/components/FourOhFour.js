import React from "react";
import {Link } from "react-router-dom";
import webb from "../resources/img/webb.png";

const FourOhFour = () => {
    return (
        <div className="container-fluid mt-5" style={{paddingTop: "4rem", backgroundImage: `url(${webb})`, backgroundRepeat: "repeat", height: "85vh"}}>
            <div className="jumbotron text-center">
                <h1>This page does not exist.</h1>
                <p>Go back to the content?</p> 
                <Link to="/"><button type="button" className="btn btn-dark mr-1">Portfolio</button></Link>
                <Link to="/blog"><button type="button" className="btn btn-dark">Blog</button></Link>
            </div>
        </div>
    )
}

export default FourOhFour;
