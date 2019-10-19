import React from 'react';

import PortfolioItem from "./PortfolioItem";

import quote from "../resources/img/quote.png";
import markdown from "../resources/img/markdown.png";
import twitch from "../resources/img/twitch.png";
import wiki from "../resources/img/wiki.png";
import weather from "../resources/img/weather.png";
import tribute from "../resources/img/tribute.png";
import financial from "../resources/img/financial.png";

function Projects(props) {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">

          <div className="col-lg-12">
            <h2 className="page-header text-center">Projects</h2>
          </div>
          <PortfolioItem url="https://johnirle.com/markdown" img={markdown} alt="Markdown Previewer" />

          <PortfolioItem url="https://johnirle.com/twitchstatus" img={twitch} alt="Twitch Streamer Application" />

          <PortfolioItem url="https://johnirle.com/wikipedia" img={wiki} alt="Wikipedia Search Application" />
        </div>
        <div className="row">
          <PortfolioItem url="https://johnirle.com/quote" img={quote} alt="Leadership Quote Generator" />

          <PortfolioItem url="https://johnirle.com/weather" img={weather} alt="Local Weather Application" />

          <PortfolioItem url="https://johnirle.com/tribute" img={tribute} alt="Nikola Tesla Tribute Page" />
        </div>
        <div className="row">
          <PortfolioItem url="https://johnirle.com/savings" img={financial} alt="Float Tank Savings Form" />
        </div>
      </div>
    </section>
  );
}

export default Projects;