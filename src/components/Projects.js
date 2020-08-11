import React from "react";
import { Container, Row } from "react-bootstrap";

import PortfolioItem from "./PortfolioItem";

import quote from "../resources/img/quote.png";
import markdown from "../resources/img/markdown.png";
import survey from "../resources/img/survey.png";
import wiki from "../resources/img/wiki.png";
import tribute from "../resources/img/tribute.png";
import financial from "../resources/img/financial.png";
import caleb from "../resources/img/caleb-lg.png";

function Projects() {
    return (
        <section id="portfolio">
            <Container>
                <h2 className="page-header text-center">Projects</h2>
                <Row>
                    <PortfolioItem
                        name="Caleb Rodewald portfolio"
                        url="https://calebrodewald.com"
                        img={caleb}
                        alt="Caleb Rodewald portfolio"
                    />
                    <PortfolioItem
                        name="Markdown Previewer"
                        url="https://johnirle.com/markdown"
                        img={markdown}
                        github="https://github.com/JohnIrle/React-Markdown-Preview"
                        alt="Markdown Previewer"
                    />
                    <PortfolioItem
                        name="Developer Survey Form"
                        url=""
                        img={survey}
                        github="https://github.com/JohnIrle/survey-form"
                        alt="Developer Survey Form"
                    />
                </Row>
                <Row>
                    <PortfolioItem
                        name="Wikipedia Search Application"
                        url="https://johnirle.com/wikipedia"
                        img={wiki}
                        github="https://github.com/JohnIrle/Wikipedia-search-app"
                        alt="Wikipedia Search Application"
                    />
                    <PortfolioItem
                        name="Leadership Quote Generator"
                        url="https://johnirle.com/quote"
                        img={quote}
                        github="https://github.com/JohnIrle/Leadership-quote-generator"
                        alt="Leadership Quote Generator"
                    />
                    <PortfolioItem
                        name="Float Tank Savings Calculator"
                        url="https://johnirle.com/savings"
                        img={financial}
                        github="https://github.com/JohnIrle/Savings-calculator-widget"
                        alt="Float Tank Savings Form"
                    />
                    <PortfolioItem
                        name="Nikola Tesla Tribute React Page"
                        url="https://johnirle.com/tribute"
                        img={tribute}
                        github=""
                        alt="Nikola Tesla Tribute Page"
                    />
                </Row>
            </Container>
        </section>
    );
}

export default Projects;
