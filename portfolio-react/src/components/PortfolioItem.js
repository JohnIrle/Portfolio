import React from "react";
import propTypes from "prop-types";

function PortfolioItem(props) {
  return (
    <div className={props.offset || "col-sm-4 col-xs-12"}>
      <a href={props.url}>
        <img
          className="img-responsive portfolio-item"
          src={props.img}
          alt={props.desc}
        />
      </a>
    </div>
  );
}

PortfolioItem.propTypes = {
  offset: propTypes.string,
  url: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  desc: propTypes.string.isRequired
};

export default PortfolioItem;
