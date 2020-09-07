import React from "react";
import { Col, Image, Button } from "react-bootstrap";

interface PortfolioItemProps {
    alt: string;
    name: string;
    url: string;
    img: string;
    github: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
    return (
        <Col  lg={true} style={{ marginTop: "3%" }}>
            <h5 className="portfolio-items-link">{props.name}</h5>
            <a href={props.url}>
                <Image src={props.img} alt={props.alt} fluid />
            </a>
            <div className="portfolio-items-link">
                {props.url && (
                    <Button href={props.url} variant="outline-dark" size="sm">
                        Demo
                    </Button>
                )}
                {props.github && (
                    <Button
                        href={props.github}
                        variant="outline-dark"
                        size="sm"
                    >
                        Code
                    </Button>
                )}
            </div>
        </Col>
    );
}

export default PortfolioItem;
