import React from "react";
import { Container, Row } from "react-bootstrap";
import caleb from "../resources/img/caleb-lg.png";
import financial from "../resources/img/financial.png";
import markdown from "../resources/img/markdown.png";
import quote from "../resources/img/quote.png";
import survey from "../resources/img/survey.png";
import wiki from "../resources/img/wiki.png";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <section id="portfolio">
            <Container>
                <h2 className="page-header text-center">Front-end Projects</h2>
                <Row>
                    <ProjectCard
                        title="Caleb Rodewald portfolio"
                        description="A React single page application that describes and displays graphic design projects by Caleb Rodewald."
                        url="https://calebrodewald.com"
                        img={caleb}
                        alt="Caleb Rodewald portfolio"
                    />
                    <ProjectCard
                        title="Markdown Previewer"
                        description="React app that uses the Marked library to parse markdown and display the result."
                        url="https://johnirle.com/markdown"
                        img={markdown}
                        github="https://github.com/JohnIrle/React-Markdown-Preview"
                        alt="Markdown Previewer"
                    />
                    <ProjectCard
                        title="Developer Survey Form"
                        description="A simple HTML and CSS form."
                        url=""
                        img={survey}
                        github="https://github.com/JohnIrle/survey-form"
                        alt="Developer Survey Form"
                    />
                </Row>
                <Row>
                    <ProjectCard
                        title="Wikipedia Search Application"
                        description="A React application that uses Axios to make a request to the wikipedia api with an entered search term and displays the results."
                        url="https://johnirle.com/wikipedia"
                        img={wiki}
                        github="https://github.com/JohnIrle/Wikipedia-search-app"
                        alt="Wikipedia Search Application"
                    />
                    <ProjectCard
                        title="Leadership Quote Generator"
                        description="Randomly selects and displays a leadership quote from an author. The user then has the option to tweet the quote."
                        url="https://johnirle.com/quote"
                        img={quote}
                        github="https://github.com/JohnIrle/Leadership-quote-generator"
                        alt="Leadership Quote Generator"
                    />
                    <ProjectCard
                        title="Float Tank Savings Calculator"
                        description="A widget made for a float tank company that shows time and money savings with their product."
                        url="https://johnirle.com/savings"
                        img={financial}
                        github="https://github.com/JohnIrle/Savings-calculator-widget"
                        alt="Float Tank Savings Form"
                    />
                </Row>
                <hr />
                <h2 className="page-header text-center my-3">
                    Back-end Projects
                </h2>
                <Row>
                    <ProjectCard
                        title="URL Shortener Service"
                        description="An Express app that generates, saves and returns a short url when a long url is entered. When the short url is used, the app searches the database and redirects the request to the long url if it is found in the database."
                        url="https://github.com/JohnIrle/url-shortener"
                    />
                    <ProjectCard
                        title="Request Header Parser Service"
                        description="An express app that parses the header of a request and returns a JSON object with the IP address, language and operating system of the requester."
                        github="https://github.com/JohnIrle/Request-Header-Parser"
                        url="https://carnelian-button.glitch.me/api/whoami"
                    />
                    <ProjectCard
                        title="Timestamp Micro-service"
                        description="An Express app that returns a JSON object with unix and natural language dates when given a url parameter of either unix or natural language."
                        github="https://github.com/JohnIrle/Timestamp-micro-service"
                        url="https://zenith-twine.glitch.me/December%2015,%202015"
                    />
                </Row>
            </Container>
        </section>
    );
}

export default Projects;
