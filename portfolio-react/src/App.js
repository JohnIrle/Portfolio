import React, { Component } from "react";
import "./App.css";
import "./resources/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
