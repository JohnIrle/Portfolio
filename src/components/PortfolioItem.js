import React from 'react';

function PortfolioItem(props) {
  return (
    <div className="col-sm-4 col-xs-12">
      <a href={props.url}>
        <img className="img-responsive portfolio-item" src={props.img} alt="props.alt" />
      </a>
    </div>
  );
}

export default PortfolioItem;