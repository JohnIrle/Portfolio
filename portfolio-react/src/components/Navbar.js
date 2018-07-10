import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#navbar-collapse-main"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="http://johnirle.com">
            John Irle
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbar-collapse-main">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="https://github.com/JohnIrle">Github</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="http://johnirle.com/blog/">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
