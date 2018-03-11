import React, {Component} from 'react';

class Header extends Component {

render() {
  return(
  <div className="navbar navbar-default navbar-fixed-top" role="navigation">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="http://github.com/JohnIrle">John Irle</a>
      </div>

      <div className="collapse navbar-collapse" id="navbar-collapse-main">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="http://johnirle.com">Home</a></li>
          <li><a href="http://johnirle.com/#about">About</a></li>
          <li><a href="http://johnirle.com/#portfolio">Portfolio</a></li>
          <li><a href="http://johnirle.com/#contact">Contact</a></li>
          <li><a href="http://johnirle.com/blog/">Blog</a></li>
        </ul>
      </div>
    </div>
  </div>
  )
};
}

export default Header;
