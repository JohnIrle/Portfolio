import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import FourOhFour from "./components/FourOhFour";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={FourOhFour} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
