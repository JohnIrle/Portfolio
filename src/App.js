import React, { Fragment } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
