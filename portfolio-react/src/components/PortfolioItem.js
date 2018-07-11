import React from "react";

function PortfolioItem(props) {
  return (
    <div className="col-sm-4 col-xs-12">
      <a href={this.props.url}>
        <img
          className="img-responsive portfolio-item"
          src={this.props.img}
          alt={this.props.alt}
        />
      </a>
    </div>
  );
}

export default PortfolioItem;
