import React from "react";

function Portfolio(prop) {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="page-header text-center">Projects</h2>
          </div>
          <div className="col-sm-4 col-xs-12">
            <a href="http://johnirle.com/markdown">
              <img
                className="img-responsive portfolio-item"
                src="resources/img/markdown.png"
                alt="Markdown Previewer"
              />
            </a>
          </div>

          <div className="col-sm-4 col-xs-12">
            <a href="http://johnirle.com/twitchstatus">
              <img
                className="img-responsive portfolio-item"
                src="resources/img/twitch.png"
                alt="Twitch Streamer Application"
              />
            </a>
          </div>

          <div className="col-sm-4 col-xs-12">
            <a href="http://johnirle.com/wikipedia">
              <img
                className="img-responsive portfolio-item"
                src="resources/img/wiki.png"
                alt="Wikipedia Search Application"
              />
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <a href="http://johnirle.com/quote">
              <img
                className="img-responsive portfolio-item"
                src="resources/img/quote.png"
                alt="Random Quote Generator"
              />
            </a>
          </div>

          <div className="col-sm-4 col-xs-12">
            <a href="http://johnirle.com/weather">
              <img
                className="img-responsive portfolio-item"
                src="resources/img/weather.png"
                alt="Local Weather Application"
              />
            </a>
          </div>

          <div className="col-sm-4 col-xs-12">
            <a href="http://johnirle.com/tribute">
              <img
                className="img-responsive portfolio-item"
                src="resources/img/tribute.png"
                alt="Nikola Tesla Tribute Page"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4 col-xs-12">
            <a href="http://johnirle.com/savings">
              <img
                className="img-responsive portfolio-item"
                src="resources/img/financial.png"
                alt="Financial Savings Form"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
