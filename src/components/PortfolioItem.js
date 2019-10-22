import React from 'react';
import { Col, Image } from 'react-bootstrap'

function PortfolioItem(props) {
  return (
    <Col span={"auto"} lg={true}>
      < a href={props.url} >
        <Image src={props.img} alt="props.alt" fluid />
      </a >
    </Col >
  );
}

export default PortfolioItem;