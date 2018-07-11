import React from "react";
import PortfolioItem from "./PortfolioItem";
import markdownPhoto from "../resources/img/markdown-lg.png";
import twitchPhoto from "../resources/img/twitch-lg.png";
import wikiPhoto from "../resources/img/wiki-lg.png";
import quotePhoto from "../resources/img/quote-lg.png";
import weatherPhoto from "../resources/img/weather-lg.png";
import tributePhoto from "../resources/img/tribute-lg.png";
import savingsPhoto from "../resources/img/financial.png";

function Portfolio(prop) {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="page-header text-center">Projects</h2>
          </div>

          <PortfolioItem
            url="http://johnirle.com/markdown"
            img={markdownPhoto}
            desc="React Markdown Previewer"
          />

          <PortfolioItem
            url="http://johnirle.com/twitchstatus"
            img={twitchPhoto}
            desc="Twitch Streamer status Application"
          />

          <PortfolioItem
            url="http://johnirle.com/wikipedia"
            img={wikiPhoto}
            desc="Wikipedia Search Application"
          />
        </div>

        <div className="row">
          <PortfolioItem
            url="http://johnirle.com/quote"
            img={quotePhoto}
            desc="Random Quote Generator"
          />

          <PortfolioItem
            url="http://johnirle.com/weather"
            img={weatherPhoto}
            desc="Local Weather Application"
          />

          <PortfolioItem
            url="http://johnirle.com/tribute"
            img={tributePhoto}
            desc="Nikola Tesla Tribute Page"
          />
        </div>

        <div className="row">
          <PortfolioItem
            offset="col-sm-4 col-sm-offset-4 col-xs-12"
            url="http://johnirle.com/savings"
            img={savingsPhoto}
            desc="Financial Savings Widget"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
