import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

export default function ProjectCard({ title, description, github, url, img }) {
    return (
        <div className="col-lg d-flex align-items-stretch m-1">
            <Card>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    {img && <Card.Img src={img} className="" />}
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    {github && (
                        <Button variant="outline-secondary" href={github}>
                            Code
                        </Button>
                    )}{" "}
                    {url && (
                        <Button variant="outline-secondary" href={url}>
                            Demo
                        </Button>
                    )}
                </Card.Footer>
            </Card>
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    github: PropTypes.string,
    url: PropTypes.string,
};
