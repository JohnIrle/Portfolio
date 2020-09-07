import React from "react";
import { Card, Button } from "react-bootstrap";

interface ProjectCardProps {
    title: string;
    description: string;
    github?: string;
    url: string;
    img?: string;
    alt?: string;
}
    
const ProjectCard:React.FC<ProjectCardProps> = ({ title, description, github, url, img }) => {
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

export default ProjectCard;

