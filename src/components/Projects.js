import React from 'react';
import { Container, Row } from 'react-bootstrap';

import PortfolioItem from "./PortfolioItem";

import quote from "../resources/img/quote.png";
import markdown from "../resources/img/markdown.png";
import twitch from "../resources/img/twitch.png";
import wiki from "../resources/img/wiki.png";
import tribute from "../resources/img/tribute.png";
import financial from "../resources/img/financial.png";

function Projects() {
  return (
    <section id="portfolio">
      <Container>
        <h2 className="page-header text-center">Projects</h2>
        <Row>
          <PortfolioItem url="https://johnirle.com/markdown" img={markdown} alt="Markdown Previewer" />

          <PortfolioItem url="https://johnirle.com/twitchstatus" img={twitch} alt="Twitch Streamer Application" />

          <PortfolioItem url="https://johnirle.com/wikipedia" img={wiki} alt="Wikipedia Search Application" />
        </Row>
        <Row>
          <PortfolioItem url="https://johnirle.com/quote" img={quote} alt="Leadership Quote Generator" />

          <PortfolioItem url="https://johnirle.com/savings" img={financial} alt="Float Tank Savings Form" />

          <PortfolioItem url="https://johnirle.com/tribute" img={tribute} alt="Nikola Tesla Tribute Page" />
        </Row>
      </Container>
    </section>
  );
}

export default Projects;